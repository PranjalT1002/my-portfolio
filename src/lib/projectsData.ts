export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "all" | "fullstack" | "web" | "ai";
  categoryLabel: string;
  status: "Live Production" | "Deployed System" | "Open Source";
  tags: string[];
  link: string;
  linkText?: string;
  featured: boolean;
  metrics: string[];
  systemCode: string;
}

export const ALL_PROJECTS: Project[] = [
  {
    id: "connecthub",
    title: "ConnectHub",
    subtitle: "Real-Time Enterprise Communication Platform",
    description:
      "A scalable, high-concurrency real-time collaboration engine featuring WebSocket-driven instant messaging, low-latency team channels, live user presence indicators, and WebRTC voice/video calling.",
    category: "fullstack",
    categoryLabel: "Full-Stack & Real-Time",
    status: "Live Production",
    tags: ["React", "Node.js", "WebSockets", "WebRTC", "Tailwind CSS", "Express"],
    link: "https://connect-hub-kdpm.onrender.com/",
    linkText: "Launch ConnectHub",
    featured: true,
    metrics: ["Sub-50ms real-time messaging", "P2P WebRTC audio/video calls", "Channel hierarchy & live presence"],
    systemCode: "SYS-01"
  },
  {
    id: "swiftflow",
    title: "SwiftFlow",
    subtitle: "National Digital Voting & Governance System",
    description:
      "A certified digital voting portal engineered for end-to-end cryptographic integrity, government voter roll identity validation, confidential ballot casting, and automated administrative tallying.",
    category: "fullstack",
    categoryLabel: "Full-Stack Security",
    status: "Live Production",
    tags: ["Full-Stack", "Auth & RBAC", "PostgreSQL", "Cryptographic Security", "REST APIs"],
    link: "https://swiftflow-x3pw.onrender.com/",
    linkText: "Launch SwiftFlow Portal",
    featured: true,
    metrics: ["Confidential cryptographic ballots", "Role-based electoral governance", "Real-time automated auditing"],
    systemCode: "SYS-02"
  },
  {
    id: "brew-and-soul",
    title: "Brew & Soul",
    subtitle: "Artisanal Coffee & Café Experience",
    description:
      "A high-conversion artisanal café portal featuring a custom crafted preloader, dynamic interactive menu with dietary filtering, table reservation interface, and customer review carousel.",
    category: "web",
    categoryLabel: "Interactive Web Experience",
    status: "Live Production",
    tags: ["JavaScript", "HTML5", "CSS3", "Vite", "Interactive UI", "Responsive Design"],
    link: "https://cafe-portal-beta.vercel.app/",
    linkText: "Visit Café Portal",
    featured: true,
    metrics: ["Bespoke loading choreography", "Dynamic category menu filter", "High-conversion reservation UI"],
    systemCode: "SYS-03"
  },
  {
    id: "maison-elegance",
    title: "Maison Élégance",
    subtitle: "Ultra-Luxury Haute Couture E-Commerce",
    description:
      "A luxury fashion e-commerce storefront delivering editorial aesthetics with magnetic hover dynamics, high-resolution lookbook modal galleries, smooth transitions, and an interactive shopping cart.",
    category: "web",
    categoryLabel: "E-Commerce & Luxury UX",
    status: "Live Production",
    tags: ["JavaScript", "HTML5", "CSS3", "E-Commerce", "Glassmorphism", "Micro-Interactions"],
    link: "https://boutique-indol.vercel.app/",
    linkText: "Enter Boutique",
    featured: true,
    metrics: ["Editorial typography layout", "Reactive shopping cart flow", "Magnetic cursor interactions"],
    systemCode: "SYS-04"
  },
  {
    id: "jarvis-ai",
    title: "Jarvis AI Assistant",
    subtitle: "Autonomous Desktop Intelligence & Voice HUD",
    description:
      "A Python desktop voice assistant and task automation system powered by PyQt6, local LLM orchestration via Ollama (Llama 3.2), Whisper speech-to-text, and operating system automation hooks.",
    category: "ai",
    categoryLabel: "AI & Desktop Automation",
    status: "Open Source",
    tags: ["Python", "PyQt6", "Ollama LLM", "Faster-Whisper", "Automation", "System Controls"],
    link: "https://github.com/PranjalT1002/Jarvis-AI",
    linkText: "View Source Code",
    featured: false,
    metrics: ["Local voice-to-text pipeline", "Autonomous OS script triggers", "Sci-fi inspired PyQt telemetry HUD"],
    systemCode: "SYS-05"
  },
  {
    id: "antarbhag",
    title: "Antarbhag Foundation",
    subtitle: "Environmental Education & Youth Sustainability Portal",
    description:
      "A dedicated social-impact web platform for Antarbhag Foundation ('Educate to protect, Learn to Sustain'), featuring environmental outreach campaign showcases, volunteer enrollment, and direct community engagement.",
    category: "web",
    categoryLabel: "Social Impact & Outreach",
    status: "Live Production",
    tags: ["HTML5", "CSS3", "JavaScript", "Social Impact", "Responsive UI", "Community Outreach"],
    link: "https://antarbhag-website.vercel.app/",
    linkText: "Visit Foundation Site",
    featured: false,
    metrics: ["Mission-focused storytelling", "Volunteer onboarding engine", "Universal accessible architecture"],
    systemCode: "SYS-06"
  },
  {
    id: "portfolio",
    title: "Cyberpunk Command Center",
    subtitle: "Personal Engineering Portfolio & Telemetry",
    description:
      "State-of-the-art developer portfolio designed with terminal telemetry aesthetics, interactive mouse canvas particle physics, dual-degree academic logging, and zero-compromise dark mode UX.",
    category: "fullstack",
    categoryLabel: "Systems Portfolio",
    status: "Live Production",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Cyberpunk UI"],
    link: "https://my-portfolio-woad-six-75.vercel.app/",
    linkText: "Visit Live Portfolio",
    featured: false,
    metrics: ["Dynamic canvas particle field", "Dual-degree academic roadmap", "Interactive spotlight shaders"],
    systemCode: "SYS-07"
  },
  {
    id: "locus-path",
    title: "Locus Path",
    subtitle: "Creative Agency & Brand Transformation Platform",
    description:
      "A contemporary creative agency landing page built to turn brand concepts into high-impact digital experiences. Features interactive services showcases, 3D card tilts, client inquiry forms, and magnetic CTA components.",
    category: "web",
    categoryLabel: "Creative Agency Experience",
    status: "Live Production",
    tags: ["HTML5", "CSS3", "JavaScript", "Creative Direction", "3D Tilt UI", "Brand Strategy"],
    link: "https://locus-path-web.vercel.app/",
    linkText: "Explore Locus Path",
    featured: false,
    metrics: ["Kinetic 3D tilt mechanics", "Modern agency design system", "Client discovery funnels"],
    systemCode: "SYS-08"
  }
];

export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.featured);
