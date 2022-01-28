import styles from "./StepActivation.module.css";
import Image from "next/image";
export default function Activation(params) {
  return (
    <section className={styles.main__bg}>
      <h1 className={styles.main__title}>Activation in progress...</h1>
      <Image
        width={50}
        height={50}
        className={styles.main__loader}
        src="img/index/main/loader.gif"
        alt="loader"
      />
    </section>
  );
}
