"use client";
import { motion } from "framer-motion";
import { Code2, Database, Cpu, Terminal, FileDown, Sparkles, Binary, Globe } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function AboutPage() {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "Java", "C++", "Verilog", "SQL", "JavaScript", "TypeScript"],
    },
    {
      category: "Cloud & Databases",
      items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Vercel", "GitHub"],
    },
    {
      category: "Frameworks & UI",
      items: ["Next.js 14", "React", "Tailwind CSS", "Vite", "PyQt6", "Framer Motion"],
    },
    {
      category: "AI, Data & Hardware",
      items: ["Pandas", "NumPy", "Statistical Modeling", "Ollama LLM", "Faster-Whisper", "Icarus Verilog"],
    },
  ];

  return (
    <main className="min-h-screen py-28 px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyber-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. THE NARRATIVE */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.span
            className="w-12 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
          <span className="text-cyber-cyan font-mono text-sm tracking-widest uppercase font-bold">
            Engineering Dossier
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
          About <span className="shimmer-text">Pranjal</span>
        </h1>

        <div className="space-y-6 text-slate-300 text-lg leading-relaxed max-w-3xl">
          <p>
            Hello! I&apos;m <span className="text-white font-semibold">Pranjal</span>, a developer and software engineer
            driven by the challenge of designing computational architectures that combine rigorous logic with intuitive, high-performance user interfaces.
          </p>
          <p>
            My academic path merges two high-impact disciplines: I am completing a
            <span className="text-cyber-cyan font-semibold"> B.Tech in Computer Science at Bennett University (9.28 CGPA Year 1)</span> while simultaneously
            earning a <span className="text-emerald-400 font-semibold"> BS in Data Science from IIT Madras (8.13 CGPA Year 1)</span>.
            This dual background bridges low-level systems engineering with modern statistical data analysis.
          </p>
          <p>
            Over the past year, I&apos;ve built and deployed 9 comprehensive systems—ranging from real-time communication platforms (ConnectHub) and confidential digital voting portals (SwiftFlow) to AI weather intelligence platforms (WeatherGPT), desktop voice AI assistants (Jarvis) and commercial web portals.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-6 flex flex-wrap items-center gap-4"
          >
            <a
              href="/resume.pdf"
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cyber-cyan text-black font-bold font-mono text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 group"
            >
              <FileDown size={16} />
              <span>Download Official Resume</span>
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-card border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10 font-mono text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore 9 Projects</span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. CORE PILLARS (Icon Grid) */}
      <motion.section
        className="grid md:grid-cols-2 gap-6 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            icon: <Globe size={24} />,
            title: "Full-Stack Real-Time Systems",
            desc: "Architecting WebSocket concurrency, WebRTC channels, and robust authentication in modern production deployments.",
          },
          {
            icon: <Terminal size={24} />,
            title: "Autonomous AI & Voice",
            desc: "Integrating local LLM inference (Ollama) and Whisper speech processing with custom desktop PyQt neural HUDs.",
          },
          {
            icon: <Database size={24} />,
            title: "Cloud & Data Integrity",
            desc: "Managing high-integrity relational schemas in PostgreSQL, Supabase, and MongoDB with audit trails.",
          },
          {
            icon: <Cpu size={24} />,
            title: "Hardware & Logic Verification",
            desc: "Understanding computation from the ground up through gate-level Verilog simulation and digital design.",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(0, 240, 255, 0.12)",
            }}
            className="p-7 rounded-2xl glass-card corner-brackets border border-cyber-cyan/15 hover:border-cyber-cyan/30 transition-all duration-300"
          >
            <div className="text-cyber-cyan mb-4">{item.icon}</div>
            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Animated divider */}
      <motion.div
        className="mb-20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="cyber-line" />
      </motion.div>

      {/* 3. TECHNICAL EXPERTISE MATRIX */}
      <section>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-2 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan">
            <Sparkles size={22} />
          </div>
          <h2 className="text-3xl font-black">Technical Expertise</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-cyber-cyan/20 to-transparent ml-4" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="p-7 rounded-2xl glass-card border border-cyber-cyan/15 bg-[#040816]/70"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-cyber-cyan mb-5 font-mono flex items-center gap-2">
                <span className="text-cyber-cyan/50">{">"}</span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 12px rgba(0, 240, 255, 0.2)",
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono hover:text-cyber-cyan hover:border-cyber-cyan/40 hover:bg-cyber-cyan/5 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}