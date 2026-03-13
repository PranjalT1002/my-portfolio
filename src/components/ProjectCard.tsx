"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 0 30px rgba(0, 240, 255, 0.15), 0 0 60px rgba(0, 240, 255, 0.05)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative p-8 rounded-2xl glass-card corner-brackets tech-border overflow-hidden"
    >
      {/* Scan line on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"
          animate={{ y: [-20, 300] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent" />
      
      {/* Status indicator */}
      <div className="flex items-center gap-2 mb-4">
        <motion.div 
          className="w-2 h-2 rounded-full bg-cyber-cyan"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="font-mono text-[10px] text-cyber-cyan/50 uppercase tracking-widest">Active Project</span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 text-xs font-mono bg-cyber-cyan/5 text-cyber-cyan/70 rounded-full border border-cyber-cyan/10 group-hover:border-cyber-cyan/30 group-hover:text-cyber-cyan transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-sm font-bold text-cyber-cyan/70 hover:text-cyber-cyan transition-colors group/link"
        >
          <span className="font-mono text-xs text-cyber-cyan/30">{">"}</span>
          View Source Code 
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </a>
      )}
    </motion.div>
  );
}