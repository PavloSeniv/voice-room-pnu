import Head from "next/head";
import styles from "../styles/Home.module.css";
import Welcome from "../components/loginStep/StepWelcome";

export default function Login() {
  return (
    <div className={styles.bg__login}>
      <main className={styles.main + " " + styles.main__container}>
        <Welcome></Welcome>
      </main>
    </div>
  );
}
