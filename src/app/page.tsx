import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* 1. HERO SECTION */}
      <Hero />
      
      {/* 2. FEATURED PROJECTS PREVIEW */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400">A snapshot of my latest engineering challenges.</p>
          </div>
          <Link 
            href="/projects" 
            className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-all group"
          >
            View All Projects 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Jarvis Assistant"
            desc="A sophisticated Python voice assistant with customized GUI, capable of task automation and system control."
            tags={["Python", "PyQt", "Speech Recognition"]}
          />
          <ProjectCard 
            title="FinCore ERP"
            desc="A full-stack accounting solution focusing on financial data integrity and real-time transaction tracking."
            tags={["Python", "Database Design", "Logic"]}
          />
        </div>

        {/* Mobile-only "View All" button */}
        <div className="mt-10 md:hidden">
          <Link href="/projects" className="block text-center w-full py-4 border border-slate-800 rounded-xl text-blue-500">
            View All Projects
          </Link>
        </div>
      </section>

      {/* 3. QUICK SKILLS SNAPSHOT */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
         <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-blue-500 font-mono text-xl">02.</span> Technical Stack
         </h2>
         <div className="flex flex-wrap gap-4 justify-center">
            {["Python", "Java", "Next.js", "SQL", "Verilog", "Pandas", "PyQt", "Git"].map((skill) => (
               <div 
                 key={skill} 
                 className="px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all cursor-default text-slate-300 hover:text-white"
               >
                {skill}
               </div>
            ))}
         </div>
      </section>

      {/* 4. DUAL DEGREE CTA (The "Nudge") */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20">
          <h2 className="text-3xl font-bold mb-4">Pursuing Excellence</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Currently balancing a B.Tech in Computer Science at Bennett University and 
            a BS in Data Science from IIT Madras.
          </p>
          <Link 
            href="/education" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            See My Academic Journey
          </Link>
        </div>
      </section>
    </main>
  );
}