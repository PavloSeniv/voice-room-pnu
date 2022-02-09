import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";


export const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Link href="/rooms">
                    <a className={styles.header__blockLogo}>
                        <picture>
                            <source srcSet="/static/img/index/main/logo.webp" type="image/webp"/>
                            <Image
                                width={100}
                                height={50}
                                src="/static/img/index/main/logo.png"
                                alt="logo"
                                className={styles.header__logo}
                            />
                        </picture>
                    </a>
                </Link>

                <div className={styles.header__user}>
                    <Link href="/profile/admin">
                        <a className={styles.header__userName}>Seniv Pavlo</a>
                    </Link>

                    <Link href="/profile/admin">
                        <a>
                            <picture>
                                <source
                                    srcSet="/static/img/index/main/avatar_placeholder.webp"
                                    type="image/webp"
                                />
                                <Image
                                    width={50}
                                    height={50}
                                    src="/static/img/index/main/avatar_placeholder.png"
                                    alt="avatar_placeholder"
                                    className={styles.header__userAvatar}
                                />
                            </picture>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}


export default Header