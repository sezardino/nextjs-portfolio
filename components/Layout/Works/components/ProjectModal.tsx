import { Project } from "@/common/types";
import { Button, Modal } from "@/components/UI";
import Image from "next/image";
import cn from "classnames";

import GithubIcon from "@/assets/icons/github.svg";

import styles from "./ProjectModal.module.scss";

interface ProjectModalProps {
  project: Project | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = (props) => {
  const { project, isOpen, onClose } = props;

  const image = project?.detailed ? project?.detailed : project?.preview;

  return (
    <Modal isOpen={isOpen} closeHandler={onClose}>
      {project && (
        <div className={styles.container}>
          <div className={styles.content}>
            <h3 className={styles.name}>{project.name}</h3>
            {project.description && (
              <div className={styles.field}>
                <h4>Description</h4>
                <p className={styles.data}>{project.description}</p>
              </div>
            )}
            {project.stack && (
              <div className={styles.field}>
                <h4>Tech Stack:</h4>
                <ul className={cn(styles.data, styles.stack)}>
                  {project.stack.map((technology) => (
                    <li
                      key={technology.toLocaleLowerCase().replaceAll(" ", "-")}
                      className={styles.technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles.buttons}>
              {project.repo && <Button href={project.repo}>GitHub</Button>}
              {project.view && (
                <Button href={project.view}>View Project</Button>
              )}
            </div>
          </div>
          {image && (
            <div className={styles.image}>
              <Image
                src={image.url}
                width={640}
                height={426}
                alt={`project with name ${project.name}`}
              />
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};
