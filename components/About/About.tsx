import cn from "classnames";
import styles from "./About.module.scss";

import Image from "next/image";
import AboutImage from "@/assets/images/image-1.jpg";
import { SectionWithHTML } from "@/common/types";

export const About: React.FC<SectionWithHTML> = (props) => {
  return (
    <section className={styles.wrapper} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={cn(styles.container)}>
        <div className={styles.img}>
          <Image src={AboutImage} alt="alt" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.contentHTML }} />
      </div>
    </section>
  );
};
