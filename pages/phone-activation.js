import Head from "next/head";
import styles from "../styles/Home.module.css";
import PhoneActivation from "../components/loginStep/StepPhoneActivation";

export default function Login() {
  return (
    <div className={styles.bg__login}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="author"
          content="Seniv Pavlo, https://github.com/PavloSeniv"
        />
        <meta name="copyright" content="Seniv Pavlo" />
      </Head>
      <main className={styles.main + " " + styles.main__container}>
        <PhoneActivation></PhoneActivation>
      </main>
    </div>
  );
}
