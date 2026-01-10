import { Home, Briefcase, FolderGit2, Terminal } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'projects', icon: FolderGit2, label: 'Projects' },
];

const Sidebar = ({ activeSection, onTerminalToggle }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-14 md:w-16 bg-[var(--color-ide-sidebar)] border-r border-[var(--color-ide-border)] z-40 flex flex-col">
      {/* Logo */}
      <div className="p-3 md:p-4 border-b border-[var(--color-ide-border)]">
        <div className="w-8 h-8 rounded bg-[var(--color-ide-accent)] flex items-center justify-center text-[var(--color-ide-panel)] font-bold text-lg">
          K
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-2">
          {navItems.map(({ id, icon: Icon, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex items-center justify-center p-3 md:p-4 transition-colors relative group ${
                  activeSection === id
                    ? 'text-[var(--color-ide-accent)] bg-[var(--color-ide-panel)]'
                    : 'text-[var(--color-ide-text-dim)] hover:text-[var(--color-ide-text)] hover:bg-[var(--color-ide-panel)]/50'
                }`}
              >
                {activeSection === id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-[var(--color-ide-accent)]"></div>
                )}
                <Icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <span className="absolute left-full ml-2 px-2 py-1 bg-[var(--color-ide-panel)] border border-[var(--color-ide-border)] rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Terminal toggle */}
      <div className="p-3 md:p-4 border-t border-[var(--color-ide-border)]">
        <button
          onClick={onTerminalToggle}
          className="w-full flex items-center justify-center p-2 text-[var(--color-ide-text-dim)] hover:text-[var(--color-ide-accent)] hover:bg-[var(--color-ide-panel)] rounded transition-colors group relative"
          title="Toggle Terminal (Easter Egg!)"
        >
          <Terminal className="w-5 h-5" />
          
          {/* Tooltip */}
          <span className="absolute left-full ml-2 px-2 py-1 bg-[var(--color-ide-panel)] border border-[var(--color-ide-border)] rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Terminal
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
