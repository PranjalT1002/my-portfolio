"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import { ALL_PROJECTS, Project } from "../../lib/projectsData";
import { Search, Filter, Sparkles, Terminal, Layers, ArrowUpRight, RotateCcw } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
};

type FilterCategory = "all" | "fullstack" | "web" | "ai";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { id: FilterCategory; label: string; count: number }[] = [
    { id: "all", label: "All Systems", count: ALL_PROJECTS.length },
    {
      id: "fullstack",
      label: "Full-Stack & Systems",
      count: ALL_PROJECTS.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "web",
      label: "Web Apps & UI/UX",
      count: ALL_PROJECTS.filter((p) => p.category === "web").length,
    },
    {
      id: "ai",
      label: "AI & Automation",
      count: ALL_PROJECTS.filter((p) => p.category === "ai").length,
    },
  ];

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      if (!searchQuery.trim()) return matchesCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.categoryLabel.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        project.metrics.some((m) => m.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen py-28 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyber-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. ARCHIVE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14"
      >
        <div className="flex items-center gap-3 mb-4">
          <motion.span
            className="h-[2px] w-12 bg-gradient-to-r from-cyber-cyan to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
          <span className="text-cyber-cyan font-mono text-sm tracking-widest uppercase font-bold">
            Engineering Telemetry // Archive
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          Systems <span className="shimmer-text">Logbook.</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed">
          Comprehensive repository of all platforms, systems, and digital experiences architected to date.
          From low-latency real-time communication to high-impact web deployments.
        </p>
      </motion.div>

      {/* 2. TELEMETRY STATS HUD BAR */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl glass-card border border-cyber-cyan/15 mb-10 bg-[#030614]/70"
      >
        <div className="p-3 border-r border-slate-800 last:border-none">
          <div className="text-2xl md:text-3xl font-black font-mono text-white">9</div>
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">
            Total Projects Indexed
          </div>
        </div>

        <div className="p-3 border-r border-slate-800 last:border-none">
          <div className="text-2xl md:text-3xl font-black font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            8
          </div>
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">
            Live Deployments
          </div>
        </div>

        <div className="p-3 border-r border-slate-800 last:border-none">
          <div className="text-2xl md:text-3xl font-black font-mono text-cyber-cyan">100%</div>
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">
            Shipped & Accessible
          </div>
        </div>

        <div className="p-3">
          <div className="text-2xl md:text-3xl font-black font-mono text-purple-400">REST + WS</div>
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">
            Protocol Breadth
          </div>
        </div>
      </motion.div>

      {/* 3. INTERACTIVE SEARCH & CATEGORY FILTER BAR */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-card border border-cyber-cyan/10 bg-[#030614]/60">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-black bg-cyber-cyan shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-black/20 text-black font-bold" : "bg-white/5 text-slate-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px] md:min-w-[320px]">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech, keyword or name..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl glass-card border border-cyber-cyan/15 focus:border-cyber-cyan text-sm text-white placeholder:text-slate-500 font-mono focus:outline-none focus:ring-1 focus:ring-cyber-cyan/50 transition-all bg-[#040816]/70"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white p-1"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Summary / Count Indicator */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-cyber-cyan"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span>
              Displaying <strong className="text-white font-bold">{filteredProjects.length}</strong> of {ALL_PROJECTS.length} Systems
            </span>
          </div>

          {(selectedCategory !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1.5 text-cyber-cyan hover:underline transition-all"
            >
              <RotateCcw size={12} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* 4. THE PROJECTS GRID */}
      {filteredProjects.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`${selectedCategory}-${searchQuery}`}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
            >
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                tags={project.tags}
                link={project.link}
                linkText={project.linkText}
                categoryLabel={project.categoryLabel}
                status={project.status}
                metrics={project.metrics}
                systemCode={project.systemCode}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        /* Empty State */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-24 p-8 rounded-3xl glass-card border border-cyber-cyan/20 max-w-lg mx-auto"
        >
          <Terminal size={40} className="mx-auto text-cyber-cyan/50 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No matching systems found</h3>
          <p className="text-slate-400 text-sm mb-6">
            No projects matched query &quot;{searchQuery}&quot; under the selected filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-6 py-2.5 rounded-xl bg-cyber-cyan text-black font-mono text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
          >
            Clear Search & Filters
          </button>
        </motion.div>
      )}
    </main>
  );
}