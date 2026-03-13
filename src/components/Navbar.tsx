"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
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
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Education", href: "/education" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-[#030308]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,240,255,0.03)]" 
        : "bg-transparent border-b border-white/5"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo with blinking cursor */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal size={22} className="text-cyber-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all" />
          </motion.div>
          <span className="text-xl font-black tracking-tighter">
            PRANJAL<span className="text-cyber-cyan animate-blink">_</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-400 hover:text-white transition-all group py-2"
            >
              {link.name}
              {/* Animated underline */}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-cyber-cyan transition-all duration-300 ${
                pathname === link.href ? "w-full shadow-[0_0_8px_rgba(0,240,255,0.5)]" : "w-0 group-hover:w-full"
              }`} />
              {/* Active glow dot */}
              {pathname === link.href && (
                <motion.span 
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyber-cyan rounded-full shadow-[0_0_6px_rgba(0,240,255,0.8)]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-cyber-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="absolute top-20 left-0 w-full glass-card md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-bold transition-colors ${
                      pathname === link.href ? "text-cyber-cyan glow-text" : "text-slate-300 hover:text-cyber-cyan"
                    }`}
                  >
                    <span className="text-cyber-cyan/50 font-mono text-sm mr-2">0{i + 1}.</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}