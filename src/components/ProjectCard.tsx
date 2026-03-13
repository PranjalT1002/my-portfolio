"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string; // Optional link
}

export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)", // Blue glow on hover
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-950/50 hover:border-blue-500/50 transition-colors duration-300"
    >
      {/* Optional Top Decor Line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 mb-4 line-clamp-3">
        {description}
      </p>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 text-xs font-mono bg-blue-950 text-blue-300 rounded-full border border-blue-800"
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
          className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Source Code →
        </a>
      )}
    </motion.div>
  );
}