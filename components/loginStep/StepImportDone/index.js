import Link from "next/link";
import Image from "next/image";
import Button from "../../Button";
import styles from "./StepImportDone.module.css";
import MainBlock from "../../MainBlock";
import React from "react";
import UserAvatar from "../../UserAvatar";

export default function GoogleDone(params) {
  const inputFileRef = React.useRef(); //Витягаю інпут

  const handleChangeImage = (e) => {
    console.log(e.target.files); // Виводжу в консоль завантажену фотку
  };

  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener("change", handleChangeImage); // Прикріпляю обробник подій
    }
  }, []);
  return (
    <MainBlock>
      <h1 className={styles.main__title}>Okey, Seniv Pavlo</h1>
      <h2 className={styles.main__info}>It`s your photo</h2>

      <UserAvatar
        width={200}
        height={200}
        className={styles.main__photoImg}
        src="/static/img/index/main/avatar_placeholder.png"
        alt="avatar_placeholder"
      ></UserAvatar>

      <Button className={styles.main__button}>
        <h3 className={styles.main__buttonTitle}>Next</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>
    </MainBlock>
  );
}
