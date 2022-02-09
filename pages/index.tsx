import Head from "next/head";
import styles from "../styles/Home.module.css";
import Welcome from "../components/steps/StepWelcome";
import Phone from "../components/steps/StepPhone";
import PhoneActivation from "../components/steps/StepPhoneActivation";
import Name from "../components/steps/StepName";

import DoneGoogle from "../components/steps/StepImportDone";
import ImportGoogle from "../components/steps/StepImportGoogle";
import React from "react";

const stepsCpmponents = {
  0: Welcome,
  1: Name,
  2: ImportGoogle,
  3: DoneGoogle,
  4: Phone,
  5: PhoneActivation,
};

type MainContextProps = {
  onNextStep: () => void;
  step: number;
};

export const MainContext = React.createContext<MainContextProps>(
  {} as MainContextProps
);

export default function Login() {
  const [step, setStep] = React.useState<number>(0);
  const Step = stepsCpmponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className={styles.bg__login}>
      <main className={styles.main + " " + styles.main__container}>
        <MainContext.Provider value={{ step, onNextStep }}>
          <Step />
        </MainContext.Provider>
        {/* <Step onNextStep={() => setStep(step + 1)} /> */}
      </main>
    </div>
  );
}
