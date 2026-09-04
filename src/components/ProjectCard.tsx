"use client";
import { motion } from "framer-motion";
import { ExternalLink, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  link?: string;
  linkText?: string;
  categoryLabel?: string;
  status?: string;
  metrics?: string[];
  systemCode?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  link,
  linkText,
  categoryLabel,
  status = "Active Project",
  metrics,
  systemCode,
  featured = false,
}: ProjectCardProps) {
  const isGithub = link?.includes("github.com");
  const defaultLinkText = isGithub ? "View Source Code" : "Visit Live Site";
  const actionText = linkText || defaultLinkText;

  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 12px 40px rgba(0, 240, 255, 0.15), 0 0 20px rgba(0, 240, 255, 0.08)",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`group relative flex flex-col justify-between p-7 md:p-8 rounded-2xl glass-card corner-brackets tech-border overflow-hidden h-full ${
        featured ? "border-cyber-cyan/30 bg-[#060818]/80" : "bg-[#040611]/70"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyber-cyan/5 rounded-full blur-3xl group-hover:bg-cyber-cyan/15 transition-all duration-700 pointer-events-none" />

      {/* Cyber Scan line on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan/60 to-transparent"
          animate={{ y: [-20, 420] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent" />

      <div>
        {/* Telemetry Header */}
        <div className="flex items-center justify-between gap-3 mb-4 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="text-cyber-cyan font-bold tracking-widest">
              {systemCode || "PRJ-SYS"}
            </span>
            {categoryLabel && (
              <>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400 uppercase tracking-wider">{categoryLabel}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20">
            <motion.span
              className={`w-2 h-2 rounded-full ${isGithub ? "bg-amber-400" : "bg-emerald-400"}`}
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span
              className={`text-[10px] uppercase font-bold tracking-wider ${
                isGithub ? "text-amber-300" : "text-emerald-400"
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-4">
          <h3 className="text-2xl font-black text-white group-hover:text-cyber-cyan transition-colors duration-300 flex items-center gap-2">
            {title}
            {featured && (
              <Sparkles size={16} className="text-cyber-cyan inline-block opacity-80" />
            )}
          </h3>
          {subtitle && (
            <p className="text-xs font-mono text-cyber-cyan/70 mt-1 uppercase tracking-wider">
              {subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Technical Highlights / Metrics (if provided) */}
        {metrics && metrics.length > 0 && (
          <div className="mb-6 space-y-1.5 p-3.5 rounded-xl bg-[#02040b]/80 border border-cyber-cyan/10 text-xs font-mono text-slate-300">
            {metrics.map((metric, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300/90">
                <span className="text-cyber-cyan text-[10px]">›</span>
                <span className="truncate">{metric}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-mono bg-cyber-cyan/5 text-cyber-cyan/80 rounded-md border border-cyber-cyan/15 group-hover:border-cyber-cyan/35 group-hover:text-cyber-cyan transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Link Button */}
        {link && (
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-cyber-cyan/10 hover:bg-cyber-cyan text-cyber-cyan hover:text-black font-mono text-xs font-bold transition-all duration-300 border border-cyber-cyan/25 hover:border-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.1)] group/btn"
            >
              <span>{actionText}</span>
              <ExternalLink
                size={13}
                className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
              />
            </a>

            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest hidden sm:inline-block">
              {isGithub ? "REPO // GIT" : "HTTP // LIVE"}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}