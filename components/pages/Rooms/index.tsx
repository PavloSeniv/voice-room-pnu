import styles from "./Rooms.module.css";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import PopUp from "../../construction/PopUp";
import Header from "../../construction/Header";
import CardConversations from "../../construction/CardСonversations";

type PopUpProps = {
  open: boolean;
  closeModal: () => void;
};

export const PopUpContext = React.createContext<PopUpProps>({} as PopUpProps);

export default function Room(params) {
  const [open, setOpen] = React.useState<boolean>(false);

  const closeModal = () => setOpen(false);

  const openModal = () => setOpen((o) => !o);

  return (
    <>
      <Header />

      <main className={styles.rooms + " " + styles.rooms__container}>
        <div className={styles.rooms__info}>
          <div className={styles.rooms__infoTitle}>
            <h3 className={styles.rooms__title}>All conversations</h3>
            <Link href="/">
              <a className={styles.rooms__buttonExplore}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#000"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                </svg>
                <h4 className={styles.rooms__buttonExploreTitle}>Explore</h4>
              </a>
            </Link>
          </div>

          <button
            type="button"
            className={styles.rooms__newRoom}
            onClick={openModal}
          >
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12.85H24.1429"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M13.0714 2L13.0714 23.7"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <h4 className={styles.rooms__newRoomTitle}>Start a room</h4>
          </button>
        </div>
      </main>

      <section className={styles.rooms__listBg}>
        <div className={styles.rooms__listContainer}>
          <ul className={styles.rooms__list}>
            <CardConversations
              title="How create website?"
              guests={[
                "Alex Conroy",
                "Roosevelt Reinger",
                "George Muller",
                "Mr. Ramona Parisian",
              ]}
              speakersAvatar={[
                "/static/img/index/main/avatar_placeholder_users.png",
                "/static/img/index/main/avatar_placeholder_users.png",
                "/static/img/index/main/avatar_placeholder_users.png",
                "/static/img/index/main/avatar_placeholder_users.png",
              ]}
              guestsCount={123}
              speakersCount={23}
            />

            <CardConversations
              title="How create website?"
              guests={[
                "Alex Conroy",
                "Roosevelt Reinger",
                "George Muller",
                "Mr. Ramona Parisian",
              ]}
              speakersAvatar={[
                "/static/img/index/main/avatar_placeholder_users.png",
                "/static/img/index/main/avatar_placeholder_users.png",
                "/static/img/index/main/avatar_placeholder_users.png",
                "/static/img/index/main/avatar_placeholder_users.png",
              ]}
              guestsCount={123}
              speakersCount={23}
            />

            <CardConversations
              title="How create website?"
              guests={[
                "Alex Conroy",
                "Roosevelt Reinger",
                "George Muller",
                "Mr. Ramona Parisian",
              ]}
              speakersAvatar={[
                "/static/img/index/main/avatar_placeholder_users.png",
                "/static/img/index/main/avatar_placeholder_users.png",
                "/static/img/index/main/avatar_placeholder_users.png",
                "/static/img/index/main/avatar_placeholder_users.png",
              ]}
              guestsCount={123}
              speakersCount={23}
            />
          </ul>
        </div>
      </section>

      <PopUpContext.Provider value={{ open, closeModal }}>
        <PopUp />
      </PopUpContext.Provider>
    </>
  );
}
