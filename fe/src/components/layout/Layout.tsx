import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
