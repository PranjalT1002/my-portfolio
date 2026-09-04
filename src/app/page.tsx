"use client";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Binary,
  Cpu,
  Layers,
  Database,
  Globe,
  Bot,
  ExternalLink,
  Sparkles,
  GraduationCap,
  CheckCircle2
} from "lucide-react";
import { FEATURED_PROJECTS } from "../lib/projectsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const techCategories = [
    {
      title: "Core Languages",
      icon: <Binary size={18} className="text-cyber-cyan" />,
      skills: ["Python", "Java", "C++", "Verilog", "SQL", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend & Architecture",
      icon: <Globe size={18} className="text-blue-400" />,
      skills: ["Next.js 14", "React 18", "Tailwind CSS", "Vite", "Framer Motion", "HTML5/CSS3"],
    },
    {
      title: "Databases & Cloud Stack",
      icon: <Database size={18} className="text-emerald-400" />,
      skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Vercel", "Git & GitHub"],
    },
    {
      title: "AI & Embedded Systems",
      icon: <Bot size={18} className="text-purple-400" />,
      skills: ["Whisper Speech STT", "Ollama LLM", "PyQt6 GUI", "Digital Logic Design", "Icarus Verilog"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#030308] relative overflow-hidden">
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0a1628_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* 1. HERO SECTION */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Animated section divider */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="cyber-line" />
      </motion.div>

      {/* 2. FEATURED FLAGSHIP SYSTEMS SHOWCASE */}
      <section id="projects" className="relative z-10 py-28 px-6 max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -left-4 top-0 h-full w-1 rounded-full"
              style={{ background: "linear-gradient(to bottom, #00f0ff, #2563eb)" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              <span>Flagship Deployments</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-3">
              ENGINEERING <span className="text-cyber-cyan">SHOWCASE</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm max-w-xl leading-relaxed">
              Production-grade distributed platforms, real-time messaging pipelines, and high-fidelity interactive interfaces.
            </p>
          </div>

          <Link href="/projects">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 240, 255, 0.3)" }}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full glass-card hover:border-cyber-cyan/50 transition-all cursor-pointer"
            >
              <span className="text-sm font-bold text-white">View All 8 Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform text-cyber-cyan" />
            </motion.div>
          </Link>
        </motion.div>

        {/* 4 Flagship Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                tags={project.tags}
                link={project.link}
                linkText={project.linkText}
                categoryLabel={project.categoryLabel}
                status={project.status}
                metrics={project.metrics}
                systemCode={project.systemCode}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </div>

        {/* View Archive CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glass-card border border-cyber-cyan/20 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-cyber-cyan/5 via-transparent to-blue-500/5"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span>Looking for the complete technical catalog?</span>
              <span className="text-cyber-cyan font-mono text-xs px-2 py-0.5 rounded bg-cyber-cyan/10">8 TOTAL</span>
            </h4>
            <p className="text-slate-400 text-sm">
              Includes Python desktop AI systems, NGO platforms, creative agencies, and source repositories.
            </p>
          </div>

          <Link href="/projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-cyber-cyan text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span>Explore Complete Logbook</span>
              <ArrowRight size={15} />
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Animated section divider */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="cyber-line" />
      </motion.div>

      {/* 3. COMPREHENSIVE TECH MATRIX */}
      <section id="skills" className="relative z-10 py-28 px-6 bg-[#030814]/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-16"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-2.5 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/20">
              <Cpu className="text-cyber-cyan" size={26} />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight">Technical Mastery & Stack</h2>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-1">
                Engineered for High Reliability & Concurrency
              </p>
            </div>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-cyber-cyan/20 to-transparent ml-4" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                whileHover={{ y: -4, borderColor: "rgba(0, 240, 255, 0.3)" }}
                className="p-7 rounded-2xl glass-card corner-brackets border border-cyber-cyan/15 bg-[#050818]/70 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-white text-lg tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 hover:bg-cyber-cyan/5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>STACK_LAYER_0{idx + 1}</span>
                  <span className="text-cyber-cyan/60 font-semibold">VERIFIED</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated section divider */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="cyber-line" />
      </motion.div>

      {/* 4. DUAL DEGREE - COMMAND CENTER */}
      <section className="relative z-10 py-28 px-6 max-w-6xl mx-auto">
        <motion.div
          className="relative overflow-hidden p-8 md:p-16 rounded-[36px] glass-card border border-cyber-cyan/20 group bg-gradient-to-b from-[#060b1e]/90 to-[#02040b]/90 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyber-cyan/15 blur-[120px] rounded-full group-hover:bg-cyber-cyan/25 transition-all duration-700 pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full group-hover:bg-blue-600/25 transition-all duration-700 pointer-events-none" />

          <div className="relative z-10">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono uppercase tracking-[0.2em] mb-8">
              <GraduationCap size={15} />
              <span>Dual-Degree Command Center • 2024–2029</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Dual-Path Engineering Mastery
            </h2>

            <p className="text-slate-300 text-lg mb-12 max-w-2xl leading-relaxed">
              Synchronously pursuing computer science systems architecture at{" "}
              <strong className="text-white">Bennett University</strong> and mathematical data science at{" "}
              <strong className="text-cyber-cyan">IIT Madras</strong>.
            </p>

            {/* Dual Score Telemetry Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Bennett Card */}
              <div className="p-6 rounded-2xl bg-[#030614]/80 border border-cyber-cyan/20 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-cyber-cyan font-bold tracking-wider">
                    BENNETT UNIVERSITY
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                    ON-CAMPUS
                  </span>
                </div>
                <h4 className="text-xl font-black text-white mb-1">
                  B.Tech in Computer Science Engineering
                </h4>
                <p className="text-slate-400 text-xs font-mono mb-4">Duration: 2025 — 2029</p>
                <div className="flex items-baseline gap-2 pt-3 border-t border-slate-800">
                  <span className="text-3xl font-black text-cyber-cyan font-mono">9.28</span>
                  <span className="text-xs font-mono text-slate-400">CGPA (Year 1 Completed)</span>
                </div>
              </div>

              {/* IIT Madras Card */}
              <div className="p-6 rounded-2xl bg-[#030614]/80 border border-emerald-400/20 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-emerald-400 font-bold tracking-wider">
                    INDIAN INSTITUTE OF TECHNOLOGY MADRAS
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/30">
                    DEGREE
                  </span>
                </div>
                <h4 className="text-xl font-black text-white mb-1">
                  BS in Data Science and Applications
                </h4>
                <p className="text-slate-400 text-xs font-mono mb-4">Duration: 2025 — Present</p>
                <div className="flex items-baseline gap-2 pt-3 border-t border-slate-800">
                  <span className="text-3xl font-black text-emerald-400 font-mono">8.13</span>
                  <span className="text-xs font-mono text-slate-400">CGPA (Year 1 Completed)</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/education">
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-cyber-cyan transition-all shadow-xl"
                >
                  <span>Explore Academic Timeline</span>
                  <Layers size={16} />
                </motion.div>
              </Link>

              <a
                href="/resume.pdf"
                download="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-cyber-cyan/30 text-white font-mono text-xs uppercase tracking-wider hover:bg-cyber-cyan/10 transition-all"
                >
                  <span>Download Verified Resume</span>
                  <ExternalLink size={14} className="text-cyber-cyan" />
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}