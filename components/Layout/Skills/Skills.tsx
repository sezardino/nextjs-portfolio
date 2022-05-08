import cn from "classnames";
import styles from "./Skills.module.scss";

import Image from "next/image";
import DecoImage from "@/assets/images/image-3.jpg";
import { Skill } from "@/common/types";

interface Props {
  skills: Skill[];
  contentHTML: string;
}

export const Skills: React.FC<Props> = (props) => {
  return (
    <section className={styles.wrapper} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.container}>
        <div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: props.contentHTML }}
          />
          <ul>
            {props.skills.map((skill) => (
              <li
                key={skill.id}
                className={cn(styles.item, styles[skill.level])}
              >
                <h3 className={styles.name}>{skill.name}</h3>
                <small className={styles.level}>{skill.level}</small>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={DecoImage} alt="alt" className={styles.img} />
        </div>
      </div>
    </section>
  );
};
