import React from "react";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const PortfolioPage = () => {
  return (
    <>
      <PageTitle title="Portfolio" />
      <TopNavigation />
      <PageTop topHeading="All Projects" />
      <AllProjects />
      <Footer />
    </>
  );
};

export default PortfolioPage;
