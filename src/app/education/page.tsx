"use client";
import { motion } from "framer-motion";
import { BookOpen, Award, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    university: "Bennett University",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2024 — 2028",
    location: "Greater Noida, India",
    color: "blue",
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
        <h1 className="text-5xl font-bold mb-4">Education</h1>
        <p className="text-slate-400 text-lg">My academic journey across two distinct engineering disciplines.</p>
      </motion.div>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.university}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${edu.color === 'blue' ? 'from-blue-500/20 to-transparent' : 'from-emerald-500/20 to-transparent'} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
            
            <div className="relative bg-[#0f0f0f] border border-white/5 p-8 md:p-12 rounded-3xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{edu.university}</h2>
                  <h3 className={`text-xl font-medium ${edu.color === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`}>
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
                    <span 
                      key={course} 
                      className={`px-4 py-2 rounded-lg text-sm bg-white/5 border border-white/10 ${edu.color === 'blue' ? 'hover:border-blue-500/30' : 'hover:border-emerald-500/30'} transition-colors`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional "Certifications" or "Achievements" Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 p-12 rounded-3xl border border-dashed border-white/10 text-center"
      >
        <Award className="mx-auto mb-4 text-yellow-500" size={32} />
        <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
        <p className="text-slate-400">
          Actively pursuing additional certifications in Python Development and Digital Systems.
        </p>
      </motion.section>
    </main>
  );
}