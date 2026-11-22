import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { ArrowRight, MagnifyingGlass } from '@phosphor-icons/react';
import type { DisciplineId } from '../types/content.ts';
import { glossaryTerms } from '../data/glossary.ts';
import { workModules } from '../data/workPsychology.ts';
import { rgsModules } from '../data/raceGenderSexuality.ts';
import { normalizeSearchText } from '../data/searchIndex.ts';

type IndexTab = 'conceitos' | 'autores' | 'normas';

interface TopicRef {
  topicId: string;
  topicCode: string;
}

interface IndexEntryItem {
  id: string;
  heading: string;
  subtext: string;
  discipline: DisciplineId | 'transversal';
  topicRefs: TopicRef[];
  extra?: string;
}

function hasGlossaryRef(text: string, termId: string): boolean {
  return text.includes(`{{${termId}|`) || text.includes(`{{${termId}}}`);
}

const ALL_TOPICS = [...workModules, ...rgsModules].flatMap((m) => m.topics);

const DISCIPLINE_BADGES: Record<DisciplineId | 'transversal', string> = {
  trabalho: 'Trabalho',
  'raca-genero-sexualidade': 'Raça e Gênero',
  transversal: 'Transversal',
};

function firstIndexLetter(value: string): string {
  const normalized = normalizeSearchText(value);
  const first = normalized.charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : '#';
}

