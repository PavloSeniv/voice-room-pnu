import Link from "next/link";
import Image from "next/image";
import Button from "../../Button";
import styles from "./StepImportDone.module.css";
import MainBlock from "../../MainBlock";

export default function GoogleDone(params) {
  return (
    <MainBlock>
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
              src="/static/img/index/main/avatar_placeholder.png"
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

      <Button>
        <h3 className={styles.main__buttonTitle}>Next</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>
    </MainBlock>
  );
}
