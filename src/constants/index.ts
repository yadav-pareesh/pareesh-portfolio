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
// 3. NAVIGATION LINKS
// ============================================================
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
] as const

// ============================================================
// 4. SKILLS (Grouped by Category)
// ============================================================
export const SKILLS = {
  "Frontend Development": [
    "React.js",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Socket.io",
    "WebRTC",
  ],
  "Databases & ORMs": ["PostgreSQL", "MongoDB", "Prisma"],
  "State Management": ["Redux", "Zustand"],
  "Tools, Cloud & DevOps": [
    "Git",
    "GitHub",
    "Postman",
    "Railway",
    "Vercel",
    "Netlify",
  ],
} as const

// ============================================================
// 5. TECH STACK (For Home Page Showcase)
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

export const HOME_SKILLS = TECH_STACK

// ============================================================
// 6. WORK EXPERIENCE
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
export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
  image?: string
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
    image: "projects/sleekcms.png",
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
    image: "projects/chatly.png",
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
    image: "projects/shortly.png",
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
    image: "projects/droply.png",
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
    image: "projects/ergobreak.png",
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
    liveUrl: "/",
    githubUrl: `${SOCIAL_LINKS.github}/pareesh-portfolio`,
    image: "projects/portfolio.png",
  },
] as const

// ============================================================
// 8. FOOTER COPYRIGHT
// ============================================================
export const FOOTER_TEXT = {
  copyright: (year: number) =>
    `© ${year} Pareesh Yadav. All rights reserved.`,
} as const