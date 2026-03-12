"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter hover:text-blue-500 transition-colors">
          Pranjal Tripathi<span className="text-blue-500">.</span>
        </Link>
        
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-sm font-medium transition-colors ${
                pathname === link.path ? "text-blue-500" : "text-slate-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}