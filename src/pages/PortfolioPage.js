import React from "react";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const PortfolioPage = () => {
  return (
    <>
      <TopNavigation />
      <PageTop />
      <AllProjects />
      <Footer />
    </>
  );
};

export default PortfolioPage;
