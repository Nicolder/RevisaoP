import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CaretDown,
  CaretUp,
  Clock,
  ListBullets,
} from '@phosphor-icons/react';
import type { SourceCitation, Topic } from '../types/content.ts';
import { workModules } from '../data/workPsychology.ts';
import { rgsModules } from '../data/raceGenderSexuality.ts';
import { CitedText } from '../components/CitedText.tsx';
import { SourceDrawer } from '../components/SourceDrawer.tsx';
import {
  ComparisonMatrix,
  ConceptFlow,
  FlashcardDeck,
  MiniQuiz,
} from '../components/StudyTools.tsx';

const ALL_TOPICS: Topic[] = [...workModules, ...rgsModules].flatMap((m) => m.topics);

const DISCIPLINE_LABELS = {
  trabalho: 'Psicologia do Trabalho',
  'raca-genero-sexualidade': 'Raça, Gênero e Sexualidade',
} as const;

export function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const reduceMotion = useReducedMotion();

  const [activeSource, setActiveSource] = useState<SourceCitation | null>(null);
  const [highlightedSourceId, setHighlightedSourceId] = useState<string | null>(null);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const topicIndex = useMemo(
    () => ALL_TOPICS.findIndex((t) => t.id === topicId),
    [topicId]
  );
  const topic = topicIndex >= 0 ? ALL_TOPICS[topicIndex] : undefined;

  useEffect(() => {
    setActiveSource(null);
    setHighlightedSourceId(null);
    setMobileTocOpen(false);
  }, [topicId]);

  if (!topic) {
    return (
      <div className="py-12 space-y-4">
        <h1 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
          Tópico não encontrado
        </h1>
        <p className="text-sm text-[#525D6A] dark:text-[#9BA6B4]">
          O tópico solicitado não está disponível neste momento.
        </p>
        <Link
          to="/"
          className="min-h-[44px] px-4 rounded-lg bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116] text-sm font-medium inline-flex items-center"
        >
          Voltar ao início
        </Link>
      </div>
    );
  }

  const sameDisciplineTopics = ALL_TOPICS.filter((t) => t.discipline === topic.discipline);
  const posInDiscipline = sameDisciplineTopics.findIndex((t) => t.id === topic.id);
  const prevTopic = posInDiscipline > 0 ? sameDisciplineTopics[posInDiscipline - 1] : null;
  const nextTopic =
    posInDiscipline >= 0 && posInDiscipline < sameDisciplineTopics.length - 1
      ? sameDisciplineTopics[posInDiscipline + 1]
      : null;

  const tocItems: Array<{ id: string; label: string }> = [
    ...topic.sections.map((sec) => ({ id: `sec-${sec.id}`, label: sec.heading })),
    ...(topic.flow ? [{ id: 'fluxo-conceitual', label: topic.flow.title }] : []),
    ...(topic.comparison ? [{ id: 'matriz-comparativa', label: topic.comparison.title }] : []),
    { id: 'recursos-estudo', label: 'Flashcards e Questões' },
    { id: 'fontes-especificas', label: 'Fontes Específicas' },
  ];

  const scrollToId = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
    setMobileTocOpen(false);
  };

  const handleJumpToSource = (sourceId: string) => {
    setHighlightedSourceId(sourceId);
    window.setTimeout(() => {
      const el = document.getElementById(`fonte-${sourceId}`);
      el?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    }, 60);
    window.setTimeout(() => {
      setHighlightedSourceId((prev) => (prev === sourceId ? null : prev));
    }, 2400);
  };

  return (
    <>
      <div className="lg:grid lg:grid-cols-[minmax(0,68ch)_240px] lg:gap-12 lg:items-start">
        <article className="max-w-[68ch] space-y-10">
          <header className="space-y-4 pb-6 border-b border-[#E2E6EC] dark:border-[#262C36]">
            <nav
              aria-label="Caminho do tópico"
              className="flex flex-wrap items-center gap-2 text-xs text-[#525D6A] dark:text-[#9BA6B4]"
            >
              <Link
                to="/"
                className="min-h-[44px] inline-flex items-center hover:text-[#0F766E] dark:hover:text-[#2DD4BF]"
              >
                Início
              </Link>
              <span>/</span>
              <Link
                to={`/disciplina/${topic.discipline}`}
                className="min-h-[44px] inline-flex items-center hover:text-[#0F766E] dark:hover:text-[#2DD4BF]"
              >
                {DISCIPLINE_LABELS[topic.discipline]}
              </Link>
              <span>/</span>
              <span className="font-mono text-[#111418] dark:text-[#EDF1F5]">{topic.code}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#525D6A] dark:text-[#9BA6B4]">
              <span className="px-2 py-0.5 rounded-md bg-[#0F766E]/10 dark:bg-[#2DD4BF]/15 text-[#0F766E] dark:text-[#2DD4BF] font-medium">
                {topic.code}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} weight="regular" />
                <span>{topic.estimatedMinutes} min de leitura</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] pb-1 text-[#111418] dark:text-[#EDF1F5]">
              {topic.title}
            </h1>

            <p className="text-base leading-relaxed text-[#525D6A] dark:text-[#9BA6B4]">
              {topic.summary}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {topic.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2 py-1 rounded-md bg-[#FFFFFF] dark:bg-[#161B22] border border-[#E2E6EC] dark:border-[#262C36] text-[#525D6A] dark:text-[#9BA6B4]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          <div className="lg:hidden rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22]">
            <button
              type="button"
              onClick={() => setMobileTocOpen((prev) => !prev)}
              aria-expanded={mobileTocOpen}
              className="min-h-[44px] w-full px-4 py-3 flex items-center justify-between text-sm font-medium text-[#111418] dark:text-[#EDF1F5] cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                <ListBullets size={18} weight="regular" className="text-[#0F766E] dark:text-[#2DD4BF]" />
                <span>Sumário do tópico</span>
              </span>
              {mobileTocOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
            </button>

            {mobileTocOpen && (
              <nav
                aria-label="Sumário móvel"
                className="px-4 pb-3 pt-1 border-t border-[#E2E6EC] dark:border-[#262C36] space-y-1"
              >
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToId(item.id)}
                    className="min-h-[44px] w-full text-left text-sm text-[#525D6A] dark:text-[#9BA6B4] hover:text-[#0F766E] dark:hover:text-[#2DD4BF] cursor-pointer block"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            )}
          </div>

          <div className="space-y-10">
            {topic.sections.map((section) => (
              <section
                key={section.id}
                id={`sec-${section.id}`}
                className="scroll-mt-20 space-y-4"
              >
                <h2 className="font-serif text-2xl font-semibold leading-snug text-[#111418] dark:text-[#EDF1F5]">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-base leading-relaxed text-[#111418] dark:text-[#EDF1F5]">
                  {section.paragraphs.map((paragraph, pIdx) => (
                    <CitedText
                      key={pIdx}
                      text={paragraph}
                      sources={topic.sources}
                      onSelectSource={setActiveSource}
                    />
                  ))}
                </div>

                {section.keyPoints && section.keyPoints.length > 0 && (
                  <div className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-4 space-y-2.5">
                    <p className="font-mono text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF]">
                      Pontos centrais
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-[#111418] dark:text-[#EDF1F5] list-disc pl-5">
                      {section.keyPoints.map((kp, kIdx) => (
                        <li key={kIdx}>
                          <CitedText
                            text={kp}
                            sources={topic.sources}
                            onSelectSource={setActiveSource}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {topic.flow && (
            <div id="fluxo-conceitual" className="scroll-mt-20 pt-2">
              <ConceptFlow
                flow={topic.flow}
                sources={topic.sources}
                onSelectSource={setActiveSource}
              />
            </div>
          )}

          {topic.comparison && (
            <div id="matriz-comparativa" className="scroll-mt-20 pt-2">
              <ComparisonMatrix comparison={topic.comparison} />
            </div>
          )}

          <div
            id="recursos-estudo"
            className="scroll-mt-20 pt-6 border-t border-[#E2E6EC] dark:border-[#262C36] space-y-10"
          >
            <FlashcardDeck
              flashcards={topic.flashcards}
              sources={topic.sources}
              onSelectSource={setActiveSource}
            />

            <MiniQuiz
              topicId={topic.id}
              questions={topic.quiz}
              sources={topic.sources}
              onSelectSource={setActiveSource}
            />
          </div>

          <section
            id="fontes-especificas"
            aria-label="Fontes Específicas"
            className="scroll-mt-20 pt-6 border-t border-[#E2E6EC] dark:border-[#262C36] space-y-4"
          >
            <h2 className="font-serif text-2xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
              Fontes Específicas
            </h2>

            <ol className="space-y-3">
              {topic.sources.map((source) => {
                const isHighlighted = highlightedSourceId === source.id;
                return (
                  <li
                    key={source.id}
                    id={`fonte-${source.id}`}
                    className={`rounded-xl border p-4 transition-colors ${
                      isHighlighted
                        ? 'border-[#0F766E] dark:border-[#2DD4BF] bg-[#0F766E]/5 dark:bg-[#2DD4BF]/10'
                        : 'border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22]'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-[#0F766E] dark:text-[#2DD4BF]">
                            [{source.id}] {source.shortLabel}
                          </span>
                          <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#F8F9FA] dark:bg-[#0E1116] text-[#525D6A] dark:text-[#9BA6B4] border border-[#E2E6EC] dark:border-[#262C36]">
                            {source.kind === 'norma' ? 'Norma' : 'Obra'}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-[#111418] dark:text-[#EDF1F5]">
                          {source.author} ({source.year}). {source.work}.
                        </p>
                        <p className="text-xs text-[#525D6A] dark:text-[#9BA6B4]">
                          {source.specificPoint}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveSource(source)}
                        className="min-h-[44px] px-3 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] text-xs font-medium text-[#111418] dark:text-[#EDF1F5] hover:border-[#0F766E] dark:hover:border-[#2DD4BF] cursor-pointer shrink-0"
                      >
                        Ver detalhe
                      </button>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          <nav
            aria-label="Navegação entre tópicos"
            className="pt-6 border-t border-[#E2E6EC] dark:border-[#262C36] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3"
          >
            {prevTopic ? (
              <Link
                to={`/topico/${prevTopic.id}`}
                className="min-h-[44px] px-4 py-2.5 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] inline-flex items-center gap-2 text-sm text-[#111418] dark:text-[#EDF1F5] hover:border-[#0F766E] dark:hover:border-[#2DD4BF]"
              >
                <ArrowLeft size={16} weight="regular" />
                <span>
                  {prevTopic.code}: {prevTopic.title}
                </span>
              </Link>
            ) : (
              <Link
                to={`/disciplina/${topic.discipline}`}
                className="min-h-[44px] px-4 py-2.5 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] inline-flex items-center gap-2 text-sm text-[#111418] dark:text-[#EDF1F5] hover:border-[#0F766E] dark:hover:border-[#2DD4BF]"
              >
                <ArrowLeft size={16} weight="regular" />
                <span>Voltar aos módulos</span>
              </Link>
            )}

            {nextTopic && (
              <Link
                to={`/topico/${nextTopic.id}`}
                className="min-h-[44px] px-4 py-2.5 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] inline-flex items-center justify-end gap-2 text-sm text-[#111418] dark:text-[#EDF1F5] hover:border-[#0F766E] dark:hover:border-[#2DD4BF]"
              >
                <span>
                  {nextTopic.code}: {nextTopic.title}
                </span>
                <ArrowRight size={16} weight="regular" />
              </Link>
            )}
          </nav>
        </article>

        <aside className="hidden lg:block sticky top-20 z-30 rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-4 space-y-3">
          <p className="font-mono text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF]">
            Neste tópico
          </p>
          <nav aria-label="Sumário lateral" className="space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className="min-h-[44px] w-full text-left px-2 py-1.5 rounded-lg text-xs leading-snug text-[#525D6A] dark:text-[#9BA6B4] hover:text-[#111418] dark:hover:text-[#EDF1F5] hover:bg-[#F8F9FA] dark:hover:bg-[#0E1116] cursor-pointer block transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
      </div>

      <SourceDrawer
        source={activeSource}
        onClose={() => setActiveSource(null)}
        onJumpToSource={handleJumpToSource}
      />
    </>
  );
}
