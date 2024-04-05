import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MyGlobalContextProvider } from "@/components/utils/Context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Comfortaa",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#18BA51",
    },
    secondary: {
      main: "#F6F6F6",
    },
    error: {
      main: "#670E13",
    },
    warning: {
      main: "#C9AE00",
    },
    info: {
      main: "#0468C8",
    },
  },
});


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(router.pathname === "/");
  }, [router.pathname]);

  return (
    <MyGlobalContextProvider>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <ThemeProvider theme={theme}>
        <Layout showBanner={showBanner}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </MyGlobalContextProvider>
  );
}

