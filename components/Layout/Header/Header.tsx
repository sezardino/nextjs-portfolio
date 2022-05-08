import cn from "classnames";
import Link from "next/link";

import MenuIcon from "@/assets/icons/menu.svg";

import styles from "./Header.module.scss";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.wrapper}>
      <nav className={cn(styles.nav)}>
        <div>
          <Link href="/" scroll={true}>
            <a className={styles.logo}>Robert A</a>
          </Link>
        </div>

        <div className={cn(styles.menu, { [styles.show]: isMenuOpen })}>
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

        <button className={styles.toggle} onClick={onMenuClick}>
          <MenuIcon width={24} height={24} />
        </button>
      </nav>
    </header>
  );
};
