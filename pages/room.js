import Head from "next/head";
import styles from "../styles/Home.module.css";
import Rooms from "../components/Room/Rooms";
import Script from "next/script";

export default function Room() {
  return (
    <div className={styles.bg__white}>
      <Head>
        <title>Room</title>
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
      <Rooms></Rooms>
      <Script src="/static/js/app.min.js" />
    </div>
  );
}
