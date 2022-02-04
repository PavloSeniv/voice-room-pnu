import clsx from "clsx";
import React from "react";

import styles from "./Button.module.css";

const colors = {
  blue: styles.blue,
  green: styles.green,
};
interface ButtonProps {
  children: any;
  disabled?: boolean;
  // color?: "blue" | "green";
  color?: keyof typeof colors;
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
