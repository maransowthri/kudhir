import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
