import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type {
  DisciplineId,
  GlossaryTerm,
  Module,
  Topic,
} from '../src/types/content.ts';
import { workGlossary, workModules } from '../src/data/workPsychology.ts';
import { rgsGlossary, rgsModules } from '../src/data/raceGenderSexuality.ts';
import { glossaryById, glossaryTerms } from '../src/data/glossary.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const EM_DASH = '\u2014';
const EN_DASH = '\u2013';
const EMOJI_RE = /[\p{Extended_Pictographic}\p{Regional_Indicator}\u20E3\uFE0F\u2605\u2606]/u;
const RAW_SVG_RE = /<svg\b/i;
const RAW_IMG_RE = /<img\b/i;
const CSS_URL_IMAGE_RE =
  /url\(\s*['"]?(?:data:image\/[^)'"]*|[^)'"]*\.(?:png|jpe?g|webp|gif|avif|svg)(?:[?#][^)'"]*)?)['"]?\s*\)/i;
const GRADIENT_RE = /(bg-(?:gradient|linear|radial|conic)-|(?:linear|radial|conic)-gradient\()/i;
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.svg']);

const errors: string[] = [];

function addError(category: string, message: string): void {
  errors.push(`[${category}] ${message}`);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function checkTextHygiene(text: string, location: string): void {
  if (text.includes(EM_DASH)) {
    addError('HYGIENE', `${location}: contains forbidden em-dash (\\u2014)`);
  }
  if (text.includes(EN_DASH)) {
    addError('HYGIENE', `${location}: contains forbidden en-dash (\\u2013)`);
  }
  const emojiMatch = text.match(EMOJI_RE);
  if (emojiMatch) {
    addError('HYGIENE', `${location}: contains forbidden emoji (${emojiMatch[0]})`);
  }
}

function checkDataStringsRecursively(value: unknown, pathLabel: string): void {
  if (typeof value === 'string') {
    checkTextHygiene(value, pathLabel);
    return;
  }
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      checkDataStringsRecursively(value[i], `${pathLabel}[${i}]`);
    }
    return;
  }
  if (value !== null && typeof value === 'object') {
    for (const [key, propValue] of Object.entries(value)) {
      checkDataStringsRecursively(propValue, `${pathLabel}.${key}`);
    }
  }
}

function rejectInlineMarkup(text: string, location: string): void {
  if (/\[\s*\d*\s*\]/.test(text) || /\[\s*\d+|\d+\s*\]/.test(text)) {
    addError(
      'MARKUP',
      `${location}: raw citation/bracket markup ("[n]" / "[]") is not allowed in plain-rendered field`,
    );
  }
  if (text.includes('{{') || text.includes('}}')) {
    addError(
      'GLOSSARY',
      `${location}: raw glossary markup ("{{" / "}}") is not allowed in plain-rendered field`,
    );
  }
}

function validateInlineMarkup(
  text: string,
  location: string,
  sourceIds: Set<string>,
): void {
  if (/\[\s*\]/.test(text)) {
    addError('MARKUP', `${location}: empty citation bracket [] found`);
  }

  for (const bracketMatch of text.matchAll(/\[([^\]]*)\]/g)) {
    const inner = bracketMatch[1];
    if (/\d/.test(inner) && !/^\d+$/.test(inner)) {
      addError(
        'MARKUP',
        `${location}: malformed citation "[${inner}]" (must be [n] with digits only)`,
      );
    }
  }

  const strippedValidCitations = text.replace(/\[\d+\]/g, '');
  if (/\[\s*\]/.test(strippedValidCitations)) {
    addError('MARKUP', `${location}: malformed empty citation bracket [] found`);
  }
  if (/\[\s*\d+|\d+\s*\]/.test(strippedValidCitations)) {
    addError('MARKUP', `${location}: stray citation bracket "[" or "]" around digits`);
  }
  const strippedAllBrackets = text.replace(/\[[^\]]*\]/g, '');
  if (strippedAllBrackets.includes('[') || strippedAllBrackets.includes(']')) {
    addError('MARKUP', `${location}: unbalanced "[" or "]" bracket found`);
  }

  for (const match of text.matchAll(/\[(\d+)\]/g)) {
    const citId = match[1];
    if (!sourceIds.has(citId)) {
      addError(
        'CITATION',
        `${location}: citation [${citId}] does not match any source.id in topic.sources`,
      );
    }
  }

  for (const match of text.matchAll(/\{\{([^}]*)\}\}/g)) {
    const payload = match[1];
    if (payload.includes('{')) {
      addError('GLOSSARY', `${location}: malformed nested brace in "{{${payload}}}"`);
      continue;
    }
    if (payload.includes('[') || payload.includes(']')) {
      addError(
        'GLOSSARY',
        `${location}: citation or bracket markup inside glossary token "{{${payload}}}"`,
      );
      continue;
    }
    const pipeIdx = payload.indexOf('|');
    const rawId = pipeIdx >= 0 ? payload.slice(0, pipeIdx) : payload;
    const rawDisplay = pipeIdx >= 0 ? payload.slice(pipeIdx + 1) : null;
    const id = rawId.trim();

    if (!id) {
      addError('GLOSSARY', `${location}: empty glossary id in "{{${payload}}}"`);
      continue;
    }
    if (rawDisplay !== null && rawDisplay.trim().length === 0) {
      addError('GLOSSARY', `${location}: empty glossary display text in "{{${payload}}}"`);
    }
    if (!Object.prototype.hasOwnProperty.call(glossaryById, id)) {
      addError(
        'GLOSSARY',
        `${location}: glossary id "${id}" not found in glossaryById`,
      );
    }
  }

  const strippedGlossary = text.replace(/\{\{[^}]*\}\}/g, '');
  if (strippedGlossary.includes('{') || strippedGlossary.includes('}')) {
    addError('GLOSSARY', `${location}: stray "{" or "}" token found`);
  }
}

