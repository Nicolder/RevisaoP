import type { DisciplineId, Topic } from '../types/content.ts';
import { workModules } from './workPsychology.ts';
import { rgsModules } from './raceGenderSexuality.ts';
import { glossaryTerms } from './glossary.ts';

export type SearchItemType = 'topico' | 'glossario' | 'fonte' | 'tag';

export interface SearchEntry {
  id: string;
  type: SearchItemType;
  title: string;
  subtitle: string;
  discipline: DisciplineId | 'transversal';
  route: string;
  tags: string[];
  normalizedHaystack: string;
}

export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

const allModules = [...workModules, ...rgsModules];
const allTopics: Topic[] = allModules.flatMap((mod) => mod.topics);

const topicEntries: SearchEntry[] = allTopics.map((topic) => ({
  id: `topic:${topic.id}`,
  type: 'topico',
  title: `${topic.code} ${topic.title}`,
  subtitle: topic.summary,
  discipline: topic.discipline,
  route: `/topico/${topic.id}`,
  tags: topic.tags,
  normalizedHaystack: normalizeSearchText(
    [
      topic.code,
      topic.title,
      topic.summary,
      ...topic.tags,
      ...topic.sections.map((s) => s.heading),
    ].join(' ')
  ),
}));

const glossaryEntries: SearchEntry[] = glossaryTerms.map((term) => ({
  id: `glossary:${term.id}`,
  type: 'glossario',
  title: term.term,
  subtitle: term.definition,
  discipline: term.discipline,
  route: `/indice?q=${encodeURIComponent(term.term)}`,
  tags: [],
  normalizedHaystack: normalizeSearchText(
    [term.term, term.definition, term.sourceNote ?? ''].join(' ')
  ),
}));

const sourceSeen = new Set<string>();
const sourceEntries: SearchEntry[] = [];

for (const topic of allTopics) {
  for (const source of topic.sources) {
    const key = `${source.kind ?? 'obra'}|${source.author}|${source.work}|${source.year}|${source.specificPoint}`;
    if (sourceSeen.has(key)) continue;
    sourceSeen.add(key);

    sourceEntries.push({
      id: `source:${topic.id}:${source.id}`,
      type: 'fonte',
      title: `${source.shortLabel}: ${source.work}`,
      subtitle: `${topic.code} - ${source.author} (${source.year}) - ${source.specificPoint}`,
      discipline: topic.discipline,
      route: `/topico/${topic.id}`,
      tags: topic.tags,
      normalizedHaystack: normalizeSearchText(
        [
          topic.code,
          source.shortLabel,
          source.author,
          source.work,
          source.year,
          source.specificPoint,
          source.kind ?? 'obra',
        ].join(' ')
      ),
    });
  }
}

const tagDisciplines = new Map<string, Set<DisciplineId>>();
const tagFirstTopic = new Map<string, string>();

for (const topic of allTopics) {
  for (const tag of topic.tags) {
    if (!tagDisciplines.has(tag)) {
      tagDisciplines.set(tag, new Set());
      tagFirstTopic.set(tag, topic.id);
    }
    tagDisciplines.get(tag)!.add(topic.discipline);
  }
}

const tagEntries: SearchEntry[] = Array.from(tagDisciplines.entries())
  .sort(([a], [b]) => a.localeCompare(b, 'pt-BR'))
  .map(([tag, disciplines]) => {
    const isTransversal = disciplines.size > 1;
    const discipline: DisciplineId | 'transversal' = isTransversal
      ? 'transversal'
      : Array.from(disciplines)[0];
    const topicId = tagFirstTopic.get(tag) ?? '';
    return {
      id: `tag:${tag}`,
      type: 'tag',
      title: tag,
      subtitle: isTransversal
        ? 'Tag transversal entre Psicologia do Trabalho e Raça, Gênero e Sexualidade'
        : 'Tag temática de revisão',
      discipline,
      route: topicId ? `/topico/${topicId}` : '/',
      tags: [tag],
      normalizedHaystack: normalizeSearchText(`${tag} ${isTransversal ? 'transversal' : ''}`),
    };
  });

export const transversalTags: string[] = tagEntries
  .filter((entry) => entry.discipline === 'transversal')
  .map((entry) => entry.title);

export const searchEntries: SearchEntry[] = [
  ...topicEntries,
  ...glossaryEntries,
  ...sourceEntries,
  ...tagEntries,
];

export function filterSearchEntries(
  query: string,
  disciplineFilter: DisciplineId | 'all' = 'all',
  typeFilter: SearchItemType | 'all' = 'all',
  tagFilter = ''
): SearchEntry[] {
  const normalizedQuery = normalizeSearchText(query);
  const normalizedTag = normalizeSearchText(tagFilter);

  return searchEntries.filter((entry) => {
    if (
      disciplineFilter !== 'all' &&
      entry.discipline !== disciplineFilter &&
      entry.discipline !== 'transversal'
    ) {
      return false;
    }

    if (typeFilter !== 'all' && entry.type !== typeFilter) {
      return false;
    }

    if (normalizedTag) {
      const hasTag =
        entry.tags.some((t) => normalizeSearchText(t) === normalizedTag) ||
        (entry.type === 'tag' && normalizeSearchText(entry.title) === normalizedTag);
      if (!hasTag) return false;
    }

    if (!normalizedQuery) return true;
    return entry.normalizedHaystack.includes(normalizedQuery);
  });
}
