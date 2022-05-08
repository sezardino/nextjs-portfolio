import styles from "./Works.module.scss";
import { Project } from "@/common/types";

import Image from "next/image";
import { ProjectModal } from "./components/ProjectModal";
import { Button } from "@/components";
import { useMemo, useState } from "react";

interface Props {
  repoLink: string;
  works: Project[];
}

export const Works: React.FC<Props> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<string | null>(null);

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const onProjectClick = (id: string) => {
    setIsModalOpen(true);
    setCurrentProject(id);
  };

  const modalContent = useMemo(() => {
    const current = props.works.find(
      (project) => project.id === currentProject
    );

    if (!current) {
      return;
    }

    return current;
  }, [currentProject, props.works]);

  return (
    <section className={styles.wrapper} id="work">
      <h2 className={styles.title}>Work</h2>
      <div className={styles.container}>
        {props.works.map(({ id, name, preview }) => (
          <button
            key={id}
            className={styles.trigger}
            aria-label={`open modal window with more information about ${name}`}
            onClick={() => onProjectClick(id)}
          >
            <Image
              src={preview.url}
              width={preview.width}
              height={preview.height}
              alt={`project with name ${name}`}
            />
          </button>
        ))}
      </div>
      <Button href={props.repoLink} className={styles.button}>
        See More
      </Button>
      <ProjectModal
        project={modalContent}
        isOpen={isModalOpen}
        onClose={closeModalHandler}
      />
    </section>
  );
};