function validateGlossary(): void {
  const validDisciplines = new Set<string>([
    'trabalho',
    'raca-genero-sexualidade',
    'transversal',
  ]);

  const checkList = (list: GlossaryTerm[], listName: string): Map<string, GlossaryTerm> => {
    const map = new Map<string, GlossaryTerm>();
    for (let i = 0; i < list.length; i += 1) {
      const item = list[i];
      const loc = `${listName}[${i}] (${item.id || 'missing-id'})`;
      if (!isNonEmptyString(item.id)) {
        addError('GLOSSARY', `${loc}: missing or empty id`);
        continue;
      }
      if (map.has(item.id)) {
        addError('GLOSSARY', `${loc}: duplicate id "${item.id}" inside ${listName}`);
      } else {
        map.set(item.id, item);
      }
      if (!isNonEmptyString(item.term)) {
        addError('GLOSSARY', `${loc}: missing or empty term`);
      }
      if (!isNonEmptyString(item.definition)) {
        addError('GLOSSARY', `${loc}: missing or empty definition`);
      }
      if (!validDisciplines.has(item.discipline)) {
        addError('GLOSSARY', `${loc}: invalid discipline "${item.discipline}"`);
      }
    }
    return map;
  };

  const workMap = checkList(workGlossary, 'workGlossary');
  const rgsMap = checkList(rgsGlossary, 'rgsGlossary');

  for (const [id, wTerm] of workMap.entries()) {
    const rTerm = rgsMap.get(id);
    if (rTerm) {
      const conflicts: string[] = [];
      if (wTerm.term !== rTerm.term) conflicts.push('term');
      if (wTerm.definition !== rTerm.definition) conflicts.push('definition');
      if (wTerm.discipline !== rTerm.discipline) conflicts.push('discipline');
      if ((wTerm.sourceNote ?? '') !== (rTerm.sourceNote ?? '')) conflicts.push('sourceNote');
      if (conflicts.length > 0) {
        addError(
          'GLOSSARY',
          `shared glossary id "${id}" has conflicting ${conflicts.join(', ')} between workGlossary and rgsGlossary`,
        );
      }
    }
  }

  const mergedIds = new Set<string>();
  for (const item of glossaryTerms) {
    if (mergedIds.has(item.id)) {
      addError('GLOSSARY', `glossaryTerms has duplicate id "${item.id}"`);
    }
    mergedIds.add(item.id);
  }
}

