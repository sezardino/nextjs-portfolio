import cn from "classnames";
import styles from "./Contact.module.scss";

import { Button } from "../UI";

export const Contact = () => {
  return (
    <section className={styles.wrapper} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={cn(styles.container, "bd-grid")}>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="mail" placeholder="Email" className={styles.input} />
          <textarea
            name="message"
            cols={0}
            rows={10}
            className={styles.input}
            placeholder="Type Something Nice"
          />
          <Button type="submit" className={styles.button}>
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};
