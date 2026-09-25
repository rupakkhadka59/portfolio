'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  color: 'cyan' | 'violet' | 'emerald';
  icon: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: 'cyan',
    icon: '⚡',
    skills: [
      { name: 'Next.js', icon: '▲' },
      { name: 'React', icon: '⚛' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '𝗝𝗦' },
      { name: 'TypeScript', icon: '𝗧𝗦' },
      { name: 'HTML5', icon: '📄' },
      { name: 'CSS3', icon: '🎭' },
      { name: 'Framer Motion', icon: '🔄' },
    ],
  },
  {
    title: 'Backend & CMS',
    color: 'violet',
    icon: '🔧',
    skills: [
      { name: 'PHP', icon: '🐘' },
      { name: 'WordPress', icon: '📝' },
      { name: 'Custom Themes', icon: '🎨' },
      { name: 'Plugin Dev', icon: '🔌' },
      { name: 'WP Optimization', icon: '⚡' },
      { name: 'MySQL', icon: '🗄' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'Git', icon: '📦' },
    ],
  },
  {
    title: 'SEO & Performance',
    color: 'emerald',
    icon: '🔍',
    skills: [
      { name: 'Technical SEO', icon: '🔧' },
      { name: 'Core Web Vitals', icon: '📊' },
      { name: 'On-Page SEO', icon: '📝' },
      { name: 'Schema Markup', icon: '🏗' },
      { name: 'Performance Audit', icon: '🔬' },
      { name: 'PageSpeed', icon: '🚀' },
      { name: 'Search Console', icon: '📈' },
      { name: 'Analytics', icon: '📉' },
    ],
  },
];

const colorMap = {
  cyan: {
    border: 'border-accent-cyan/30',
    bg: 'bg-accent-cyan-dim',
    text: 'text-accent-cyan',
    glow: 'shadow-[0_0_20px_rgba(0,229,255,0.1)]',
    badgeBorder: 'hover:border-accent-cyan/50',
  },
  violet: {
    border: 'border-accent-violet/30',
    bg: 'bg-accent-violet-dim',
    text: 'text-accent-violet',
    glow: 'shadow-[0_0_20px_rgba(168,85,247,0.1)]',
    badgeBorder: 'hover:border-accent-violet/50',
  },
  emerald: {
    border: 'border-accent-emerald/30',
    bg: 'bg-accent-emerald-dim',
    text: 'text-accent-emerald',
    glow: 'shadow-[0_0_20px_rgba(52,211,153,0.1)]',
    badgeBorder: 'hover:border-accent-emerald/50',
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-mono font-semibold tracking-widest uppercase mb-4 block">
            // Skills & Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools I use to bring ideas to{' '}
            <span className="gradient-text">life</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            A carefully curated toolkit spanning frontend frameworks, backend systems, and SEO expertise.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, catIndex) => {
            const colors = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                className={`glass-card p-8 ${colors.glow}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center text-lg`}
                  >
                    {cat.icon}
                  </div>
                  <h3 className={`text-lg font-bold ${colors.text}`}>{cat.title}</h3>
                </div>

                {/* Skills grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`skill-badge ${colors.badgeBorder}`}
                    >
                      <span className="text-xs">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