function validateTopic(
  topic: Topic,
  expectedDiscipline: DisciplineId,
  expectedModuleId: string,
  seenTopicIds: Set<string>,
  seenTopicCodes: Set<string>,
  seenFlashcardIds: Set<string>,
  seenQuizIds: Set<string>,
): { sources: number; flashcards: number; quizzes: number } {
  const tLabel = `topic ${topic.id || '(missing-id)'} (${topic.code || 'no-code'})`;

  if (!isNonEmptyString(topic.id)) {
    addError('TOPIC', `${tLabel}: missing or empty id`);
  } else if (seenTopicIds.has(topic.id)) {
    addError('TOPIC', `duplicate topic.id "${topic.id}"`);
  } else {
    seenTopicIds.add(topic.id);
  }

  if (!isNonEmptyString(topic.code)) {
    addError('TOPIC', `${tLabel}: missing or empty code`);
  } else if (seenTopicCodes.has(topic.code)) {
    addError('TOPIC', `duplicate topic.code "${topic.code}"`);
  } else {
    seenTopicCodes.add(topic.code);
  }

  if (topic.discipline !== expectedDiscipline) {
    addError(
      'TOPIC',
      `${tLabel}: discipline "${topic.discipline}" does not match "${expectedDiscipline}"`,
    );
  }
  if (topic.moduleId !== expectedModuleId) {
    addError(
      'TOPIC',
      `${tLabel}: moduleId "${topic.moduleId}" does not match "${expectedModuleId}"`,
    );
  }
  if (!isNonEmptyString(topic.title)) {
    addError('TOPIC', `${tLabel}: missing or empty title`);
  }
  if (!isNonEmptyString(topic.summary)) {
    addError('TOPIC', `${tLabel}: missing or empty summary`);
  }
  if (
    typeof topic.estimatedMinutes !== 'number' ||
    !Number.isFinite(topic.estimatedMinutes) ||
    topic.estimatedMinutes <= 0
  ) {
    addError('TOPIC', `${tLabel}: estimatedMinutes must be > 0`);
  }
  if (!Array.isArray(topic.tags) || topic.tags.length < 1) {
    addError('TOPIC', `${tLabel}: tags must have at least 1 item`);
  } else {
    topic.tags.forEach((tag, idx) => {
      if (!isNonEmptyString(tag)) {
        addError('TOPIC', `${tLabel}: tags[${idx}] is empty`);
      }
    });
  }

  const sourceIds = new Set<string>();
  if (!Array.isArray(topic.sources) || topic.sources.length < 1) {
    addError('SOURCE', `${tLabel}: sources must have at least 1 item`);
  } else {
    topic.sources.forEach((src, idx) => {
      const sLoc = `${tLabel} source[${idx}] (id="${src.id}")`;
      const expectedId = String(idx + 1);
      if (!isNonEmptyString(src.id) || !/^[1-9]\d*$/.test(src.id)) {
        addError('SOURCE', `${sLoc}: source.id must be a positive numeric string ("1", "2", ...)`);
      } else {
        if (src.id !== expectedId) {
          addError(
            'SOURCE',
            `${sLoc}: source.id must be sequential (expected "${expectedId}", got "${src.id}")`,
          );
        }
        if (sourceIds.has(src.id)) {
          addError('SOURCE', `${sLoc}: duplicate source.id "${src.id}" within topic`);
        } else {
          sourceIds.add(src.id);
        }
      }

      const requiredFields: Array<keyof typeof src> = [
        'shortLabel',
        'author',
        'work',
        'year',
        'specificPoint',
        'excerptNote',
      ];
      for (const field of requiredFields) {
        if (!isNonEmptyString(src[field])) {
          addError('SOURCE', `${sLoc}: missing or empty ${field}`);
        }
      }
    });
  }

  if (isNonEmptyString(topic.summary)) {
    rejectInlineMarkup(topic.summary, `${tLabel}.summary`);
  }

  const sectionIds = new Set<string>();
  if (!Array.isArray(topic.sections) || topic.sections.length < 1) {
    addError('SECTION', `${tLabel}: sections must have at least 1 item`);
  } else {
    topic.sections.forEach((sec, sIdx) => {
      const secLoc = `${tLabel} section[${sIdx}] (${sec.id || 'missing-id'})`;
      if (!isNonEmptyString(sec.id)) {
        addError('SECTION', `${secLoc}: missing or empty id`);
      } else if (sectionIds.has(sec.id)) {
        addError('SECTION', `${secLoc}: duplicate section.id "${sec.id}" within topic`);
      } else {
        sectionIds.add(sec.id);
      }
      if (!isNonEmptyString(sec.heading)) {
        addError('SECTION', `${secLoc}: missing or empty heading`);
      }
      if (!Array.isArray(sec.paragraphs) || sec.paragraphs.length < 1) {
        addError('SECTION', `${secLoc}: paragraphs must have at least 1 item`);
      } else {
        sec.paragraphs.forEach((para, pIdx) => {
          const pLoc = `${secLoc}.paragraphs[${pIdx}]`;
          if (!isNonEmptyString(para)) {
            addError('SECTION', `${pLoc}: paragraph is empty`);
          } else {
            validateInlineMarkup(para, pLoc, sourceIds);
          }
        });
      }
      if (sec.keyPoints !== undefined) {
        if (!Array.isArray(sec.keyPoints)) {
          addError('SECTION', `${secLoc}: keyPoints must be an array`);
        } else {
          sec.keyPoints.forEach((kp, kIdx) => {
            const kLoc = `${secLoc}.keyPoints[${kIdx}]`;
            if (!isNonEmptyString(kp)) {
              addError('SECTION', `${kLoc}: keyPoint is empty`);
            } else {
              validateInlineMarkup(kp, kLoc, sourceIds);
            }
          });
        }
      }
    });
  }

  if (!Array.isArray(topic.flashcards) || topic.flashcards.length < 3) {
    addError(
      'FLASHCARD',
      `${tLabel}: expected at least 3 flashcards, found ${topic.flashcards?.length ?? 0}`,
    );
  } else {
    topic.flashcards.forEach((fc, idx) => {
      const fcLoc = `${tLabel} flashcard[${idx}] (${fc.id || 'missing-id'})`;
      if (!isNonEmptyString(fc.id)) {
        addError('FLASHCARD', `${fcLoc}: missing or empty id`);
      } else if (seenFlashcardIds.has(fc.id)) {
        addError('FLASHCARD', `duplicate flashcard.id "${fc.id}"`);
      } else {
        seenFlashcardIds.add(fc.id);
      }
      if (!isNonEmptyString(fc.front)) {
        addError('FLASHCARD', `${fcLoc}: missing or empty front`);
      } else {
        rejectInlineMarkup(fc.front, `${fcLoc}.front`);
      }
      if (!isNonEmptyString(fc.back)) {
        addError('FLASHCARD', `${fcLoc}: missing or empty back`);
      } else {
        rejectInlineMarkup(fc.back, `${fcLoc}.back`);
      }
      if (!isNonEmptyString(fc.sourceId) || !sourceIds.has(fc.sourceId)) {
        addError(
          'FLASHCARD',
          `${fcLoc}: sourceId "${fc.sourceId}" does not exist in topic.sources`,
        );
      }
    });
  }

  if (!Array.isArray(topic.quiz) || topic.quiz.length < 2) {
    addError(
      'QUIZ',
      `${tLabel}: expected at least 2 quiz questions, found ${topic.quiz?.length ?? 0}`,
    );
  } else {
    topic.quiz.forEach((q, idx) => {
      const qLoc = `${tLabel} quiz[${idx}] (${q.id || 'missing-id'})`;
      if (!isNonEmptyString(q.id)) {
        addError('QUIZ', `${qLoc}: missing or empty id`);
      } else if (seenQuizIds.has(q.id)) {
        addError('QUIZ', `duplicate quiz.id "${q.id}"`);
      } else {
        seenQuizIds.add(q.id);
      }
      if (!isNonEmptyString(q.question)) {
        addError('QUIZ', `${qLoc}: missing or empty question`);
      } else {
        rejectInlineMarkup(q.question, `${qLoc}.question`);
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        addError(
          'QUIZ',
          `${qLoc}: options must have length 4, found ${q.options?.length ?? 0}`,
        );
      } else {
        q.options.forEach((opt, optIdx) => {
          if (!isNonEmptyString(opt)) {
            addError('QUIZ', `${qLoc}: options[${optIdx}] is empty`);
          } else {
            rejectInlineMarkup(opt, `${qLoc}.options[${optIdx}]`);
          }
        });
      }
      if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) {
        addError(
          'QUIZ',
          `${qLoc}: correctIndex (${String(q.correctIndex)}) must be an integer in 0..3`,
        );
      }
      if (!isNonEmptyString(q.explanation)) {
        addError('QUIZ', `${qLoc}: missing or empty explanation`);
      } else {
        rejectInlineMarkup(q.explanation, `${qLoc}.explanation`);
      }
      if (!isNonEmptyString(q.sourceId) || !sourceIds.has(q.sourceId)) {
        addError(
          'QUIZ',
          `${qLoc}: sourceId "${q.sourceId}" does not exist in topic.sources`,
        );
      }
    });
  }

  if (topic.comparison !== undefined) {
    const cLoc = `${tLabel} comparison`;
    if (!isNonEmptyString(topic.comparison.title)) {
      addError('COMPARISON', `${cLoc}: missing or empty title`);
    } else {
      rejectInlineMarkup(topic.comparison.title, `${cLoc}.title`);
    }
    if (!Array.isArray(topic.comparison.headers) || topic.comparison.headers.length < 2) {
      addError('COMPARISON', `${cLoc}: headers must have length >= 2`);
    } else {
      topic.comparison.headers.forEach((h, hIdx) => {
        if (!isNonEmptyString(h)) {
          addError('COMPARISON', `${cLoc}: headers[${hIdx}] is empty`);
        } else {
          rejectInlineMarkup(h, `${cLoc}.headers[${hIdx}]`);
        }
      });
    }
    if (!Array.isArray(topic.comparison.rows) || topic.comparison.rows.length < 1) {
      addError('COMPARISON', `${cLoc}: rows must have length >= 1`);
    } else {
      const expectedCols = topic.comparison.headers?.length ?? 0;
      topic.comparison.rows.forEach((row, rIdx) => {
        if (!Array.isArray(row) || row.length !== expectedCols) {
          addError(
            'COMPARISON',
            `${cLoc}: rows[${rIdx}] length (${row?.length ?? 0}) does not match headers length (${expectedCols})`,
          );
        } else {
          row.forEach((cell, cIdx) => {
            if (!isNonEmptyString(cell)) {
              addError('COMPARISON', `${cLoc}: rows[${rIdx}][${cIdx}] is empty`);
            } else {
              rejectInlineMarkup(cell, `${cLoc}.rows[${rIdx}][${cIdx}]`);
            }
          });
        }
      });
    }
  }

  if (topic.flow !== undefined) {
    const fLoc = `${tLabel} flow`;
    if (!isNonEmptyString(topic.flow.title)) {
      addError('FLOW', `${fLoc}: missing or empty title`);
    } else {
      rejectInlineMarkup(topic.flow.title, `${fLoc}.title`);
    }
    if (!Array.isArray(topic.flow.steps) || topic.flow.steps.length < 2) {
      addError('FLOW', `${fLoc}: steps must have length >= 2`);
    } else {
      topic.flow.steps.forEach((step, idx) => {
        if (!isNonEmptyString(step.label)) {
          addError('FLOW', `${fLoc}: steps[${idx}].label is empty`);
        } else {
          rejectInlineMarkup(step.label, `${fLoc}.steps[${idx}].label`);
        }
        if (!isNonEmptyString(step.detail)) {
          addError('FLOW', `${fLoc}: steps[${idx}].detail is empty`);
        } else {
          rejectInlineMarkup(step.detail, `${fLoc}.steps[${idx}].detail`);
        }
        if (step.sourceId !== undefined && !sourceIds.has(step.sourceId)) {
          addError(
            'FLOW',
            `${fLoc}: steps[${idx}].sourceId "${step.sourceId}" does not exist in topic.sources`,
          );
        }
      });
    }
  }

  return {
    sources: topic.sources?.length ?? 0,
    flashcards: topic.flashcards?.length ?? 0,
    quizzes: topic.quiz?.length ?? 0,
  };
}

