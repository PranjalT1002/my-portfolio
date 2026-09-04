"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, Calendar, MapPin, ChevronDown, ChevronUp, GraduationCap, School, Binary, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Semester = {
  id: string;
  name: string;
  sgpa: string;
  courses: string[];
};

type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  theme: "cyan" | "emerald" | "purple" | "blue";
  icon: React.ReactNode;
  score?: string;
  description?: string;
  semesters?: Semester[];
};

const educationData: EducationItem[] = [
  {
    institution: "Bennett University",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2025 — 2029",
    location: "Greater Noida, India",
    theme: "cyan",
    icon: <GraduationCap size={24} />,
    score: "Year 1 Completed: 9.28 CGPA",
    description:
      "Focusing on core systems programming, software architecture, object-oriented design in Java, digital logic simulation in Verilog, and database management.",
    semesters: [
      {
        id: "sem-1",
        name: "Academic Year 1",
        sgpa: "9.28 CGPA",
        courses: [
          "Data Structures & Algorithms",
          "Digital Logic Design (Verilog)",
          "Discrete Mathematics",
          "Object-Oriented Programming (Java)",
          "Computer Networks Fundamentals"
        ]
      }
    ]
  },
  {
    institution: "IIT Madras (Indian Institute of Technology)",
    degree: "BS in Data Science and Applications",
    duration: "2025 — Present",
    location: "Chennai / Hybrid, India",
    theme: "emerald",
    icon: <Binary size={24} />,
    score: "Year 1 Completed: 8.13 CGPA",
    description:
      "Deep mathematical focus on computational thinking, applied statistics, linear algebra, Python data modeling, and algorithmic foundations.",
    semesters: [
      {
        id: "sem-1",
        name: "Academic Year 1",
        sgpa: "8.13 CGPA",
        courses: [
          "Mathematics for Data Science",
          "Statistics & Probability",
          "Python for Data Science",
          "Computational Thinking",
          "Linear Algebra & Optimization"
        ]
      }
    ]
  },
  {
    institution: "JEE Preparation Drop Year",
    degree: "Self-Study & Advanced Mathematics / Physics",
    duration: "2024 — 2025",
    location: "Lucknow, India",
    theme: "purple",
    icon: <BookOpen size={24} />,
    score: "JEE Mains: 94 Percentile",
    description:
      "Dedicated an intensive year to mastering advanced physical sciences, calculus, and analytical problem-solving with extreme discipline.",
  },
  {
    institution: "City Montessori School (CMS)",
    degree: "Class 12 (ISC Board - Science Stream)",
    duration: "2024",
    location: "Lucknow, India",
    theme: "blue",
    icon: <School size={24} />,
    score: "95.25% Aggregate",
    description:
      "Completed senior secondary education with high distinction in Physics, Chemistry, Mathematics, and Computer Science.",
  },
  {
    institution: "City Montessori School (CMS)",
    degree: "Class 10 (ICSE Board)",
    duration: "2022",
    location: "Lucknow, India",
    theme: "blue",
    icon: <School size={24} />,
    score: "94.60% Aggregate",
    description:
      "Built rigorous academic foundations with distinction across all core academic disciplines.",
  }
];

function getThemeStyles(theme: "cyan" | "emerald" | "purple" | "blue") {
  switch (theme) {
    case "cyan":
      return {
        text: "text-cyber-cyan",
        border: "border-cyber-cyan/30",
        bg: "bg-cyber-cyan/10",
        badge: "bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/30",
        glow: "rgba(0,240,255,0.2)",
      };
    case "emerald":
      return {
        text: "text-emerald-400",
        border: "border-emerald-400/30",
        bg: "bg-emerald-400/10",
        badge: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30",
        glow: "rgba(52,211,153,0.2)",
      };
    case "purple":
      return {
        text: "text-purple-400",
        border: "border-purple-400/30",
        bg: "bg-purple-400/10",
        badge: "bg-purple-400/15 text-purple-400 border-purple-400/30",
        glow: "rgba(192,132,252,0.2)",
      };
    case "blue":
      return {
        text: "text-blue-400",
        border: "border-blue-400/30",
        bg: "bg-blue-400/10",
        badge: "bg-blue-400/15 text-blue-400 border-blue-400/30",
        glow: "rgba(96,165,250,0.2)",
      };
  }
}

