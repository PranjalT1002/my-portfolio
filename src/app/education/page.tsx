"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, Calendar, MapPin, ChevronDown, ChevronUp, GraduationCap, School, Binary } from "lucide-react";
import { useState } from "react";

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
  color: "cyan" | "emerald" | "purple" | "blue";
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
    color: "cyan",
    icon: <GraduationCap size={24} />,
    description: "Focusing on core software engineering, digital logic design, and full-stack development.",
    semesters: [
      {
        id: "sem-1",
        name: "Semester 1",
        sgpa: "TBD",
        courses: ["Data Structures", "Digital Design (Verilog)", "Discrete Math", "Java Programming"]
      }
      // Add more semesters here as they complete
    ]
  },
  {
    institution: "IIT Madras",
    degree: "BS in Data Science and Applications",
    duration: "2025 — Present",
    location: "Remote/Chennai, India",
    color: "emerald",
    icon: <Binary size={24} />,
    description: "Deep diving into statistical modeling, computational thinking, and large-scale data analysis.",
    semesters: [
      {
        id: "sem-1",
        name: "Semester 1",
        sgpa: "TBD",
        courses: ["Python for Data Science", "Statistics", "Computational Thinking", "Linear Algebra"]
      }
      // Add more semesters here as they complete
    ]
  },
  {
    institution: "JEE Preparation Drop Year",
    degree: "Self-Study & Intensive Preparation",
    duration: "2024 — 2025",
    location: "Lucknow, India",
    color: "purple",
    icon: <BookOpen size={24} />,
    score: "JEE Mains 2025: 94 Percentile",
    description: "Dedicated a year to rigorous academic preparation focusing on Physics, Chemistry, and Advanced Mathematics, developing strong analytical and problem-solving skills."
  },
  {
    institution: "City Montessori School",
    degree: "Class 12 (ISC)",
    duration: "2024",
    location: "Lucknow, India",
    color: "blue",
    icon: <School size={24} />,
    score: "95.25%",
    description: "Completed senior secondary education with a focus on science and mathematics. Developed foundational skills in programming and logical reasoning."
  },
  {
    institution: "City Montessori School",
    degree: "Class 10 (ICSE)",
    duration: "2022",
    location: "Lucknow, India",
    color: "blue",
    icon: <School size={24} />,
    score: "94.6%",
    description: "Built strong fundamentals across all subjects, establishing a robust academic discipline."
  }
];

function SemesterCard({ semester, colorClass }: { semester: Semester, colorClass: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-3 border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? `border-${colorClass}/30 bg-[#050510]` : 'border-slate-800/50 hover:border-slate-700 bg-transparent'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-medium text-slate-200">{semester.name}</span>
        <div className="flex items-center gap-4">
          <span className={`text-sm font-mono ${isOpen ? `text-${colorClass}` : 'text-slate-400'}`}>
            SGPA: {semester.sgpa}
          </span>
          {isOpen ? <ChevronUp size={16} className={`text-${colorClass}`} /> : <ChevronDown size={16} className="text-slate-500" />}
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
            <div className="px-4 pb-4 pt-1 border-t border-slate-800/50">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 mt-2">Coursework</p>
              <div className="flex flex-wrap gap-2">
                {semester.courses.map(course => (
                  <span key={course} className="px-2 py-1 text-xs rounded-md bg-[#0a0a1a] text-slate-300 border border-slate-800">
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
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan': return { border: 'cyber-cyan', bg: 'cyber-cyan', text: 'cyber-cyan', shadow: 'rgba(0,240,255,0.6)', gradient: 'from-cyber-cyan/10' };
      case 'emerald': return { border: 'emerald-400', bg: 'emerald-400', text: 'emerald-400', shadow: 'rgba(52,211,153,0.6)', gradient: 'from-emerald-500/10' };
      case 'purple': return { border: 'purple-400', bg: 'purple-400', text: 'purple-400', shadow: 'rgba(192,132,252,0.6)', gradient: 'from-purple-500/10' };
      case 'blue': return { border: 'blue-400', bg: 'blue-400', text: 'blue-400', shadow: 'rgba(96,165,250,0.6)', gradient: 'from-blue-500/10' };
      default: return { border: 'cyber-cyan', bg: 'cyber-cyan', text: 'cyber-cyan', shadow: 'rgba(0,240,255,0.6)', gradient: 'from-cyber-cyan/10' };
    }
  };

  return (
    <main className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
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
          <span className="text-cyber-cyan font-mono text-sm tracking-widest uppercase">Academic</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Education<span className="text-cyber-cyan animate-blink">_</span>
        </h1>
        <p className="text-slate-400 text-lg">My academic journey from foundational schooling to dual-degree engineering.</p>
      </motion.div>

      {/* Timeline wire */}
      <div className="relative">
        <div className="absolute left-[22px] md:left-[30px] top-0 bottom-0 w-[1px] hidden md:block">
          <motion.div
            className="w-full h-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ originY: 0, background: "linear-gradient(to bottom, rgba(0,240,255,0.4), transparent)" }}
          />
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => {
            const colors = getColorClasses(edu.color);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group md:pl-16"
              >
                {/* Timeline node */}
                <motion.div
                  className={`absolute left-4 md:left-6 top-10 w-3 h-3 rounded-full border-2 hidden md:block border-${colors.border} bg-${colors.bg}/20`}
                  animate={{
                    boxShadow: ["0 0 0px transparent", `0 0 12px ${colors.shadow}`, "0 0 0px transparent"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />

                {/* Glow backdrop */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} to-transparent rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-700`} />

                <div className="relative glass-card p-6 md:p-10 rounded-3xl">

                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div className="flex gap-4 items-start">
                      <div className={`p-3 rounded-xl bg-${colors.bg}/10 text-${colors.text} border border-${colors.border}/20 mt-1`}>
                        {edu.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{edu.institution}</h2>
                        <h3 className={`text-lg font-medium text-${colors.text}`}>
                          {edu.degree}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-sm text-slate-500 font-mono gap-1">
                      <div className="flex items-center gap-2 bg-[#050510] px-3 py-1 rounded-full border border-slate-800">
                        <Calendar size={12} className={`text-${colors.text}`} /> {edu.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={12} /> {edu.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights/Description */}
                  <div className="mb-6">
                    {edu.score && (
                      <div className="inline-block mb-3 px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm font-semibold text-white tracking-wide">
                        <span className="text-slate-400 font-normal mr-2">Result:</span> {edu.score}
                      </div>
                    )}
                    {edu.description && (
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  {/* Semesters Section (If applicable) */}
                  {edu.semesters && edu.semesters.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-slate-800/50">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                        <BookOpen size={16} /> Semester Records
                      </h4>
                      <div className="space-y-2">
                        {edu.semesters.map((sem) => (
                          <SemesterCard key={sem.id} semester={sem} colorClass={colors.text} />
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

      {/* Continuous Learning */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 p-12 rounded-3xl glass-card text-center corner-brackets"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Award className="mx-auto mb-4 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" size={32} />
        </motion.div>
        <h3 className="text-xl font-bold mb-2">Continuous Pursuit of Knowledge</h3>
        <p className="text-slate-400">
          The journey of education never truly ends. Constantly exploring new boundaries in computation and data.
        </p>
      </motion.section>
    </main>
  );
}