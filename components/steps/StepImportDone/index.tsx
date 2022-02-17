import Link from "next/link";
import Image from "next/image";
import Button from "../../construction/Button";
import styles from "./StepImportDone.module.css";
import MainBlock from "../../construction/MainBlock";
import React from "react";
import UserAvatar from "../../construction/UserAvatar";
import { MainContext } from "../../../pages";
import { Axios } from "../../../core/axios";

const uploadFile = async (file: File): Promise<{ url: string }> => {
  const formData = new FormData();

  formData.append("photo", file);

  const { data } = await Axios({
    method: "post",
    url: "upload",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};

export const SelectPhoto: React.FC = (params) => {
  const { onNextStep, userData, setFieldValue } = React.useContext(MainContext);

  const [avatarUrl, setAvatarUrl] = React.useState<string>(
    //"/static/img/index/main/avatar_placeholder.png"
    userData.avatarUrl
  );

  const inputFileRef = React.useRef<HTMLInputElement>(null); //Витягаю інпут

  const handleChangeImage = async (e: Event) => {
    // console.log(e.target.files); // Виводжу в консоль завантажену фотку
    const target = e.target as HTMLInputElement;
    const file = target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); //blob
      setAvatarUrl(imageUrl);
      //console.log(imageUrl);
      const data = await uploadFile(file);
      target.value = "";
      setAvatarUrl(data.url);
      //console.log(data);
      setFieldValue("avatarUrl", data.url);
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
      <h1 className={styles.main__title}>Okey, {userData.fullname}</h1>
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
