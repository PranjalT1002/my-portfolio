import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { ArrowRight, Binary, Cpu, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] relative overflow-hidden">
      {/* BACKGROUND TECH DECO */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* 1. HERO SECTION */}
      <div className="relative z-10">
        <Hero />
      </div>
      
      {/* 2. FEATURED PROJECTS PREVIEW */}
      <section id="projects" className="relative z-10 py-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
            <h2 className="text-5xl font-black tracking-tighter mb-4">ENGINEERING<br/><span className="text-blue-500">PROJECTS</span></h2>
            <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">System Architecture & Intelligence</p>
          </div>
          <Link 
            href="/projects" 
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
          >
            <span className="text-sm font-bold">View Archive</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-blue-500" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <ProjectCard 
            title="Jarvis Assistant"
            description="A sophisticated Python voice assistant with customized GUI, capable of task automation and system control."
            tags={["Python", "PyQt", "Speech Recognition"]}
          />
          <ProjectCard 
            title="FinCore ERP"
            description="A full-stack accounting solution focusing on financial data integrity and real-time transaction tracking."
            tags={["Python", "Database Design", "Logic"]}
          />
        </div>
      </section>

      {/* 3. TECH STACK WITH GRID SYSTEM */}
      <section id="skills" className="relative z-10 py-32 px-6 border-t border-white/5 bg-[#070707]">
         <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
                <Cpu className="text-blue-500" size={32} />
                <h2 className="text-3xl font-bold tracking-tight">Core Stack</h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                {["Python", "Java", "Next.js", "SQL", "Verilog", "Pandas", "PyQt", "Git"].map((skill) => (
                    <div 
                        key={skill} 
                        className="group relative bg-[#0a0a0a] p-10 flex flex-col items-center justify-center gap-4 hover:bg-blue-500/5 transition-all cursor-crosshair"
                    >
                        <Binary size={20} className="text-slate-800 group-hover:text-blue-500/50 transition-colors" />
                        <span className="font-mono text-sm text-slate-400 group-hover:text-white transition-colors">{skill}</span>
                        {/* Corner Accents */}
                        <div className="absolute top-2 right-2 w-1 h-1 bg-white/10 rounded-full"></div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 4. DUAL DEGREE - THE "COMMAND CENTER" LOOK */}
      <section className="relative z-10 py-32 px-6 max-w-6xl mx-auto">
        <div className="relative overflow-hidden p-12 md:p-20 rounded-[40px] bg-[#0d0d0d] border border-white/5 group">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700"></div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-8">
              Academic Roadmap 2024-2028
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Dual-Path<br/>Engineering Mastery</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
              Bridging the gap between <span className="text-white">Computer Science</span> at Bennett University and <span className="text-blue-400">Data Science</span> at IIT Madras.
            </p>
            <Link 
              href="/education" 
              className="inline-flex items-center gap-4 bg-white text-black px-10 py-4 rounded-full font-black text-sm hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-white/5"
            >
              Verify Credentials <Layers size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}