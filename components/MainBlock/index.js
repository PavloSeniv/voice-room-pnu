import clsx from "clsx";
import styles from "./MainBlock.module.css";

export default function MainBlock({ children, className }) {
  return (
    <section className={clsx(styles.main__bg, className)}>{children}</section>
  );
}
