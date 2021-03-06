import styles from "./StepImportGoogle.module.css";
import Link from "next/link";
import MainBlock from "../../construction/MainBlock";
import Button from "../../construction/Button";
import Image from "next/image";
import React from "react";
import { MainContext } from "../../../pages";

export const GetGoogle: React.FC = (params) => {
  const { onNextStep } = React.useContext(MainContext);

  const onClickNextStep = () => {
    onNextStep();
  };

  return (
    <MainBlock>
      <h1 className={styles.main__title}>Do yo wont import from Google?</h1>
      <div className={styles.main__photoSelect}>
        <div className={styles.main__photoPlaceholder}>PS</div>
        <h3 className={styles.main__photoName}>Pavlo Seniv</h3>
      </div>

      <Button onClick={onClickNextStep} className={styles.main__button}>
        <h3 className={styles.main__buttonTitle}>Import from Google</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>

      <Link href="/room">
        <a className={styles.main__linkSignIn}>Have invite text? Sign in</a>
      </Link>
    </MainBlock>
  );
};

export default GetGoogle;
