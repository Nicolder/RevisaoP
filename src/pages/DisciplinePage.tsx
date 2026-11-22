import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock } from '@phosphor-icons/react';
import type { DisciplineId, Module } from '../types/content.ts';
import { workModules } from '../data/workPsychology.ts';
import { rgsModules } from '../data/raceGenderSexuality.ts';

interface DisciplineMeta {
  title: string;
  description: string;
  modules: Module[];
}

const DISCIPLINE_MAP: Record<DisciplineId, DisciplineMeta> = {
  trabalho: {
    title: 'Psicologia do Trabalho',
    description:
      'Organização científica e flexível da produção, psicodinâmica do trabalho, saúde mental relacionada ao trabalho e clínica da atividade.',
    modules: workModules,
  },
  'raca-genero-sexualidade': {
    title: 'Psicologia de Raça, Gênero e Sexualidade',
    description:
      'Racismo estrutural e institucional, relações raciais na Psicologia brasileira, gênero e performatividade, sexualidade, interseccionalidade e ética profissional.',
    modules: rgsModules,
  },
};

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function readLocalStats(modules: Module[]) {
  const allTopics = modules.flatMap((m) => m.topics);
  const totalFlashcards = allTopics.reduce((acc, t) => acc + t.flashcards.length, 0);
  let masteredFlashcards = 0;
  const completedTopicIds = new Set<string>();

  try {
    const fcRaw = localStorage.getItem('revisao:flashcards');
    if (fcRaw) {
      const fcMap: unknown = JSON.parse(fcRaw);
      if (isPlainRecord(fcMap)) {
        for (const topic of allTopics) {
          for (const fc of topic.flashcards) {
            if (fcMap[fc.id] === 'mastered') masteredFlashcards += 1;
          }
        }
      }
    }
  } catch {
    // Ignore flashcard storage read errors
  }

  try {
    const quizRaw = localStorage.getItem('revisao:quiz');
    if (quizRaw) {
      const quizMap: unknown = JSON.parse(quizRaw);
      if (isPlainRecord(quizMap)) {
        for (const topic of allTopics) {
          if (topic.quiz.length === 0) continue;
          const entry = quizMap[topic.id];
          if (!isPlainRecord(entry) || !isPlainRecord(entry.answered)) continue;
          const answered = entry.answered;
          if (topic.quiz.every((q) => typeof answered[q.id] === 'number')) {
            completedTopicIds.add(topic.id);
          }
        }
      }
    }
  } catch {
    // Ignore quiz storage read errors
  }

  return {
    totalTopics: allTopics.length,
    completedTopics: completedTopicIds.size,
    completedTopicIds,
    totalFlashcards,
    masteredFlashcards,
  };
}

export function DisciplinePage() {
  const { disciplineId } = useParams<{ disciplineId: string }>();

  const meta =
    disciplineId === 'trabalho' || disciplineId === 'raca-genero-sexualidade'
      ? DISCIPLINE_MAP[disciplineId]
      : null;

  const stats = useMemo(
    () => (meta ? readLocalStats(meta.modules) : null),
    [meta]
  );

  if (!meta || !stats) {
    return (
      <div className="py-12 space-y-4">
        <h1 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
          Disciplina não encontrada
        </h1>
        <p className="text-sm text-[#525D6A] dark:text-[#9BA6B4]">
          A trilha solicitada não corresponde a uma disciplina cadastrada no portal.
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

  return (
    <div className="space-y-10">
      <header className="space-y-4 pb-6 border-b border-[#E2E6EC] dark:border-[#262C36]">
        <nav aria-label="Caminho de navegação" className="flex items-center gap-2 text-xs text-[#525D6A] dark:text-[#9BA6B4]">
          <Link to="/" className="min-h-[44px] inline-flex items-center hover:text-[#0F766E] dark:hover:text-[#2DD4BF]">
            Início
          </Link>
          <span>/</span>
          <span className="text-[#111418] dark:text-[#EDF1F5] font-medium">{meta.title}</span>
        </nav>

        <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] pb-1 text-[#111418] dark:text-[#EDF1F5]">
          {meta.title}
        </h1>

        <p className="text-base leading-relaxed max-w-[65ch] text-[#525D6A] dark:text-[#9BA6B4]">
          {meta.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono text-[#525D6A] dark:text-[#9BA6B4]">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle size={16} weight="regular" className="text-[#0F766E] dark:text-[#2DD4BF]" />
            <span>
              {stats.completedTopics} / {stats.totalTopics} tópicos com quiz concluído
            </span>
          </span>
          <span>
            {stats.masteredFlashcards} / {stats.totalFlashcards} flashcards dominados
          </span>
        </div>
      </header>

      <div className="space-y-8">
        {meta.modules.map((mod) => (
          <section
            key={mod.id}
            aria-labelledby={`mod-heading-${mod.id}`}
            className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-5 sm:p-6 space-y-4"
          >
            <div className="space-y-1.5">
              <span className="font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF]">
                {mod.code}
              </span>
              <h2
                id={`mod-heading-${mod.id}`}
                className="font-serif text-2xl font-semibold text-[#111418] dark:text-[#EDF1F5]"
              >
                {mod.title}
              </h2>
              <p className="text-sm text-[#525D6A] dark:text-[#9BA6B4]">
                {mod.description}
              </p>
            </div>

            {mod.topics.length === 0 ? (
              <p className="text-xs font-mono text-[#525D6A] dark:text-[#9BA6B4] pt-2 border-t border-[#E2E6EC] dark:border-[#262C36]">
                Tópicos deste módulo em preparação.
              </p>
            ) : (
              <ul className="divide-y divide-[#E2E6EC] dark:divide-[#262C36] border-t border-[#E2E6EC] dark:border-[#262C36]">
                {mod.topics.map((topic) => {
                  const done = stats.completedTopicIds.has(topic.id);
                  return (
                    <li key={topic.id}>
                      <Link
                        to={`/topico/${topic.id}`}
                        className="min-h-[44px] py-3.5 flex items-start sm:items-center justify-between gap-4 group"
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF]">
                              {topic.code}
                            </span>
                            <span className="text-base font-medium text-[#111418] dark:text-[#EDF1F5] group-hover:text-[#0F766E] dark:group-hover:text-[#2DD4BF] transition-colors">
                              {topic.title}
                            </span>
                          </div>
                          <p className="text-sm text-[#525D6A] dark:text-[#9BA6B4] line-clamp-2">
                            {topic.summary}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 text-xs text-[#525D6A] dark:text-[#9BA6B4]">
                          {done && (
                            <CheckCircle
                              size={18}
                              weight="fill"
                              className="text-[#0F766E] dark:text-[#2DD4BF]"
                              aria-label="Quiz concluído"
                            />
                          )}
                          <span className="inline-flex items-center gap-1 font-mono">
                            <Clock size={14} weight="regular" />
                            <span>{topic.estimatedMinutes} min</span>
                          </span>
                          <ArrowRight
                            size={16}
                            weight="regular"
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
