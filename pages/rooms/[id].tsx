import styles from "../../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Axios from "../../core/axios";

import People from "../../components/pages/Room";

export default function RoomPage({ roomInfo }) {
  // const router = useRouter();
  // console.log("Default" + router);

  // const { id } = router.query;
  // console.log("Dynamic router" + router);

  return (
    <div className={styles.bg__white}>
      <People title={roomInfo.title} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  console.log(context);
  console.log(context.query);
  console.log("id " + context.query.id);

  try {
    const { data } = await Axios.get("/rooms.json");
    const roomId = context.query.id;
    const roomInfo = data.find((obj) => obj.id === roomId);
    // const roomInfo = data.find((obj) => obj.id === "620576809df6ff474112d3f6");

    // console.log(data);
    return {
      props: {
        roomInfo,
        rooms: data,
      },
    };
  } catch (error) {
    console.log("Помилка не існує такого файлу");
  }
  return {
    props: {
      roomInfo: [],
      rooms: [],
    },
  };
};
