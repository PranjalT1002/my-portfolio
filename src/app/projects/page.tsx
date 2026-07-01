"use client";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";

const allProjects = [
  {
    title: "Jarvis AI Assistant",
    description: "A sophisticated Python voice assistant with customized GUI, capable of task automation, system control, and real-time speech processing.",
    tags: ["Python", "PyQt", "Speech Recognition", "Automation"],
    link: "https://github.com/PranjalT1002"
  },
  {
    title: "Locus Path",
    description: "A creative agency landing page that transforms brands into digital experiences. Showcases a dynamic portfolio, services index, interactive forms, and magnetic CTA components.",
    tags: ["HTML5", "CSS3", "JavaScript", "Creative Agency", "Interactive UI"],
    link: "https://locus-path-web.vercel.app/",
    linkText: "Visit Live Site"
  },
  {
    title: "Brew & Soul",
    description: "An artisanal coffee cafe portal featuring a custom animated preloader, dynamic interactive menu with tab filters, and a responsive client feedback testimonial carousel.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vite", "Web Design"],
    link: "https://cafe-portal-beta.vercel.app/",
    linkText: "Visit Live Site"
  },
  {
    title: "Maison Élégance",
    description: "A premium luxury fashion e-commerce storefront landing page featuring high-fidelity interactive animations, magnetic hover effects, lookbook gallery, and interactive shopping cart.",
    tags: ["HTML5", "CSS3", "JavaScript", "E-Commerce", "UX/UI"],
    link: "https://boutique-indol.vercel.app/",
    linkText: "Visit Live Site"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <motion.span
            className="h-[2px] w-12 bg-gradient-to-r from-cyber-cyan to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
          <span className="text-cyber-cyan font-mono text-sm tracking-widest uppercase">Archive</span>
        </div>
        <h1 className="text-6xl font-black mb-6 tracking-tighter">
          Engineering <span className="shimmer-text">Logbook.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          A deep dive into the systems I&apos;ve architected—ranging from low-level
          digital logic to high-level automation and data science tools.
        </p>
      </motion.div>

      {/* Project count indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-3 mb-8"
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-cyber-cyan"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
          {allProjects.length} projects indexed
        </span>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-cyber-cyan/10 to-transparent" />
      </motion.div>

      {/* The Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {allProjects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              linkText={project.linkText}
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}