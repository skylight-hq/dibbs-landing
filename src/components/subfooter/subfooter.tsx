import classNames from "classnames";
import SubfooterStyle from "./subfooter.module.scss";
import { PAGES } from "@/utils/constants";

const Subfooter: React.FC = () => {
  return (
    <div className={classNames(SubfooterStyle.wrapper)}>
      <div
        className={classNames(
          "grid-row",
          "flex-column",
          "flex-align-center",
          "page-container--xl",
          "padding-top-5",
          "padding-bottom-7"
        )}
      >
        <h2 className="text-center text-white">
          Reporting diagnostic test results?
        </h2>
        <p className="text-center text-white">
          SimpleReport is a fast, free, and easy way for your organization to
          report results to public health departments.
        </p>
        <a
          href={PAGES.SIMPLE_REPORT}
          target="_blank"
          rel="noopener noreferrer"
          className="usa-button usa-button--outline margin-top-3"
        >
          SimpleReport demo
        </a>
      </div>
    </div>
  );
};

export default Subfooter;
