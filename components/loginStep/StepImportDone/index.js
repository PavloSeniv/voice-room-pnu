import Link from "next/link";
import Image from "next/image";
import styles from "./StepImportDone.module.css";

export default function GoogleDone(params) {
  return (
    <section className={styles.main__bg}>
      <h1 className={styles.main__title}>Okey, Seniv Pavlo</h1>
      <h2 className={styles.main__info}>It`s your photo</h2>

      <form action="" method="post" className={styles.main__photoSelect}>
        <label
          className={styles.main__photoInputCastomImg}
          htmlFor="main__photo-input"
        >
          <picture>
            <source
              srcSet="img/index/main/avatar_placeholder.webp"
              type="image/webp"
            />
            <Image
              width={200}
              height={200}
              className={styles.main__photoImg}
              src="img/index/main/avatar_placeholder.png"
              alt="avatar_placeholder"
            />
          </picture>
        </label>
        <input
          name="main__photo-input"
          id="main__photo-input"
          type="file"
          className={styles.main__photoInput}
        />
        <label
          className={styles.main__photoInputCastom}
          htmlFor="main__photo-input"
        >
          Choose diffrent photo
        </label>
      </form>

      <Link href="/phone">
        <a className={styles.main__button}>
          <h3 className={styles.main__buttonTitle}>Next</h3>
          <svg
            width="20"
            height="21"
            viewbox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6534 10.5625C15.6534 10.3384 15.5803 10.1516 15.4341 10.0022L14.3256 8.86914L9.91582 4.36182C9.76964 4.2124 9.58692 4.1377 9.36765 4.1377C9.14838 4.1377 8.96566 4.2124 8.81948 4.36182L7.71095 5.49487C7.56477 5.64429 7.49168 5.83105 7.49168 6.05518C7.49168 6.2793 7.56477 6.46606 7.71095 6.61548L10.0133 8.96875H3.89811C3.68696 8.96875 3.50424 9.04761 3.34994 9.20532C3.19564 9.36304 3.11849 9.5498 3.11849 9.76562V11.3594C3.11849 11.5752 3.19564 11.762 3.34994 11.9197C3.50424 12.0774 3.68696 12.1562 3.89811 12.1562H10.0133L7.71095 14.5095C7.55665 14.6672 7.4795 14.854 7.4795 15.0698C7.4795 15.2856 7.55665 15.4724 7.71095 15.6301L8.81948 16.7632C8.96566 16.9126 9.14838 16.9873 9.36765 16.9873C9.58692 16.9873 9.76964 16.9126 9.91582 16.7632L14.3256 12.2559L15.4341 11.1228C15.5803 10.9734 15.6534 10.7866 15.6534 10.5625ZM18.7109 10.5625C18.7109 12.2974 18.2927 13.8973 17.4562 15.3624C16.6198 16.8275 15.4848 17.9875 14.0515 18.8425C12.6181 19.6975 11.0528 20.125 9.35547 20.125C7.65817 20.125 6.09283 19.6975 4.65946 18.8425C3.22609 17.9875 2.09117 16.8275 1.2547 15.3624C0.418235 13.8973 0 12.2974 0 10.5625C0 8.82764 0.418235 7.22766 1.2547 5.76257C2.09117 4.29749 3.22609 3.13745 4.65946 2.28247C6.09283 1.42749 7.65817 1 9.35547 1C11.0528 1 12.6181 1.42749 14.0515 2.28247C15.4848 3.13745 16.6198 4.29749 17.4562 5.76257C18.2927 7.22766 18.7109 8.82764 18.7109 10.5625Z"
              fill="white"
            />
          </svg>
        </a>
      </Link>
    </section>
  );
}
