import styles from "../../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import People from "../../components/pages/Room";

export default function RoomPage() {
  const router = useRouter();
  console.log("Default" + router);

  const { id } = router.query;
  console.log("Dynamic router" + router);

  return (
    <div className={styles.bg__white}>
      <People></People>
    </div>
  );
}