function collectFilesRecursively(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const results: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFilesRecursively(fullPath));
    } else if (entry.isFile()) {
      results.push(fullPath);
    }
  }
  return results;
}

function scanRepoHygiene(): number {
  const indexHtml = path.join(ROOT_DIR, 'index.html');
  const srcFiles = collectFilesRecursively(path.join(ROOT_DIR, 'src')).sort();
  const publicFiles = collectFilesRecursively(path.join(ROOT_DIR, 'public')).sort();

  const textFilesToScan = [indexHtml, ...srcFiles].filter((filePath) =>
    fs.existsSync(filePath),
  );

  for (const filePath of textFilesToScan) {
    const relPath = path.relative(ROOT_DIR, filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);

    lines.forEach((line, idx) => {
      const lineLoc = `${relPath}:${idx + 1}`;
      checkTextHygiene(line, lineLoc);
      if (RAW_SVG_RE.test(line)) {
        addError('ASSET', `${lineLoc}: raw <svg tag found (only @phosphor-icons/react allowed)`);
      }
      if (RAW_IMG_RE.test(line)) {
        addError('ASSET', `${lineLoc}: raw <img tag found`);
      }
      if (CSS_URL_IMAGE_RE.test(line)) {
        addError('ASSET', `${lineLoc}: forbidden CSS url(...) image asset found`);
      }
      const gradMatch = line.match(GRADIENT_RE);
      if (gradMatch) {
        addError('HYGIENE', `${lineLoc}: forbidden CSS gradient (${gradMatch[0]})`);
      }
    });
  }

  for (const filePath of [...srcFiles, ...publicFiles]) {
    const ext = path.extname(filePath).toLowerCase();
    if (IMAGE_EXTS.has(ext)) {
      const relPath = path.relative(ROOT_DIR, filePath);
      addError('ASSET', `${relPath}: forbidden image asset found in src/ or public/`);
    }
  }

  return textFilesToScan.length;
}

