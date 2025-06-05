import classNames from "classnames";
import CardStyle from "./card.module.scss";
import { GithubIcon } from "../icons/icons";

export enum BgColorType {
  BLUE,
  PURPLE,
}

export enum ImgPositionType {
  LEFT,
  RIGHT,
}

interface CardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  image: React.ReactNode;
  demoLink: string;
  githubLink: string;
  bgColor?: BgColorType;
  reverseImage?: boolean;
  credentials?: { username: string; password: string };
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
  bgColor = BgColorType.BLUE,
  reverseImage = false,
  credentials,
}) => {
  return (
    <div
      className={classNames(
        "bg-white",
        "grid-row",
        CardStyle.wrapper,
        reverseImage && CardStyle.reverseImage
      )}
    >
      <div
        className={classNames(
          "desktop:grid-col-fill",
          "tablet:grid-col-12",
          "grid-col-12",
          "text-center",
          "padding-top-3",
          bgColor == BgColorType.BLUE
            ? CardStyle.imgBgBlue
            : CardStyle.imgBgPurple
        )}
      >
        {image}
      </div>
      <div className="desktop:grid-col-auto tablet:grid-col-12 grid-col-12">
        <h3 className="font-sans-md margin-bottom-1">
          {title}
        </h3>
        <p>{description}</p>
        <div
          className={classNames(
            "grid-row",
            "flex-row",
            "flex-justify-start",
            CardStyle.controls
          )}
        >
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="usa-button margin-top-2 margin-right-1"
          >{`${title} demo${credentials ? "*" : ""}`}</a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="usa-button usa-button--outline margin-top-2"
          >
            <GithubIcon size={3} />
            GitHub repo
          </a>
        </div>
        {credentials && (
          <div
            className={classNames(
              "margin-top-1",
              "grid-row",
              CardStyle.credentials
            )}
          >
            <p className="grid-col-10 tablet:grid-col-12 desktop:grid-col-12 text-accent-cool text-medium text-italic">
              Access to this demo requires login credentials:
            </p>
            <p className="grid-col-10 tablet:grid-col-12 desktop:grid-col-12 text-accent-cool text-medium">
              <span className="text-normal">Username: </span>
              <span className="text-semibold">{credentials.username}</span>{" "}
              <span className="text-normal">Password: </span>
              <span className="text-semibold">{credentials.password}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
