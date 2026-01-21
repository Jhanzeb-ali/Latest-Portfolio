
import { ChartBar, Globe, Cpu, Smartphone, ShieldCheck, TrendingUp, Code2, GraduationCap, Zap, Layers, Trophy, BookOpen, Rocket, Target, Flag, Activity, AlertTriangle, Skull, BarChart3, Binary, ZapOff } from "lucide-react";

export const USER_IMAGE_URL = "https://pbs.twimg.com/profile_images/2003126413298434049/piuoQLfm.jpg"; 

export const SOCIAL_LINKS = {
  twitter: "https://x.com/Jhanzeb_VEC",
  github: "https://github.com/Jhanzeb-ali",
  linkedin: "https://www.linkedin.com/in/jhanzeb-ali-179b68389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  email: "JhanzebaliHK110@gmail.com"
};

export const PROFILE = {
  name: "Jhanzeb",
  title: "Founder @ VelaCore | Crypto Trader",
  location: "Pakistan",
  tagline: "Student by day. Founder & Trader by night.",
  description: "I am not just a student; I am building the future. Balancing my 12th-grade studies in Pakistan with the high-stakes world of Crypto Trading and Full-Stack Engineering. I founded the VelaCore Ecosystem to solve real-world problems using Web3 and AI.",
};

export const STATS = [
  { label: "Crypto & Dev", value: "3+", suffix: "Years Experience", icon: Zap },
  { label: "VelaCore Phase", value: "2.0", suffix: "Ecosystem In Progress", icon: Activity },
  { label: "Education", value: "12th", suffix: "Grade Student (Pakistan)", icon: GraduationCap },
  { label: "Future Focus", value: "100%", suffix: "Committed to Web3 & AI", icon: Trophy },
];

export const MARKET_DATA = [
  { coin: "BTC", price: "$96,432.10", change: "+2.4%" },
  { coin: "ETH", price: "$2,845.50", change: "+1.8%" },
  { coin: "SOL", price: "$142.30", change: "-0.5%" },
  { coin: "VEC", price: "$1.00", change: "STABLE", isGold: true },
  { coin: "BNB", price: "$590.20", change: "+0.9%" },
];

export const EXPERTISE = [
  {
    title: "Strategic Trading",
    desc: "Mastering market liquidity and order flow to find edges where others see noise.",
    icon: BarChart3
  },
  {
    title: "Web3 Engineering",
    desc: "Building scalable dApps and smart contracts with security as the first priority.",
    icon: Binary
  },
  {
    title: "Ecosystem Growth",
    desc: "Visionary leadership to scale VelaCore from a concept to a global utility.",
    icon: Layers
  }
];

export const ROADMAP = [
  {
    phase: "Phase 1: The Origin (2024-2025)",
    title: "Laying the Groundwork",
    status: "Completed",
    tasks: [
      "VelaCore Brand Identity & Vow (Sep 02)",
      "VelaCore Official Website Launch",
      "Core Community Building & Strategy",
      "Crypto Market Edge Analysis Tools"
    ]
  },
  {
    phase: "Phase 2: Integration (Current)",
    title: "AI & Web3 Utility",
    status: "In Progress",
    tasks: [
      "VelaCore AI Beta (Smart Audit Engine)",
      "VelaCore dApp Gateway Implementation",
      "Project Security Verification Protocols",
      "Expanding the Partner Ecosystem"
    ]
  },
  {
    phase: "Phase 3: Scaling (2026+)",
    title: "VelaCore Analytics SaaS",
    status: "Upcoming",
    tasks: [
      "Full Release of Analytics SaaS Platform",
      "Court-Level Institutional Certification",
      "Ecosystem-wide Governance & Expansion",
      "Global Web3 Transparency Leadership"
    ]
  }
];

export const TIMELINE = [
  {
    year: "2023 (Early)",
    title: "Entered the Arena",
    description: "Started my journey as a Crypto Trader. I was fascinated by the charts, the liquidity, and the freedom. I spent every waking hour analyzing patterns.",
    icon: TrendingUp,
    color: "text-green-400"
  },
  {
    year: "2023 (Late)",
    title: "The Dark Side",
    description: "Reality hit hard. I witnessed the ugly side of DeFi: Rug Pulls, Honeypots, and massive manipulation. Manual analysis was failing.",
    icon: AlertTriangle,
    color: "text-red-500"
  },
  {
    year: "2024",
    title: "Forging the Weapon",
    description: "I decided to stop being a victim. Dove into Full-Stack Development and Blockchain (Solidity). Coding became my sword.",
    icon: Code2,
    color: "text-blue-400"
  },
  {
    year: "Sep 02, 2025",
    title: "The Vow (VelaCore Born)",
    description: "THE TURNING POINT. I officially started the VelaCore Ecosystem to solve the problems of trust and safety using AI. No more guessing.",
    icon: ShieldCheck,
    color: "text-yellow-400"
  },
  {
    year: "2025 (Late)",
    title: "Building the Engine",
    description: "Integrating proprietary AI models to audit smart contracts instantly. Developed 'Court-Level Certification' for project integrity.",
    icon: Cpu,
    color: "text-purple-400"
  },
  {
    year: "2026 (Now)",
    title: "Phase 2: Global Scale",
    description: "Scaling this ecosystem globally as a 12th-grade student, proving that age is just a number when your vision is big.",
    icon: Rocket,
    color: "text-pink-500"
  }
];

export const SKILLS = [
  { name: "Crypto Analysis", icon: TrendingUp, level: "Technical & Fundamental" },
  { name: "Full Stack Dev", icon: Code2, level: "React, Node, Solidity" },
  { name: "AI Integration", icon: Cpu, level: "LLMs & Automation" },
  { name: "VelaCore System", icon: Globe, level: "Ecosystem Architecture" },
];

export const PROJECTS = [
  {
    name: "VelaCore Official",
    url: "https://velacore.site",
    description: "The Headquarters. The central hub where my vision for a decentralized future comes to life.",
    icon: Globe,
    color: "text-blue-400",
    logoUrl: "https://velacore.site/assets/images/VelaCore-symbol-light.svg"
  },
  {
    name: "VelaCore AI",
    url: "https://ai.velacore.site",
    description: "Next-Gen AI. Integrating advanced artificial intelligence directly into blockchain workflows.",
    icon: Cpu,
    color: "text-purple-400",
    logoUrl: "https://pbs.twimg.com/media/G9cR33WaYAEoema?format=jpg&name=medium"
  },
  {
    name: "VelaCore dApp",
    url: "https://velacore-app.web.app",
    description: "Web3 Gateway. A decentralized application enabling seamless interaction with protocols.",
    icon: Smartphone,
    color: "text-indigo-400",
    logoUrl: "https://pbs.twimg.com/media/G9cR33WaYAEoema?format=jpg&name=medium"
  },
];

export const CURRENT_VENTURE = {
  name: "VelaCore Analytics",
  tag: "Fully AI-Powered SaaS • Audit",
  description: "An upcoming fully AI-based SaaS platform designed to bring absolute transparency. VelaCore Analytics uses proprietary AI models to perform comprehensive audits and provide 'VelaCore Official Certificate'—a mark of integrity.",
  features: ["AI-Powered Deep Audit", "Official Certification", "Court-Level Validity"],
  icon: ShieldCheck,
};
