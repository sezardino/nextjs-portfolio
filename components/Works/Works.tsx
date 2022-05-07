import styles from "./Works.module.scss";
import { Project } from "@/common/types";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../UI";

interface Props {
  repoLink: string;
  works: Project[];
}

export const Works: React.FC<Props> = (props) => {
  return (
    <section className={styles.wrapper} id="work">
      <h2 className={styles.title}>Work</h2>
      <div className={styles.container}>
        {props.works.map(({ id, name, preview, slug }) => (
          <Link key={id} href={`#${slug}`}>
            <a
              className={styles.img}
              aria-label={`open modal window with more information about ${name}`}
            >
              <Image
                src={preview.url}
                width={preview.width}
                height={preview.height}
                alt={`project with name ${name}`}
              />
            </a>
          </Link>
        ))}
      </div>
      <Button href={props.repoLink} className={styles.button}>
        See More
      </Button>
    </section>
  );
};
