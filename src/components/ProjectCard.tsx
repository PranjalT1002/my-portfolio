interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
}

export default function ProjectCard({ title, desc, tags }: ProjectProps) {
  return (
    <div className="bg-[#111] border border-slate-800 p-8 rounded-2xl glow-on-hover transition-all">
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-400 mb-6 line-clamp-3">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-md border border-blue-500/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}