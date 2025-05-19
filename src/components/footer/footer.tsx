import styles from "./footer.module.scss";
import classNames from "classnames";

const Footer: React.FC = () => {
  return (
    <footer className={classNames(styles.footer)}>
      <div
        className={classNames(
          "page-container--xl",
          "padding-y-3",
          "grid-row",
          "flex-row",
          "flex-align-center",
          "flex-justify"
        )}
      >
      </div>
    </footer>
  );
};

export default Footer;
