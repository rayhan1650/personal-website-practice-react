import React from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const ServicePage = () => {
  return (
    <>
      <TopNavigation />
      <PageTop />
      <Services />
      <Footer />
    </>
  );
};

export default ServicePage;
