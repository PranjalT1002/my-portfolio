"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  // Mouse tracking for the spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-[#050505] cursor-default">
      
      {/* INTERACTIVE SPOTLIGHT: This follows your mouse */}
      <motion.div 
        className="pointer-events-none absolute -inset-px z-0 transition duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(37, 99, 235, 0.08), transparent 80%)`
          ),
        }}
      />

      {/* SCHEMATIC CORNER ACCENTS */}
      <div className="absolute top-32 left-10 w-8 h-8 border-t-2 border-l-2 border-white/5 opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-white/5 opacity-50"></div>

      <div className="relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-12 h-[1px] bg-blue-500"></span>
          <span className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase font-bold">
            Systems & Intelligence
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[12vw] md:text-[9vw] font-black tracking-tighter leading-[0.8] mb-10 text-white select-none">
            PRANJAL<span className="text-blue-600">.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="text-2xl md:text-4xl text-slate-400 leading-tight font-medium mb-12">
            Engineering <span className="text-white italic">resilient software</span> and 
            <span className="text-white"> neural systems</span> for the next-gen web.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link 
              href="/projects" 
              className="px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3 group"
            >
              Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/education" 
              className="px-10 py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/5 transition-all"
            >
              Academic Log
            </Link>
          </div>
        </motion.div>
      </div>

      {/* SIDEBAR TECH DECO */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-20">
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
        <div className="font-mono text-[10px] [writing-mode:vertical-lr] tracking-[0.5em] text-slate-500">
          BU // CS // IITM // DS
        </div>
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
      </div>
    </section>
  );
}