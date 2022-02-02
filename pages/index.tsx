import Head from "next/head";
import styles from "../styles/Home.module.css";
import Welcome from "../components/loginStep/StepWelcome";
import Phone from "../components/loginStep/StepPhone";
import PhoneActivation from "../components/loginStep/StepPhoneActivation";
import Name from "../components/loginStep/StepName";
import Activation from "../components/loginStep/StepActivation";
import DoneGoogle from "../components/loginStep/StepImportDone";
import ImportGoogle from "../components/loginStep/StepImportGoogle";
import React from "react";

const stepsCpmponents = {
  0: Welcome,
  1: Name,
  2: ImportGoogle,
  3: DoneGoogle,
  4: Phone,
  5: PhoneActivation,
  6: Activation,
};

export default function Login() {
  const [step, setStep] = React.useState<number>(4);
  const Step = stepsCpmponents[step];

  return (
    <div className={styles.bg__login}>
      <main className={styles.main + " " + styles.main__container}>
        <Step />
      </main>
    </div>
  );
}
