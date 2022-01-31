import styles from "./StepPhone.module.css";
import Link from "next/link";
import MainBlock from "../../MainBlock";
import Button from "../../Button";

export default function GoogleDone(params) {
  return (
    <MainBlock>
      <h1 className={styles.main__title}>Enter your phone!</h1>
      <h2 className={styles.main__info}>
        We well send you a confirmation code
      </h2>
      <form action="" method="get">
        <input
          className={styles.main__inputTel}
          type="number"
          maxLength="10"
          placeholder="+ 38 (067) 277-76-71"
        />
      </form>

      <Button>
        <h3 className={styles.main__buttonTitle}>Next</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>

      <p className={styles.main__policy}>
        By entering your number, your agreting to our Teams and Service and
        Privacy Policy.
      </p>
    </MainBlock>
  );
}
