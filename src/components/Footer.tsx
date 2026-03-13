"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyber-cyan/10 bg-[#030308] py-16 px-6 overflow-hidden">
      {/* Animated top border line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, #00f0ff, #2563eb, transparent)" }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Matrix rain decoration */}
      <div className="absolute top-0 right-10 opacity-[0.03] font-mono text-[10px] text-cyber-cyan leading-4 hidden lg:block pointer-events-none select-none">
        {["01101001", "10110100", "01001011", "11010010", "00101101", "10010110", "01100101", "11001010", "00110101", "10101100", "01010011", "11100110", "00011011", "10001101", "01110010", "11011001", "00100110", "10110011", "01001100", "11010101"].map((binary, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
          >
            {binary}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* 1. BRAND & BIO */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tighter hover:text-cyber-cyan transition-colors group">
              PRANJAL<motion.span
                className="text-cyber-cyan inline-block"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >.</motion.span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Computer Science & Data Science student.
              Focused on building robust architectures and intelligent systems.
            </p>
            <div className="flex gap-3 mt-6">
              <motion.a
                href="https://github.com/PranjalT1002"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)" }}
                className="p-3 rounded-xl glass-card hover:text-cyber-cyan transition-all"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/pranjal-tripathi-iitm-bennett"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)" }}
                className="p-3 rounded-xl glass-card hover:text-cyber-cyan transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* 2. DIRECT CONTACT INFO */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="text-cyber-cyan font-mono text-sm">{"//"}</span>
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 group">
                <div className="p-2 rounded-lg glass-card group-hover:text-cyber-cyan transition-all">
                  <Mail size={18} />
                </div>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pranjallko06@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-cyan transition-colors text-sm">
                  pranjallko06@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 group">
                <div className="p-2 rounded-lg glass-card group-hover:text-emerald-400 transition-all">
                  <Phone size={18} />
                </div>
                <span className="hover:text-white transition-colors text-sm">
                  +91 84678 53399
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="p-2 rounded-lg glass-card">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">Greater Noida, India</span>
              </li>
            </ul>
          </div>

          {/* 3. NAVIGATION QUICK LINKS */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="text-cyber-cyan font-mono text-sm">{"//"}</span>
              Sitemap
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-400">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "About", href: "/about" },
                { name: "Education", href: "/education" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-cyber-cyan transition-colors flex items-center gap-1 group"
                >
                  <span className="text-cyber-cyan/30 group-hover:text-cyber-cyan transition-colors">›</span>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 text-sm font-bold text-white glass-card px-5 py-3 rounded-xl hover:text-cyber-cyan transition-all"
              >
                Download Resume <ArrowUpRight size={14} />
              </motion.a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT — Terminal style */}
        <div className="pt-8 border-t border-cyber-cyan/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-600 font-mono">
          <p className="flex items-center gap-2">
            <span className="text-cyber-cyan/40">{">"}</span>
            © {currentYear} PRANJAL — BU & IITM DUAL DEGREE
            <span className="animate-blink text-cyber-cyan/40">_</span>
          </p>
          <p className="text-slate-700">
            crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}