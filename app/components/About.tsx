'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 blur-xl" />
              <div className="relative glass-card h-full flex items-center justify-center overflow-hidden">
                {/* Abstract developer illustration */}
                <div className="relative w-full h-full p-8 flex flex-col items-center justify-center">
                  {/* Terminal-style illustration */}
                  <div className="w-full max-w-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="font-mono text-sm space-y-2">
                      <p>
                        <span className="text-accent-emerald">~</span>{' '}
                        <span className="text-text-muted">whoami</span>
                      </p>
                      <p className="text-accent-cyan">rupak-khadka</p>
                      <p>
                        <span className="text-accent-emerald">~</span>{' '}
                        <span className="text-text-muted">cat skills.txt</span>
                      </p>
                      <p className="text-text-secondary">
                        Next.js • React • PHP
                        <br />
                        WordPress • SEO • TypeScript
                      </p>
                      <p>
                        <span className="text-accent-emerald">~</span>{' '}
                        <span className="text-text-muted">echo $STATUS</span>
                      </p>
                      <p className="text-accent-violet">
                        &quot;Learning & building every day&quot;
                      </p>
                      <p>
                        <span className="text-accent-emerald">~</span>{' '}
                        <span className="text-text-muted">cat contact.txt</span>
                      </p>
                      <p className="text-accent-cyan text-xs">
                        rupakbeing@outlook.com
                      </p>
                      <p className="text-accent-emerald">
                        ~ <span className="typing-cursor" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <span className="text-accent-cyan text-sm font-mono font-semibold tracking-widest uppercase mb-4 block">
              // About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Bridging the gap between{' '}
              <span className="gradient-text">beautiful design</span> and{' '}
              <span className="gradient-text-2">search performance</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Hi, I&apos;m <strong className="text-text-primary">Rupak Khadka</strong> — an IT student and passionate frontend developer who doesn&apos;t just build websites — I engineer <strong className="text-text-primary">high-performance digital experiences</strong> that look stunning and rank high on search engines.
              </p>
              <p>
                My journey started with PHP and WordPress, where I learned to craft custom themes and plugins from the ground up. From there, I embraced modern JavaScript frameworks like <strong className="text-text-primary">React and Next.js</strong>, combining server-side rendering with cutting-edge UI design.
              </p>
              <p>
                What sets me apart is my deep understanding of <strong className="text-text-primary">Technical SEO</strong>. Every line of code I write considers Core Web Vitals, semantic HTML, structured data, and search engine accessibility — ensuring the sites I build don&apos;t just look great, they <strong className="text-text-primary">perform and get discovered</strong>.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: '🎓', label: 'IT Student' },
                { icon: '💻', label: 'Frontend Focused' },
                { icon: '🔍', label: 'SEO Enthusiast' },
                { icon: '🚀', label: 'Performance Nerd' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-bg-glass border border-glass-border hover:border-accent-cyan/30 transition-all cursor-default"
                >
                  <span className="text-xl">{fact.icon}</span>
                  <span className="text-sm font-medium text-text-primary">{fact.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
