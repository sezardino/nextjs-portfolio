import cn from "classnames";

import { usePortal } from "@/common/hooks";
import styles from "./Modal.module.scss";
import { MouseEvent as ME } from "react";

interface ModalProps {
  isOpen: boolean;
  closeHandler: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { Portal } = usePortal("modal");

  const onOverlayClick = (): void => {
    props.closeHandler();
  };

  const onInnerClick = (evt: ME<HTMLDivElement, MouseEvent>): void => {
    evt.stopPropagation();
  };

  return (
    <Portal>
      <div
        className={cn(styles.modal, { [styles.open]: props.isOpen })}
        onClick={onOverlayClick}
      >
        <div className={styles.inner} onClick={onInnerClick}>
          {props.children}
        </div>
      </div>
    </Portal>
  );
};
