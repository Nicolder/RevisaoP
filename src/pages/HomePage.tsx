import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Briefcase, UsersThree } from '@phosphor-icons/react';
import { workModules } from '../data/workPsychology.ts';
import { rgsModules } from '../data/raceGenderSexuality.ts';
import { transversalTags } from '../data/searchIndex.ts';

interface HomePageProps {
  onOpenSearchWithTag: (tag: string) => void;
}

export function HomePage({ onOpenSearchWithTag }: HomePageProps) {
  const workTopicCount = workModules.reduce((acc, mod) => acc + mod.topics.length, 0);
  const rgsTopicCount = rgsModules.reduce((acc, mod) => acc + mod.topics.length, 0);

  return (
    <div className="space-y-12 md:space-y-16">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2 md:pt-6">
        <div className="md:col-span-7 space-y-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0F766E] dark:text-[#2DD4BF]">
            Portal Acadêmico de Psicologia
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] pb-1 text-[#111418] dark:text-[#EDF1F5]">
            Revisão estruturada em Psicologia
          </h1>

          <p className="text-base leading-relaxed max-w-[55ch] text-[#525D6A] dark:text-[#9BA6B4]">
            Sínteses conceituais, glossário interativo e referências bibliográficas verificadas em Trabalho, Raça, Gênero e Sexualidade.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              to="/disciplina/trabalho"
              className="min-h-[44px] px-5 rounded-lg bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116] text-sm font-medium inline-flex items-center gap-2 whitespace-nowrap hover:opacity-95 transition-opacity"
            >
              <span>Iniciar por Trabalho</span>
              <ArrowRight size={16} weight="bold" />
            </Link>

            <Link
              to="/indice"
              className="min-h-[44px] px-4 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] text-sm font-medium text-[#111418] dark:text-[#EDF1F5] inline-flex items-center whitespace-nowrap hover:border-[#0F766E] dark:hover:border-[#2DD4BF] transition-colors"
            >
              Consultar Índice A-Z
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] divide-y divide-[#E2E6EC] dark:divide-[#262C36]">
          <Link
            to="/disciplina/trabalho"
            className="min-h-[44px] p-5 flex items-start justify-between gap-4 hover:bg-[#F8F9FA] dark:hover:bg-[#0E1116]/60 transition-colors rounded-t-xl"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#0F766E] dark:text-[#2DD4BF]">
                <Briefcase size={18} weight="regular" />
                <span className="font-mono text-xs font-medium">Trilha 01</span>
              </div>
              <h2 className="font-serif text-xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
                Psicologia do Trabalho
              </h2>
              <p className="text-xs text-[#525D6A] dark:text-[#9BA6B4]">
                {workModules.length} módulos e {workTopicCount}{' '}
                {workTopicCount === 1 ? 'tópico publicado' : 'tópicos publicados'}
              </p>
            </div>
            <ArrowRight
              size={18}
              weight="regular"
              className="text-[#525D6A] dark:text-[#9BA6B4] shrink-0 mt-1"
            />
          </Link>

          <Link
            to="/disciplina/raca-genero-sexualidade"
            className="min-h-[44px] p-5 flex items-start justify-between gap-4 hover:bg-[#F8F9FA] dark:hover:bg-[#0E1116]/60 transition-colors rounded-b-xl"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#0F766E] dark:text-[#2DD4BF]">
                <UsersThree size={18} weight="regular" />
                <span className="font-mono text-xs font-medium">Trilha 02</span>
              </div>
              <h2 className="font-serif text-xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
                Raça, Gênero e Sexualidade
              </h2>
              <p className="text-xs text-[#525D6A] dark:text-[#9BA6B4]">
                {rgsModules.length} módulos e {rgsTopicCount}{' '}
                {rgsTopicCount === 1 ? 'tópico publicado' : 'tópicos publicados'}
              </p>
            </div>
            <ArrowRight
              size={18}
              weight="regular"
              className="text-[#525D6A] dark:text-[#9BA6B4] shrink-0 mt-1"
            />
          </Link>
        </div>
      </section>

      <section aria-label="Mapa de módulos" className="space-y-6">
        <div className="space-y-1">
          <h2 className="font-serif text-2xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
            Módulos curriculares
          </h2>
          <p className="text-sm text-[#525D6A] dark:text-[#9BA6B4]">
            Organização em quatro blocos temáticos por disciplina com fontes primárias e exercícios de fixação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-5 space-y-4">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#E2E6EC] dark:border-[#262C36]">
              <h3 className="font-serif text-lg font-semibold text-[#111418] dark:text-[#EDF1F5]">
                Psicologia do Trabalho
              </h3>
              <Link
                to="/disciplina/trabalho"
                className="min-h-[44px] px-2.5 inline-flex items-center text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF] hover:underline"
              >
                Abrir trilha
              </Link>
            </div>

            <ul className="space-y-3">
              {workModules.map((mod) => {
                const firstTopic = mod.topics[0];
                return (
                  <li key={mod.id} className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF]">
                        {mod.code}
                      </span>
                      <span className="text-xs text-[#525D6A] dark:text-[#9BA6B4]">
                        {mod.topics.length} {mod.topics.length === 1 ? 'tópico' : 'tópicos'}
                      </span>
                    </div>
                    {firstTopic ? (
                      <Link
                        to={`/topico/${firstTopic.id}`}
                        className="min-h-[44px] flex items-center text-sm font-medium text-[#111418] dark:text-[#EDF1F5] hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors"
                      >
                        {mod.title}
                      </Link>
                    ) : (
                      <p className="text-sm font-medium text-[#525D6A] dark:text-[#9BA6B4]">
                        {mod.title}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-xl border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] p-5 space-y-4">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#E2E6EC] dark:border-[#262C36]">
              <h3 className="font-serif text-lg font-semibold text-[#111418] dark:text-[#EDF1F5]">
                Raça, Gênero e Sexualidade
              </h3>
              <Link
                to="/disciplina/raca-genero-sexualidade"
                className="min-h-[44px] px-2.5 inline-flex items-center text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF] hover:underline"
              >
                Abrir trilha
              </Link>
            </div>

            <ul className="space-y-3">
              {rgsModules.map((mod) => {
                const firstTopic = mod.topics[0];
                return (
                  <li key={mod.id} className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF]">
                        {mod.code}
                      </span>
                      <span className="text-xs text-[#525D6A] dark:text-[#9BA6B4]">
                        {mod.topics.length} {mod.topics.length === 1 ? 'tópico' : 'tópicos'}
                      </span>
                    </div>
                    {firstTopic ? (
                      <Link
                        to={`/topico/${firstTopic.id}`}
                        className="min-h-[44px] flex items-center text-sm font-medium text-[#111418] dark:text-[#EDF1F5] hover:text-[#0F766E] dark:hover:text-[#2DD4BF] transition-colors"
                      >
                        {mod.title}
                      </Link>
                    ) : (
                      <p className="text-sm font-medium text-[#525D6A] dark:text-[#9BA6B4]">
                        {mod.title}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {transversalTags.length > 0 && (
        <section aria-label="Eixos transversais" className="space-y-3 pt-2 border-t border-[#E2E6EC] dark:border-[#262C36]">
          <div className="flex items-center gap-2">
            <BookOpen size={18} weight="regular" className="text-[#0F766E] dark:text-[#2DD4BF]" />
            <h2 className="font-serif text-xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
              Temas transversais entre as trilhas
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {transversalTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onOpenSearchWithTag(tag)}
                className="min-h-[44px] px-3.5 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF] hover:border-[#0F766E] dark:hover:border-[#2DD4BF] cursor-pointer transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
