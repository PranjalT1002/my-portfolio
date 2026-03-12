"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-blue-400 font-mono mb-4">Dual Degree Engineer</p>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
          Pranjal Tripathi<span className="text-blue-500">.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between <span className="text-white">Software Architecture</span> and 
          <span className="text-white"> Data Intelligence</span>. Currently building 
          FinCore and Jarvis.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12"
      >
        <a href="#projects" className="border border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
          Explore Projects
        </a>
      </motion.div>
    </section>
  );
}