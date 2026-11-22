import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Briefcase,
  House,
  ListBullets,
  MagnifyingGlass,
  Monitor,
  Moon,
  Sun,
  UsersThree,
} from '@phosphor-icons/react';

type ThemePreference = 'light' | 'dark' | 'system';

interface LayoutProps {
  children: ReactNode;
  onOpenSearch: () => void;
}

function readStoredTheme(): ThemePreference {
  try {
    const value = localStorage.getItem('theme');
    if (value === 'light' || value === 'dark' || value === 'system') {
      return value;
    }
  } catch {
    // Ignore storage access errors
  }
  return 'system';
}

function applyThemePreference(pref: ThemePreference) {
  const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = pref === 'dark' || (pref === 'system' && prefersDark);
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
}

const NEXT_THEME: Record<ThemePreference, ThemePreference> = {
  light: 'dark',
  dark: 'system',
  system: 'light',
};

const THEME_LABELS: Record<ThemePreference, string> = {
  light: 'Claro',
  dark: 'Escuro',
  system: 'Sistema',
};

export function Layout({ children, onOpenSearch }: LayoutProps) {
  const location = useLocation();
  const [theme, setTheme] = useState<ThemePreference>(readStoredTheme);

  useEffect(() => {
    applyThemePreference(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage access errors
    }

    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => applyThemePreference('system');
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => NEXT_THEME[prev]);
  };

  const pathname = location.pathname;
  const isHome = pathname === '/';
  const isTrabalho = pathname.startsWith('/disciplina/trabalho') || pathname.startsWith('/topico/t');
  const isRgs =
    pathname.startsWith('/disciplina/raca-genero-sexualidade') ||
    pathname.startsWith('/topico/r');
  const isIndice = pathname.startsWith('/indice');

  const ThemeIcon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F8F9FA] text-[#111418] dark:bg-[#0E1116] dark:text-[#EDF1F5]">
      <header className="sticky top-0 z-30 h-14 border-b border-[#E2E6EC] dark:border-[#262C36] bg-[#F8F9FA]/95 dark:bg-[#0E1116]/95 backdrop-blur-sm">
        <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-2">
          <Link
            to="/"
            className="min-h-[44px] inline-flex items-center gap-2 font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#111418] dark:text-[#EDF1F5] whitespace-nowrap"
          >
            <BookOpen size={20} weight="regular" className="text-[#0F766E] dark:text-[#2DD4BF] shrink-0" />
            <span>Revisão Psicologia</span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-1 whitespace-nowrap">
            <Link
              to="/"
              className={`min-h-[44px] px-3 rounded-lg inline-flex items-center text-sm transition-colors ${
                isHome
                  ? 'text-[#0F766E] dark:text-[#2DD4BF] font-semibold bg-[#0F766E]/10 dark:bg-[#2DD4BF]/10'
                  : 'text-[#525D6A] dark:text-[#9BA6B4] hover:text-[#111418] dark:hover:text-[#EDF1F5]'
              }`}
            >
              Início
            </Link>
            <Link
              to="/disciplina/trabalho"
              className={`min-h-[44px] px-3 rounded-lg inline-flex items-center text-sm transition-colors ${
                isTrabalho
                  ? 'text-[#0F766E] dark:text-[#2DD4BF] font-semibold bg-[#0F766E]/10 dark:bg-[#2DD4BF]/10'
                  : 'text-[#525D6A] dark:text-[#9BA6B4] hover:text-[#111418] dark:hover:text-[#EDF1F5]'
              }`}
            >
              Trabalho
            </Link>
            <Link
              to="/disciplina/raca-genero-sexualidade"
              className={`min-h-[44px] px-3 rounded-lg inline-flex items-center text-sm transition-colors ${
                isRgs
                  ? 'text-[#0F766E] dark:text-[#2DD4BF] font-semibold bg-[#0F766E]/10 dark:bg-[#2DD4BF]/10'
                  : 'text-[#525D6A] dark:text-[#9BA6B4] hover:text-[#111418] dark:hover:text-[#EDF1F5]'
              }`}
            >
              Raça e Gênero
            </Link>
            <Link
              to="/indice"
              className={`min-h-[44px] px-3 rounded-lg inline-flex items-center text-sm transition-colors ${
                isIndice
                  ? 'text-[#0F766E] dark:text-[#2DD4BF] font-semibold bg-[#0F766E]/10 dark:bg-[#2DD4BF]/10'
                  : 'text-[#525D6A] dark:text-[#9BA6B4] hover:text-[#111418] dark:hover:text-[#EDF1F5]'
              }`}
            >
              Índice A-Z
            </Link>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Abrir busca global"
              className="min-h-[44px] min-w-[44px] px-3 rounded-lg border border-[#88929E]/60 dark:border-[#6E7681]/60 bg-[#FFFFFF] dark:bg-[#161B22] text-sm text-[#111418] dark:text-[#EDF1F5] inline-flex items-center justify-center gap-2 hover:border-[#0F766E] dark:hover:border-[#2DD4BF] transition-colors cursor-pointer"
            >
              <MagnifyingGlass size={18} weight="regular" />
              <span className="hidden sm:inline">Buscar</span>
              <kbd className="hidden lg:inline-block font-mono text-xs px-1.5 py-0.5 rounded bg-[#F8F9FA] dark:bg-[#0E1116] text-[#525D6A] dark:text-[#9BA6B4] border border-[#E2E6EC] dark:border-[#262C36]">
                Ctrl+K
              </kbd>
            </button>

            <button
              type="button"
              onClick={cycleTheme}
              aria-label={`Alternar tema (atual: ${THEME_LABELS[theme]})`}
              title={`Tema: ${THEME_LABELS[theme]}`}
              className="min-h-[44px] min-w-[44px] px-2.5 rounded-lg border border-[#E2E6EC] dark:border-[#262C36] bg-[#FFFFFF] dark:bg-[#161B22] text-sm text-[#111418] dark:text-[#EDF1F5] inline-flex items-center justify-center gap-1.5 hover:border-[#0F766E] dark:hover:border-[#2DD4BF] transition-colors cursor-pointer"
            >
              <ThemeIcon size={18} weight="regular" />
              <span className="hidden sm:inline text-xs font-medium">{THEME_LABELS[theme]}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-6 pb-24 md:pt-8 md:pb-12">
        {children}
      </main>

      <footer className="hidden md:block border-t border-[#E2E6EC] dark:border-[#262C36] py-6">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-xs text-[#525D6A] dark:text-[#9BA6B4]">
          <span>Portal estático de revisão acadêmica em Psicologia</span>
          <span>Psicologia do Trabalho e Raça, Gênero e Sexualidade</span>
        </div>
      </footer>

      <nav
        aria-label="Navegação inferior móvel"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FFFFFF]/95 dark:bg-[#161B22]/95 backdrop-blur-sm border-t border-[#E2E6EC] dark:border-[#262C36]"
      >
        <div className="grid grid-cols-5 h-16">
          <Link
            to="/"
            className={`min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-0.5 text-[11px] ${
              isHome
                ? 'text-[#0F766E] dark:text-[#2DD4BF] font-semibold'
                : 'text-[#525D6A] dark:text-[#9BA6B4]'
            }`}
          >
            <House size={20} weight={isHome ? 'fill' : 'regular'} />
            <span>Início</span>
          </Link>

          <Link
            to="/disciplina/trabalho"
            className={`min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-0.5 text-[11px] ${
              isTrabalho
                ? 'text-[#0F766E] dark:text-[#2DD4BF] font-semibold'
                : 'text-[#525D6A] dark:text-[#9BA6B4]'
            }`}
          >
            <Briefcase size={20} weight={isTrabalho ? 'fill' : 'regular'} />
            <span>Trabalho</span>
          </Link>

          <Link
            to="/disciplina/raca-genero-sexualidade"
            className={`min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-0.5 text-[11px] ${
              isRgs
                ? 'text-[#0F766E] dark:text-[#2DD4BF] font-semibold'
                : 'text-[#525D6A] dark:text-[#9BA6B4]'
            }`}
          >
            <UsersThree size={20} weight={isRgs ? 'fill' : 'regular'} />
            <span>Raça/Gênero</span>
          </Link>

          <button
            type="button"
            onClick={onOpenSearch}
            className="min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-0.5 text-[11px] text-[#525D6A] dark:text-[#9BA6B4] cursor-pointer"
          >
            <MagnifyingGlass size={20} weight="regular" />
            <span>Buscar</span>
          </button>

          <Link
            to="/indice"
            className={`min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-0.5 text-[11px] ${
              isIndice
                ? 'text-[#0F766E] dark:text-[#2DD4BF] font-semibold'
                : 'text-[#525D6A] dark:text-[#9BA6B4]'
            }`}
          >
            <ListBullets size={20} weight={isIndice ? 'fill' : 'regular'} />
            <span>Índice</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
