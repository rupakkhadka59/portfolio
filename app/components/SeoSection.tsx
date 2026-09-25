'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Semantic Architecture',
    description:
      'Every component is built with semantic HTML5 elements, proper heading hierarchy, and ARIA attributes — ensuring search engines and screen readers fully understand your content.',
    color: 'cyan' as const,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Core Web Vitals',
    description:
      'I obsess over LCP, FID, and CLS. Through code splitting, lazy loading, image optimization, and efficient rendering — your site will pass every Core Web Vitals assessment.',
    color: 'emerald' as const,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Crawlability & Indexing',
    description:
      'Proper meta tags, canonical URLs, XML sitemaps, robots.txt, and structured data (JSON-LD) are baked into every project — making your content discoverable from day one.',
    color: 'violet' as const,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Performance Auditing',
    description:
      'Using Lighthouse, WebPageTest, and custom profiling, I identify bottlenecks and deliver actionable optimizations — turning sluggish sites into blazing-fast experiences.',
    color: 'cyan' as const,
  },
];

const colorStyles = {
  cyan: {
    iconBg: 'bg-accent-cyan-dim',
    iconColor: 'text-accent-cyan',
    border: 'border-accent-cyan/20',
  },
  emerald: {
    iconBg: 'bg-accent-emerald-dim',
    iconColor: 'text-accent-emerald',
    border: 'border-accent-emerald/20',
  },
  violet: {
    iconBg: 'bg-accent-violet-dim',
    iconColor: 'text-accent-violet',
    border: 'border-accent-violet/20',
  },
};

export default function SeoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="seo" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-accent-cyan text-sm font-mono font-semibold tracking-widest uppercase mb-4 block">
            // Why Choose Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Development meets{' '}
            <span className="gradient-text-2">SEO mastery</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Most developers ship beautiful sites that nobody finds. I build beautiful sites that{' '}
            <strong className="text-text-primary">rank, load fast, and convert</strong>.
          </p>
        </motion.div>

        {/* USP callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-6 md:p-8 mb-12 bg-gradient-to-r from-accent-cyan/5 to-accent-violet/5 text-center"
        >
          <p className="text-lg md:text-xl text-text-primary font-medium leading-relaxed max-w-3xl mx-auto">
            &ldquo;I bridge the gap between <span className="text-accent-cyan font-semibold">stunning Next.js & WordPress development</span> and <span className="text-accent-emerald font-semibold">rigorous technical SEO</span> — so your websites don&apos;t just look incredible, they dominate search rankings and deliver lightning-fast load times.&rdquo;
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const colors = colorStyles[pillar.color];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 md:p-8"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colors.iconBg} border ${colors.border} flex items-center justify-center mb-4 ${colors.iconColor}`}
                >
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
