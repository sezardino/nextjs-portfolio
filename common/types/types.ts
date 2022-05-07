import { Meta, Project, Skill, Socials, Texts, SocialLink } from "./";

export interface IndexPageResponse {
  metas: Meta[];
  projects: Project[];
  skills: Skill[];
  socials: Socials[];
  authors: Texts[];
}

export interface IndexPageData {
  metas: Meta;
  projects: Project[];
  skills: Skill[];
  socials: Socials;
  authors: Texts;
}

export interface SectionWithHTML {
  contentHTML: string;
}

export interface SectionWithSocialLinks {
  socialLinks: SocialLink[];
}
