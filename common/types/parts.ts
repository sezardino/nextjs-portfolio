import { SkillLevel, SocialNames } from "./";

export type Socials = Record<SocialNames, string>;

export interface Skill {
  description: string;
  id: string;
  level: SkillLevel;
  name: string;
}

export interface SocialLink {
  icon: any;
  href: string;
  name: SocialNames;
}

export interface Texts {
  aboutText: {
    html: string;
  };
  heroText: {
    html: string;
  };
  skillsText: {
    html: string;
  };
}

export interface Meta {
  name: string;
  description: string;
  siteUrl: string;
  ogImage: {
    url: string;
  };
}

export interface Project {
  name: string;
  id: string;
  slug: string;
  preview: {
    width: number;
    height: number;
    url: string;
  };
  detailed: {
    width: number;
    url: string;
    height: number;
  };
}
