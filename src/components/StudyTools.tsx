import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowsClockwise,
  Check,
  CheckCircle,
  XCircle,
} from '@phosphor-icons/react';
import type {
  ComparisonTable,
  Flashcard,
  FlowDiagram,
  QuizQuestion,
  SourceCitation,
} from '../types/content.ts';

type FlashcardStatus = 'mastered' | 'review';
type FlashcardMap = Record<string, FlashcardStatus>;
type QuizProgressMap = Record<string, { answered: Record<string, number> }>;

const FLASHCARD_STORAGE_KEY = 'revisao:flashcards';
const QUIZ_STORAGE_KEY = 'revisao:quiz';

function readFlashcards(): FlashcardMap {
  try {
    const raw = localStorage.getItem(FLASHCARD_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    return parsed && typeof parsed === 'object' ? (parsed as FlashcardMap) : {};
  } catch {
    return {};
  }
}

function readQuizProgress(): QuizProgressMap {
  try {
    const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    return parsed && typeof parsed === 'object' ? (parsed as QuizProgressMap) : {};
  } catch {
    return {};
  }
}

interface FlashcardDeckProps {
  flashcards: Flashcard[];
  sources: SourceCitation[];
  onSelectSource: (source: SourceCitation) => void;
}

export function FlashcardDeck({ flashcards, sources, onSelectSource }: FlashcardDeckProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [statusMap, setStatusMap] = useState<FlashcardMap>(readFlashcards);

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [flashcards]);

  if (flashcards.length === 0) return null;

  const current = flashcards[index] ?? flashcards[0];
  const currentStatus = statusMap[current.id];
  const masteredCount = flashcards.filter((fc) => statusMap[fc.id] === 'mastered').length;
  const linkedSource = sources.find((s) => s.id === current.sourceId);

  const updateCardStatus = (status: FlashcardStatus) => {
    const nextMap: FlashcardMap = { ...statusMap, [current.id]: status };
    setStatusMap(nextMap);
    try {
      localStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(nextMap));
    } catch {
      // Ignore storage write errors
    }
  };

  const goPrev = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const goNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <section aria-label="Flashcards de revisão" className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-serif text-xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
          Flashcards de revisão
        </h3>
        <span className="font-mono text-xs text-[#525D6A] dark:text-[#9BA6B4]">
          {index + 1} / {flashcards.length} ({masteredCount} dominados)
        </span>
      </div>

      <div className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-5 space-y-4">
        <button
          type="button"
          onClick={() => setFlipped((prev) => !prev)}
          aria-pressed={flipped}
          className="w-full min-h-[140px] text-left rounded-lg p-4 bg-[#F8F9FA] dark:bg-[#0E1116] border border-[#E2E6EC] dark:border-[#262C36] flex flex-col justify-between gap-3 cursor-pointer hover:border-[#0F766E] dark:hover:border-[#2DD4BF] transition-colors"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF]">
              {flipped ? 'Resposta' : 'Pergunta'}
            </span>
            <span className="text-xs text-[#525D6A] dark:text-[#9BA6B4]">
              Toque para alternar
            </span>
          </div>

          <motion.p
            key={`${current.id}-${flipped ? 'back' : 'front'}`}
            initial={reduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16 }}
            className="text-base leading-relaxed text-[#111418] dark:text-[#EDF1F5]"
          >
            {flipped ? current.back : current.front}
          </motion.p>
        </button>

        {flipped && linkedSource && (
          <div className="flex items-center justify-start">
            <button
              type="button"
              onClick={() => onSelectSource(linkedSource)}
              className="min-h-[44px] px-3 rounded-lg font-mono text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF] bg-[#0F766E]/10 dark:bg-[#2DD4BF]/15 cursor-pointer"
            >
              Fonte [{linkedSource.id}]: {linkedSource.shortLabel}
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => updateCardStatus('review')}
            className={`min-h-[44px] px-4 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
              currentStatus === 'review'
                ? 'border-[#0F766E] dark:border-[#2DD4BF] bg-[#0F766E]/10 dark:bg-[#2DD4BF]/15 text-[#0F766E] dark:text-[#2DD4BF]'
                : 'border-[#E2E6EC] dark:border-[#262C36] bg-[#F8F9FA] dark:bg-[#0E1116] text-[#111418] dark:text-[#EDF1F5]'
            }`}
          >
            Revisar depois
          </button>

          <button
            type="button"
            onClick={() => updateCardStatus('mastered')}
            className={`min-h-[44px] px-4 rounded-lg text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              currentStatus === 'mastered'
                ? 'bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116]'
                : 'border border-[#E2E6EC] dark:border-[#262C36] bg-[#F8F9FA] dark:bg-[#0E1116] text-[#111418] dark:text-[#EDF1F5]'
            }`}
          >
            <Check size={16} weight="bold" />
            <span>Já domino</span>
          </button>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#E2E6EC] dark:border-[#262C36]">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Flashcard anterior"
            className="min-h-[44px] min-w-[44px] px-3 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] inline-flex items-center gap-1.5 text-sm text-[#111418] dark:text-[#EDF1F5] hover:border-[#0F766E] dark:hover:border-[#2DD4BF] cursor-pointer"
          >
            <ArrowLeft size={16} weight="regular" />
            <span>Anterior</span>
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Próximo flashcard"
            className="min-h-[44px] min-w-[44px] px-3 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] inline-flex items-center gap-1.5 text-sm text-[#111418] dark:text-[#EDF1F5] hover:border-[#0F766E] dark:hover:border-[#2DD4BF] cursor-pointer"
          >
            <span>Próximo</span>
            <ArrowRight size={16} weight="regular" />
          </button>
        </div>
      </div>
    </section>
  );
}

