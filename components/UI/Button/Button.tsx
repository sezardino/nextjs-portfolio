import Link, { LinkProps as NextLinkProps } from "next/link";
import { ButtonHTMLAttributes, HTMLProps } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

type LinkProps = NextLinkProps & {
  className?: string;
  children: React.ReactNode;
};

const isLink = (props: ButtonProps | LinkProps): props is LinkProps => {
  return "href" in props;
};

export const Button: React.FC<ButtonProps | LinkProps> = (props) => {
  const classNames = `${styles.button} ${props.className || ""}`;

  if (isLink(props)) {
    return (
      <Link {...props}>
        <a className={classNames}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button {...props} className={classNames}>
      {props.children}
    </button>
  );
};
