import Image from "next/image";
import HeaderStyle from "./header.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { PAGES } from "@/utils/constants";
import LogoSVG from "../../../public/images/dibbs-logo.svg";
import Hero from "../hero/hero";

const Header: React.FC = () => {
  return (
    <header className={HeaderStyle.wrapper}>
      <div className="page-container--xl grid-row flex-row flex-justify padding-y-4">
        <Link
          href={PAGES.LANDING}
          className={classNames(
            "text-no-underline",
            "font-serif-xl",
            "text-white",
            "grid-row",
            "flex-row",
            "flex-align-center",
            HeaderStyle.logo
          )}
        >
          <Image
            src={LogoSVG}
            height={40}
            alt="dibbs"
            className="margin-right-105 "
            priority
          />
        </Link>
      </div>
      <Hero />
    </header>
  );
};

export default Header;
