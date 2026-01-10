const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-[var(--color-ide-border)] bg-[var(--color-ide-panel)]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-ide-text-dim)]">
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-ide-accent-green)]">{'>'}</span>
            <span>Built with React + Tailwind CSS</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-[var(--color-ide-text-dim)]">
              © {new Date().getFullYear()} Krish Shah
            </span>
            <span className="hidden md:inline text-[var(--color-ide-border)]">|</span>
            <span className="hidden md:inline">
              <kbd className="px-2 py-0.5 bg-[var(--color-ide-sidebar)] border border-[var(--color-ide-border)] rounded text-xs">
                Ctrl
              </kbd>
              {' + '}
              <kbd className="px-2 py-0.5 bg-[var(--color-ide-sidebar)] border border-[var(--color-ide-border)] rounded text-xs">
                `
              </kbd>
              {' for terminal'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
