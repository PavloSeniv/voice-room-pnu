import styles from "./About.module.css";
import Link from "next/link";

export default function Room(params) {
  return (
    <section className={styles.bg__white + " " + styles.body}>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Link href="/room">
            <a className={styles.header__blockLogo}>
              <picture>
                <source srcset="img/index/main/logo.webp" type="image/webp" />
                <img
                  src="img/index/main/logo.png"
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
                    srcset="img/index/main/avatar_placeholder.webp"
                    type="image/webp"
                  />
                  <img
                    src="img/index/main/avatar_placeholder.png"
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
        <div className={styles.rooms__info}></div>
      </main>

      <section className={styles.rooms__listBg}></section>
    </section>
  );
}