interface MiniQuizProps {
  topicId: string;
  questions: QuizQuestion[];
  sources: SourceCitation[];
  onSelectSource: (source: SourceCitation) => void;
}

export function MiniQuiz({ topicId, questions, sources, onSelectSource }: MiniQuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>(() => {
    const stored = readQuizProgress();
    return stored[topicId]?.answered ?? {};
  });

  useEffect(() => {
    const stored = readQuizProgress();
    setAnswers(stored[topicId]?.answered ?? {});
  }, [topicId]);

  if (questions.length === 0) return null;

  const persistAnswers = (nextTopicAnswers: Record<string, number>) => {
    setAnswers(nextTopicAnswers);
    try {
      const current = readQuizProgress();
      const updated: QuizProgressMap = {
        ...current,
        [topicId]: { answered: nextTopicAnswers },
      };
      localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage write errors
    }
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (answers[questionId] !== undefined) return;
    persistAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleReset = () => {
    persistAnswers({});
  };

  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;
  const correctCount = questions.filter((q) => answers[q.id] === q.correctIndex).length;

  return (
    <section aria-label="Mini-quiz comentado" className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="space-y-0.5">
          <h3 className="font-serif text-xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
            Questões comentadas
          </h3>
          <p className="text-xs text-[#525D6A] dark:text-[#9BA6B4]">
            {answeredCount} de {questions.length} respondidas ({correctCount} acertos)
          </p>
        </div>

        {answeredCount > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="min-h-[44px] px-3 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] text-xs font-medium text-[#111418] dark:text-[#EDF1F5] inline-flex items-center gap-1.5 hover:border-[#0F766E] dark:hover:border-[#2DD4BF] cursor-pointer"
          >
            <ArrowsClockwise size={15} weight="regular" />
            <span>Refazer quiz</span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        {questions.map((question, qIndex) => {
          const selected = answers[question.id];
          const hasAnswered = selected !== undefined;
          const isCorrect = selected === question.correctIndex;
          const linkedSource = sources.find((s) => s.id === question.sourceId);

          return (
            <div
              key={question.id}
              className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-5 space-y-4"
            >
              <p className="text-base font-medium leading-relaxed text-[#111418] dark:text-[#EDF1F5]">
                <span className="font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF] mr-2">
                  Q{qIndex + 1}
                </span>
                {question.question}
              </p>

              <div className="space-y-2">
                {question.options.map((option, optIdx) => {
                  const isChosen = selected === optIdx;
                  const isRightOption = optIdx === question.correctIndex;

                  let styleClass =
                    'border-[#E2E6EC] dark:border-[#262C36] bg-[#F8F9FA] dark:bg-[#0E1116] text-[#111418] dark:text-[#EDF1F5] hover:border-[#0F766E] dark:hover:border-[#2DD4BF]';

                  if (hasAnswered) {
                    if (isRightOption) {
                      styleClass =
                        'border-[#0F766E] dark:border-[#2DD4BF] bg-[#F0FDFA] dark:bg-[#132A2A] text-[#0F766E] dark:text-[#2DD4BF]';
                    } else if (isChosen) {
                      styleClass =
                        'border-[#B91C1C] dark:border-[#F87171] bg-[#B91C1C]/5 dark:bg-[#F87171]/10 text-[#B91C1C] dark:text-[#F87171]';
                    } else {
                      styleClass =
                        'border-[#E2E6EC] dark:border-[#262C36] bg-[#F8F9FA] dark:bg-[#0E1116] text-[#525D6A] dark:text-[#9BA6B4]';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(question.id, optIdx)}
                      className={`min-h-[44px] w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors flex items-start justify-between gap-3 ${
                        hasAnswered ? 'cursor-default' : 'cursor-pointer'
                      } ${styleClass}`}
                    >
                      <span>{option}</span>
                      {hasAnswered && isRightOption && (
                        <CheckCircle size={20} weight="fill" className="shrink-0 mt-0.5" />
                      )}
                      {hasAnswered && isChosen && !isRightOption && (
                        <XCircle size={20} weight="fill" className="shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {hasAnswered && (
                <div className="p-4 rounded-lg bg-[#F8F9FA] dark:bg-[#0E1116] border border-[#E2E6EC] dark:border-[#262C36] space-y-2.5">
                  <p
                    className={`text-xs font-semibold ${
                      isCorrect
                        ? 'text-[#0F766E] dark:text-[#2DD4BF]'
                        : 'text-[#B91C1C] dark:text-[#F87171]'
                    }`}
                  >
                    {isCorrect ? 'Resposta correta' : 'Revise a justificativa abaixo'}
                  </p>
                  <p className="text-sm leading-relaxed text-[#111418] dark:text-[#EDF1F5]">
                    {question.explanation}
                  </p>
                  {linkedSource && (
                    <button
                      type="button"
                      onClick={() => onSelectSource(linkedSource)}
                      className="min-h-[44px] px-3 rounded-lg font-mono text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF] bg-[#0F766E]/10 dark:bg-[#2DD4BF]/15 cursor-pointer"
                    >
                      Fonte [{linkedSource.id}]: {linkedSource.shortLabel}
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

interface ComparisonMatrixProps {
  comparison: ComparisonTable;
}

export function ComparisonMatrix({ comparison }: ComparisonMatrixProps) {
  return (
    <section aria-label={comparison.title} className="space-y-3">
      <h3 className="font-serif text-xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
        {comparison.title}
      </h3>

      <div className="md:hidden space-y-3">
        {comparison.rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-4 space-y-2.5"
          >
            <p className="text-sm font-semibold text-[#111418] dark:text-[#EDF1F5]">
              {row[0]}
            </p>
            <dl className="space-y-2">
              {row.slice(1).map((cell, cellIdx) => (
                <div key={cellIdx} className="space-y-0.5">
                  <dt className="text-xs font-medium text-[#525D6A] dark:text-[#9BA6B4]">
                    {comparison.headers[cellIdx + 1] ?? ''}
                  </dt>
                  <dd className="text-sm leading-relaxed text-[#111418] dark:text-[#EDF1F5]">
                    {cell}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="hidden md:block rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E2E6EC] dark:border-[#262C36] bg-[#F8F9FA] dark:bg-[#0E1116]">
              {comparison.headers.map((header, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-4 py-3 text-xs font-semibold text-[#525D6A] dark:text-[#9BA6B4]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={
                  rowIdx < comparison.rows.length - 1
                    ? 'border-b border-[#E2E6EC] dark:border-[#262C36]'
                    : ''
                }
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`px-4 py-3 text-sm align-top ${
                      cellIdx === 0
                        ? 'font-medium text-[#111418] dark:text-[#EDF1F5]'
                        : 'text-[#525D6A] dark:text-[#9BA6B4]'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

interface ConceptFlowProps {
  flow: FlowDiagram;
  sources: SourceCitation[];
  onSelectSource: (source: SourceCitation) => void;
}

export function ConceptFlow({ flow, sources, onSelectSource }: ConceptFlowProps) {
  return (
    <section aria-label={flow.title} className="space-y-4">
      <h3 className="font-serif text-xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
        {flow.title}
      </h3>

      <ol className="md:hidden relative border-l border-[#E2E6EC] dark:border-[#262C36] ml-3 space-y-5 pl-6">
        {flow.steps.map((step, idx) => {
          const linkedSource = step.sourceId
            ? sources.find((s) => s.id === step.sourceId)
            : undefined;
          return (
            <li key={idx} className="relative space-y-1.5">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-0.5 w-6 h-6 rounded-md bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116] font-mono text-xs font-semibold flex items-center justify-center"
              >
                {idx + 1}
              </span>
              <p className="text-sm font-semibold text-[#111418] dark:text-[#EDF1F5]">
                {step.label}
              </p>
              <p className="text-sm leading-relaxed text-[#525D6A] dark:text-[#9BA6B4]">
                {step.detail}
              </p>
              {linkedSource && (
                <button
                  type="button"
                  onClick={() => onSelectSource(linkedSource)}
                  className="min-h-[44px] px-2.5 rounded-md font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF] bg-[#0F766E]/10 dark:bg-[#2DD4BF]/15 cursor-pointer"
                >
                  Fonte [{linkedSource.id}]
                </button>
              )}
            </li>
          );
        })}
      </ol>

      <ol className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flow.steps.map((step, idx) => {
          const linkedSource = step.sourceId
            ? sources.find((s) => s.id === step.sourceId)
            : undefined;
          return (
            <li
              key={idx}
              className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-4 flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-md bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116] font-mono text-xs font-semibold inline-flex items-center justify-center">
                    {idx + 1}
                  </span>
                  {idx < flow.steps.length - 1 && (
                    <ArrowRight
                      size={16}
                      weight="regular"
                      className="text-[#525D6A] dark:text-[#9BA6B4]"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="text-sm font-semibold text-[#111418] dark:text-[#EDF1F5]">
                  {step.label}
                </p>
                <p className="text-sm leading-relaxed text-[#525D6A] dark:text-[#9BA6B4]">
                  {step.detail}
                </p>
              </div>

              {linkedSource && (
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectSource(linkedSource)}
                    className="min-h-[44px] px-2.5 rounded-md font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF] bg-[#0F766E]/10 dark:bg-[#2DD4BF]/15 cursor-pointer"
                  >
                    Fonte [{linkedSource.id}]
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
