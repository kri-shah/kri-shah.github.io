import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'MMAI',
    link: 'https://mmai.infoql.com',
    description: 'Built a Flask web app for real-time MMA fight predictions; trained neural network achieving ~70% accuracy.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Scikit-learn', 'Flask', 'JavaScript', 'HTML/CSS'],
    color: 'var(--color-ide-accent)',
  },
  {
    title: 'Multithreaded Distance Vector Routing Protocol',
    link: null,
    description: 'Implemented a thread-safe DVR protocol using mutexes to parallelize routing updates.',
    tech: ['C', 'POSIX Threads', 'Computer Networks'],
    color: 'var(--color-ide-accent-green)',
  },
  {
    title: 'ETF Portfolio Optimization (Deep Reinforcement Learning)',
    link: null,
    description: 'Developed PPO and SAC agents for ETF allocation, outperforming the S&P 500 by +0.41 Sharpe ratio.',
    tech: ['Python', 'PyTorch', 'Gym', 'Pandas', 'NumPy'],
    color: 'var(--color-ide-accent-yellow)',
  },
  {
    title: 'NBA Statistics Database',
    link: null,
    description: 'Designed and deployed a fully normalized (3NF) PostgreSQL database for team and player statistics.',
    tech: ['PostgreSQL', 'SQL', 'Python', 'Psycopg2'],
    color: 'var(--color-ide-accent-purple)',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[var(--color-ide-sidebar)]">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[var(--color-ide-accent-green)]">{'// '}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-ide-text)]">
            projects
          </h2>
          <div className="flex-1 h-px bg-[var(--color-ide-border)] ml-4"></div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--color-ide-panel)] rounded-lg border border-[var(--color-ide-border)] overflow-hidden hover:border-[var(--color-ide-accent)] transition-all group hover:-translate-y-1"
            >
              {/* File tab header */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-ide-bg)] border-b border-[var(--color-ide-border)]">
                <Code2 className="w-4 h-4" style={{ color: project.color }} />
                <span className="text-sm text-[var(--color-ide-text-dim)] truncate">
                  project_{String(index + 1).padStart(2, '0')}.md
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 
                    className="text-lg font-semibold text-[var(--color-ide-text)] group-hover:text-[var(--color-ide-accent)] transition-colors"
                    style={{ '--hover-color': project.color }}
                  >
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-ide-text-dim)] hover:text-[var(--color-ide-accent)] transition-colors flex-shrink-0"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-[var(--color-ide-accent)] hover:underline mb-3"
                  >
                    {project.link.replace('https://', '')}
                  </a>
                )}

                <p className="text-[var(--color-ide-text-dim)] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-[var(--color-ide-selection)] text-[var(--color-ide-text-dim)] rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
