"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, FileDown, Layers, Terminal, Sparkles, Activity } from "lucide-react";
import Link from "next/link";
import ParticleField from "./ParticleField";

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      <span className="animate-blink text-cyber-cyan">|</span>
    </span>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(700px circle at ${x}px ${y}px, rgba(0, 240, 255, 0.08), transparent 75%)`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-28 pb-20 overflow-hidden bg-[#030308] cursor-default">
      {/* PARTICLE FIELD */}
      <ParticleField />

      {/* INTERACTIVE SPOTLIGHT */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 transition duration-300"
        style={{ background: spotlightBackground }}
      />

      {/* CORNER ACCENTS - Cyberpunk style */}
      <div className="absolute top-28 left-8 w-12 h-12 border-t border-l border-cyber-cyan/30 opacity-70 pointer-events-none" />
      <div className="absolute top-28 left-8 w-5 h-5 border-t-2 border-l-2 border-cyber-cyan opacity-80 pointer-events-none" />
      <div className="absolute bottom-10 right-8 w-12 h-12 border-b border-r border-cyber-cyan/30 opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 right-8 w-5 h-5 border-b-2 border-r-2 border-cyber-cyan opacity-80 pointer-events-none" />

      {/* Floating telemetry stamps */}
      <motion.div
        className="absolute top-36 right-16 text-cyber-cyan/20 font-mono text-xs hidden lg:flex items-center gap-2 pointer-events-none"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Activity size={14} className="text-cyber-cyan/40" />
        {"SYS_ONLINE // 64-BIT // BUFFER_OK"}
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-16 text-cyber-cyan/20 font-mono text-xs hidden lg:flex items-center gap-2 pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, delay: 1.5, repeat: Infinity }}
      >
        <Terminal size={14} className="text-cyber-cyan/40" />
        {"[ BENNETT_CSE: 9.28 ] :: [ IITM_DS: 8.13 ]"}
      </motion.div>

      <div className="relative z-10 max-w-5xl">
        {/* TELEMETRY RADAR BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/25 mb-8 backdrop-blur-md"
        >
          <motion.span
            className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-xs text-cyber-cyan font-bold uppercase tracking-wider">

          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
            Dual-Degree Scholar
          </span>
        </motion.div>

        {/* HERO HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-cyber-cyan to-transparent" />
            <span className="text-cyber-cyan font-mono text-sm tracking-[0.25em] uppercase font-bold">
              Software Architect & Full-Stack Engineer
            </span>
          </div>

          <h1 className="text-[13vw] sm:text-[10vw] md:text-[8.5vw] font-black tracking-tighter leading-[0.85] mb-8 select-none">
            <span className="text-white">PRANJAL</span>
            <motion.span
              className="text-cyber-cyan inline-block glow-text"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              .
            </motion.span>
          </h1>
        </motion.div>

        {/* SUBTITLE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="max-w-3xl"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 leading-snug font-normal mb-10">
            Crafting <span className="text-white font-semibold">resilient web architectures</span>,
            real-time communication engines, and{" "}
            <span className="text-cyber-cyan font-semibold">intelligent AI systems</span>.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(0, 240, 255, 0.4)" }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-cyber-cyan hover:text-black transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.15)] group"
              >
                <span>View All 9 Projects</span>
                <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform text-black" />
              </motion.div>
            </Link>

            <a
              href="/resume.pdf"
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.04, borderColor: "rgba(0,240,255,0.6)" }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 border border-cyber-cyan/30 bg-cyber-cyan/5 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-cyber-cyan/15 transition-all flex items-center gap-2.5 backdrop-blur-sm group"
              >
                <FileDown size={16} className="text-cyber-cyan group-hover:translate-y-0.5 transition-transform" />
                <span>Resume PDF</span>
              </motion.div>
            </a>

            <Link href="/education">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-4 text-slate-400 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <ChevronRight size={14} className="text-cyber-cyan" />
                <span>Academic Log</span>
              </motion.div>
            </Link>
          </div>

          {/* TELEMETRY STATS HUD RIBBON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl glass-card border border-cyber-cyan/15 bg-[#030712]/70 backdrop-blur-xl"
          >
            <div className="p-3 border-r border-slate-800/80 last:border-none">
              <div className="text-2xl font-black text-white font-mono flex items-center gap-1">
                9<span className="text-cyber-cyan">+</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                Shipped Systems
              </div>
            </div>

            <div className="p-3 border-r border-slate-800/80 last:border-none">
              <div className="text-2xl font-black text-cyber-cyan font-mono">
                9.28
              </div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                Bennett CSE (Yr 1)
              </div>
            </div>

            <div className="p-3 border-r border-slate-800/80 last:border-none">
              <div className="text-2xl font-black text-emerald-400 font-mono">
                8.13
              </div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                IITM DS (Yr 1)
              </div>
            </div>

            <div className="p-3">
              <div className="text-2xl font-black text-purple-400 font-mono flex items-center gap-1">
                DUAL
              </div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                B.Tech + BS Track
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SIDEBAR TECH DECO */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 items-center pointer-events-none">
        <motion.div
          className="h-32 w-[1px]"
          style={{ background: "linear-gradient(to bottom, transparent, #00f0ff, transparent)" }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="font-mono text-[10px] [writing-mode:vertical-lr] tracking-[0.5em] text-cyber-cyan/40 select-none">
          BENNETT_CSE // IITM_DATASCIENCE
        </div>
        <motion.div
          className="h-32 w-[1px]"
          style={{ background: "linear-gradient(to bottom, transparent, #00f0ff, transparent)" }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        animate={{ y: [0, 6, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-mono text-cyber-cyan/50 tracking-widest uppercase">
          EXPLORE LOGS
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-cyber-cyan/50 to-transparent" />
      </motion.div>
    </section>
  );
}