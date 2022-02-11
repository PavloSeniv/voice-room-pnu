import styles from "./StepPhoneActivation.module.css";
import Link from "next/link";
import MainBlock from "../../construction/MainBlock";
import Button from "../../construction/Button";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import Axios from "../../../core/axios";
import {useRouter} from "next/router";

export const ConfirmTel = (params) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [codes, setCodes] = React.useState(["", "", "", ""]);
    const nextDisabled = codes.some((v) => !v); //|| codes.length < 4

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = Number(event.target.getAttribute("id"));
        const value = event.target.value;
        setCodes((prev) => {
            const newArr = [...prev];
            newArr[id] = value;
            return newArr;
        });
        if (event.target.nextSibling) {
            (event.target.nextSibling as HTMLInputElement).focus();
        }
    };

    console.log(codes);

    const onSubmit = async () => {
        try {
            setIsLoading(true);
            await Axios.get("/rooms.json");
            router.push("/rooms")
        } catch (error) {
            alert("Помилка при активації");
        }

        setIsLoading(false);
    };

    return (
        <React.Fragment>
            {!isLoading ? (
                <MainBlock>
                    <h1 className={styles.main__title}>Enter your activate code!</h1>
                    <form
                        action=""
                        method="get"
                        className={styles.main__inputNumber + " " + styles.form}
                    >
                        {
                            codes.map((code, index) => (
                                <input
                                    key={index}
                                    className={styles.main__inputItem}
                                    type="tel"
                                    maxLength={1}
                                    placeholder="X"
                                    id={String(index)}
                                    onChange={handleChangeInput}
                                    value={code}
                                />
                            ))
                        }
                    </form>

                    <Button
                        className={styles.main__button}
                        disabled={nextDisabled}
                        onClick={onSubmit}
                    >
                        <h3 className={styles.main__buttonTitle}>Activate</h3>
                        <Image
                            src="/static/svgicons/arrow-right.svg"
                            height={20}
                            width={21}
                        />
                    </Button>

                    <p className={styles.main__policy}>
                        By entering your number, your agreting to our Teams and Service and
                        Privacy Policy.
                    </p>
                </MainBlock>
            ) : (
                <MainBlock className={styles.main__bg_loader}>
                    <h1 className={styles.main__title_loader}>
                        Activation in progress...
                    </h1>
                    <Image
                        width={50}
                        height={50}
                        className={styles.main__loader_loader}
                        src="/static/img/index/main/loader.gif"
                        alt="loader"
                    />
                </MainBlock>
            )}
        </React.Fragment>
    );
};

export default ConfirmTel;
