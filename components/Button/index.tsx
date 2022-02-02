import clsx from "clsx";
import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  children: any;
  disabled?: boolean;
  color?: "blue" | "grey";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: any;
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
    grean: styles.buttonGrean,
    gray: styles.buttonGray,
  };
  return (
    <button
      onClick={onClick}
      className={clsx(className, styles.main__button, colors[color])}
      disabled={true}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
