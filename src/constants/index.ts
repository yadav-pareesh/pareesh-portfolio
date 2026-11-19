// ============================================================
// 1. PERSONAL INFORMATION
// ============================================================
export const PERSONAL = {
  name: "Pareesh Yadav",
  title: "Full-Stack Developer",
  domain: "https://pareeshyadav.xyz",
  email: "pareeshyadav@gmail.com",
  location: "India (IST)",
  tagline: "Full-Stack Developer with 3+ years of experience building real-time applications and scalable APIs.",
  bio: ["I'm a Full-Stack Developer with 3+ years of experience building real-time web applications and scalable APIs. I specialize in React, Node.js, and Socket.io, and I love solving complex performance problems.",
    "I started coding during my BCA and discovered my passion for full-stack development. Over the last 3 years, I've owned products end-to-end—from architecture to deployment—while maintaining 99.7% uptime and optimizing performance by up to 35%.",
    "When I'm not coding, I enjoy exploring new technologies, playing chess, and contributing to open-source projects."
  ],
  availability: "Open to opportunities" as const,
  resumeUrl: "/resume.pdf",
} as const

// ============================================================
// 2. SOCIAL LINKS
// ============================================================
export const SOCIAL_LINKS = {
  github: "https://www.github.com/yadav-pareesh",
  linkedin: "https://www.linkedin.com/in/pareeshyadav",
  email: "mailto:pareeshyadav@gmail.com",
} as const

// ============================================================
// 3. TECH STACK
// ============================================================
export const TECH_STACK = [
  {
    category: "Frontend Development",
    icon: "Code2",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "WebRTC"],
  },
  {
    category: "Databases & ORMs",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "State Management",
    icon: "Layers",
    skills: ["Redux", "Zustand"],
  },
  {
    category: "Tools, Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS EC2 & S3", "Git", "GitHub", "Postman", "Railway", "Vercel", "Netlify"],
  },
] as const

// ============================================================
// 4. WORK EXPERIENCE
// ============================================================
export const WORK_EXPERIENCE = {
  company: "SleekSky",
  role: "Full-Stack Developer",
  startDate: "Jan 2023",
  endDate: "Jan 2026",
  duration: "3 years",
  project: "SleekCMS",
  projectDescription: "Enterprise Content Management System",
  highlights: [
    "Owned SleekCMS end-to-end for 3 years—driving feature development, performance tuning, bug fixes, and direct client support while maintaining 99.7% uptime through zero-downtime deployments.",
    "Architected scalable backend with Node.js/Express and PostgreSQL, optimizing complex queries to reduce latency by 35%, and engineered real-time collaborative editing using Socket.io with <200ms response time.",
    "Built high-performance React frontend with Redux state management, reducing bundle size by 25% via code-splitting, and delivered 15+ major features across agile sprints in cross-functional teams.",
  ],
} as const

// ============================================================
// 7. PROJECTS
// ============================================================
export type ProjectCategory = "all" | "fullstack" | "devtools"

export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
  image?: string
  category?: ProjectCategory
}

