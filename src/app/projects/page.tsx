import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">My Projects</h1>
      <p className="text-slate-400 mb-12">A collection of things I've built, from AI to accounting software.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          title="Jarvis AI" 
          desc="Voice-activated assistant built with Python." 
          tags={["Python", "SpeechRec"]} 
        />
        <ProjectCard 
          title="FinCore" 
          desc="Modern ERP and accounting logic." 
          tags={["Python", "SQL"]} 
        />
        {/* Add as many cards as you want here */}
      </div>
    </main>
  );
}