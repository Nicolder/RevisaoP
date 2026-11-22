import { useEffect, useState } from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { Layout } from './components/Layout.tsx';
import { CommandSearch } from './components/CommandSearch.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { DisciplinePage } from './pages/DisciplinePage.tsx';
import { TopicPage } from './pages/TopicPage.tsx';
import { IndexPage } from './pages/IndexPage.tsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFoundPage() {
  return (
    <div className="py-12 space-y-4">
      <h1 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#EDF1F5]">
        Página não encontrada
      </h1>
      <p className="text-sm text-[#525D6A] dark:text-[#9BA6B4]">
        O endereço acessado não existe neste portal de revisão.
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

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInitialTag, setSearchInitialTag] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchInitialTag(null);
        setSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openSearch = () => {
    setSearchInitialTag(null);
    setSearchOpen(true);
  };

  const openSearchWithTag = (tag: string) => {
    setSearchInitialTag(tag);
    setSearchOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <ScrollToTop />
        <Layout onOpenSearch={openSearch}>
          <Routes>
            <Route path="/" element={<HomePage onOpenSearchWithTag={openSearchWithTag} />} />
            <Route path="/disciplina/:disciplineId" element={<DisciplinePage />} />
            <Route path="/topico/:topicId" element={<TopicPage />} />
            <Route path="/indice" element={<IndexPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
        <CommandSearch
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          initialTag={searchInitialTag}
        />
      </HashRouter>
    </MotionConfig>
  );
}
