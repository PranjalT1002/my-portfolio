"use client";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";

const allProjects = [
  {
    title: "Jarvis AI Assistant",
    description: "A sophisticated Python voice assistant with customized GUI, capable of task automation, system control, and real-time speech processing.",
    tags: ["Python", "PyQt", "Speech Recognition", "Automation"],
    link: "https://github.com/PranjalT1002" // Replace with actual project link
  },
  {
    title: "FinCore ERP",
    description: "A full-stack accounting solution focusing on financial data integrity, real-time transaction tracking, and complex ledger logic.",
    tags: ["Python", "SQLite", "Logic Design", "Financial Tech"],
    link: "https://github.com/PranjalT1002"
  },
  {
    title: "Digital Design (Verilog)",
    description: "Hardware-level implementation of logic gates and finite state machines. Simulated using Icarus Verilog and GTKWave.",
    tags: ["Verilog", "HDL", "Digital Logic", "Icarus"],
    link: "https://github.com/PranjalT1002"
  },
  {
    title: "Data Insights Hub",
    description: "Advanced data analysis project from my IIT Madras curriculum, utilizing statistical modeling and predictive analytics on complex datasets.",
    tags: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    link: "https://github.com/PranjalT1002"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
      {/* Header section with Framer Motion for a smooth 'tech' entrance */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
           <span className="h-[1px] w-12 bg-blue-500"></span>
           <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">Archive</span>
        </div>
        <h1 className="text-6xl font-black mb-6 tracking-tighter">
          Engineering <span className="text-slate-500">Logbook.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          A deep dive into the systems I've architected—ranging from low-level 
          digital logic to high-level automation and data science tools.
        </p>
      </motion.div>

      {/* The Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {allProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard 
              title={project.title}
              description={project.description} // Matches 'description' in ProjectCard
              tags={project.tags}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}