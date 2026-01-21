import { LucideIcon } from "lucide-react";

export interface Project {
  name: string;
  url: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: string;
}
