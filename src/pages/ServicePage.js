import React from "react";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const ServicePage = () => {
  return (
    <>
      <PageTitle title="Service" />
      <TopNavigation />
      <PageTop topHeading="Get My Service" />
      <Services />
      <Footer />
    </>
  );
};

export default ServicePage;
