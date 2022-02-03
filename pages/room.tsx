import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import People from "../components/Room/People";
import About from "../components/Room/About";

const steps = {
  0: People,
  1: About,
};
export default function RoomPage() {
  return (
    <div className={styles.bg__white}>
      <People></People>
    </div>
  );
}
