"use client";
import { motion } from "framer-motion";
import { Code2, Database, Cpu, Terminal } from "lucide-react";

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
        <div className="flex items-center gap-3 mb-6">
          <motion.span 
            className="w-12 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
          <span className="text-cyber-cyan font-mono text-sm tracking-widest uppercase">Profile</span>
        </div>
        <h1 className="text-5xl font-bold mb-8">
          About <span className="shimmer-text">Me</span>
        </h1>
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            Hello! I&apos;m <span className="text-white font-semibold">Pranjal</span>, a developer and engineer 
            driven by the challenge of building systems that are both mathematically sound and 
            practically useful. 
          </p>
          <p>
            My academic path is a bit unique. I am currently pursuing a 
            <span className="text-cyber-cyan"> B.Tech in Computer Science</span> while simultaneously 
            earning a <span className="text-emerald-400"> BS in Data Science from IIT Madras</span>. 
            This dual focus allows me to look at problems from two perspectives: the &quot;how&quot; of software 
            architecture and the &quot;why&quot; of data-driven decisions.
          </p>
          <p>
            I believe that the best software isn&apos;t just written—it&apos;s engineered. Whether I&apos;m 
            simulating gate-level logic in <span className="text-white">Verilog</span> or 
            optimizing a database for an accounting platform like <span className="text-white">FinCore</span>, 
            my goal is always precision and efficiency.
          </p>
        </div>
      </motion.section>

      {/* 2. THE PHILOSOPHY (Icon Grid) */}
      <motion.section 
        className="grid md:grid-cols-2 gap-6 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { icon: <Cpu size={24} />, title: "Low-Level Thinking", desc: "Understanding the silicon through Digital Design and Verilog." },
          { icon: <Terminal size={24} />, title: "Automation", desc: "Building assistants like Jarvis to bridge the gap between human and machine." },
          { icon: <Database size={24} />, title: "Data Integrity", desc: "Architecting robust systems where every bit of data has a purpose." },
          { icon: <Code2 size={24} />, title: "Modern Web", desc: "Crafting performant, beautiful interfaces using Next.js and Tailwind." },
        ].map((item) => (
          <motion.div 
            key={item.title}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 0 25px rgba(0, 240, 255, 0.1)",
            }}
            className="p-6 rounded-2xl glass-card corner-brackets hover:border-cyber-cyan/20 transition-all duration-300"
          >
            <div className="text-cyber-cyan mb-4">{item.icon}</div>
            <h3 className="text-white font-bold mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Animated divider */}
      <motion.div 
        className="mb-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="cyber-line" />
      </motion.div>

      {/* 3. THE SKILLS MATRIX */}
      <section>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <h2 className="text-3xl font-bold">Technical Expertise</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-cyber-cyan/20 to-transparent" />
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={itemVariants}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-cyber-cyan mb-6 font-mono flex items-center gap-2">
                <span className="text-cyber-cyan/30">{">"}</span>
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
                    className="px-4 py-2 rounded-lg glass-card text-slate-300 text-sm hover:text-cyber-cyan hover:border-cyber-cyan/20 transition-all duration-300 cursor-default"
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