import cn from "classnames";
import Link from "next/link";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <nav className={cn(styles.nav)}>
        <div>
          <Link href="/" scroll={true}>
            <a className={styles.logo}>Robert A</a>
          </Link>
        </div>

        <div className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="#home">
                <a className={styles.link}>Home</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#about">
                <a className={styles.link}>About</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#skills">
                <a className={styles.link}>Skills</a>
              </Link>
            </li>
            <li className={styles.item}>
              <a href="#work" className={styles.link}>
                Work
              </a>
            </li>
            <li className={styles.item}>
              <Link href="#contact">
                <a className={styles.link}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.toggle}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};
