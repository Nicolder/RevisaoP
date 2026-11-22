import type { GlossaryTerm } from '../types/content.ts';
import { workGlossary } from './workPsychology.ts';
import { rgsGlossary } from './raceGenderSexuality.ts';

const termMap = new Map<string, GlossaryTerm>();

for (const item of [...workGlossary, ...rgsGlossary]) {
  if (!termMap.has(item.id)) {
    termMap.set(item.id, item);
  }
}

export const glossaryTerms: GlossaryTerm[] = Array.from(termMap.values()).sort((a, b) =>
  a.term.localeCompare(b.term, 'pt-BR', { sensitivity: 'base' })
);

export const glossaryById: Record<string, GlossaryTerm> = Object.fromEntries(
  glossaryTerms.map((term) => [term.id, term])
);
