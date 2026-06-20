import type { ReactNode } from "react";
import { SiHtml5, SiJavascript, SiCplusplus, SiPython, SiGit, SiCss } from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

export type SkillCategory = "frontend" | "backend" | "tools";

export const categoryColors: Record<SkillCategory, string> = {
    frontend: "#C77B3B",
    backend: "#5C6B73",
    tools: "#8A*275",
};

export type Skill = {
    name: string;
    icon: ReactNode;
    category: SkillCategory;
    rotation: number;
};

export const skills: Skill[] = [
  { name: "HTML", icon: <SiHtml5 />, category: "frontend", rotation: -2 },
  { name: "CSS", icon: <SiCss />, category: "frontend", rotation: 1 },
  { name: "JavaScript", icon: <SiJavascript />, category: "frontend", rotation: 1.5 },
  { name: "C / C++", icon: <SiCplusplus />, category: "backend", rotation: -1 },
  { name: "SQL", icon: <FaDatabase />, category: "backend", rotation: 2 },
  { name: "Java", icon: <FaJava />, category: "backend", rotation: -1.5 },
  { name: "Python", icon: <SiPython />, category: "backend", rotation: 1 },
  { name: "Git", icon: <SiGit />, category: "tools", rotation: -2 },
];