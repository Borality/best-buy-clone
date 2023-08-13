import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/layouts/NavbarSection";
import Footer from "@/components/layouts/FooterSection";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
