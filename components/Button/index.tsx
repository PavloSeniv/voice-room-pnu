import clsx from "clsx";
import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  children: any;
  disabled?: boolean;
  color?: "blue" | "green";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color,
  onClick,
  className,
  type,
}) => {
  const colors = {
    blue: styles.blue,
    green: styles.green,
  };
  return (
    <button
      onClick={onClick}
      className={clsx(className, styles.main__button, colors[color])}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
