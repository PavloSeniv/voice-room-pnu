import clsx from "clsx";
import React from "react";
import Image from "next/image";
import styles from "./UserAvatar.module.css";

export default function UserAvatar({
  className,
  height,
  width,
  src,
  isVoise,
  alt,
}) {
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
        src={src }
        alt={"'" + alt + "'"}
      />
    </picture>
  );
}
