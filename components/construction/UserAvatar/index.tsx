import clsx from "clsx";
import React from "react";
import Image from "next/image";
import styles from "./UserAvatar.module.css";

interface AvatarProps {
  className?: string;
  height?: number;
  width?: number;
  src?: string;
  isVoice?: boolean;
  alt?: string;
  letters?: string;
}

export const UserAvatar: React.FC<AvatarProps> = ({
  className,
  height,
  width,
  src,
  isVoice,
  alt,
  letters,
}) => {
  return (
    <div
      style={{ width, height, backgroundImage: src ? ` url(${src})` : "" }}
      className={clsx(
        styles.main__photoImg,
        isVoice ? styles.avatarBorder : "",
        className,
        { [styles.main__photoPlaceholder]: !src }
      )}
     
    >
      {!src ? letters : null}
    </div>
  );
};

export default UserAvatar;
