import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  MagnifyingGlass,
  Tag,
  X,
} from '@phosphor-icons/react';
import type { DisciplineId } from '../types/content.ts';
import {
  filterSearchEntries,
  transversalTags,
  type SearchEntry,
  type SearchItemType,
} from '../data/searchIndex.ts';

interface CommandSearchProps {
  isOpen: boolean;
  onClose: () => void;
  initialTag?: string | null;
}

const TYPE_LABELS: Record<SearchItemType, string> = {
  topico: 'Tópico',
  glossario: 'Glossário',
  fonte: 'Autor/Norma',
  tag: 'Tag',
};

const DISCIPLINE_OPTIONS: Array<{ value: DisciplineId | 'all'; label: string }> = [
  { value: 'all', label: 'Todas' },
  { value: 'trabalho', label: 'Trabalho' },
  { value: 'raca-genero-sexualidade', label: 'Raça e Gênero' },
];

const TYPE_OPTIONS: Array<{ value: SearchItemType | 'all'; label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'topico', label: 'Tópico' },
  { value: 'glossario', label: 'Glossário' },
  { value: 'fonte', label: 'Autor/Norma' },
  { value: 'tag', label: 'Tag' },
];

export function CommandSearch({ isOpen, onClose, initialTag = null }: CommandSearchProps) {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [query, setQuery] = useState('');
  const [disciplineFilter, setDisciplineFilter] = useState<DisciplineId | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<SearchItemType | 'all'>('all');
  const [tagFilter, setTagFilter] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    setQuery('');
    setDisciplineFilter('all');
    setTypeFilter('all');
    setTagFilter(initialTag ?? '');
    setActiveIndex(0);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 20);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, initialTag]);

  const results = useMemo(
    () => filterSearchEntries(query, disciplineFilter, typeFilter, tagFilter),
    [query, disciplineFilter, typeFilter, tagFilter]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query, disciplineFilter, typeFilter, tagFilter]);

  useEffect(() => {
    itemRefs.current[activeIndex]?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const handleSelectEntry = (entry: SearchEntry) => {
    if (entry.type === 'tag') {
      setTagFilter(entry.title);
      setQuery('');
      if (typeFilter === 'tag') {
        setTypeFilter('all');
      }
      inputRef.current?.focus();
      return;
    }

    navigate(entry.route);
    onClose();
  };

  const clearFilters = () => {
    setQuery('');
    setDisciplineFilter('all');
    setTypeFilter('all');
    setTagFilter('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }

    if (results.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (event.key === 'Enter') {
      const selected = results[activeIndex];
      if (selected) {
        event.preventDefault();
        handleSelectEntry(selected);
      }
    }
  };

  const hasActiveFilters =
    query.trim().length > 0 ||
    disciplineFilter !== 'all' ||
    typeFilter !== 'all' ||
    tagFilter.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Busca global no portal"
          onKeyDown={handleKeyDown}
          className="fixed inset-0 z-50 flex flex-col md:items-center md:justify-start md:pt-16 md:px-4"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={onClose}
            className="hidden md:block fixed inset-0 bg-[#0E1116]/50 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: 0.18 }}
            style={{
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
            className="relative z-10 h-[100dvh] md:h-auto md:max-h-[80dvh] w-full md:max-w-2xl flex flex-col bg-[#F8F9FA] md:bg-[#FFFFFF] dark:bg-[#0E1116] md:dark:bg-[#161B22] md:rounded-xl md:border md:border-[#E2E6EC] md:dark:border-[#262C36] md:shadow-lg overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22]">
              <MagnifyingGlass
                size={20}
                weight="regular"
                className="text-[#525D6A] dark:text-[#9BA6B4] shrink-0"
              />
              <label htmlFor="command-search-input" className="sr-only">
                Buscar tópicos, conceitos, autores, normas ou tags
              </label>
              <input
                ref={inputRef}
                id="command-search-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar conceitos, autores, resoluções ou tópicos..."
                className="flex-1 min-h-[44px] bg-transparent text-base text-[#111418] dark:text-[#EDF1F5] placeholder:text-[#5E6875] dark:placeholder:text-[#8B949E] focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar busca"
                className="min-w-[44px] min-h-[44px] rounded-lg inline-flex items-center justify-center text-[#525D6A] dark:text-[#9BA6B4] hover:text-[#111418] dark:hover:text-[#EDF1F5] hover:bg-[#F8F9FA] dark:hover:bg-[#0E1116] cursor-pointer"
              >
                <X size={20} weight="regular" />
              </button>
            </div>

            <div className="px-4 py-3 space-y-2.5 border-b border-[#E2E6EC] dark:border-[#262C36] bg-[#F8F9FA] dark:bg-[#0E1116]">
              <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filtrar por disciplina">
                {DISCIPLINE_OPTIONS.map((opt) => {
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

              <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filtrar por tipo">
                {TYPE_OPTIONS.map((opt) => {
                  const active = typeFilter === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setTypeFilter(opt.value)}
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

              {(transversalTags.length > 0 || tagFilter) && (
                <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Tags transversais">
                  <span className="inline-flex items-center gap-1 text-xs text-[#525D6A] dark:text-[#9BA6B4] mr-1">
                    <Tag size={14} weight="regular" />
                    <span>Tags transversais:</span>
                  </span>
                  {transversalTags.map((tag) => {
                    const active = tagFilter === tag;
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setTagFilter(active ? '' : tag)}
                        className={`min-h-[44px] px-3 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116]'
                            : 'bg-[#FFFFFF] dark:bg-[#161B22] text-[#0F766E] dark:text-[#2DD4BF] border border-[#E2E6EC] dark:border-[#262C36]'
                        }`}
                      >
                        #{tag}
                      </button>
                    );
                  })}
                  {tagFilter && !transversalTags.includes(tagFilter) && (
                    <button
                      type="button"
                      onClick={() => setTagFilter('')}
                      className="min-h-[44px] px-3 rounded-lg text-xs font-mono inline-flex items-center gap-1.5 bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116] cursor-pointer"
                    >
                      <span>#{tagFilter}</span>
                      <X size={14} weight="bold" />
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 bg-[#FFFFFF] dark:bg-[#161B22]">
              {!hasActiveFilters && (
                <p className="px-2 py-1.5 text-xs text-[#525D6A] dark:text-[#9BA6B4]">
                  Exibindo {results.length} itens indexados. Digite sem acentos ou use as setas para navegar.
                </p>
              )}

              {results.length === 0 ? (
                <div className="py-10 px-4 text-center space-y-4">
                  <p className="text-sm text-[#525D6A] dark:text-[#9BA6B4]">
                    Nenhum resultado encontrado para os filtros atuais.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="min-h-[44px] px-4 rounded-lg bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116] text-sm font-medium cursor-pointer"
                  >
                    Limpar filtros
                  </button>
                </div>
              ) : (
                results.map((entry, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={entry.id}
                      ref={(el) => {
                        itemRefs.current[idx] = el;
                      }}
                      type="button"
                      onClick={() => handleSelectEntry(entry)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full min-h-[44px] text-left p-3 rounded-lg border transition-colors flex items-start justify-between gap-3 cursor-pointer ${
                        isActive
                          ? 'border-[#0F766E] dark:border-[#2DD4BF] bg-[#0F766E]/5 dark:bg-[#2DD4BF]/10'
                          : 'border-transparent hover:border-[#E2E6EC] dark:hover:border-[#262C36]'
                      }`}
                    >
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#F8F9FA] dark:bg-[#0E1116] text-[#0F766E] dark:text-[#2DD4BF] border border-[#E2E6EC] dark:border-[#262C36]">
                            {TYPE_LABELS[entry.type]}
                          </span>
                          <span className="text-sm font-semibold text-[#111418] dark:text-[#EDF1F5]">
                            {entry.title}
                          </span>
                        </div>
                        <p className="text-xs text-[#525D6A] dark:text-[#9BA6B4] line-clamp-2">
                          {entry.subtitle}
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        weight="regular"
                        className="text-[#525D6A] dark:text-[#9BA6B4] shrink-0 mt-1"
                      />
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
