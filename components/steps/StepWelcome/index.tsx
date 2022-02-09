import styles from "./StepWelcome.module.css";
import MainBlock from "../../construction/MainBlock";
import Button from "../../construction/Button";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Oval } from "react-loader-spinner";
import Image from "next/image";
import { useRouter } from "next/router";
import { MainContext } from "../../../pages";

export const Welcome: React.FC = () => {
  const {onNextStep} = React.useContext(MainContext)

  const [style, setStyle] = useState({ display: "flex" });
  // const router = useRouter();

  useEffect(() => {
    setTimeout(function () {
      setStyle({ display: "none" });
    }, 3000);
  }, []);

  return (
    <>
      <MainBlock>
        <h1 className={styles.main__title}>🎉 Welcome to Voice Room PNU! </h1>
        <h2 className={styles.main__info}>
          Discover millions of rooms, filled with fascinating and unexpected
          conversations. 😄
        </h2>
        {/* <Button type="button" onClick={() => router.push("/name")}> */}
        <Button onClick= {onNextStep}>
          <h3 className={styles.main__buttonTitle}>Get yor username</h3>
          <Image
            src="/static/svgicons/arrow-right.svg"
            height={20}
            width={21}
          />
        </Button>
        <Link href="/room">
          <a className={styles.main__linkSignIn}>Have invite text? Sign in</a>
        </Link>
      </MainBlock>

      <section style={style} className={styles.loader}>
        <Oval
          ariaLabel="Loading..."
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={2}
          color="#5b75a6"
          secondaryColor="white"
        />
      </section>
    </>
  );
};

export default Welcome;
