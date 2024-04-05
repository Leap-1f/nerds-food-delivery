import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Banner } from "./Banner";

export const Layout = ({ children, showBanner }: any) => {
  return (
    <>
      <Header />
      {showBanner && (
        <Box bgcolor="primary">
          <Banner/>
        </Box>
      )}
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
