import styles from "./StepPhone.module.css";
import Link from "next/link";
import MainBlock from "../../construction/MainBlock";
import Button from "../../construction/Button";
import Image from "next/image";
import NumberFormat from "react-number-format";
import React from "react";
import { MainContext } from "../../../pages";
import { Axios } from "../../../core/axios";

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const InputTel: React.FC = (params) => {
  const { onNextStep, setFieldValue } = React.useContext(MainContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [values, setValues] = React.useState<InputValueState>(
    {} as InputValueState
  ); // Витягаю інпук з даними

  //console.log(values);

  const nextDisabled =
    !values.formattedValue || values.formattedValue.includes("_");

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await Axios.get(`/auth/sms?phone=${values.value}`);
      setFieldValue("phone", values.value);
      onNextStep();
    } catch (error) {
      if (error.response) {
        //do something
        console.warn("Error response", error);
      } else if (error.request) {
        //do something else
        console.warn("Error request", error);
      } else if (error.message) {
        //do something other than the other two
        console.warn("Error while send SMS", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainBlock>
      <h1 className={styles.main__title}>Enter your phone!</h1>
      <h2 className={styles.main__info}>
        We well send you a confirmation code
      </h2>
      <form action="" method="get">
        <div className={styles.main__input}>
          <Image src="/static/svgicons/ukraine.png" height={25} width={25} />
          <NumberFormat
            className={styles.main__telephone}
            format="+38 (###) ###-##-##"
            mask="_"
            allowEmptyFormatting
            value={values.value}
            onValueChange={({ formattedValue, value }) =>
              setValues({ formattedValue, value })
            }
          />
        </div>
      </form>

      <Button
        onClick={onSubmit}
        className={styles.main__button}
        disabled={isLoading || nextDisabled}
      >
        {isLoading ? (
          <h3 className={styles.main__buttonTitle}> "Sending..."</h3>
        ) : (
          <>
            <h3 className={styles.main__buttonTitle}>Next</h3>
            <Image
              src="/static/svgicons/arrow-right.svg"
              height={20}
              width={21}
            />
          </>
        )}
      </Button>

      <p className={styles.main__policy}>
        By entering your number, your agreting to our Teams and Service and
        Privacy Policy.
      </p>
    </MainBlock>
  );
};

export default InputTel;
