import styles from "./People.module.css";
import Link from "next/link";

export default function Room(params) {
  return (
    <section className={styles.bg__white + " " + styles.body}>
      <header className={styles.header}></header>

      <main className={styles.rooms + " " + styles.rooms__container}>
        <div className={styles.rooms__info}></div>
      </main>

      <section className={styles.rooms__listBg}></section>
    </section>
  );
}