export const PROJECTS: Project[] = [
  {
    id: "sleekcms",
    title: "SleekCMS",
    description:
      "Enterprise content management system with real-time collaborative editing, multi-user support, and 99.7% uptime over 3 years.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
    features: [
      "35% query latency reduction",
      "25% bundle size reduction",
      "Real-time collaborative editing",
      "99.7% uptime over 3 years",
    ],
    liveUrl: "https://app.sleekcms.com",
    githubUrl: "#",
    image: "/projects/sleekcms.png",
    category: "fullstack",
  },
  {
    id: "chatly",
    title: "Chatly",
    description:
      "Real-time social media chat platform with one-to-one messaging, video/audio calling, and OTP-based authentication.",
    tech: ["React", "TypeScript", "Node.js", "Socket.io", "WebRTC", "Zustand"],
    features: [
      "1-1 chat with media sharing (image/video)",
      "Video/audio calling with WebRTC",
      "OTP-based auth flow (login/register/password reset)",
      "Message edit/delete with live notifications",
    ],
    liveUrl: "https://chatly-x.vercel.app",
    githubUrl: `${SOCIAL_LINKS.github}/social-pareesh`,
    image: "/projects/chatly.png",
    category: "fullstack",
  },
  {
    id: "frontend-library-ecosystem",
    title: "Frontend Library Ecosystem",
    description:
      "High-performance monorepo ecosystem comprising 32+ modular, zero-dependency React hooks, browser utilities, and UI primitives with dual ESM/CJS compilation, strict TypeScript types, and an interactive documentation playground.",
    tech: [
      "React 18",
      "TypeScript",
      "Turborepo",
      "Vite",
      "pnpm Workspaces",
      "tsup",
      "Vitest"
    ],
    features: [
      "32+ modular zero-dependency packages spanning state management, browser APIs, UI utilities, and performance",
      "Dual ESM and CommonJS builds with generated TypeScript declaration maps orchestrated via Turborepo & tsup",
      "Interactive documentation site and live playground with real-time log inspector and demo error boundaries",
      "SSR-safe design preventing hydration mismatches and window object access faults across all hooks",
      "Automated monorepo CI/CD pipelines covering unit testing, strict type checks, and GitHub Pages deployment",
    ],
    liveUrl: "https://yadav-pareesh.github.io/frontend-library-ecosystem",
    githubUrl: `${SOCIAL_LINKS.github}/frontend-library-ecosystem`,
    image: "/projects/frontend-library-ecosystem.png",
    category: "devtools",
  },
  {
    id: "quickdrop",
    title: "QuickDrop",
    description:
      "Production-grade peer-to-peer file sharing platform enabling direct, zero-cloud browser-to-browser transfers using WebRTC data channels, binary streaming, and cryptographic integrity verification.",
    tech: ["React 19", "TypeScript", "WebRTC", "Tailwind CSS", "WebSockets", "Node.js", "Zustand"],
    features: [
      "Direct P2P file transfers with zero intermediate cloud storage",
      "Binary chunking with backpressure flow control & SHA-256 checksums",
      "Cross-device room pairing via 6-character codes and QR code scanner",
      "Integrated real-time peer-to-peer chat within active sessions",
      "Dual signaling mesh: WebSocket relay for WAN & BroadcastChannel for local tabs",
      "Installable PWA with dark/light themes and IndexedDB transfer history",
    ],
    liveUrl: "https://droply-x.netlify.app",
    githubUrl: `${SOCIAL_LINKS.github}/quick-drop`,
    image: "/projects/droply.png",
    category: "fullstack",
  },
  {
    id: "js-compiler",
    title: "Online JavaScript Compiler",
    description:
      "Production-grade, lightweight in-browser JavaScript coding and execution workspace featuring CodeMirror 6, an isolated zero-trust sandbox with strict CSP, real-time formatted console streams, and execution watchdog protection.",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "CodeMirror 6",
      "Vitest",
      "Web Workers / Iframes"
    ],
    features: [
      "Isolated zero-trust execution sandbox with opaque null origin and strict Content Security Policy (connect-src 'none')",
      "Full-featured CodeMirror 6 editor with JavaScript syntax highlighting, bracket matching, autocompletion, and font sizing",
      "Multi-level console stream interceptor supporting log, info, warn, error, debug, and structured tabular rendering for console.table()",
      "Cycle-safe serializer handling circular references, BigInt, Symbols, Map, Set, Errors, and depth-limited object graphs",
      "3-second parent watchdog timer that automatically terminates and resurrects the sandbox during infinite loops without freezing the UI",
      "Extensible language registry architecture prepared for future multi-runtime expansions (Pyodide, WebAssembly, remote containers)",
    ],
    liveUrl: "https://pareesh-jscompiler.vercel.app",
    githubUrl: `${SOCIAL_LINKS.github}/online-compiler`,
    image: "/projects/online-compiler.png",
    category: "devtools",
  },
  {
    id: "shortlink",
    title: "ShortLink",
    description:
      "URL shortener with custom aliases, QR code generation, and comprehensive click analytics tracking geo, device, and browser data.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Zustand"],
    features: [
      "Custom aliases with nanoid generation",
      "QR code generation & download",
      "Click analytics dashboard (geo, device, browser, OS)",
      "One-click copy to clipboard",
    ],
    liveUrl: "https://shortly-x.netlify.app",
    githubUrl: `${SOCIAL_LINKS.github}/shortly-fe`,
    image: "/projects/shortly.png",
    category: "fullstack",
  },
  {
    id: "ergobreak",
    title: "ErgoBreak",
    description:
      "Drift-resilient ergonomic workstation and screen-break pacer featuring customizable 20-20-20 eye rests, guided posture stretches, Document Picture-in-Picture mini timer, and synthesized audio cues.",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "PWA",
      "Web Audio API",
      "Document PiP API"
    ],
    features: [
      "Drift-resilient timestamp delta timer immune to browser background tab throttling",
      "Always-on-top Document Picture-in-Picture (PiP) interactive floating mini-timer",
      "16 guided desk stretches across 5 body zones with animated SVG illustrations",
      "Procedural acoustic chimes synthesized in-memory via native Web Audio API (zero audio assets)",
      "Offline-first PWA with versioned local streak & focus analytics dashboard",
    ],
    liveUrl: "https://ergobreak.vercel.app",
    githubUrl: `${SOCIAL_LINKS.github}/screen-break`,
    image: "/projects/ergobreak.png",
    category: "devtools",
  },
  {
    id: "portfolio",
    title: "Pareesh.dev - Portfolio",
    description:
      "A modern, responsive developer portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean UI, dark/light theme toggle, and dynamic project showcases.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Router"],
    features: [
      "Dark/Light theme toggle with system preference detection",
      "Fully responsive & mobile-first design",
      "Modular component architecture with centralized constants",
      "Deployed on Vercel with custom domain (pareeshyadav.xyz)",
    ],
    liveUrl: "https://www.pareeshyadav.xyz",
    githubUrl: `${SOCIAL_LINKS.github}/pareesh-portfolio`,
    image: "/projects/portfolio.png",
    category: "devtools",
  },
] as const