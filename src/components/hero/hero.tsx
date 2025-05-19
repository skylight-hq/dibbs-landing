import classNames from "classnames";
import HeroStyle from "./hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={classNames("padding-bottom-8",HeroStyle.wrapper)}>
      <div className={classNames("page-container--lg","grid-row", "text-white",HeroStyle.content)
      }>
        <h1 className="text-white font-family-heading desktop:grid-col-7 grid-col-12">
          Improve the way your jurisdiction collects, processes, and views public health data
        </h1>
        <p className="text-thin desktop:grid-col-9 grid-col-12">
          Turn your jurisdiction&apos;s data into meaningful intelligence that drives
          timely public health action using CDC&apos;s free, cloud-based products built from Data
          Integration Building Blocks, or DIBBs.
        </p>
      </div>
    </div>
  );
};

export default Hero;
