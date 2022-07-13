import React from "react";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const AboutPage = () => {
  return (
    <>
      <PageTitle title="About" />
      <TopNavigation />
      <PageTop topHeading="About Me" />
      <AboutDescription />
      <Footer />
    </>
  );
};

export default AboutPage;
