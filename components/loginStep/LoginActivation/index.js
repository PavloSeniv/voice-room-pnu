import styles from "./LoginActivation.module.css";
import { useRouter } from "next/router";

export default function Welcome(params) {
  const router = useRouter();
  return (
    <section className={styles.main__bg}>
      <h1 className={styles.main__title}>Activation in progress...</h1>
      <img
        className={styles.main__loader}
        src="img/index/main/loader.gif"
        alt="loader"
      />
    </section>
  );
}
