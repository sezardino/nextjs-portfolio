import styles from "./Footer.module.scss";

import LinkedinIcon from "@/assets/icons/linkedin.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { SectionWithSocialLinks } from "@/common/types";

type Props = SectionWithSocialLinks;

export const Footer: React.FC<Props> = (props) => {
  return (
    <footer className={styles.wrapper}>
      <p className={styles.title}>Robert A</p>
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
      <p className={styles.copy}>© Robert A. All rights reserved</p>
    </footer>
  );
};
