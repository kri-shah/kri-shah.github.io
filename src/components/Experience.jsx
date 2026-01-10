import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Pratt & Whitney',
    location: 'Storrs, CT',
    period: 'September 2025 – Present',
    current: true,
  },
  {
    title: 'Data Science Intern',
    company: 'Synchrony',
    location: 'Stamford, CT',
    period: 'June 2025 – August 2025',
    current: false,
  },
  {
    title: 'Software Engineer Intern',
    company: 'Berkley Small Business Solutions',
    location: 'West Hartford, CT',
    period: 'June 2024 – January 2025',
    current: false,
  },
  {
    title: 'Artificial Intelligence Research Assistant',
    company: 'EL GATO Laboratory',
    location: 'Storrs, CT',
    period: 'April 2023 – June 2024',
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[var(--color-ide-accent-yellow)]">{'// '}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-ide-text)]">
            work_experience
          </h2>
          <div className="flex-1 h-px bg-[var(--color-ide-border)] ml-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--color-ide-border)]"></div>

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-8 w-3 h-3 rounded-full -translate-x-1/2 ${
                  exp.current 
                    ? 'bg-[var(--color-ide-accent-green)] shadow-[0_0_12px_var(--color-ide-accent-green)]' 
                    : 'bg-[var(--color-ide-border)]'
                }`}></div>

                {/* Card */}
                <div className="bg-[var(--color-ide-panel)] rounded-lg border border-[var(--color-ide-border)] p-6 hover:border-[var(--color-ide-accent)] transition-colors group">
                  {/* Line number decoration */}
                  <div className="absolute -left-2 md:left-12 top-6 text-[var(--color-ide-text-dim)] text-xs font-mono hidden md:block">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-ide-text)] group-hover:text-[var(--color-ide-accent)] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-[var(--color-ide-accent-purple)] font-medium">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-[var(--color-ide-accent-green)]/10 text-[var(--color-ide-accent-green)] rounded border border-[var(--color-ide-accent-green)]/30">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-[var(--color-ide-text-dim)]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
