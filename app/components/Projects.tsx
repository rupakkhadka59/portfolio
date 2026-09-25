'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics: string;
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Starter',
    description:
      'A high-performance Next.js e-commerce template with server-side rendering, dynamic product filtering, and a fully optimized checkout flow. Achieved near-perfect Lighthouse scores.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    metrics: 'Lighthouse score 98 · LCP under 1.2s',
    liveUrl: '#',
    githubUrl: 'https://github.com/rupakkhadka59',
    gradient: 'from-accent-cyan/20 to-accent-violet/10',
    icon: '🛒',
  },
  {
    title: 'WordPress Agency Theme',
    description:
      'Custom WordPress theme built from scratch for a digital agency. Features modular Gutenberg blocks, lazy-loaded media, and on-page SEO automation with structured data.',
    tags: ['WordPress', 'PHP', 'Custom Theme', 'SEO'],
    metrics: 'Improved page load speed by 40%',
    liveUrl: '#',
    githubUrl: 'https://github.com/rupakkhadka59',
    gradient: 'from-accent-violet/20 to-accent-emerald/10',
    icon: '🏢',
  },
  {
    title: 'SEO Dashboard',
    description:
      'A real-time SEO analytics dashboard built with React that tracks Core Web Vitals, keyword rankings, and crawl stats. Integrated with Google Search Console API.',
    tags: ['React', 'TypeScript', 'REST API', 'Charts'],
    metrics: 'SEO score boosted to 95+',
    liveUrl: '#',
    githubUrl: 'https://github.com/rupakkhadka59',
    gradient: 'from-accent-emerald/20 to-accent-cyan/10',
    icon: '📊',
  },
  {
    title: 'Portfolio Blog Platform',
    description:
      'A headless WordPress + Next.js blog with MDX support, automatic sitemap generation, Open Graph tags, and blisteringly fast static page rendering.',
    tags: ['Next.js', 'WordPress', 'Headless CMS', 'MDX'],
    metrics: 'First Contentful Paint 0.6s',
    liveUrl: '#',
    githubUrl: 'https://github.com/rupakkhadka59',
    gradient: 'from-accent-cyan/10 to-accent-violet/20',
    icon: '✍️',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-mono font-semibold tracking-widest uppercase mb-4 block">
            // Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Case studies & <span className="gradient-text">real results</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Each project combines modern development practices with measurable performance and SEO outcomes.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group overflow-hidden"
            >
              {/* Gradient header bar */}
              <div
                className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{project.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Metrics callout */}
                <div className="flex items-center gap-2 mb-5 px-3 py-2 rounded-lg bg-accent-emerald-dim border border-accent-emerald/20">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent-emerald flex-shrink-0"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  <span className="text-accent-emerald text-sm font-medium">
                    {project.metrics}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-tag bg-bg-tertiary text-text-secondary border border-glass-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
