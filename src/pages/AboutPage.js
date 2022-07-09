import React from "react";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const AboutPage = () => {
  return (
    <>
      <TopNavigation />
      <PageTop />
      <AboutDescription />
      <Footer />
    </>
  );
};

export default AboutPage;
