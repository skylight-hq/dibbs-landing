import classNames from "classnames";
import Subfooter from "@/components/subfooter/subfooter";
import Card, { BgColorType } from "@/components/card/card";
import { PAGES } from "@/utils/constants";
import QueryConnectorImg from "../../public/images/query-connector-img.svg";
import RecordLinkerImg from "../../public/images/record-linker-img.svg";
import ECRViewerImg from "../../public/images/ecr-viewer-img.svg";
import ECRRefinerImg from "../../public/images/ecr-refiner-img.svg";
import HomeStyle from "./home.module.scss";
import "../styles/index.scss";
import Image from "next/image";

const cardImgClasses = ["padding-top-3","padding-left-2","padding-right-1"];

const Home: React.FC = () => {
  return (
    <>
      <div className={classNames("page-container", HomeStyle.section)}>
        <h2 id="products" className={HomeStyle.dibbsHeading}>
          DIBBs products
        </h2>
        <div
          className={classNames(
            "margin-top-4",
            "margin-bottom-8",
            "grid-row",
            "flex-column",
            "flex-align-center",
            HomeStyle.cardContainer
          )}
        >
          <Card
            title="Query Connector"
            description="Allows public health staff to query a wide network of healthcare organizations for data relevant to a given condition. It gives staff access to more complete and timely data without the need for a direct connection to a healthcare provider."
            image={
              <Image
                className={classNames(cardImgClasses)}
                alt=""
                src={QueryConnectorImg}
                priority
                fill
              />
            }
            bgColor={BgColorType.PURPLE}
            demoLink={PAGES.QUERY_CONNECTOR}
            githubLink={PAGES.QUERY_CONNECTOR_REPO}
            reverseImage
            credentials={{ username: "mario", password: "super-admin" }}
          />
          <Card
            title="Record Linker"
            description="Offers a best-in-class algorithm that allows your jurisdiction to link incomplete and disparate patient records — both within and across public health systems — giving you more complete and accurate patient health profiles. "
            image={
              <Image
                className={classNames(cardImgClasses)}
                alt=""
                src={RecordLinkerImg}
                fill
                priority
              />
            }
            demoLink={PAGES.RECORD_LINKER}
            githubLink={PAGES.RECORD_LINKER_REPO}
            reverseImage
          />
          <Card
            title="eCR Viewer"
            description="Makes it easier for public health staff to find relevant information in eCR documents. It combines both the eICR and RR records into a single view and highlights relevant lab or clinical information for conditions present in the eCR. This demo is best viewed on desktop."
            image={
              <Image
                className={classNames(cardImgClasses)}
                alt=""
                src={ECRViewerImg}
                fill
              />
            }
            demoLink={PAGES.ECR_VIEWER}
            githubLink={PAGES.ECR_VIEWER_REPO}
            bgColor={BgColorType.PURPLE}
            credentials={{ username: "viewer_demo@dibbs.tools", password: "4TJfmo416Jws" }}
          />
          <Card
            title="eCR Refiner"
            description="Reduces eCR files down to only the most useful, necessary information to alleviate performance and storage burden on disease surveillance systems and bring focus to pertinent data for a given condition."
            image={
              <Image
                className={classNames(cardImgClasses)}
                alt=""
                src={ECRRefinerImg}
                fill
              />
            }
            demoLink={PAGES.ECR_REFINER}
            githubLink={PAGES.ECR_REFINER_REPO}
          />
        </div>
      </div>
      <Subfooter />
    </>
  );
};

export const metadata = {
  title: "DIBBs | Data Integration Building Blocks",
};

export default Home;
