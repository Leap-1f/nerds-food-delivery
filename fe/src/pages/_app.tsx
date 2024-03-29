import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
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
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
