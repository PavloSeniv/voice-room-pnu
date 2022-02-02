import styles from "./StepPhone.module.css";
import Link from "next/link";
import MainBlock from "../../MainBlock";
import Button from "../../Button";
import Image from "next/image";
import NumberFormat from "react-number-format";
import React from "react";

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const InputTel = (params) => {
  const [values, setValues] = React.useState<InputValueState>(
    {} as InputValueState
  ); // Витягаю інпук з даними

  console.log(values);
  const nextDisabled =
    !values.formattedValue || values.formattedValue.includes("_");

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

      <Button className={styles.main__button} disabled={nextDisabled}>
        <h3 className={styles.main__buttonTitle}>Next</h3>
        <Image src="/static/svgicons/arrow-right.svg" height={20} width={21} />
      </Button>

      <p className={styles.main__policy}>
        By entering your number, your agreting to our Teams and Service and
        Privacy Policy.
      </p>
    </MainBlock>
  );
};

export default InputTel;
