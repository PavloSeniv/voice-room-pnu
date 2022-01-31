import styles from "./StepActivation.module.css";
import Image from "next/image";
import MainBlock from "../../MainBlock";

export default function Activation(params) {
  return (
    <MainBlock>
      <h1 className={styles.main__title}>Activation in progress...</h1>
      <Image
        width={50}
        height={50}
        className={styles.main__loader}
        src="/static/img/index/main/loader.gif"
        alt="loader"
      />
    </MainBlock>
  );
}
