import clsx from "clsx";
import styles from "./MainBlock.module.css";

interface MainBlockProps {
  children: any;
  className?: string;
}

export const MainBlock: React.FC<MainBlockProps> = ({
  children,
  className,
}) => {
  return (
    <section className={clsx(styles.main__bg, className)}>{children}</section>
  );
};

export default MainBlock;
