import styles from "./About.module.css";

import Link from "next/link";
import Image from "next/image";
export default function Room(params) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Link href="/rooms">
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

      <main className={styles.about + " " + styles.about__container}>
        <div className={styles.about__info}>
          <Link href="/room">
            <a className={styles.about__info_title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#000"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <h3 className={styles.about__title}>Back</h3>
            </a>
          </Link>
        </div>
      </main>

      <section className={styles.about__user_bg}>
        <div className={styles.about__user_container}>
          <div className={styles.about__user_row}>
            <div className={styles.about__user_info}>
              <div className={styles.about__user_info_main}>
                <picture>
                  <source
                    srcSet="img/index/main/avatar_placeholder.webp"
                    type="image/webp"
                  />
                  <Image
                    width={120}
                    height={120}
                    src="/static/img/index/main/avatar_placeholder.png"
                    alt="avatar_placeholder"
                    className={styles.about__user_info_main_photo}
                  />
                </picture>

                <div className={styles.about__user_info_username}>
                  <h2 className={styles.about__username}>Seniv Pavlo</h2>
                  <h3 className={styles.about__logname}>@SenivPavlo</h3>
                </div>

                <button
                  type="submit"
                  className={styles.about__user_button_follow}
                >
                  Follow
                </button>

                <Link href="#">
                  <a>
                    <svg
                      width="78"
                      height="65"
                      viewBox="0 0 78 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36 19.2C36 20.9673 34.6569 22.4 33 22.4C31.3431 22.4 30 20.9673 30 19.2C30 17.4327 31.3431 16 33 16C34.6569 16 36 17.4327 36 19.2ZM36 32C36 33.7673 34.6569 35.2 33 35.2C31.3431 35.2 30 33.7673 30 32C30 30.2327 31.3431 28.8 33 28.8C34.6569 28.8 36 30.2327 36 32ZM33 48C34.6569 48 36 46.5673 36 44.8C36 43.0327 34.6569 41.6 33 41.6C31.3431 41.6 30 43.0327 30 44.8C30 46.5673 31.3431 48 33 48Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </Link>
              </div>

              <div className={styles.about__user_bio}>
                <p className={styles.about__user_bio_info}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>

                <p className={styles.about__user_bio_info}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className={styles.about__user_subscripe}>
              <div className={styles.about__user_subscripe_info}>
                <div className={styles.about__user_followers}>
                  <h2 className={styles.about__user_followers_count}>99</h2>
                  <h3 className={styles.about__user_followers_title}>
                    followers
                  </h3>
                </div>
                <div className={styles.about__user_following}>
                  <h2 className={styles.about__user_following_count}>0</h2>
                  <h3 className={styles.about__user_following_title}>
                    following
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
