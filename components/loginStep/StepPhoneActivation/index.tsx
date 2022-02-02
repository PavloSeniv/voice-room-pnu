import styles from "./StepPhoneActivation.module.css";
import Link from "next/link";
import MainBlock from "../../MainBlock";
import Button from "../../Button";
import Image from "next/image";

export default function GoogleDone(params) {
  return (
    <MainBlock>
      <h1 className={styles.main__title}>Enter your activate code!</h1>
      <form action="" method="post" className={styles.main__inputNumber}>
        <input
          className={styles.main__inputItem}
          type="number"
          maxLength="1"
          placeholder="1"
        />
        <input
          className={styles.main__inputItem}
          type="number"
          maxLength="1"
          placeholder="2"
        />
        <input
          className={styles.main__inputItem}
          type="number"
          maxLength="1"
          placeholder="3"
        />
        <input
          className={styles.main__inputItem}
          type="number"
          maxLength="1"
          placeholder="4"
        />
      </form>

      <Button>
        <h3 className={styles.main__buttonTitle}>Activate</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>

      <p className={styles.main__policy}>
        By entering your number, your agreting to our Teams and Service and
        Privacy Policy.
      </p>
    </MainBlock>
  );
}
