import styles from "./CardСonversations.module.css";

import Link from "next/link";
import Image from "next/image";

interface CardConversationsProps {
  title: string;
}

export const CardConversations: React.FC<CardConversationsProps> = ({
  title,
}) => {

  return (
    <li className={styles.rooms__listItem}>
      <Link href="/room">
        <a>
          <h5 className={styles.rooms__listItemTitle}>{title}</h5>

          <div className={styles.rooms__listItemLogoUsers}>
            <div className={styles.rooms__listImgUser}>
              <picture>
                <source
                  srcSet="/static/img/index/main/avatar_placeholder_users.webp"
                  type="image/webp"
                />
                <Image
                  width={50}
                  height={50}
                  src="/static/img/index/main/avatar_placeholder_users.png"
                  alt="avatar_placeholder_user-1"
                  className={styles.rooms__listImgUserAvatar}
                />
              </picture>
              <picture>
                <source
                  srcSet="/static/img/index/main/avatar_placeholder_users_2.webp"
                  type="image/webp"
                />
                <Image
                  width={50}
                  height={50}
                  src="/static/img/index/main/avatar_placeholder_users_2.png"
                  alt="avatar_placeholder_user-2"
                  className={styles.rooms__listImgUserAvatar}
                />
              </picture>
              <picture>
                <source
                  srcSet="/static/img/index/main/avatar_placeholder_users_3.webp"
                  type="image/webp"
                />
                <Image
                  width={50}
                  height={50}
                  src="/static/img/index/main/avatar_placeholder_users_3.png"
                  alt="avatar_placeholder_user-3"
                  className={styles.rooms__listImgUserAvatar}
                />
              </picture>
              <picture>
                <source
                  srcSet="/static/img/index/main/avatar_placeholder_users_4.webp"
                  type="image/webp"
                />
                <Image
                  width={50}
                  height={50}
                  src="/static/img/index/main/avatar_placeholder_users_4.png"
                  alt="avatar_placeholder_user-4"
                  className={styles.rooms__listImgUserAvatar}
                />
              </picture>
            </div>

            <div className={styles.rooms__listItemUsers}>
              <div className={styles.rooms__listItemUsersBlock}>
                <h4 className={styles.rooms__listItemUsersName}>Bruce lee</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg>
              </div>
              <div className={styles.rooms__listItemUsersBlock}>
                <h4 className={styles.rooms__listItemUsersName}>
                  Bruce Chaaaaaan
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg>
              </div>
              <div className={styles.rooms__listItemUsersBlock}>
                <h4 className={styles.rooms__listItemUsersName}>
                  Ілон Маскaaaaaaaaaa
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg>
              </div>
              <div className={styles.rooms__listItemUsersBlock}>
                <h4 className={styles.rooms__listItemUsersName}>Pavlo Seniv</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.rooms__listItemCountUser}>
            <div className={styles.rooms__listItemCountUserRooms}>
              <p className={styles.rooms__listItemCountUserRoomsTitle}>87</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>

            <div className={styles.rooms__listItemCountUserVoice}>
              <p className={styles.rooms__listItemCountUserVoiceTitle}>3</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
              </svg>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};


export default CardConversations;