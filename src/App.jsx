import { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Handle keyboard shortcut for terminal
  const handleKeyDown = useCallback((e) => {
    // Ctrl + ` or Cmd + ` to toggle terminal
    if ((e.ctrlKey || e.metaKey) && e.key === '`') {
      e.preventDefault();
      setTerminalOpen((prev) => !prev);
    }
    // Escape to close terminal
    if (e.key === 'Escape' && terminalOpen) {
      setTerminalOpen(false);
    }
  }, [terminalOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'experience', 'projects'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-ide-bg)]">
      {/* IDE Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onTerminalToggle={() => setTerminalOpen((prev) => !prev)} 
      />

      {/* Main content */}
      <main className="ml-14 md:ml-16">
        {/* Tab bar */}
        <div className="sticky top-0 z-30 bg-[var(--color-ide-sidebar)] border-b border-[var(--color-ide-border)]">
          <div className="flex items-center">
            {/* portfolio.tsx tab */}
            <a
              href="#hero"
              className={`flex items-center gap-2 px-4 py-2 border-r border-[var(--color-ide-border)] cursor-pointer transition-colors ${
                activeSection === 'hero'
                  ? 'bg-[var(--color-ide-bg)] text-[var(--color-ide-text)] hover:text-[var(--color-ide-accent)]'
                  : 'text-[var(--color-ide-text-dim)] hover:bg-[var(--color-ide-panel)]/50 hover:text-[var(--color-ide-text)]'
              }`}
            >
              <svg className={`w-4 h-4 ${activeSection === 'hero' ? 'text-[var(--color-ide-accent)]' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <span className="text-sm">portfolio.tsx</span>
              <span className="ml-2 text-[var(--color-ide-text-dim)] hover:text-[var(--color-ide-text)]">×</span>
            </a>
            
            {/* README.md tab */}
            <a
              href="#experience"
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors ${
                activeSection === 'experience' || activeSection === 'projects'
                  ? 'bg-[var(--color-ide-bg)] text-[var(--color-ide-text)] hover:text-[var(--color-ide-accent)]'
                  : 'text-[var(--color-ide-text-dim)] hover:bg-[var(--color-ide-panel)]/50 hover:text-[var(--color-ide-text)]'
              }`}
            >
              <svg className={`w-4 h-4 ${activeSection === 'experience' || activeSection === 'projects' ? 'text-[var(--color-ide-accent)]' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span className="text-sm">README.md</span>
            </a>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="sticky top-[41px] z-20 px-4 py-2 bg-[var(--color-ide-bg)] border-b border-[var(--color-ide-border)] text-sm">
          <div className="flex items-center gap-2 text-[var(--color-ide-text-dim)]">
            <span>src</span>
            <span className="text-[var(--color-ide-border)]">/</span>
            <span>pages</span>
            <span className="text-[var(--color-ide-border)]">/</span>
            <span className="text-[var(--color-ide-text)]">portfolio.tsx</span>
          </div>
        </div>

        {/* Page content with line numbers effect */}
        <div className="relative">
          {/* Subtle line numbers gutter */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-[var(--color-ide-bg)] border-r border-[var(--color-ide-border)]/30 hidden lg:block">
            <div className="sticky top-24 py-4 text-right pr-3 text-[var(--color-ide-text-dim)]/30 text-xs font-mono leading-6">
              {Array.from({ length: 50 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="lg:ml-12">
            <Hero />
            <Experience />
            <Projects />
            <Footer />
          </div>
        </div>
      </main>

      {/* Terminal Easter Egg */}
      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onMinimize={() => setTerminalOpen(false)}
      />

      {/* Terminal hint toast */}
      {!terminalOpen && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 z-40">
          <button
            onClick={() => setTerminalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-ide-panel)] border border-[var(--color-ide-border)] rounded-lg text-sm text-[var(--color-ide-text-dim)] hover:text-[var(--color-ide-text)] hover:border-[var(--color-ide-accent)] transition-colors shadow-lg"
          >
            <span className="text-[var(--color-ide-accent)]">$</span>
            <span>Open Terminal</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 bg-[var(--color-ide-sidebar)] border border-[var(--color-ide-border)] rounded text-xs ml-2">
              Ctrl+`
            </kbd>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
