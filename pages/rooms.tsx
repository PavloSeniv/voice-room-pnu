import Head from "next/head";
import styles from "../styles/Home.module.css";
import Rooms from "../components/Room/Rooms";
import Script from "next/script";

export default function Room() {
  return (
    <div className={styles.bg__white}>
      <Rooms></Rooms>
      <Script src="/static/js/app.min.js" />
    </div>
  );
}
