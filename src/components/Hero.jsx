import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        {/* Terminal-style header */}
        <div className="bg-[var(--color-ide-panel)] rounded-lg border border-[var(--color-ide-border)] overflow-hidden">
          {/* Window controls */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-ide-sidebar)] border-b border-[var(--color-ide-border)]">
            <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
            <div className="w-3 h-3 rounded-full bg-[var(--color-ide-accent-yellow)]"></div>
            <div className="w-3 h-3 rounded-full bg-[var(--color-ide-accent-green)]"></div>
            <span className="ml-4 text-[var(--color-ide-text-dim)] text-sm">~/krish-shah/intro.sh</span>
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Greeting line */}
            <div className="flex items-center gap-2 text-[var(--color-ide-text-dim)] mb-4">
              <span className="text-[var(--color-ide-accent-green)]">➜</span>
              <span className="text-[var(--color-ide-accent)]">~</span>
              <span>whoami</span>
            </div>
            
            {/* Main intro */}
            <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-ide-text)] mb-4">
              Hi, I'm <span className="text-[var(--color-ide-accent)]">Krish Shah</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-ide-text-dim)] mb-8 leading-relaxed">
              I'm a <span className="text-[var(--color-ide-accent-purple)]">Computer Science</span> and{' '}
              <span className="text-[var(--color-ide-accent-yellow)]">Applied Mathematics</span> student @{' '}
              <span className="text-[var(--color-ide-accent)]">UConn</span>
              <br />
              and full-stack <span className="text-[var(--color-ide-accent-green)]">Software Engineer</span>.
            </p>

            {/* Contact links */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="https://github.com/kri-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--color-ide-text-dim)] hover:text-[var(--color-ide-text)] transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:text-[var(--color-ide-accent)]" />
                <span className="text-sm">
                  <span className="text-[var(--color-ide-accent-green)]">git clone</span> kri-shah
                </span>
              </a>
              
              <a
                href="https://linkedin.com/in/krish-d-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--color-ide-text-dim)] hover:text-[var(--color-ide-text)] transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-[var(--color-ide-accent)]" />
                <span className="text-sm">krish-d-shah</span>
              </a>
              
              <a
                href="mailto:krishdhshah@gmail.com"
                className="flex items-center gap-3 text-[var(--color-ide-text-dim)] hover:text-[var(--color-ide-text)] transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:text-[var(--color-ide-accent)]" />
                <span className="text-sm">krishdhshah@gmail.com</span>
              </a>
            </div>

            {/* Cursor */}
            <div className="mt-8 flex items-center gap-2 text-[var(--color-ide-text-dim)]">
              <span className="text-[var(--color-ide-accent-green)]">➜</span>
              <span className="text-[var(--color-ide-accent)]">~</span>
              <span className="w-2 h-5 bg-[var(--color-ide-text)] cursor-blink"></span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <a 
            href="#experience" 
            className="text-[var(--color-ide-text-dim)] hover:text-[var(--color-ide-accent)] transition-colors animate-bounce"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
