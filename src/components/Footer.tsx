"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050505] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* 1. BRAND & BIO */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tighter hover:text-blue-500 transition-colors">
              PRANJAL<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Computer Science & Data Science student. 
              Focused on building robust architectures and intelligent systems.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://github.com/PranjalT1002" // Your actual GitHub
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/10 hover:text-blue-400 transition-all"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/pranjal-tripathi-iitm-bennett" // Paste your LinkedIn URL here
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/10 hover:text-blue-400 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
              

          {/* 2. DIRECT CONTACT INFO */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all">
                  <Mail size={18} />
                </div>
                <a href="mailto:pranjallko06@gmail.com" className="hover:text-white transition-colors">
                  pranjallko06@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all">
                  <Phone size={18} />
                </div>
                <span className="hover:text-white transition-colors">
                  +91 84678 53399
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin size={18} />
                </div>
                <span>Greater Noida, India</span>
              </li>
            </ul>
          </div>

          {/* 3. NAVIGATION QUICK LINKS */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Sitemap</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-400">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
              <Link href="/education" className="hover:text-blue-400 transition-colors">Education</Link>
            </div>
            <div className="pt-4">
               <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
              >
                Download Resume <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-600 font-mono">
          <p>© {currentYear} PRANJAL — BU & IITM DUAL DEGREE</p>
          
        </div>
      </div>
      </div>
    </footer>
  );
}