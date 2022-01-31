import styles from "./Rooms.module.css";
import stylesPopUp from "./Popup.module.css";

import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import Popup from "reactjs-popup";

export default function Room(params) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Link href="/room">
            <a className={styles.header__blockLogo}>
              <picture>
                <source srcSet="/static/img/index/main/logo.webp" type="image/webp" />
                <Image
                  width={100}
                  height={50}
                  src="/static/img/index/main/logo.png"
                  alt="logo"
                  className={styles.header__logo}
                />
              </picture>
            </a>
          </Link>

          <div className={styles.header__user}>
            <Link href="/about">
              <a className={styles.header__userName}>Seniv Pavlo</a>
            </Link>

            <Link href="/about">
              <a>
                <picture>
                  <source
                    srcSet="/static/img/index/main/avatar_placeholder.webp"
                    type="image/webp"
                  />
                  <Image
                    width={50}
                    height={50}
                    src="/static/img/index/main/avatar_placeholder.png"
                    alt="avatar_placeholder"
                    className={styles.header__userAvatar}
                  />
                </picture>
              </a>
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.rooms + " " + styles.rooms__container}>
        <div className={styles.rooms__info}>
          <div className={styles.rooms__infoTitle}>
            <h3 className={styles.rooms__title}>All conversions</h3>
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
            onClick={() => setOpen((o) => !o)}
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
            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>
                    How create website?
                  </h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users.png"
                          alt="avatar_placeholder_user-1"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_2.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_2.png"
                          alt="avatar_placeholder_user-2"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_3.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_3.png"
                          alt="avatar_placeholder_user-3"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_4.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_4.png"
                          alt="avatar_placeholder_user-4"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Bruce lee
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Bruce Chaaaaaan
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ілон Маскaaaaaaaaaa
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Pavlo Seniv
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        87
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        3
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>
                    Sleek Concrete Bacon?
                  </h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_5.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_5.png"
                          alt="avatar_placeholder_user-5"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_6.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_6.png"
                          alt="avatar_placeholder_user-6"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_7.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_7.png"
                          alt="avatar_placeholder_user-7"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_8.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_8.png"
                          alt="avatar_placeholder_user-8"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Mitchell Wilderman
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ruth Hane
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Drake Kuphal
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Isom Fritsch
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        8
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        3654
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>
                    What is the most controversial thing you own?
                  </h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=1"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=1"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=2"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=2"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=3"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=3"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=4"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=4"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Mrs. Seth Huels
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Gwen Christiansen
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Dwight Klein
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ricky Schowalter
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        71111111
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        4354354
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>What is own?</h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=5"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=5"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=6"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=6"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=7"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=7"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=8"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=8"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Mrs. Seth Huels
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Gwen Christiansen
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Dwight Klein
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ricky Schowalter
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        71111
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        43354
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>What is own?</h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=5"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=5"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=6"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=6"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=7"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=7"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=8"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=8"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Mrs. Seth Huels
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Gwen Christiansen
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Dwight Klein
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ricky Schowalter
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        71111
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        43354
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>
                    How create website?
                  </h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users.png"
                          alt="avatar_placeholder_user-1"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_2.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_2.png"
                          alt="avatar_placeholder_user-2"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_3.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_3.png"
                          alt="avatar_placeholder_user-3"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_4.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_4.png"
                          alt="avatar_placeholder_user-4"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Bruce lee
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Bruce Chaaaaaan
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ілон Маскaaaaaaaaaa
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Pavlo Seniv
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        87
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        3
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>
                    Sleek Concrete Bacon?
                  </h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_5.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_5.png"
                          alt="avatar_placeholder_user-5"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_6.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_6.png"
                          alt="avatar_placeholder_user-6"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_7.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_7.png"
                          alt="avatar_placeholder_user-7"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/static/img/index/main/avatar_placeholder_users_8.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/static/img/index/main/avatar_placeholder_users_8.png"
                          alt="avatar_placeholder_user-8"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Mitchell Wilderman
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ruth Hane
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Drake Kuphal
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Isom Fritsch
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        8
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        3654
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>
                    What is the most controversial thing you own?
                  </h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=1"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=1"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=2"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=2"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=3"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=3"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=4"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=4"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Mrs. Seth Huels
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Gwen Christiansen
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Dwight Klein
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ricky Schowalter
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        71111111
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        4354354
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>What is own?</h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=5"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=5"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=6"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=6"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=7"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=7"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=8"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=8"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Mrs. Seth Huels
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Gwen Christiansen
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Dwight Klein
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ricky Schowalter
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        71111
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        43354
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className={styles.rooms__listItem}>
              <Link href="/people">
                <a>
                  <h5 className={styles.rooms__listItemTitle}>What is own?</h5>

                  <div className={styles.rooms__listItemLogoUsers}>
                    <div className={styles.rooms__listImgUser}>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=5"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=5"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=6"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=6"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=7"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=7"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="https://picsum.photos/200?random=8"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="https://picsum.photos/200?random=8"
                          alt="avatar_placeholder_user-random"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                    </div>

                    <div className={styles.rooms__listItemUsers}>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Mrs. Seth Huels
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Gwen Christiansen
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Dwight Klein
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div className={styles.rooms__listItemUsersBlock}>
                        <h4 className={styles.rooms__listItemUsersName}>
                          Ricky Schowalter
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rooms__listItemCountUser}>
                    <div className={styles.rooms__listItemCountUserRooms}>
                      <p className={styles.rooms__listItemCountUserRoomsTitle}>
                        71111
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <div className={styles.rooms__listItemCountUserVoice}>
                      <p className={styles.rooms__listItemCountUserVoiceTitle}>
                        43354
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewиox="0 0 16 16"
                      >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className={stylesPopUp.popUp__close} onClick={closeModal}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 14.293 28.789.504l.707.707L15.707 15l13.789 13.789-.707.707L15 15.707 1.211 29.496l-.707-.707L14.293 15 .504 1.211l.707-.707L15 14.293z"
              fill="#000"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <form action="" method="post">
          <div className={stylesPopUp.popUp__info}>
            <h2 className={stylesPopUp.popUp__title}>Topic name</h2>

            <input
              type="text"
              className={stylesPopUp.popUp__nameRoom}
              placeholder="Enter the topic to be discussed"
            />

            <h2 className={stylesPopUp.popUp__titleRoomType}>Room type</h2>

            <ul className={stylesPopUp.popUp__roomTypeList}>
              <li className={stylesPopUp.popUp__roomTypeItem}>
                <div className={stylesPopUp.popUp__typeBg}>
                  <Image
                    src="/static/svgicons/world.svg"
                    height={115}
                    width={105}
                  />
                </div>
                <h3 className={stylesPopUp.popUp__roomTypeName}>Open</h3>
              </li>

              <li className={stylesPopUp.popUp__roomTypeItem}>
                <div className={stylesPopUp.popUp__typeBg}>
                  <Image
                    src="/static/svgicons/person.svg"
                    height={115}
                    width={105}
                  />
                </div>
                <h3 className={stylesPopUp.popUp__roomTypeName}>Social</h3>
              </li>

              <li className={stylesPopUp.popUp__roomTypeItem}>
                <div className={stylesPopUp.popUp__typeBg}>
                  <Image
                    src="/static/svgicons/lock.svg"
                    height={115}
                    width={105}
                  />
                </div>
                <h3 className={stylesPopUp.popUp__roomTypeName}>Close</h3>
              </li>
            </ul>

            <h2 className={stylesPopUp.popUp__titleButton}>
              Start room open to everyone
            </h2>
            <Link href="/rooms">
              <a className={stylesPopUp.popUp__buttonCreate}>
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
                Let`s go
              </a>
            </Link>
          </div>
        </form>
      </Popup>
    </>
  );
}
