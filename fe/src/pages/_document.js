// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { NavBar } from "../components/layout/Header.tsx";
import { Footer } from "../components/layout/Footer.tsx";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          />
        </Head>
        <body>
          <NavBar />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}
