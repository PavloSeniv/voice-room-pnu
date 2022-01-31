import clsx from "clsx";
import React from "react";

import styles from "./Button.module.css";

export default function Button({
  children,
  disabled,
  color,
  onClick,
  className,
}) {
  const colors = {
    grean: styles.buttonGrean,
    gray: styles.buttonGray,
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(className, styles.main__button, colors[color])}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
