import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from "@/components/layouts/Navbar";
import Footer  from "@/components/layouts/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        {/*<Footer/> */}
        <NextScript />
      </body>
    </Html>
  )
}
