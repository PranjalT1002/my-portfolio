"use client";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Binary, Cpu, Layers } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030308] relative overflow-hidden">
      {/* BACKGROUND TECH DECO */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0a1628_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* 1. HERO SECTION */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Animated section divider */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="cyber-line" />
      </motion.div>
      
      {/* 2. FEATURED PROJECTS PREVIEW */}
      <section id="projects" className="relative z-10 py-32 px-6 max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6"
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
            <h2 className="text-5xl font-black tracking-tighter mb-4">
              ENGINEERING<br/>
              <span className="text-cyber-cyan">PROJECTS</span>
            </h2>
            <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
              System Architecture & Intelligence
            </p>
          </div>
          <Link href="/projects">
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)" }}
              className="group flex items-center gap-3 px-6 py-3 rounded-full glass-card hover:border-cyber-cyan/30 transition-all"
            >
              <span className="text-sm font-bold">View Archive</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-cyber-cyan" />
            </motion.div>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard 
              title="Jarvis Assistant"
              description="A sophisticated Python voice assistant with customized GUI, capable of task automation and system control."
              tags={["Python", "PyQt", "Speech Recognition"]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ProjectCard 
              title="FinCore ERP"
              description="A full-stack accounting solution focusing on financial data integrity and real-time transaction tracking."
              tags={["Python", "Database Design", "Logic"]}
            />
          </motion.div>
        </div>
      </section>

      {/* Animated section divider */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="cyber-line" />
      </motion.div>

      {/* 3. TECH STACK WITH GRID SYSTEM */}
      <section id="skills" className="relative z-10 py-32 px-6 border-t border-cyber-cyan/5 bg-[#030a10]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex items-center gap-4 mb-16"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Cpu className="text-cyber-cyan" size={32} />
            <h2 className="text-3xl font-bold tracking-tight">Core Stack</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-cyber-cyan/20 to-transparent" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cyber-cyan/5 border border-cyber-cyan/10 rounded-2xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["Python", "Java", "Next.js", "SQL", "Verilog", "Pandas", "PyQt", "Git"].map((skill) => (
              <motion.div 
                key={skill} 
                variants={itemVariants}
                className="group relative bg-[#050510] p-10 flex flex-col items-center justify-center gap-4 hover:bg-cyber-cyan/5 transition-all cursor-crosshair"
              >
                <Binary size={20} className="text-slate-800 group-hover:text-cyber-cyan/50 transition-colors" />
                <span className="font-mono text-sm text-slate-400 group-hover:text-white group-hover:glow-text transition-all duration-300">{skill}</span>
                {/* Corner accent */}
                <motion.div
                  className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyber-cyan/10 group-hover:bg-cyber-cyan/50"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. DUAL DEGREE - THE "COMMAND CENTER" LOOK */}
      <section className="relative z-10 py-32 px-6 max-w-6xl mx-auto">
        <motion.div 
          className="relative overflow-hidden p-12 md:p-20 rounded-[40px] glass-card group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyber-cyan/10 blur-[100px] rounded-full group-hover:bg-cyber-cyan/20 transition-all duration-700" />
          <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-[10px] font-mono uppercase tracking-[0.2em] mb-8">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-cyber-cyan"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Academic Roadmap 2024-2028
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Dual-Path<br/>Engineering Mastery</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
              Bridging the gap between <span className="text-white">Computer Science</span> at Bennett University and <span className="text-cyber-cyan">Data Science</span> at IIT Madras.
            </p>
            <Link href="/education">
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 240, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-white text-black px-10 py-4 rounded-full font-black text-sm hover:bg-cyber-cyan transition-all shadow-xl shadow-cyber-cyan/5"
              >
                Verify Credentials <Layers size={18} />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}