import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowSquareOut, BookBookmark, X } from '@phosphor-icons/react';
import type { SourceCitation } from '../types/content.ts';

interface SourceDrawerProps {
  source: SourceCitation | null;
  onClose: () => void;
  onJumpToSource?: (sourceId: string) => void;
}

export function SourceDrawer({ source, onClose, onJumpToSource }: SourceDrawerProps) {
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!source) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 20);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [source, onClose]);

  return (
    <AnimatePresence>
      {source && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="source-drawer-title"
          className="fixed inset-0 z-50"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0E1116]/50 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            transition={{ duration: 0.2 }}
            style={{
              paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))',
            }}
            className="fixed inset-x-0 bottom-0 z-10 rounded-t-2xl max-h-[85dvh] overflow-y-auto p-5 bg-[#FFFFFF] dark:bg-[#161B22] border-t border-[#E2E6EC] dark:border-[#262C36] md:inset-y-0 md:right-0 md:left-auto md:w-[420px] md:max-h-none md:rounded-none md:rounded-l-2xl md:border-t-0 md:border-l md:p-6"
          >
            <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#E2E6EC] dark:border-[#262C36]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookBookmark
                    size={18}
                    weight="regular"
                    className="text-[#0F766E] dark:text-[#2DD4BF]"
                  />
                  <span className="text-xs font-medium text-[#525D6A] dark:text-[#9BA6B4]">
                    Ponto na Fonte [{source.id}]
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[#F8F9FA] dark:bg-[#0E1116] text-[#525D6A] dark:text-[#9BA6B4] border border-[#E2E6EC] dark:border-[#262C36]">
                    {source.kind === 'norma' ? 'Norma' : 'Obra'}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#0F766E] dark:text-[#2DD4BF]">
                  {source.shortLabel}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Fechar painel da fonte"
                className="min-w-[44px] min-h-[44px] -mt-1 -mr-1 rounded-lg inline-flex items-center justify-center text-[#525D6A] dark:text-[#9BA6B4] hover:text-[#111418] dark:hover:text-[#EDF1F5] hover:bg-[#F8F9FA] dark:hover:bg-[#0E1116] cursor-pointer shrink-0"
              >
                <X size={20} weight="regular" />
              </button>
            </div>

            <div className="pt-4 space-y-4">
              <div className="space-y-1">
                <h2
                  id="source-drawer-title"
                  className="font-serif text-xl font-semibold leading-snug text-[#111418] dark:text-[#EDF1F5]"
                >
                  {source.work}
                </h2>
                <p className="text-sm text-[#525D6A] dark:text-[#9BA6B4]">
                  {source.author} ({source.year})
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#F8F9FA] dark:bg-[#0E1116] border border-[#E2E6EC] dark:border-[#262C36] space-y-1">
                <span className="block text-xs font-medium text-[#525D6A] dark:text-[#9BA6B4]">
                  Localização específica
                </span>
                <p className="text-sm font-medium text-[#111418] dark:text-[#EDF1F5]">
                  {source.specificPoint}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="block text-xs font-medium text-[#525D6A] dark:text-[#9BA6B4]">
                  Síntese do ponto citado
                </span>
                <p className="text-sm leading-relaxed text-[#111418] dark:text-[#EDF1F5]">
                  {source.excerptNote}
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                {onJumpToSource && (
                  <button
                    type="button"
                    onClick={() => {
                      const targetId = source.id;
                      onClose();
                      onJumpToSource(targetId);
                    }}
                    className="min-h-[44px] w-full px-4 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] bg-[#F8F9FA] dark:bg-[#0E1116] text-sm font-medium text-[#111418] dark:text-[#EDF1F5] inline-flex items-center justify-center gap-2 hover:border-[#0F766E] dark:hover:border-[#2DD4BF] cursor-pointer"
                  >
                    <ArrowDown size={16} weight="regular" />
                    <span>Ir para Fontes Específicas [{source.id}]</span>
                  </button>
                )}

                {source.publicUrl && (
                  <a
                    href={source.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] w-full px-4 rounded-lg bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-[#0E1116] text-sm font-medium inline-flex items-center justify-center gap-2"
                  >
                    <span>Consultar documento público</span>
                    <ArrowSquareOut size={16} weight="regular" />
                  </a>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
