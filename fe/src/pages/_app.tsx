import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MyGlobalContextProvider } from "@/components/utils/Context";
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
  return (
    <MyGlobalContextProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </MyGlobalContextProvider>
  );
}
