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
                <source srcSet="/img/index/main/logo.webp" type="image/webp" />
                <Image
                  width={100}
                  height={50}
                  src="/img/index/main/logo.png"
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
                    srcSet="/img/index/main/avatar_placeholder.webp"
                    type="image/webp"
                  />
                  <Image
                    width={50}
                    height={50}
                    src="/img/index/main/avatar_placeholder.png"
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
                  viewbox="0 0 16 16"
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
              viewbox="0 0 27 26"
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
                          srcSet="/img/index/main/avatar_placeholder_users.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users.png"
                          alt="avatar_placeholder_user-1"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_2.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_2.png"
                          alt="avatar_placeholder_user-2"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_3.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_3.png"
                          alt="avatar_placeholder_user-3"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_4.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_4.png"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
                          srcSet="/img/index/main/avatar_placeholder_users_5.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_5.png"
                          alt="avatar_placeholder_user-5"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_6.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_6.png"
                          alt="avatar_placeholder_user-6"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_7.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_7.png"
                          alt="avatar_placeholder_user-7"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_8.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_8.png"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
                          srcSet="/img/index/main/avatar_placeholder_users.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users.png"
                          alt="avatar_placeholder_user-1"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_2.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_2.png"
                          alt="avatar_placeholder_user-2"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_3.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_3.png"
                          alt="avatar_placeholder_user-3"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_4.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_4.png"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
                          srcSet="/img/index/main/avatar_placeholder_users_5.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_5.png"
                          alt="avatar_placeholder_user-5"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_6.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_6.png"
                          alt="avatar_placeholder_user-6"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_7.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_7.png"
                          alt="avatar_placeholder_user-7"
                          className={styles.rooms__listImgUserAvatar}
                        />
                      </picture>
                      <picture>
                        <source
                          srcSet="/img/index/main/avatar_placeholder_users_8.webp"
                          type="image/webp"
                        />
                        <Image
                          width={50}
                          height={50}
                          src="/img/index/main/avatar_placeholder_users_8.png"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                          viewbox="0 0 16 16"
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
                        viewbox="0 0 16 16"
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
            viewbox="0 0 30 30"
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
                  {/* <?xml version="1.0" encoding="utf-8"?>
                <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg width="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512" xml:space="preserve">
                  <path d="M236.3,65.6c1.2,0,2.7,0.6,4,2.4c-5.8-8.3,6.5-4.7,7.2-12.6c7-5.2,4.5-8.6,6.5-8.8l2.2-1.8c-4.3,1.6-5.8,1.9-7,1.9
	c-0.3,0-0.6,0-0.9,0c-0.3,0-0.7,0-1.1,0c-1.5,0-4,0.3-9.9,2.1c-13.5,1-23.2,15.6-27.8,16c-4.7,2.5-4.5,3-3.4,3
	c0.3,0,0.7-0.1,1.1-0.1c0.4,0,0.7-0.1,1-0.1c1.1,0,0.8,0.5-5.6,3.5c1.5,0.4-11.2,6-11.3,14.8c-0.4,3.4,1,5.7,3.3,5.7
	c2,0,4.5-1.5,7.2-5.3c9-10.4,28-11.4,36.2-17.7C232.9,68.2,233.9,65.6,236.3,65.6z M190.6,69.1c-0.9,0,0.3-1.1,1.6-2.2
	c1.4-1.1,3-2.2,3-2.2c0,0,0,0-0.1,0.1c5.4-2.1,2.1-2.6,5-4c-0.1,0-0.1,0-0.2,0c-0.6,0,0.5-0.8,1.5-1.7c1-0.8,1.9-1.7,1-1.7
	c-0.5,0-1.8,0.3-4,1.2c0.7-1,3.4-1.7,7.2-3.8c-5.5,1.8-9.8,2.9-10.3,2.9c-0.4,0,1.9-0.8,8.8-2.9c0.3,0,0.6,0.1,0.8,0.1
	c0.7,0,1-0.2,0.9-0.4c-0.1-0.2-0.5-0.3-1.2-0.3h0c-9.9,0.8-17.3,7-15.1,7.8c1.3-0.4,2.2-0.6,2.8-0.6c1.3,0,0.7,1.1-1.9,2.7
	c1.2,2.8-20,10-22.4,12.6c1.2-0.7,2-0.9,2.4-0.9c1.6,0-0.5,3.1-2.6,4.6c1.3,1.2,2.3,1.6,3.1,1.6c2.1,0,3-2.9,4.8-3.8
	c0.4,0.8,0.8,1.2,1.3,1.2c1.7,0,3.8-4.2,5.5-6.4c0.5,0.5,1.1,0.9,1.9,0.9c1.6,0,4-1.3,7.8-5C191.4,69,190.8,69.1,190.6,69.1z
	 M167.6,87.5c-3.6,2.2-5.5,3.1-6.3,3.1c-1.5,0,0.5-2.8,2.3-5.7c1.8-2.8,3.4-5.6,1.1-5.6c-1.1,0-3.1,0.6-6.3,2.2
	c-8.7,5.8-23.4,21.8-29.9,21.8c-0.2,0-0.4,0-0.6,0c10.5-7.7,7.4-22.8,22.1-26.7c14.5-8.3,24.4-5.7,37.3-15.2c-3.8,1.9-9.4,4-10.7,4
	c-0.8,0,0.4-1,5.6-3.5c-0.5,0.1-0.9,0.2-1.2,0.2c-3.5,0,23-9.5,24.3-9.7C194.4,53.9,176.8,63,174.4,63c-0.3,0-0.3-0.1-0.3-0.3
	c0.4-0.3,0.4-0.5,0-0.5c-1.3,0-6.7,1.8-12.2,3.6c-5.4,1.8-10.9,3.7-12.1,3.7c-0.4,0-0.4-0.2,0.2-0.6c-47.2,26.8-86.6,72-98.9,125.6
	c5.1,11.7,1.6,34,10,40.5c9.6,8.1-8.2,31.6-3.5,46.1c4.8,26.2,25.5,44.1,27.7,70.9c3.8,18.4,17.7,40.9,23.5,52.6
	c4.4,4.4,16.5,17.1,18.6,17.1c0.8,0,0.3-1.9-2.9-7c-2-5.7-13.6-20.6-8-20.6c0.3,0,0.6,0,1,0.1c-6.9-7,15.3-5.1-0.2-14.6
	c-1.8-2.2-2.2-2.9-1.8-2.9c0.5,0,1.9,0.8,3.5,1.6c1.7,0.8,3.7,1.6,5.3,1.6c2.5,0,4.2-1.7,3.2-7.9c0.4,0.2,0.8,0.2,1.1,0.2
	c2.6,0,1.7-5.1,1.9-10.2c0.2-5.1,1.5-10.2,8.5-10.2c0.8,0,1.7,0.1,2.6,0.2c16.2-8.8,2.1-33.1,20.7-42c-0.7-20.2-27.8-21.2-38-29.4
	c-1.7,1-3.3,1.3-4.9,1.3c-1.8,0-3.4-0.4-4.8-0.9c-1.4-0.4-2.7-0.9-3.6-0.9c-0.2,0-0.4,0-0.6,0.1c17.4-4.6,4.7-28.8-9.7-28.8
	c-0.3,0-0.7,0-1,0c-1.1-10.5-6.5-6.5-7.1-15.2c-0.9,0.5-1.8,0.7-2.7,0.7c-2.4,0-4.6-1.7-6.5-3.3c-1.9-1.7-3.5-3.3-4.9-3.3
	c-1.1,0-2.1,1.1-3,4.3c1-4.9,0.7-6.5-0.3-6.5c-1,0-2.8,1.7-4.8,3.4c-1.9,1.7-4.1,3.4-5.8,3.4c-0.2,0-0.3,0-0.5,0
	c-11.7-8.3,0.1-23-6.1-34.3c4-4.3,5.6-11.6,3.8-11.6c-0.9,0-2.7,1.8-5.5,6.7c-4-10.2,6.6-33.3,15.6-34.6c0.3,0,0.5-0.1,0.8-0.1
	c1.6,0,3.2,0.8,4.6,2.5c0.8,4.7-1.2,14.6-0.4,14.6c0.4,0,1.2-2,3.2-7.2c2.6-11.9,20.8-20.5,22.7-27.8c0.1,0.1,0.1,0.1,0.2,0.1
	c2.1,0,15.6-11.9,21.5-13.2c2.3-2.3,3.9-3.1,5.1-3.1c1.3,0,2,1,2.5,1.9c0.5,1,0.9,1.9,1.4,1.9c0.4,0,0.9-0.6,1.8-2.3
	c-3.1-6.1,4.9-11.9,2.7-11.9c-0.8,0-3.2,0.8-8.1,2.8c-0.8,0.4-1.2,0.5-1.4,0.5c-0.6,0,1.8-1.6,5.3-3.2c3.5-1.6,7.9-3.2,11.6-3.2
	c1.8,0,3.4,0.4,4.6,1.4c15.5-3.7,7-8.8,7.8-8.8c0,0,0.1,0,0.2,0C162.4,103.4,161.1,93.6,167.6,87.5z M98.3,128.4
	c-0.2,0,0.7-1.3,3.7-5c6.2-4.6,11.2-7.7,5.5-10.7c2.5-1.1,4.9-2.4,7.2-3.8c-0.1,4.9-4.2,16.8-6.4,16.8c-0.5,0-1-0.7-1.2-2.2
	c1.3-2.3,1.4-3.2,0.9-3.2c-0.8,0-3.1,2-5.3,4.1C100.5,126.3,98.5,128.4,98.3,128.4z M104,131.1c-2.7,0-2.2-1.7,6.1-3.4
	c3.6-0.5,0.8-0.3,5.1-1.3C111,129.8,106.3,131.1,104,131.1z M259.5,121c1.2-0.2,2.1-0.2,2.8-0.2c2.9,0,1.6,1.2-0.1,2.4
	c-1.7,1.2-3.8,2.4-2.6,2.4c0.7,0,2.6-0.4,6.5-1.5c19.7-1.4-7.7-18.1-3.3-23.7l-1.2-0.4C253.5,110.3,267,110.5,259.5,121z
	 M251.3,121.4c1.4,0,3.2-1.6,5.1-6.1c2.6-3.1,1.5-3.5-1.3-5C247.4,112.3,248.1,121.4,251.3,121.4z M320.3,153.1
	c-0.3,0-0.5,0.1-0.7,0.2c0.8,0.2,1.6,0.4,2.4,0.4C321.2,153.3,320.7,153.1,320.3,153.1z M454.6,178c1.7,3.7,2.6,5.2,2.7,5.2
	c0.7,0-12.6-32.4-18.1-38.2c-28.7-47.2-75.9-83.3-129.7-96.8h-0.1c-1.4,0,0.2,0.7,2.1,1.4c1.9,0.7,4.2,1.4,4.2,1.4
	c0,0-1.5-0.5-6.1-1.8c-5.1-1.5-10.3-2.6-15.6-3c-0.9,0.3,21.9,9.3,37.2,14c-5.1-1.6-10.4-3-11.7-3c-0.9,0,0,0.6,3.7,2.2
	c-4.5-1.3-6.4-1.9-6.6-1.9c-0.3,0,6,2.1,11.9,4.2c6,2.1,11.7,4.2,10.1,4.2c-0.4,0-1.5-0.2-3.2-0.5c5.1,2.8,6.9,3.9,6.6,3.9
	c-0.5,0-6.8-3-13.3-6c-6.4-3-12.9-6-13.8-6c-0.5,0,0.8,1,5.2,3.6c6,2.6,12,5.2,10.3,5.2c-0.8,0-3.1-0.5-7.6-1.8
	c10,5.1-7.1,3.1-1.3,10c-3.2-3-4.5-4-4.8-4s0.5,1.2,1.3,2.4c0.8,1.2,1.4,2.4,0.7,2.4c-0.1,0-0.1,0-0.2,0c7,7.6-4.9,0.8,3.6,7.6
	c-6.4-2.9-17.3-7.7-12.4-7.7c1.2,0,3.5,0.3,7.1,1.1c-6.5-7.6-24.9-7.9-25.3-8.8c-4.6,0.3-4.7,3.8-3.9,10.2
	c-0.1,10.1-10,10.3-8.7,16.1c0-0.1,0.1-0.1,0.1-0.1c0.2,0,0.3,2,0.9,4.1c0.7,2,1.9,4.1,4.5,4.1c1.4,0,3.2-0.6,5.4-2.1
	c3.1,5.6,5.9,7.6,8.1,7.6c3.3,0,5.3-4.5,5.1-8.6c-3.6-2-8.3-18.6-3.1-18.6c0.8,0,1.8,0.4,3.1,1.3c-8.1,19.9,32,6.6,9.3,15.7
	c5.1,6.7-3.2,6.4-0.8,14.5c-3.9,1.1-8.2,2.1-12,2.1c-5.6,0-9.9-2.4-9.4-10.8c-7,3.7,7,16.2-6.9,16.2h-0.8
	c-6.7,12.3-31.8,8.1-12.1,21.1c1.1,5.7-2.5,6.7-7.1,6.7c-1.2,0-2.5-0.1-3.8-0.2c-1.3-0.1-2.6-0.1-3.8-0.1c-5.2,0-8.9,1.3-5.7,9.4
	c-2.3,8.4,3.1,12.1,9.7,12.1c8,0,17.8-5.2,18.5-13.8c4.3-6.5,9.8-9.2,15.5-9.2c9,0,18.5,6.8,24.7,15.2c0.5,0.8,0.9,1.1,1.1,1.1
	c0.5,0,0-2-0.2-4c-0.2-1.6-0.2-3.2,0.4-3.7c-8.9-2.5-15.7-13.3-12.7-13.3c1,0,3.1,1.2,6.5,4.4c0.2,0,0.4,0,0.5,0
	c5.6,0,10,4.4,13.4,8.8c3.5,4.4,6.1,8.8,8.4,8.8c0.9,0,1.8-0.8,2.6-2.6c-0.4-0.6-1.4-2.3-1.9-4c-0.6-2.1-0.6-4.2,2.1-4.2
	c1.1,0,2.6,0.4,4.7,1.2c6.8-1.8-4.3-19.5,4.7-19.5c0.9,0,2,0.2,3.4,0.6c-0.1,3.1,1.3,4.2,2.6,4.2c2.6,0,5.2-3.7-1.1-4.8
	c2.4-2.3,3.8-3.2,4.8-3.2c3.5,0,0.7,11.6,12.8,11.6c4.1,9.7-35.6,0.7-22.9,19.3c2.9,2.1,6.5,2.5,10,2.5c1.1,0,2.1,0,3.1-0.1
	c1,0,2-0.1,2.9-0.1c6.2,0,10.6,1.5,7.9,14.3c-3.3,2.4-7,3.2-10.8,3.2c-3.4,0-6.8-0.6-10.1-1.2c-3.3-0.6-6.5-1.2-9.4-1.2
	c-4.5,0-8.1,1.5-10.3,6.7c-11.7-4.8-27.1-5-25.6-19.5c-20.4,2.9-41.7,1.4-56.7,13.9c-0.9,18.3-32.3,24.2-24.7,45
	c-9.1,19.2,11,46.1,31.5,46.1c0.7,0,1.5,0,2.2-0.1c11.2-0.1,22.5-5.1,32.4-5.1c5.1,0,9.7,1.3,13.7,5.3c0.9-0.1,1.7-0.2,2.4-0.2
	c15.3,0-4.9,24.3,13.4,28.4c16.6,17.2-10.2,34.9,2.9,51.4c1.4,12.9,7.8,23.7,7.8,36.3c1.7,0.2,3.3,0.3,5,0.3
	c21.1,0,34.3-18.4,46.7-32.3c-3.8-20.8,29.5-24.9,18.1-48.2c-5.3-25.5,25.1-40.6,23.4-66.1c0.3-3.6-0.7-4.7-2.2-4.7
	c-1.5,0-3.7,1.1-5.8,2.1c-2.2,1.1-4.6,2.1-6.5,2.1c-2.5,0-4.4-1.7-4.6-7.3c-14.7-13.7-21.4-32.3-35.1-47.4
	c17.8,8.6,27.9,28,36.1,45.6c0.7,0.2,1.4,0.3,2.2,0.3c14.5,0,34.7-34.7,12.7-43.1c-1.2,3.3-2.8,4.5-4.7,4.5c-3.3,0-7.1-4-9.8-7.9
	c-2.7-4-4.1-8-2.6-8c1,0,3.2,1.6,7,5.8c4.3,2.7,8.5,3.4,12.9,3.4c4.3,0,8.7-0.7,13.3-1.1c5.8,2.3,8.3,9.7,10.1,9.7
	c0.3,0,0.7-0.3,1-1c4.6,11,9.9,30.6,14.7,35.9C459.5,212.3,458.9,194.5,454.6,178z M398.8,154.9c-11.3-2.9-15-16.9-23.9-25
	c-0.1-2.2,3.2-1.8,2.4-5.5c12,3.7,8.1,7.4,7,8.1C388.7,139.8,401,144.8,398.8,154.9z M243.5,78.8c-10.9,3.2-12.4-0.3-10.5,6.4
	c0.8,0.6,2.3,0.8,3.8,0.8C242.1,86.1,249.3,83,243.5,78.8z M403.6,354.3c14.3-12.1,16.1-26.5,16.8-41.1
	C414,325.7,395,339.5,403.6,354.3z M338.5,159.3c-0.1,0.1-0.1,0.1-0.1,0.2c0.1,0.2,0.2,0.2,0.2,0.2
	C338.6,159.7,338.6,159.6,338.5,159.3z M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c141.4,0,256-114.6,256-256S397.4,0,256,0z
	 M256,492.3C125.5,492.3,19.7,386.5,19.7,256S125.5,19.7,256,19.7S492.3,125.5,492.3,256S386.5,492.3,256,492.3z" />
                </svg> */}
                </div>
                <h3 className={stylesPopUp.popUp__roomTypeName}>Open</h3>
              </li>

              <li className={stylesPopUp.popUp__roomTypeItem}>
                <div className={stylesPopUp.popUp__typeBg}>
                  {/* <?xml version="1.0" encoding="iso-8859-1"?>
                <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg width="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100.353 100.353"
                  style="enable-background:new 0 0 100.353 100.353;" xml:space="preserve">
                  <g>
                    <path d="M49.106,50.437c-12.167,0-22.066,9.898-22.066,22.065c0,0.828,0.671,1.5,1.5,1.5h41.131c0.828,0,1.5-0.672,1.5-1.5
		C71.171,60.335,61.272,50.437,49.106,50.437z M30.099,71.002c0.768-9.814,9-17.565,19.007-17.565
		c10.007,0,18.239,7.751,19.006,17.565H30.099z" />
                    <path d="M48.746,48.456c7.143,0,12.954-5.811,12.954-12.954c0-7.143-5.812-12.954-12.954-12.954
		c-7.143,0-12.954,5.811-12.954,12.954C35.792,42.645,41.603,48.456,48.746,48.456z M48.746,25.548c5.488,0,9.954,4.465,9.954,9.954
		c0,5.488-4.466,9.954-9.954,9.954c-5.489,0-9.954-4.465-9.954-9.954C38.792,30.013,43.257,25.548,48.746,25.548z" />
                    <path d="M19.78,58.714c2.461,0,4.878,0.656,6.99,1.898c0.714,0.422,1.634,0.181,2.053-0.532c0.42-0.714,0.182-1.634-0.533-2.054
		c-2.572-1.513-5.515-2.312-8.51-2.312c-9.257,0-16.788,7.531-16.788,16.788c0,0.828,0.671,1.5,1.5,1.5h19.012
		c0.829,0,1.5-0.672,1.5-1.5s-0.671-1.5-1.5-1.5H6.073C6.823,64.102,12.684,58.714,19.78,58.714z" />
                    <path d="M19.514,53.319c5.521,0,10.014-4.492,10.014-10.014c0-5.522-4.492-10.014-10.014-10.014
		c-5.522,0-10.014,4.492-10.014,10.014C9.5,48.826,13.992,53.319,19.514,53.319z M19.514,36.291c3.867,0,7.014,3.146,7.014,7.014
		c0,3.867-3.146,7.014-7.014,7.014c-3.868,0-7.014-3.146-7.014-7.014C12.5,39.437,15.646,36.291,19.514,36.291z" />
                    <path d="M78.553,55.714c-2.994,0-5.937,0.8-8.51,2.312c-0.715,0.42-0.953,1.339-0.533,2.053c0.42,0.716,1.342,0.953,2.053,0.533
		c2.113-1.242,4.53-1.898,6.99-1.898c7.096,0,12.957,5.388,13.707,12.288H74.832c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5
		h19.009c0.828,0,1.5-0.672,1.5-1.5C95.341,63.245,87.81,55.714,78.553,55.714z" />
                    <path d="M78.82,53.319c5.521,0,10.014-4.492,10.014-10.014c0-5.522-4.492-10.014-10.014-10.014
		c-5.522,0-10.015,4.492-10.015,10.014C68.806,48.826,73.298,53.319,78.82,53.319z M78.82,36.291c3.867,0,7.014,3.146,7.014,7.014
		c0,3.867-3.146,7.014-7.014,7.014c-3.868,0-7.015-3.146-7.015-7.014C71.806,39.437,74.952,36.291,78.82,36.291z" />
                  </g>
                </svg> */}
                </div>
                <h3 className={stylesPopUp.popUp__roomTypeName}>Social</h3>
              </li>

              <li className={stylesPopUp.popUp__roomTypeItem}>
                <div className={stylesPopUp.popUp__typeBg}>
                  {/* <!DOCTYPE svg
                  PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
                <svg width="80px" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px"
                  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                  <path
                    d="M20,76.67v6.663C20,86.999,23.001,90,26.667,90h46.666C76.999,90,80,86.999,80,83.333V76.67H20z" />
                  <path d="M73.333,36.667H36.667V30c0-7.363,5.97-13.333,13.333-13.333S63.333,22.637,63.333,30H70c0-11.045-8.955-20-20-20
	s-20,8.955-20,20v6.667h-3.333c-3.666,0-6.667,3.001-6.667,6.667V70h60V43.333C80,39.668,76.999,36.667,73.333,36.667z M40,63.334
	h-6.667V50H40V63.334z M53.333,63.334h-6.666V50h6.666V63.334z M66.667,63.334H60V50h6.667V63.334z" />
                </svg> */}
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
                  viewbox="0 0 27 26"
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
