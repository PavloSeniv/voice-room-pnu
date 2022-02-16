import styles from "./StepName.module.css";
import Link from "next/link";
import Button from "../../construction/Button";
import MainBlock from "../../construction/MainBlock";
import Image from "next/image";
import React from "react";
import { MainContext } from "../../../pages";

export default function Name(params) {
  const [inputValue, setInputValue] = React.useState<string>("");
  const { onNextStep } = React.useContext(MainContext);

  const nextDisabled = !inputValue;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onClickNextStep = () => {
    onNextStep();
  };

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
          value={inputValue}
          onChange={handleChangeInput}
        />
      </form>

      <Button
        color="blue"
        disabled={nextDisabled}
        onClick={onClickNextStep}
        className={styles.main__button}
      >
        <h3 className={styles.main__buttonTitle}>Next</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>
    </MainBlock>
  );
}
