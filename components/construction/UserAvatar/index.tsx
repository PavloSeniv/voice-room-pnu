import clsx from "clsx";
import React from "react";
import Image from "next/image";
import styles from "./UserAvatar.module.css";

interface AvatarProps {
  className?: string;
  height: number;
  width: number;
  src: string;
  isVoise?: boolean;
  alt: string;
}

export const UserAvatar: React.FC<AvatarProps> = ({
  className,
  height,
  width,
  src,
  isVoise,
  alt,
}) => {
  return (
    <picture>
      <source
        srcSet="img/index/main/avatar_placeholder.webp"
        type="image/webp"
      />
      <Image
        width={width}
        height={height}
        className={clsx(styles.main__photoImg, className)}
        // src={` url(${src})`}
        src={src}
        alt={alt}
      />
    </picture>
  );
};

export default UserAvatar;