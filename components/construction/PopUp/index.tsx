import stylesPopUp from "./PopUp.module.css";
import Image from "next/image";
import Link from "next/link";
import Popup from "reactjs-popup";
import React from "react";
import {PopUpContext} from "../../pages/Rooms";

const PopUpDialog: React.FC = () => {
    const {open, closeModal} = React.useContext(PopUpContext)

    return (
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className={stylesPopUp.popUp__close} onClick={closeModal}>
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 14.293 28.789.504l.707.707L15.707 15l13.789 13.789-.707.707L15 15.707 1.211 29.496l-.707-.707L14.293 15 .504 1.211l.707-.707L15 14.293z"
                        fill="#000"
                        fillRule="evenodd"
                    />
                </svg>
            </div>
            <form action="" method="post">
                <div className={stylesPopUp.popUp__info}>
                    <h2 className={stylesPopUp.popUp__title}>Topic name</h2>

                    <input
                        type="text"
                        className={stylesPopUp.popUp__nameRoom}
                        placeholder="Enter the topic to be discussed"
                    />

                    <h2 className={stylesPopUp.popUp__titleRoomType}>Room type</h2>

                    <ul className={stylesPopUp.popUp__roomTypeList}>
                        <li className={stylesPopUp.popUp__roomTypeItem}>
                            <div className={stylesPopUp.popUp__typeBg}>
                                <Image
                                    src="/static/svgicons/world.svg"
                                    height={115}
                                    width={105}
                                />
                            </div>
                            <h3 className={stylesPopUp.popUp__roomTypeName}>Open</h3>
                        </li>

                        <li className={stylesPopUp.popUp__roomTypeItem}>
                            <div className={stylesPopUp.popUp__typeBg}>
                                <Image
                                    src="/static/svgicons/person.svg"
                                    height={115}
                                    width={105}
                                />
                            </div>
                            <h3 className={stylesPopUp.popUp__roomTypeName}>Social</h3>
                        </li>

                        <li className={stylesPopUp.popUp__roomTypeItem}>
                            <div className={stylesPopUp.popUp__typeBg}>
                                <Image
                                    src="/static/svgicons/lock.svg"
                                    height={115}
                                    width={105}
                                />
                            </div>
                            <h3 className={stylesPopUp.popUp__roomTypeName}>Close</h3>
                        </li>
                    </ul>

                    <h2 className={stylesPopUp.popUp__titleButton}>
                        Start room open to everyone
                    </h2>
                    <Link href="/rooms">
                        <a className={stylesPopUp.popUp__buttonCreate}>
                            <svg
                                width="27"
                                height="26"
                                viewBox="0 0 27 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 12.85H24.1429"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M13.0714 2L13.0714 23.7"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                            Let`s go
                        </a>
                    </Link>
                </div>
            </form>
        </Popup>);
}

export default PopUpDialog;