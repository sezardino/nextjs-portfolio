import { Project, Skill, SocialLink } from "@/common/types";
import { Hero, About, Skills, Works, Contact } from "@/components";

interface IndexWrapperProps {
  skills: Skill[];
  socialLinks: SocialLink[];
  projects: Project[];
  repoLink: string;
  texts: {
    hero: string;
    about: string;
    skills: string;
  };
}

export const IndexWrapper: React.FC<IndexWrapperProps> = (props) => {
  return (
    <>
      <Hero contentHTML={props.texts.hero} socialLinks={props.socialLinks} />
      <About contentHTML={props.texts.about} />
      <Skills skills={props.skills} contentHTML={props.texts.skills} />
      <Works repoLink={props.repoLink} works={props.projects} />
      <Contact />
    </>
  );
};
