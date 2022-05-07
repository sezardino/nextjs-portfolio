import styles from "./Hero.module.scss";
import { Button } from "../UI";

import HeroImage from "@/assets/images/image-2.png";

import { SectionWithSocialLinks, SectionWithHTML } from "@/common/types";

type Props = SectionWithHTML & SectionWithSocialLinks;

export const Hero: React.FC<Props> = (props) => {
  return (
    <section className={styles.wrapper} id="home">
      <div className={styles.container}>
        <div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: props.contentHTML }}
          />
          <Button href="#contact">Contact</Button>
        </div>
        <ul className={styles.social}>
          {props.socialLinks.map(({ href, icon: Icon, name }) => (
            <li key={name}>
              <a
                href={href}
                aria-label={`link to ${name}`}
                className={styles.icon}
              >
                <Icon width="32" height="32" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.img}>
        <svg
          className={styles.blob}
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            <image
              className={styles.blobImg}
              x={50}
              y={60}
              href={HeroImage.src}
            />
          </g>
        </svg>
      </div>
    </section>
  );
};
