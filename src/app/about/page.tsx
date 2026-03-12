"use client";
import { motion } from "framer-motion";
import { Code2, Database, Cpu, Terminal } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { category: "Languages", items: ["Python", "Java", "C++", "Verilog", "SQL", "JavaScript"] },
    { category: "Frameworks & Tools", items: ["Next.js", "React", "Tailwind CSS", "PyQt", "Git", "Docker"] },
    { category: "Data Science", items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Statistical Modeling"] },
    { category: "Digital Design", items: ["Icarus Verilog", "GTKWave", "Logic Gates", "FPGA Basics"] },
  ];

  return (
    <main className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      {/* 1. THE NARRATIVE */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            Hello! I'm <span className="text-white font-semibold">Pranjal</span>, a developer and engineer 
            driven by the challenge of building systems that are both mathematically sound and 
            practically useful. 
          </p>
          <p>
            My academic path is a bit unique. I am currently pursuing a 
            <span className="text-blue-400"> B.Tech in Computer Science</span> while simultaneously 
            earning a <span className="text-emerald-400"> BS in Data Science from IIT Madras</span>. 
            This dual focus allows me to look at problems from two perspectives: the "how" of software 
            architecture and the "why" of data-driven decisions.
          </p>
          <p>
            I believe that the best software isn't just written—it's engineered. Whether I'm 
            simulating gate-level logic in <span className="text-white">Verilog</span> or 
            optimizing a database for an accounting platform like <span className="text-white">FinCore</span>, 
            my goal is always precision and efficiency.
          </p>
        </div>
      </motion.section>

      {/* 2. THE PHILOSOPHY (Icon Grid) */}
      <section className="grid md:grid-cols-2 gap-6 mb-24">
        {[
          { icon: <Cpu size={24} />, title: "Low-Level Thinking", desc: "Understanding the silicon through Digital Design and Verilog." },
          { icon: <Terminal size={24} />, title: "Automation", desc: "Building assistants like Jarvis to bridge the gap between human and machine." },
          { icon: <Database size={24} />, title: "Data Integrity", desc: "Architecting robust systems where every bit of data has a purpose." },
          { icon: <Code2 size={24} />, title: "Modern Web", desc: "Crafting performant, beautiful interfaces using Next.js and Tailwind." },
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-blue-500/30 transition-colors"
          >
            <div className="text-blue-500 mb-4">{item.icon}</div>
            <h3 className="text-white font-bold mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* 3. THE SKILLS MATRIX */}
      <section>
        <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6 font-mono">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}