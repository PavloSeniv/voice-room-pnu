import styles from "./StepName.module.css";
import Link from "next/link";
import Button from "../../Button";
import MainBlock from "../../MainBlock";
<MainBlock></MainBlock>;
export default function Name(params) {
  return (
    <MainBlock>
      <h1 className={styles.main__title}>What`s yor full name?</h1>
      <h2 className={styles.main__info}>
        People use full name on chat! Thanks!!!
      </h2>
      <form action="" method="POST">
        <input
          className={styles.main__inputName}
          type="text"
          placeholder="Pavlo Seniv"
        />
      </form>

      <Button>
        <h3 className={styles.main__buttonTitle}>Next</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>
    </MainBlock>
  );
}
