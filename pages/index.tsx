import Head from "next/head";
import styles from "../styles/Home.module.css";
import Welcome from "../components/steps/StepWelcome";
import {StepPhone} from "../components/steps/StepPhone";
import PhoneActivation from "../components/steps/StepPhoneActivation";
import Name from "../components/steps/StepName";

import DoneGoogle from "../components/steps/StepImportDone";
import ImportGoogle from "../components/steps/StepImportGoogle";
import React from "react";

const stepsComponents = {
  0: Welcome,
  1: ImportGoogle,
  2: Name,
  3: DoneGoogle,
  4: StepPhone,
  5: PhoneActivation,
};

export type UserProps = {
  id: number;
  fullname: string;
  username: string;
  avatarUrl: string;
  phone: string;
  isActive: number;
  token?: string;
};

type MainContextProps = {
  onNextStep: () => void;
  setUserData: React.Dispatch<React.SetStateAction<UserProps>>;
  step: number;
  userData: UserProps;
  setFieldValue: (field: keyof UserProps, value: string) => void;
};

export const MainContext = React.createContext<MainContextProps>(
  {} as MainContextProps
);

const getUserData = (): UserProps | null => {
  try {
    return JSON.parse(window.localStorage.getItem("userData"));
  } catch (error) {
    return null;
  }
};

const getFormStep = (): number => {
  const json = getUserData();
  if (json) {
    if (json.phone) {
      return 5;
    } else {
      return 4;
    }
  }
  return 0;
};

export default function Login() {
  const [step, setStep] = React.useState<number>(0);
  const Step = stepsComponents[step];

  const [userData, setUserData] = React.useState<UserProps>();

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const setFieldValue = (field: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // console.log(userData);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const json = getUserData();
      if (json) {
        setUserData(json);
        setStep(getFormStep());
      }
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(
      "userData",
      userData ? JSON.stringify(userData) : ""
    );
  }, [userData]);

  return (
    <div className={styles.bg__login}>
      <main className={styles.main + " " + styles.main__container}>
        <MainContext.Provider
          value={{ step, onNextStep, userData, setUserData, setFieldValue }}
        >
          <Step />
        </MainContext.Provider>
        {/* <Step onNextStep={() => setStep(step + 1)} /> */}
      </main>
    </div>
  );
}
