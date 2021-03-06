import Link from "next/link";
import Image from "next/image";
import Button from "../../construction/Button";
import styles from "./StepImportDone.module.css";
import MainBlock from "../../construction/MainBlock";
import React from "react";
import UserAvatar from "../../construction/UserAvatar";
import { MainContext } from "../../../pages";

export const SelectPhoto: React.FC = (params) => {
  const { onNextStep } = React.useContext(MainContext);
  const inputFileRef = React.useRef<HTMLInputElement>(null); //Витягаю інпут

  const [avatarUrl, setAvatarUrl] = React.useState<string>(
    "/static/img/index/main/avatar_placeholder.png"
  );

  const handleChangeImage = (e: Event): void => {
    // console.log(e.target.files); // Виводжу в консоль завантажену фотку
    const file = (e.target as HTMLInputElement).files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); //blob
      setAvatarUrl(imageUrl);
      console.log(imageUrl);
    }
  };

  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener("change", handleChangeImage); // Прикріпляю обробник подій
    }
  }, []);

  const onClickNextStep = () => {
    onNextStep();
  };

  return (
    <MainBlock>
      <h1 className={styles.main__title}>Okey, Seniv Pavlo</h1>
      <h2 className={styles.main__info}>It`s your photo</h2>

      <form action="" method="post" className={styles.main__photoSelect}>
        <label
          className={styles.main__photoInputCastomImg}
          htmlFor="main__photo-input"
        >
          <UserAvatar
            width={200}
            height={200}
            className={styles.main__photoImg}
            src={avatarUrl}
            alt="avatar_placeholder"
          />
        </label>
        <input
          name="main__photo-input"
          id="main__photo-input"
          type="file"
          className={styles.main__photoInput}
          ref={inputFileRef}
        />
        <label
          className={styles.main__photoInputCastom}
          htmlFor="main__photo-input"
        >
          Choose diffrent photo
        </label>
      </form>

      <Button onClick={onClickNextStep} className={styles.main__button}>
        <h3 className={styles.main__buttonTitle}>Next</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>
    </MainBlock>
  );
};

export default SelectPhoto;
