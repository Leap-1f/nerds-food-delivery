import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