function SemesterCard({ semester, theme }: { semester: Semester; theme: "cyan" | "emerald" | "purple" | "blue" }) {
  const [isOpen, setIsOpen] = useState(true);
  const styles = getThemeStyles(theme);

  return (
    <div className={`mb-3 border rounded-xl overflow-hidden transition-all duration-300 bg-[#02040d]/80 ${styles.border}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none hover:bg-white/5"
      >
        <span className="font-mono text-sm font-bold text-slate-200">{semester.name}</span>
        <div className="flex items-center gap-4">
          <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${styles.badge}`}>
            {semester.sgpa}
          </span>
          {isOpen ? <ChevronUp size={16} className={styles.text} /> : <ChevronDown size={16} className="text-slate-500" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pb-4 pt-1 border-t border-slate-800/60">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 mt-2 font-mono">
                Key Verified Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {semester.courses.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#050917] text-slate-300 border border-slate-800 font-mono"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EducationPage() {
  return (
    <main className="min-h-screen py-28 px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyber-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <motion.span
            className="w-12 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
          <span className="text-cyber-cyan font-mono text-sm tracking-widest uppercase font-bold">
            Academic Track // Roadmap
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
          Education<span className="text-cyber-cyan animate-blink">_</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Concurrent dual-degree progression bridging Computer Science Engineering at Bennett University and Data Science Applications at IIT Madras.
        </p>
      </motion.div>

      {/* Timeline wire */}
      <div className="relative">
        <div className="absolute left-[22px] md:left-[30px] top-0 bottom-0 w-[1px] hidden md:block">
          <motion.div
            className="w-full h-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ originY: 0, background: "linear-gradient(to bottom, rgba(0,240,255,0.5), rgba(52,211,153,0.3), transparent)" }}
          />
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => {
            const styles = getThemeStyles(edu.theme);

            return (
              <motion.div
                key={edu.institution + edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group md:pl-16"
              >
                {/* Timeline node */}
                <div
                  className={`absolute left-4 md:left-6 top-10 w-3.5 h-3.5 rounded-full border-2 hidden md:block ${styles.border} ${styles.bg}`}
                />

                <div className="relative glass-card p-7 md:p-10 rounded-3xl border border-cyber-cyan/15 bg-[#030614]/80 corner-brackets">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div className="flex gap-4 items-start">
                      <div className={`p-3 rounded-xl ${styles.bg} ${styles.text} border ${styles.border} mt-1`}>
                        {edu.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{edu.institution}</h2>
                        <h3 className={`text-lg font-medium ${styles.text}`}>
                          {edu.degree}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-xs text-slate-400 font-mono gap-1.5">
                      <div className="flex items-center gap-2 bg-[#050917] px-3 py-1 rounded-full border border-slate-800">
                        <Calendar size={12} className={styles.text} /> {edu.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={12} /> {edu.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights/Description */}
                  <div className="mb-6">
                    {edu.score && (
                      <div className={`inline-block mb-3 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide ${styles.badge}`}>
                        {edu.score}
                      </div>
                    )}
                    {edu.description && (
                      <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  {/* Semesters Section (If applicable) */}
                  {edu.semesters && edu.semesters.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-slate-800/60">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2 font-mono">
                        <BookOpen size={15} /> Academic Performance Records
                      </h4>
                      <div className="space-y-2">
                        {edu.semesters.map((sem) => (
                          <SemesterCard key={sem.id} semester={sem} theme={edu.theme} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-10 rounded-3xl glass-card border border-cyber-cyan/20 text-center corner-brackets bg-[#040818]/70"
      >
        <Award className="mx-auto mb-4 text-cyber-cyan drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]" size={36} />
        <h3 className="text-2xl font-bold mb-2 text-white">Dual-Discipline Commitment</h3>
        <p className="text-slate-300 max-w-xl mx-auto mb-6 text-sm">
          Balancing systems software engineering with data science methodologies to build resilient, next-generation computational products.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-full bg-cyber-cyan text-black font-mono text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
          >
            Inspect Built Systems
          </Link>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full glass-card border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs uppercase tracking-wider hover:bg-cyber-cyan/10 transition-all"
          >
            Download Resume
          </a>
        </div>
      </motion.section>
    </main>
  );
}