function validateCurriculum(): {
  disciplines: number;
  modules: number;
  topics: number;
  sources: number;
  flashcards: number;
  quizzes: number;
} {
  const seenModuleIds = new Set<string>();
  const seenModuleCodes = new Set<string>();
  const seenTopicIds = new Set<string>();
  const seenTopicCodes = new Set<string>();
  const seenFlashcardIds = new Set<string>();
  const seenQuizIds = new Set<string>();

  const disciplines: Array<{
    name: string;
    disciplineId: DisciplineId;
    modules: Module[];
    expectedCodes: string[];
  }> = [
    {
      name: 'workModules',
      disciplineId: 'trabalho',
      modules: workModules,
      expectedCodes: ['T1', 'T2', 'T3', 'T4'],
    },
    {
      name: 'rgsModules',
      disciplineId: 'raca-genero-sexualidade',
      modules: rgsModules,
      expectedCodes: ['R1', 'R2', 'R3', 'R4'],
    },
  ];

  let totalModules = 0;
  let totalTopics = 0;
  let totalSources = 0;
  let totalFlashcards = 0;
  let totalQuizzes = 0;

  for (const disc of disciplines) {
    if (disc.modules.length !== disc.expectedCodes.length) {
      addError(
        'STRUCTURE',
        `${disc.name}: expected ${disc.expectedCodes.length} modules, found ${disc.modules.length}`,
      );
    }

    const actualCodes = disc.modules.map((m) => m.code);
    for (const expectedCode of disc.expectedCodes) {
      if (!actualCodes.includes(expectedCode)) {
        addError('STRUCTURE', `${disc.name}: missing required module code "${expectedCode}"`);
      }
    }

    for (const mod of disc.modules) {
      totalModules += 1;
      const mLoc = `${disc.name} module ${mod.code || mod.id || '(missing)'}`;

      if (!isNonEmptyString(mod.id)) {
        addError('STRUCTURE', `${mLoc}: missing or empty module.id`);
      } else if (seenModuleIds.has(mod.id)) {
        addError('STRUCTURE', `duplicate module.id "${mod.id}"`);
      } else {
        seenModuleIds.add(mod.id);
      }

      if (!isNonEmptyString(mod.code)) {
        addError('STRUCTURE', `${mLoc}: missing or empty module.code`);
      } else if (seenModuleCodes.has(mod.code)) {
        addError('STRUCTURE', `duplicate module.code "${mod.code}"`);
      } else {
        seenModuleCodes.add(mod.code);
      }

      if (mod.discipline !== disc.disciplineId) {
        addError(
          'STRUCTURE',
          `${mLoc}: module.discipline "${mod.discipline}" does not match "${disc.disciplineId}"`,
        );
      }
      if (!isNonEmptyString(mod.title)) {
        addError('STRUCTURE', `${mLoc}: missing or empty module.title`);
      }
      if (!isNonEmptyString(mod.description)) {
        addError('STRUCTURE', `${mLoc}: missing or empty module.description`);
      }

      if (!Array.isArray(mod.topics) || mod.topics.length !== 3) {
        addError(
          'STRUCTURE',
          `${mLoc}: expected exactly 3 topics, found ${mod.topics?.length ?? 0}`,
        );
      }

      for (const topic of mod.topics ?? []) {
        totalTopics += 1;
        const counts = validateTopic(
          topic,
          disc.disciplineId,
          mod.id,
          seenTopicIds,
          seenTopicCodes,
          seenFlashcardIds,
          seenQuizIds,
        );
        totalSources += counts.sources;
        totalFlashcards += counts.flashcards;
        totalQuizzes += counts.quizzes;
      }
    }
  }

  if (totalTopics !== 24) {
    addError('STRUCTURE', `expected 24 total topics across 8 modules, found ${totalTopics}`);
  }

  return {
    disciplines: disciplines.length,
    modules: totalModules,
    topics: totalTopics,
    sources: totalSources,
    flashcards: totalFlashcards,
    quizzes: totalQuizzes,
  };
}

function main(): void {
  validateGlossary();
  const counts = validateCurriculum();

  checkDataStringsRecursively(workModules, 'workModules');
  checkDataStringsRecursively(rgsModules, 'rgsModules');
  checkDataStringsRecursively(glossaryTerms, 'glossaryTerms');

  const hygieneFilesChecked = scanRepoHygiene();

  console.log('=== Content & Hygiene Verification Summary ===');
  console.log(`Disciplines:         ${counts.disciplines} (expected: 2)`);
  console.log(`Modules:             ${counts.modules} (expected: 8)`);
  console.log(`Topics:              ${counts.topics} (expected: 24)`);
  console.log(`Sources:             ${counts.sources}`);
  console.log(`Flashcards:          ${counts.flashcards}`);
  console.log(`Quiz questions:      ${counts.quizzes}`);
  console.log(`Glossary terms:      ${glossaryTerms.length}`);
  console.log(`Hygiene files check: ${hygieneFilesChecked}`);
  console.log(`Errors found:        ${errors.length}`);

  if (errors.length > 0) {
    console.error('\nVerification failed with the following errors:');
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log('\nPASS: All 24 topics, citations, glossary references, and hygiene checks passed.');
  process.exit(0);
}

main();
