import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ReactDOM from "react-dom";
import headerBg from "../../public/images/hero-bg-min.jpg";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* preloads the header background image */}
        <Image
          src={headerBg}
          alt=""
          priority
         className="display-none"
        />
      </body>
    </html>
  );
}
