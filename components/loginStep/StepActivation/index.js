import styles from "./StepActivation.module.css";

export default function Activation(params) {
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
