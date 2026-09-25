'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Frontend Developer',
  'SEO Specialist',
  'WordPress Expert',
  'PHP Developer',
  'UI/UX Enthusiast',
];

function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const full = roles[currentIndex];
    if (!isDeleting) {
      setDisplayed(full.substring(0, displayed.length + 1));
      if (displayed.length + 1 === full.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setDisplayed(full.substring(0, displayed.length - 1));
      if (displayed.length - 1 === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [currentIndex, displayed, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className="text-accent-cyan">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}

// Floating code snippet component
function FloatingCode() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="code-float hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
    >
      <div className="glass-card p-6 max-w-sm" style={{ transform: 'none' }}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="text-text-muted text-xs ml-2 font-mono">rupak.tsx</span>
        </div>
        <pre className="text-sm font-mono leading-relaxed">
          <code>
            <span className="text-accent-violet">const</span>{' '}
            <span className="text-accent-cyan">developer</span>{' '}
            <span className="text-text-muted">=</span> {'{'}
            {'\n'}  <span className="text-accent-emerald">name</span>
            <span className="text-text-muted">:</span>{' '}
            <span className="text-[#fbbf24]">&quot;Rupak Khadka&quot;</span>,
            {'\n'}  <span className="text-accent-emerald">role</span>
            <span className="text-text-muted">:</span>{' '}
            <span className="text-[#fbbf24]">&quot;IT Student&quot;</span>,
            {'\n'}  <span className="text-accent-emerald">skills</span>
            <span className="text-text-muted">:</span> [
            {'\n'}    <span className="text-[#fbbf24]">&quot;Next.js&quot;</span>,
            {'\n'}    <span className="text-[#fbbf24]">&quot;PHP&quot;</span>,
            {'\n'}    <span className="text-[#fbbf24]">&quot;WordPress&quot;</span>,
            {'\n'}    <span className="text-[#fbbf24]">&quot;SEO&quot;</span>
            {'\n'}  ],
            {'\n'}  <span className="text-accent-emerald">passion</span>
            <span className="text-text-muted">:</span>{' '}
            <span className="text-accent-violet">true</span>
            {'\n'}{'}'};
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

// Animated particle background
function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent-cyan/30"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
    >
      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] bg-accent-cyan top-1/4 -left-60" />
      <div className="orb w-[400px] h-[400px] bg-accent-violet bottom-1/4 right-[-200px]" />
      <div className="orb w-[300px] h-[300px] bg-accent-emerald top-[-100px] right-1/3" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated particles */}
      <ParticleField />

      <div className="section-container relative z-10 w-full py-20">
        <div className="relative">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan-dim border border-accent-cyan/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            <span className="text-accent-cyan text-sm font-medium">
              Available for freelance work
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 max-w-3xl"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Rupak Khadka</span>
            <br />
            <span className="text-text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
              Building{' '}
              <span className="gradient-text-2">high‑performance</span>{' '}
              frontends that rank&nbsp;#1
            </span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl"
          >
            I&apos;m a <TypingEffect />
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-glow btn-glow-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn-glow btn-glow-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get in Touch
            </a>
            <a
              href="https://github.com/rupakkhadka59"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow btn-glow-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-glass-border"
          >
            {[
              { value: '10+', label: 'Projects Delivered' },
              { value: '95+', label: 'Avg. SEO Score' },
              { value: '40%', label: 'Speed Improvement' },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <span className="text-3xl font-bold gradient-text metric-value group-hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.5)] transition-all">
                  {stat.value}
                </span>
                <p className="text-text-muted text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Floating code snippet */}
          <FloatingCode />
        </div>
      </div>
    </section>
  );
}
