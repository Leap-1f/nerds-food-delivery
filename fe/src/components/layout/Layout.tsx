import Header from "./Header";
import Footer from "./Footer";

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