export function IndexPage() {
  const reduceMotion = useReducedMotion();
  const [searchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState<IndexTab>('conceitos');
  const [filterQuery, setFilterQuery] = useState(() => searchParams.get('q') ?? '');
  const [disciplineFilter, setDisciplineFilter] = useState<DisciplineId | 'all'>('all');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) {
      setFilterQuery(q);
      setActiveTab('conceitos');
    }
  }, [searchParams]);

  const conceptItems = useMemo<IndexEntryItem[]>(() => {
    return glossaryTerms.map((term) => {
      const refTopic = ALL_TOPICS.find((t) =>
        t.sections.some(
          (sec) =>
            sec.paragraphs.some((p) => hasGlossaryRef(p, term.id)) ||
            (sec.keyPoints ?? []).some((k) => hasGlossaryRef(k, term.id))
        )
      );
      return {
        id: `concept-${term.id}`,
        heading: term.term,
        subtext: term.definition,
        discipline: term.discipline,
        topicRefs: refTopic ? [{ topicId: refTopic.id, topicCode: refTopic.code }] : [],
        extra: term.sourceNote,
      };
    });
  }, []);

  const { authorItems, normItems } = useMemo(() => {
    interface SourceGroup {
      id: string;
      kind: 'obra' | 'norma';
      heading: string;
      prefix: string;
      discipline: DisciplineId;
      points: string[];
      notes: string[];
      topicRefs: TopicRef[];
      topicIds: Set<string>;
    }

    const groups = new Map<string, SourceGroup>();

    for (const topic of ALL_TOPICS) {
      for (const source of topic.sources) {
        const kind = source.kind ?? 'obra';
        const dedupKey = `${kind}|${source.author}|${source.work}|${source.year}`;
        let group = groups.get(dedupKey);

        if (!group) {
          group = {
            id: `src-${topic.id}-${source.id}`,
            kind,
            heading:
              kind === 'norma'
                ? `${source.work} (${source.year})`
                : `${source.author} (${source.year})`,
            prefix: kind === 'norma' ? source.author : source.work,
            discipline: topic.discipline,
            points: [],
            notes: [],
            topicRefs: [],
            topicIds: new Set<string>(),
          };
          groups.set(dedupKey, group);
        }

        if (!group.points.includes(source.specificPoint)) {
          group.points.push(source.specificPoint);
        }
        if (source.excerptNote && !group.notes.includes(source.excerptNote)) {
          group.notes.push(source.excerptNote);
        }
        if (!group.topicIds.has(topic.id)) {
          group.topicIds.add(topic.id);
          group.topicRefs.push({ topicId: topic.id, topicCode: topic.code });
        }
      }
    }

    const authors: IndexEntryItem[] = [];
    const norms: IndexEntryItem[] = [];

    for (const group of groups.values()) {
      const item: IndexEntryItem = {
        id: group.id,
        heading: group.heading,
        subtext: `${group.prefix} - ${group.points.join('; ')}`,
        discipline: group.discipline,
        topicRefs: group.topicRefs,
        extra: group.notes.length > 0 ? group.notes.join(' ') : undefined,
      };
      if (group.kind === 'norma') {
        norms.push(item);
      } else {
        authors.push(item);
      }
    }

    authors.sort((a, b) => a.heading.localeCompare(b.heading, 'pt-BR', { sensitivity: 'base' }));
    norms.sort((a, b) => a.heading.localeCompare(b.heading, 'pt-BR', { sensitivity: 'base' }));

    return { authorItems: authors, normItems: norms };
  }, []);

  const rawItems =
    activeTab === 'conceitos'
      ? conceptItems
      : activeTab === 'autores'
        ? authorItems
        : normItems;

  const filteredItems = useMemo(() => {
    const normQ = normalizeSearchText(filterQuery);
    return rawItems.filter((item) => {
      if (
        disciplineFilter !== 'all' &&
        item.discipline !== disciplineFilter &&
        item.discipline !== 'transversal'
      ) {
        return false;
      }
      if (!normQ) return true;
      const haystack = normalizeSearchText(
        `${item.heading} ${item.subtext} ${item.extra ?? ''}`
      );
      return haystack.includes(normQ);
    });
  }, [rawItems, disciplineFilter, filterQuery]);

  const groupedByLetter = useMemo(() => {
    const groups = new Map<string, IndexEntryItem[]>();
    for (const item of filteredItems) {
      const letter = firstIndexLetter(item.heading);
      if (!groups.has(letter)) {
        groups.set(letter, []);
      }
      groups.get(letter)!.push(item);
    }
    return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredItems]);

  const jumpToLetter = (letter: string) => {
    const el = document.getElementById(`indice-letra-${letter}`);
    el?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-8">
      <header className="space-y-3 pb-6 border-b border-[#E2E6EC] dark:border-[#262C36]">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] pb-1 text-[#111418] dark:text-[#EDF1F5]">
          Índice Remissivo A-Z
        </h1>
        <p className="text-base leading-relaxed max-w-[65ch] text-[#525D6A] dark:text-[#9BA6B4]">
          Consulte definições conceituais, autores de referência e resoluções normativas em ordem alfabética.
        </p>
      </header>

      <div className="space-y-4">
        <div
          role="tablist"
          aria-label="Categorias do índice"
          className="flex flex-wrap gap-2"
        >
          {(
            [
              { id: 'conceitos', label: `Conceitos (${conceptItems.length})` },
              { id: 'autores', label: `Autores (${authorItems.length})` },
              { id: 'normas', label: `Normas e Resoluções (${normItems.length})` },
            ] as const
          ).map((tab) => {
            const selected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-[44px] px-4 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  selected
                    ? 'bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116]'
                    : 'bg-[#FFFFFF] dark:bg-[#161B22] text-[#525D6A] dark:text-[#9BA6B4] border border-[#E2E6EC] dark:border-[#262C36]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <label htmlFor="index-filter-input" className="sr-only">
              Filtrar itens do índice
            </label>
            <MagnifyingGlass
              size={18}
              weight="regular"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#525D6A] dark:text-[#9BA6B4]"
            />
            <input
              id="index-filter-input"
              type="search"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filtrar por termo, autor ou norma..."
              className="min-h-[44px] w-full pl-10 pr-4 rounded-lg border border-[#88929E]/60 dark:border-[#6E7681]/60 bg-[#FFFFFF] dark:bg-[#161B22] text-sm text-[#111418] dark:text-[#EDF1F5] placeholder:text-[#5E6875] dark:placeholder:text-[#8B949E]"
            />
          </div>

          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por disciplina">
            {(
              [
                { value: 'all', label: 'Todas' },
                { value: 'trabalho', label: 'Trabalho' },
                { value: 'raca-genero-sexualidade', label: 'Raça e Gênero' },
              ] as const
            ).map((opt) => {
              const active = disciplineFilter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setDisciplineFilter(opt.value)}
                  className={`min-h-[44px] px-3 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116]'
                      : 'bg-[#FFFFFF] dark:bg-[#161B22] text-[#525D6A] dark:text-[#9BA6B4] border border-[#E2E6EC] dark:border-[#262C36]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {groupedByLetter.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Atalho alfabético">
            {groupedByLetter.map(([letter]) => (
              <button
                key={letter}
                type="button"
                onClick={() => jumpToLetter(letter)}
                className="min-w-[44px] min-h-[44px] rounded-lg border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] font-mono text-xs font-semibold text-[#0F766E] dark:text-[#2DD4BF] hover:border-[#0F766E] dark:hover:border-[#2DD4BF] cursor-pointer"
              >
                {letter}
              </button>
            ))}
          </div>
        )}
      </div>

      {groupedByLetter.length === 0 ? (
        <div className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-8 text-center space-y-3">
          <p className="text-sm text-[#525D6A] dark:text-[#9BA6B4]">
            Nenhum item corresponde ao filtro atual.
          </p>
          <button
            type="button"
            onClick={() => {
              setFilterQuery('');
              setDisciplineFilter('all');
            }}
            className="min-h-[44px] px-4 rounded-lg bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116] text-sm font-medium cursor-pointer"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {groupedByLetter.map(([letter, items]) => (
            <section
              key={letter}
              id={`indice-letra-${letter}`}
              className="scroll-mt-20 space-y-3"
            >
              <h2 className="font-mono text-sm font-semibold text-[#0F766E] dark:text-[#2DD4BF] pb-2 border-b border-[#E2E6EC] dark:border-[#262C36]">
                {letter}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-4 flex flex-col justify-between gap-3"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-serif text-lg font-semibold text-[#111418] dark:text-[#EDF1F5]">
                          {item.heading}
                        </h3>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[#F8F9FA] dark:bg-[#0E1116] text-[#525D6A] dark:text-[#9BA6B4] border border-[#E2E6EC] dark:border-[#262C36]">
                          {DISCIPLINE_BADGES[item.discipline]}
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed text-[#525D6A] dark:text-[#9BA6B4]">
                        {item.subtext}
                      </p>

                      {item.extra && (
                        <p className="text-xs text-[#525D6A] dark:text-[#9BA6B4]">
                          {item.extra}
                        </p>
                      )}
                    </div>

                    {item.topicRefs.length > 0 && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {item.topicRefs.map((ref) => (
                          <Link
                            key={ref.topicId}
                            to={`/topico/${ref.topicId}`}
                            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF] hover:underline"
                          >
                            <span>Abrir tópico {ref.topicCode}</span>
                            <ArrowRight size={14} weight="regular" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
