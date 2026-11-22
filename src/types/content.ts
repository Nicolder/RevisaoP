export type DisciplineId = 'trabalho' | 'raca-genero-sexualidade';

export interface SourceCitation {
  id: string;
  shortLabel: string;
  author: string;
  work: string;
  year: string;
  specificPoint: string;
  excerptNote: string;
  kind?: 'obra' | 'norma';
  publicUrl?: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  discipline: DisciplineId | 'transversal';
  sourceNote?: string;
}

export interface TopicSection {
  id: string;
  heading: string;
  paragraphs: string[];
  keyPoints?: string[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  sourceId: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceId: string;
}

export interface ComparisonTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface FlowDiagram {
  title: string;
  steps: Array<{
    label: string;
    detail: string;
    sourceId?: string;
  }>;
}

export interface Topic {
  id: string;
  code: string;
  discipline: DisciplineId;
  moduleId: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
  tags: string[];
  sections: TopicSection[];
  sources: SourceCitation[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  comparison?: ComparisonTable;
  flow?: FlowDiagram;
}

export interface Module {
  id: string;
  code: string;
  discipline: DisciplineId;
  title: string;
  description: string;
  topics: Topic[];
}
