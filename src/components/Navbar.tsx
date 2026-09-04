"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects", badge: "8" },
    { name: "About", href: "/about" },
    { name: "Education", href: "/education", badge: "Dual" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030308]/90 backdrop-blur-xl border-b border-cyber-cyan/15 shadow-[0_4px_30px_rgba(0,240,255,0.06)]"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo with blinking cursor */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
            className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 group-hover:border-cyber-cyan/50 transition-colors"
          >
            <Terminal
              size={20}
              className="text-cyber-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.9)] transition-all"
            />
          </motion.div>
          <span className="text-xl font-black tracking-tighter">
            PRANJAL<span className="text-cyber-cyan animate-blink">_</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-all group py-2 flex items-center gap-1.5 ${
                  pathname === link.href ? "text-white font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${
                      pathname === link.href
                        ? "bg-cyber-cyan text-black font-bold"
                        : "bg-white/5 text-cyber-cyan/70 border border-cyber-cyan/10 group-hover:border-cyber-cyan/30"
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyber-cyan to-blue-500 transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Quick Resume CTA Button */}
          <a
            href="/resume.pdf"
            download="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-cyan/10 hover:bg-cyber-cyan text-cyber-cyan hover:text-black font-mono text-xs font-bold border border-cyber-cyan/30 hover:border-cyber-cyan transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.08)] group"
          >
            <FileDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden p-2.5 rounded-xl bg-cyber-cyan/5 border border-cyber-cyan/20 text-slate-300 hover:text-cyber-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full glass-card md:hidden overflow-hidden border-b border-cyber-cyan/20 shadow-2xl bg-[#030308]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                      pathname === link.href
                        ? "bg-cyber-cyan/10 text-cyber-cyan font-bold border border-cyber-cyan/30"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-cyan/50 font-mono text-xs">0{i + 1}.</span>
                      <span className="text-base">{link.name}</span>
                    </div>
                    {link.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-cyber-cyan text-black font-bold text-sm shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  <FileDown size={18} />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}