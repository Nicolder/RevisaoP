import { Fragment, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BookOpen, X } from '@phosphor-icons/react';
import type { GlossaryTerm, SourceCitation } from '../types/content.ts';
import { glossaryById } from '../data/glossary.ts';

interface CitedTextProps {
  text: string;
  sources: SourceCitation[];
  onSelectSource: (source: SourceCitation) => void;
}

type TextToken =
  | { kind: 'text'; value: string }
  | { kind: 'glossary'; term: GlossaryTerm; display: string }
  | { kind: 'citation'; source: SourceCitation };

const TOKEN_PATTERN = /(\{\{([^}]+)\}\}|\[(\d+)\])/g;

function tokenizeProse(text: string, sources: SourceCitation[]): TextToken[] {
  const sourceMap = new Map(sources.map((s) => [s.id, s]));
  const tokens: TextToken[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(TOKEN_PATTERN)) {
    const matchIndex = match.index ?? 0;
    if (matchIndex > lastIndex) {
      tokens.push({ kind: 'text', value: text.slice(lastIndex, matchIndex) });
    }

    const fullMatch = match[0];
    const glossaryPayload = match[2];
    const citationId = match[3];

    if (glossaryPayload) {
      const pipeIdx = glossaryPayload.indexOf('|');
      const rawId = pipeIdx >= 0 ? glossaryPayload.slice(0, pipeIdx) : glossaryPayload;
      const rawDisplay = pipeIdx >= 0 ? glossaryPayload.slice(pipeIdx + 1) : '';
      const id = rawId.trim();
      const term = glossaryById[id];

      if (term) {
        tokens.push({
          kind: 'glossary',
          term,
          display: rawDisplay.trim() || term.term,
        });
      } else {
        tokens.push({ kind: 'text', value: rawDisplay.trim() || id });
      }
    } else if (citationId) {
      const source = sourceMap.get(citationId);
      if (source) {
        tokens.push({ kind: 'citation', source });
      } else {
        tokens.push({ kind: 'text', value: fullMatch });
      }
    }

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    tokens.push({ kind: 'text', value: text.slice(lastIndex) });
  }

  return tokens;
}

const DISCIPLINE_BADGE: Record<GlossaryTerm['discipline'], string> = {
  trabalho: 'Psicologia do Trabalho',
  'raca-genero-sexualidade': 'Raça, Gênero e Sexualidade',
  transversal: 'Transversal',
};

export function CitedText({ text, sources, onSelectSource }: CitedTextProps) {
  const reduceMotion = useReducedMotion();
  const [activeTermId, setActiveTermId] = useState<string | null>(null);

  const tokens = useMemo(() => tokenizeProse(text, sources), [text, sources]);
  const activeTerm = activeTermId ? glossaryById[activeTermId] : undefined;

  return (
    <span className="block">
      <span>
        {tokens.map((token, idx) => {
          if (token.kind === 'text') {
            return <Fragment key={idx}>{token.value}</Fragment>;
          }

          if (token.kind === 'glossary') {
            const isOpen = activeTermId === token.term.id;
            return (
              <button
                key={`${token.term.id}-${idx}`}
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setActiveTermId((prev) => (prev === token.term.id ? null : token.term.id))
                }
                className="relative z-10 inline border-b border-dotted border-[#0F766E] dark:border-[#2DD4BF] text-[#0F766E] dark:text-[#2DD4BF] font-medium py-2.5 -my-2.5 px-1 -mx-1 cursor-pointer hover:bg-[#0F766E]/10 dark:hover:bg-[#2DD4BF]/10 rounded-xs transition-colors"
              >
                {token.display}
              </button>
            );
          }

          return (
            <button
              key={`cit-${token.source.id}-${idx}`}
              type="button"
              onClick={() => onSelectSource(token.source)}
              aria-label={`Abrir Ponto na Fonte ${token.source.id}: ${token.source.shortLabel}`}
              className="relative z-0 inline-flex items-center justify-center mx-1 px-1.5 py-0.5 rounded-md font-mono text-xs font-medium text-[#0F766E] dark:text-[#2DD4BF] bg-[#0F766E]/10 dark:bg-[#2DD4BF]/15 hover:bg-[#0F766E]/20 dark:hover:bg-[#2DD4BF]/25 focus-visible:z-20 after:content-[''] after:absolute after:-inset-y-3.5 after:-inset-x-2 cursor-pointer transition-colors"
            >
              [{token.source.id}]
            </button>
          );
        })}
      </span>

      <AnimatePresence>
        {activeTerm && (
          <motion.span
            role="region"
            aria-label={`Definição de ${activeTerm.term}`}
            initial={reduceMotion ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.16 }}
            className="block mt-3 p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#161B22] border border-[#E2E6EC] dark:border-[#262C36] text-left"
          >
            <span className="flex items-start justify-between gap-3">
              <span className="space-y-1">
                <span className="flex flex-wrap items-center gap-2">
                  <BookOpen
                    size={16}
                    weight="regular"
                    className="text-[#0F766E] dark:text-[#2DD4BF]"
                  />
                  <strong className="text-sm font-semibold text-[#111418] dark:text-[#EDF1F5]">
                    {activeTerm.term}
                  </strong>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F8F9FA] dark:bg-[#0E1116] text-[#525D6A] dark:text-[#9BA6B4] border border-[#E2E6EC] dark:border-[#262C36]">
                    {DISCIPLINE_BADGE[activeTerm.discipline]}
                  </span>
                </span>
              </span>

              <button
                type="button"
                onClick={() => setActiveTermId(null)}
                aria-label="Fechar definição"
                className="min-w-[44px] min-h-[44px] -mt-2 -mr-2 rounded-lg inline-flex items-center justify-center text-[#525D6A] dark:text-[#9BA6B4] hover:text-[#111418] dark:hover:text-[#EDF1F5] cursor-pointer shrink-0"
              >
                <X size={18} weight="regular" />
              </button>
            </span>

            <span className="block mt-2 text-sm leading-relaxed text-[#111418] dark:text-[#EDF1F5]">
              {activeTerm.definition}
            </span>

            {activeTerm.sourceNote && (
              <span className="block mt-2 text-xs text-[#525D6A] dark:text-[#9BA6B4]">
                Referência: {activeTerm.sourceNote}
              </span>
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
