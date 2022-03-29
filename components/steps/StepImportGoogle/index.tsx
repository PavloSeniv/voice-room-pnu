import styles from "./StepImportGoogle.module.css";
import Link from "next/link";
import MainBlock from "../../construction/MainBlock";
import Button from "../../construction/Button";
import Image from "next/image";
import React from "react";
import Cookies from "js-cookie";
import { MainContext, UserProps } from "../../../pages";

export const GetGoogle: React.FC = (params) => {
  const { onNextStep, setUserData } = React.useContext(MainContext);

  const onClickAuth = () => {
    // const newWindow = window.open(
    //   "https://localhost/",
    //   "Auth",
    //   "width=500, height=500, status=yes, toolbar=no, menubar=no, location=no"
    // );

    const popUpWindowFunction = (
      url: string | URL,
      title: string,
      w: number,
      h: number
    ) => {
      var y = window.outerHeight / 2 + window.screenY - h / 2;
      var x = window.outerWidth / 2 + window.screenX - w / 2;
      return window.open(
        url,
        title,
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
          w +
          ", height=" +
          h +
          ", top=" +
          y +
          ", left=" +
          x
      );
    };

    popUpWindowFunction(
      "https://localhost:3001/auth/github/callback",
      "Auth",
      700,
      700
    );

    //   const timer = setInterval(() => {
    //     if (popUpWindow.closed) {
    //       clearInterval(timer);
    //       onNextStep();
    //     }
    //   }, 1000);
    // };
  };

  React.useEffect(() => {
    window.addEventListener("message", ({ data }) => {
      const user: string = data;
      // console.log(user);
      if (typeof user === "string" && user.includes("avatarUrl")) {
        Cookies.remove("token");
        const jsonUser: UserProps = JSON.parse(user);
        setUserData(jsonUser);
        console.log(jsonUser);
        onNextStep();
        Cookies.set("token", jsonUser.token);
      }
    });
  });

  // const onClickNextStep = () => {
  //   onNextStep();
  // };

  return (
    <MainBlock>
      <h1 className={styles.main__title}>Do yo wont import from ...?</h1>

      <Button
        onClick={onClickAuth}
        className={styles.main__button + " " + styles.main__buttonGithubBg}
      >
        <Image src="/static/svgicons/github_icons.svg" height={20} width={20} />
        <h3 className={styles.main__buttonTitle}>Import from GitHub</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>

      <Button
        onClick={onClickAuth}
        className={styles.main__button + " " + styles.main__buttonGithubBg}
      >
        <Image src="/static/svgicons/github_icons.svg" height={20} width={20} />
        <h3 className={styles.main__buttonTitle}>Import from Google</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>

      <Link href="/rooms">
        <a className={styles.main__linkSignIn}>Have invite text? Sign in</a>
      </Link>
    </MainBlock>
  );
};

export default GetGoogle;
