import styles from "../components/pages/Rooms/Rooms.module.css";

import Script from "next/script";
import Axios from "../core/axios";

import Rooms from "../components/pages/Rooms";
import CardConversations from "../components/construction/CardСonversations";
import Link from "next/link";

export default function Room({ rooms = [] }) {
  return (
    <div className={styles.bg__white}>
      <Rooms>
        <section className={styles.rooms__listBg}>
          <div className={styles.rooms__listContainer}>
            <ul className={styles.rooms__list}>
              {rooms.map((obj, i) => (
                <Link key={obj.id} href={`/rooms/${obj.id}`}>
                  <a>
                    <CardConversations
                      title={obj.title}
                      guests={obj.guests}
                      speakersAvatar={obj.speakersAvatar}
                      guestsCount={obj.guestsCount}
                      speakersCount={obj.speakersCount}
                    />
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </Rooms>

      <Script src="/static/js/app.min.js" />
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await Axios.get("/rooms.json");
    console.log(data);
    return {
      props: {
        rooms: data,
      },
    };
  } catch (error) {
    console.log("Помилка не існує такого файлу");
  }
  return {
    props: {
      rooms: [],
    },
  };
};
