import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';

const aboutMeJson = {
  name: 'Krish Shah',
  role: 'CS & Applied Math Student | Full-Stack SWE',
  linkedin: 'https://linkedin.com/in/krish-d-shah',
  github: 'https://github.com/kri-shah',
  email: 'krishdhshah@gmail.com',
};

const fileSystem = {
  'about-me.json': JSON.stringify(aboutMeJson, null, 2),
  'skills.txt': `Languages: Python, JavaScript, TypeScript, C, SQL
Frameworks: React, Flask, PyTorch, TensorFlow
Tools: Git, Docker, PostgreSQL, AWS`,
  'README.md': `# Krish Shah's Portfolio

Welcome to my interactive terminal!

Try running some commands:
- ls          List files
- cat <file>  View file contents
- help        Show available commands
- clear       Clear the terminal`,
};

const Terminal = ({ isOpen, onClose, onMinimize }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to KrishOS v1.0.0' },
    { type: 'system', content: "Type 'help' to see available commands." },
    { type: 'system', content: '' },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = cmd.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output = [];

    switch (command) {
      case '':
        break;

      case 'help':
        output = [
          { type: 'output', content: 'Available commands:' },
          { type: 'output', content: '  ls              List files in current directory' },
          { type: 'output', content: '  cat <file>      Display contents of a file' },
          { type: 'output', content: '  help            Show this help message' },
          { type: 'output', content: '  clear           Clear terminal screen' },
          { type: 'output', content: '  whoami          Display user information' },
          { type: 'output', content: '  date            Display current date and time' },
          { type: 'output', content: '  echo <text>     Display text' },
          { type: 'output', content: '' },
        ];
        break;

      case 'ls':
        output = [
          { type: 'output', content: Object.keys(fileSystem).map(f => {
            const ext = f.split('.').pop();
            const color = ext === 'json' ? 'var(--color-ide-accent-yellow)' : 
                         ext === 'txt' ? 'var(--color-ide-text)' : 
                         'var(--color-ide-accent-green)';
            return `<span style="color: ${color}">${f}</span>`;
          }).join('  ') },
        ];
        break;

      case 'cat':
        if (args.length === 0) {
          output = [{ type: 'error', content: 'cat: missing file operand' }];
        } else {
          const fileName = args[0];
          if (fileSystem[fileName]) {
            const content = fileSystem[fileName];
            output = content.split('\n').map(line => ({
              type: 'output',
              content: line.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
            }));
          } else {
            output = [{ type: 'error', content: `cat: ${fileName}: No such file or directory` }];
          }
        }
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'whoami':
        output = [
          { type: 'output', content: 'krish-shah' },
          { type: 'output', content: 'CS & Applied Math Student | Full-Stack Software Engineer' },
        ];
        break;

      case 'date':
        output = [{ type: 'output', content: new Date().toString() }];
        break;

      case 'echo':
        output = [{ type: 'output', content: args.join(' ') }];
        break;

      case 'pwd':
        output = [{ type: 'output', content: '/home/krish-shah' }];
        break;

      case 'neofetch':
        output = [
          { type: 'output', content: '<span style="color: var(--color-ide-accent)">       ___       </span>  krish-shah@portfolio' },
          { type: 'output', content: '<span style="color: var(--color-ide-accent)">      (.. |      </span>  ------------------' },
          { type: 'output', content: '<span style="color: var(--color-ide-accent)">      (<>  |      </span>  <span style="color: var(--color-ide-accent)">OS:</span> KrishOS v1.0.0' },
          { type: 'output', content: '<span style="color: var(--color-ide-accent)">     / __  \\     </span>  <span style="color: var(--color-ide-accent)">Host:</span> React + Tailwind' },
          { type: 'output', content: '<span style="color: var(--color-ide-accent)">    ( /  \\ /|    </span>  <span style="color: var(--color-ide-accent)">Shell:</span> krishsh 1.0' },
          { type: 'output', content: '<span style="color: var(--color-ide-accent)">   _/\\ __)/_)    </span>  <span style="color: var(--color-ide-accent)">Theme:</span> Catppuccin Mocha' },
          { type: 'output', content: '<span style="color: var(--color-ide-accent)">   \\|/-___\\|/    </span>  <span style="color: var(--color-ide-accent)">Languages:</span> Python, JS, C' },
          { type: 'output', content: '' },
        ];
        break;

      default:
        output = [{ type: 'error', content: `command not found: ${command}` }];
    }

    setHistory(prev => [
      ...prev,
      { type: 'command', content: cmd },
      ...output,
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
    }
    processCommand(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-[600px] z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[var(--color-ide-panel)] rounded-lg border border-[var(--color-ide-border)] shadow-2xl overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-ide-sidebar)] border-b border-[var(--color-ide-border)]">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[var(--color-ide-accent)]" />
            <span className="text-sm text-[var(--color-ide-text-dim)]">terminal — krishsh</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onMinimize}
              className="p-1 hover:bg-[var(--color-ide-selection)] rounded transition-colors"
            >
              <Minus className="w-3 h-3 text-[var(--color-ide-text-dim)]" />
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#f38ba8]/20 rounded transition-colors group"
            >
              <X className="w-3 h-3 text-[var(--color-ide-text-dim)] group-hover:text-[#f38ba8]" />
            </button>
          </div>
        </div>

        {/* Terminal body */}
        <div
          ref={terminalRef}
          className="h-[300px] md:h-[350px] overflow-y-auto p-4 font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, index) => (
            <div key={index} className="leading-relaxed">
              {item.type === 'command' && (
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-ide-accent-green)]">➜</span>
                  <span className="text-[var(--color-ide-accent)]">~</span>
                  <span className="text-[var(--color-ide-text)]">{item.content}</span>
                </div>
              )}
              {item.type === 'output' && (
                <div 
                  className="text-[var(--color-ide-text)] pl-6"
                  dangerouslySetInnerHTML={{ __html: item.content || '&nbsp;' }}
                />
              )}
              {item.type === 'error' && (
                <div className="text-[#f38ba8] pl-6">{item.content}</div>
              )}
              {item.type === 'system' && (
                <div className="text-[var(--color-ide-text-dim)]">{item.content || '\u00A0'}</div>
              )}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1">
            <span className="text-[var(--color-ide-accent-green)]">➜</span>
            <span className="text-[var(--color-ide-accent)]">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-[var(--color-ide-text)] caret-[var(--color-ide-accent)]"
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
