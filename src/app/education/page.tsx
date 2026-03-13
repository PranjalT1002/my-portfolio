"use client";
import { motion } from "framer-motion";
import { BookOpen, Award, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    university: "Bennett University",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2024 — 2028",
    location: "Greater Noida, India",
    color: "cyan",
    description: "Focusing on core software engineering, digital logic design, and full-stack development. Active member of the coding community.",
    courses: ["Data Structures", "Digital Design (Verilog)", "Discrete Math", "Java Programming"]
  },
  {
    university: "IIT Madras",
    degree: "BS in Data Science and Applications",
    duration: "2024 — Present",
    location: "Remote/Chennai, India",
    color: "emerald",
    description: "Deep diving into statistical modeling, computational thinking, and large-scale data analysis through one of India's most rigorous data programs.",
    courses: ["Python for Data Science", "Statistics", "Computational Thinking", "Linear Algebra"]
  }
];

export default function EducationPage() {
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
        <p className="text-slate-400 text-lg">My academic journey across two distinct engineering disciplines.</p>
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
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group md:pl-16"
            >
              {/* Timeline node */}
              <motion.div
                className={`absolute left-4 md:left-6 top-10 w-3 h-3 rounded-full border-2 hidden md:block ${
                  edu.color === 'cyan' ? 'border-cyber-cyan bg-cyber-cyan/20' : 'border-emerald-400 bg-emerald-400/20'
                }`}
                animate={{ 
                  boxShadow: edu.color === 'cyan' 
                    ? ["0 0 0px rgba(0,240,255,0)", "0 0 12px rgba(0,240,255,0.6)", "0 0 0px rgba(0,240,255,0)"]
                    : ["0 0 0px rgba(52,211,153,0)", "0 0 12px rgba(52,211,153,0.6)", "0 0 0px rgba(52,211,153,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Glow backdrop */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${edu.color === 'cyan' ? 'from-cyber-cyan/10 to-transparent' : 'from-emerald-500/10 to-transparent'} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-700`} />
              
              <div className="relative glass-card p-8 md:p-12 rounded-3xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{edu.university}</h2>
                    <h3 className={`text-xl font-medium ${edu.color === 'cyan' ? 'text-cyber-cyan' : 'text-emerald-400'}`}>
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end text-sm text-slate-500 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} /> {edu.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} /> {edu.location}
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-8 max-w-3xl">
                  {edu.description}
                </p>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                    <BookOpen size={16} /> Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.courses.map((course) => (
                      <motion.span 
                        key={course}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: edu.color === 'cyan' 
                            ? "0 0 12px rgba(0, 240, 255, 0.2)" 
                            : "0 0 12px rgba(52, 211, 153, 0.2)",
                        }}
                        className={`px-4 py-2 rounded-lg text-sm glass-card ${edu.color === 'cyan' ? 'hover:border-cyber-cyan/30 hover:text-cyber-cyan' : 'hover:border-emerald-500/30 hover:text-emerald-400'} transition-all duration-300 cursor-default`}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
        <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
        <p className="text-slate-400">
          Actively pursuing additional certifications in Python Development and Digital Systems.
        </p>
      </motion.section>
    </main>
  );
}