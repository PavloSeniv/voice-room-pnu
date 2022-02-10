import styles from "../styles/Home.module.css";

import Script from "next/script";

import Rooms from "../components/pages/Rooms";

export default function Room() {
  return (
    <div className={styles.bg__white}>
      <Rooms></Rooms>
      <Script src="/static/js/app.min.js" />
    </div>
  );
}
