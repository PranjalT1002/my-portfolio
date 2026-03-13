"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
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
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 240, 255, 0.06), transparent 80%)`
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
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-[#030308] cursor-default">

      {/* PARTICLE FIELD */}
      <ParticleField />

      {/* INTERACTIVE SPOTLIGHT */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 transition duration-300"
        style={{ background: spotlightBackground }}
      />

      {/* CORNER ACCENTS - Cyberpunk style */}
      <div className="absolute top-32 left-10 w-12 h-12 border-t border-l border-cyber-cyan/20 opacity-60" />
      <div className="absolute top-32 left-10 w-6 h-6 border-t-2 border-l-2 border-cyber-cyan/40 opacity-60" />
      <div className="absolute bottom-10 right-10 w-12 h-12 border-b border-r border-cyber-cyan/20 opacity-60" />
      <div className="absolute bottom-10 right-10 w-6 h-6 border-b-2 border-r-2 border-cyber-cyan/40 opacity-60" />

      {/* Floating tech decorations */}
      <motion.div
        className="absolute top-40 right-20 text-cyber-cyan/10 font-mono text-xs hidden md:block"
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {"<system.init />"}
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-cyber-cyan/10 font-mono text-xs hidden md:block"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, delay: 2, repeat: Infinity }}
      >
        {"[ neural.link.active ]"}
      </motion.div>

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <motion.span
            className="w-12 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
          />
          <span className="text-cyber-cyan font-mono text-sm tracking-[0.2em] uppercase font-bold">
            Systems & Intelligence
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[12vw] md:text-[9vw] font-black tracking-tighter leading-[0.8] mb-10 select-none">
            <span className="text-white">PRANJAL</span>
            <motion.span
              className="text-cyber-cyan inline-block"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >.</motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl"
        >
          <p className="text-2xl md:text-4xl text-slate-400 leading-tight font-medium mb-12">
            Engineering <span className="text-white italic">resilient software</span> and
            <span className="text-cyber-cyan"> neutral systems</span> for the next-gen web.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-cyber-cyan hover:text-black transition-all flex items-center gap-3 group"
              >
                Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
            <Link href="/education">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border border-cyber-cyan/20 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-cyber-cyan/5 hover:border-cyber-cyan/40 transition-all flex items-center gap-2"
              >
                <ChevronRight size={14} className="text-cyber-cyan" />
                Academic Log
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* SIDEBAR TECH DECO */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 items-center">
        <motion.div
          className="h-32 w-[1px]"
          style={{ background: "linear-gradient(to bottom, transparent, #00f0ff, transparent)" }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="font-mono text-[10px] [writing-mode:vertical-lr] tracking-[0.5em] text-cyber-cyan/30">
          BU // CS // IITM // DS
        </div>
        <motion.div
          className="h-32 w-[1px]"
          style={{ background: "linear-gradient(to bottom, transparent, #00f0ff, transparent)" }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-mono text-cyber-cyan/40 tracking-widest">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cyber-cyan/40 to-transparent" />
      </motion.div>
    </section>
  );
}