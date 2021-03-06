import styles from "./Room.module.css";

import Link from "next/link";
import Image from "next/image";

import Header from "../../construction/Header";

interface RoomPageProps {
  title: string;
}

const RoomPage: React.FC<RoomPageProps> = ({ title }) => {
  return (
    <>
      <Header />

      <main className={styles.people + " " + styles.people__container}>
        <div className={styles.people__info}>
          <Link href="/rooms">
            <a className={styles.people__info_title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#000"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <h3 className={styles.people__title}>All rooms</h3>
            </a>
          </Link>
        </div>
      </main>

      <section className={styles.people__list_user_bg}>
        <div className={styles.people__list_user_container}>
          <div className={styles.people__list_info_room}>
            <h2 className={styles.people__list_room_title}>{title}</h2>
            <div className={styles.people__block_leave}>
              <button className={styles.people__button_hand}>
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.3129 0.958328C18.8397 0.958328 17.3974 2.61935 16.6418 3.90271C16.3559 4.3884 16.1223 4.89381 15.9324 5.37458C14.8115 5.034 13.5716 5.01573 12.4829 5.25475C10.3761 5.71725 8.41824 7.21121 8.18112 9.70978C8.03874 11.2101 8.0423 12.75 8.07882 13.9819C6.78053 13.7417 5.19762 13.841 3.53555 14.814C1.74251 15.8637 1.12528 17.5064 0.997219 18.8984C0.875555 20.2209 1.16697 21.503 1.49334 22.35C2.28961 25.8539 4.10013 34.2251 5.16175 40.5177C5.7988 44.2938 8.59082 46.8163 11.5838 48.4009C14.5604 49.9767 17.9037 50.7252 20.1163 50.9411L20.1791 50.9472L20.2422 50.9492C21.969 51.0033 24.6818 50.8276 27.3534 50.1265C29.9943 49.4334 32.8693 48.153 34.5313 45.8178C36.2185 43.4473 37.7911 41.2682 39.2702 39.4643C40.7591 37.6484 42.0618 36.3287 43.1897 35.5807L43.1866 35.583L43.1859 35.5837C43.1859 35.5837 43.191 35.5819 43.2016 35.5769C43.2081 35.5737 43.2167 35.5695 43.2278 35.5641C43.2706 35.5433 43.3497 35.5048 43.4811 35.4433C43.5165 35.4267 43.5545 35.409 43.5948 35.3903C43.6286 35.3745 43.6641 35.358 43.701 35.3408L43.7025 35.3401L43.7032 35.3398L43.7046 35.3392L43.7054 35.3388C43.9062 35.2455 44.1496 35.1324 44.4087 35.0088C45.149 34.6559 46.1077 34.1764 47.0492 33.6014C47.9779 33.0343 48.9658 32.3291 49.7117 31.5062C50.4509 30.6907 51.0937 29.5987 50.9483 28.3213C50.9172 28.0487 50.82 27.8003 50.7481 27.6371C50.6655 27.45 50.5614 27.255 50.4466 27.0625C50.2166 26.6768 49.9086 26.2426 49.5486 25.8153C48.8773 25.0182 47.8201 23.9991 46.5293 23.5456L46.4493 23.5175L46.3664 23.4968C44.5046 23.0296 39.9701 22.6995 36.4156 25.2532C36.0619 25.5074 35.7447 25.7295 35.461 25.9231V8.05763C35.461 6.77831 34.5846 5.47893 33.5926 4.59896C32.5872 3.70706 31.0024 2.84133 29.1886 3.04042C28.1351 3.15606 27.2724 3.55711 26.6052 4.00898C26.4409 3.75586 26.2584 3.50591 26.0577 3.26499C25.101 2.11659 23.533 0.958328 21.3129 0.958328ZM18.5806 8.07185C18.7456 7.39556 19.0628 6.2317 19.6341 5.26127C20.2428 4.22747 20.8217 3.91642 21.3129 3.91642C22.0571 3.91642 22.7349 4.28651 23.339 5.01157C23.9522 5.74768 24.2874 6.62774 24.3616 7.08369L25.1178 11.7324L25.3552 24.0315L26.0643 12.2002C26.156 10.6704 26.5981 9.18222 27.3564 7.85046L27.5319 7.54219L27.5323 7.54139L27.5327 7.54079C27.5361 7.53515 27.5437 7.52267 27.5554 7.50428C27.5789 7.46733 27.6184 7.40756 27.6731 7.3321C27.7841 7.17893 27.9489 6.97344 28.16 6.76624C28.6109 6.32369 29.1094 6.03022 29.6065 5.97567C29.9486 5.93811 30.5534 6.10771 31.1986 6.68003C31.8572 7.26429 32.0924 7.85803 32.0924 8.05762V28.4685C32.0924 28.683 32.1436 28.963 32.3292 29.2437C32.5213 29.5343 32.799 29.7365 33.0875 29.8577C33.5939 30.0705 34.0634 30.0111 34.2399 29.9829C34.6474 29.9179 35.0371 29.7472 35.347 29.5933C36.0306 29.2537 37.046 28.6224 38.5488 27.5427C40.8663 25.8776 44.0046 26.0117 45.3457 26.3182C45.7376 26.4824 46.2973 26.9297 46.8404 27.5744C47.1037 27.887 47.3179 28.1924 47.4625 28.435C47.5288 28.5461 47.5732 28.6319 47.5998 28.6897C47.5958 28.8963 47.4851 29.2128 47.076 29.664C46.6213 30.1657 45.9326 30.6803 45.126 31.1729C44.3321 31.6576 43.4968 32.0777 42.8016 32.4091C42.5576 32.5254 42.3416 32.6258 42.1459 32.7168C42.0592 32.757 41.9763 32.7956 41.897 32.8327L41.8682 32.8461C41.6797 32.9342 41.3831 33.0728 41.1877 33.2016C39.6251 34.2307 38.0708 35.8645 36.5364 37.7359C34.9837 39.6296 33.3561 41.8876 31.6747 44.25C30.6419 45.7012 28.6885 46.6887 26.3888 47.2923C24.1531 47.879 21.8484 48.0329 20.4255 47.9948C18.5937 47.8079 15.7754 47.1659 13.3231 45.8675C10.8589 44.563 8.93489 42.6977 8.49399 40.0842C7.40984 33.658 5.56186 25.13 4.77399 21.6707L4.7499 21.5649L4.70857 21.4633C4.49018 20.9264 4.27413 20.0144 4.35489 19.1366C4.43456 18.2705 4.77177 17.6455 5.40412 17.2753C6.88578 16.4079 8.19859 17.0382 8.76348 17.4634L8.85644 17.5334C9.85824 18.2874 10.5402 19.3903 10.767 20.6235L12.1764 28.284L11.5439 19.5562V16.3404C11.5439 16.0506 11.5248 15.6571 11.5017 15.1833C11.4385 13.8839 11.3459 11.9804 11.5381 9.95544C11.6378 8.9043 12.3749 8.3276 13.2999 8.12452C14.3485 7.89431 15.2329 8.21562 15.5631 8.62163L15.6944 8.78299C16.286 9.51032 16.6612 10.3893 16.7772 11.3197L18.5072 25.2004L17.8751 12.5399C17.8318 11.6718 17.9144 10.8019 18.1205 9.95751L18.5806 8.07185ZM47.6232 28.7462C47.6232 28.7462 47.6229 28.7448 47.6219 28.7421L47.6205 28.7384L47.6226 28.7448L47.6232 28.7462Z"
                    fill="#333333"
                  />
                </svg>
              </button>

              <Link href="/rooms">
                <a className={styles.people__button_leave}>Leave quietly</a>
              </Link>
            </div>
          </div>

          <ul className={styles.people__list_voice_user}>
            <li>
              <Link href="/profile/admin">
                <a className={styles.people__list_voice_user_item}>
                  <div className={styles.people__list_voice_user_block_photo}>
                    <picture>
                      <source
                        srcSet="https://picsum.photos/200/200?random=1"
                        type="image/webp"
                      />
                      <Image
                        width={100}
                        height={100}
                        className={styles.people__list_voice_user_item_photo}
                        src="https://picsum.photos/200/200?random=1"
                        alt="avatar_placeholder"
                      />
                    </picture>
                    <span
                      className={styles.people__list_voice_user_item_active}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z" />
                        <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z" />
                      </svg>
                    </span>
                  </div>

                  <h3 className={styles.people__list_voice_user_item_name}>
                    Rafael
                  </h3>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/profile/admin">
                <a className={styles.people__list_voice_user_item}>
                  <div className={styles.people__list_voice_user_block_photo}>
                    <picture>
                      <source
                        srcSet="https://picsum.photos/200/200?random=2"
                        type="image/webp"
                      />
                      <Image
                        width={100}
                        height={100}
                        className={styles.people__list_voice_user_item_photo}
                        src="https://picsum.photos/200/200?random=2"
                        alt="avatar_placeholder"
                      />
                    </picture>
                  </div>
                  <h3 className={styles.people__list_voice_user_item_name}>
                    Gabriel
                  </h3>
                </a>
              </Link>
            </li>
          </ul>
          {/* 
                    <div className={styles.people__block_users}>
                        <h2 className={styles.people__block_users_title}>
                            Other in the room
                        </h2>

                        <ul className={styles.people__block_users_list}>
                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users.png"
                                                alt="avatar_placeholder_users-1"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Sarah</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_2.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_2.png"
                                                alt="avatar_placeholder_users_2"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Luis</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_3.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_3.png"
                                                alt="avatar_placeholder_users_3"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>TT</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_4.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_4.png"
                                                alt="avatar_placeholder_users_4"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Cat</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_5.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_5.png"
                                                alt="avatar_placeholder_users_5"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Came</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_6.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_6.png"
                                                alt="avatar_placeholder_users_6"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Kit</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_7.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_7.png"
                                                alt="avatar_placeholder_users_7"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_8.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_8.png"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=1"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=1"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Helen</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=2"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=2"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Lacey</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=3"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=3"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>
                                            Henriette
                                        </h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=4"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=4"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Mark</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users.png"
                                                alt="avatar_placeholder_users-1"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Sarah</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_2.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_2.png"
                                                alt="avatar_placeholder_users_2"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Luis</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_3.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_3.png"
                                                alt="avatar_placeholder_users_3"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>TT</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_4.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_4.png"
                                                alt="avatar_placeholder_users_4"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Cat</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_5.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_5.png"
                                                alt="avatar_placeholder_users_5"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Came</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_6.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_6.png"
                                                alt="avatar_placeholder_users_6"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Kit</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_7.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_7.png"
                                                alt="avatar_placeholder_users_7"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_8.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_8.png"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=1"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=1"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Helen</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=2"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=2"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Lacey</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=3"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=3"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>
                                            Henriette
                                        </h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=4"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=4"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Mark</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users.png"
                                                alt="avatar_placeholder_users-1"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Sarah</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_2.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_2.png"
                                                alt="avatar_placeholder_users_2"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Luis</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_3.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_3.png"
                                                alt="avatar_placeholder_users_3"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>TT</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_4.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_4.png"
                                                alt="avatar_placeholder_users_4"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Cat</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_5.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_5.png"
                                                alt="avatar_placeholder_users_5"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Came</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_6.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_6.png"
                                                alt="avatar_placeholder_users_6"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Kit</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_7.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_7.png"
                                                alt="avatar_placeholder_users_7"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_8.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_8.png"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=1"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=1"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Helen</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=2"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=2"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Lacey</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=3"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=3"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>
                                            Henriette
                                        </h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=4"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=4"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Mark</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users.png"
                                                alt="avatar_placeholder_users-1"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Sarah</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_2.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_2.png"
                                                alt="avatar_placeholder_users_2"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Luis</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_3.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_3.png"
                                                alt="avatar_placeholder_users_3"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>TT</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_4.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_4.png"
                                                alt="avatar_placeholder_users_4"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Cat</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_5.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_5.png"
                                                alt="avatar_placeholder_users_5"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Came</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_6.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_6.png"
                                                alt="avatar_placeholder_users_6"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Kit</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_7.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_7.png"
                                                alt="avatar_placeholder_users_7"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_8.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_8.png"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=1"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=1"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Helen</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=2"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=2"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Lacey</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=3"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=3"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>
                                            Henriette
                                        </h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=4"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=4"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Mark</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users.png"
                                                alt="avatar_placeholder_users-1"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Sarah</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_2.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_2.png"
                                                alt="avatar_placeholder_users_2"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Luis</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_3.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_3.png"
                                                alt="avatar_placeholder_users_3"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>TT</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_4.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_4.png"
                                                alt="avatar_placeholder_users_4"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Cat</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_5.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_5.png"
                                                alt="avatar_placeholder_users_5"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Came</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_6.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_6.png"
                                                alt="avatar_placeholder_users_6"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Kit</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_7.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_7.png"
                                                alt="avatar_placeholder_users_7"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="/static/img/index/main/avatar_placeholder_users_8.webp"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="/static/img/index/main/avatar_placeholder_users_8.png"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>BW</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=1"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=1"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Helen</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=2"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=2"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Lacey</h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=3"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=3"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>
                                            Henriette
                                        </h3>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/profile/admin">
                                    <a className={styles.people__block_users_item}>
                                        <picture>
                                            <source
                                                srcSet="https://picsum.photos/200/300?random=4"
                                                type="image/webp"
                                            />
                                            <Image
                                                width={100}
                                                height={100}
                                                className={styles.people__block_users_photo}
                                                src="https://picsum.photos/200/300?random=4"
                                                alt="avatar_placeholder_users_8"
                                            />
                                        </picture>
                                        <h3 className={styles.people__block_users_name}>Mark</h3>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div> */}
        </div>
      </section>
    </>
  );
};

export default RoomPage;
