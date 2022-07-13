import React from "react";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import RefundSection from "../components/RefundDescription/RefundSection";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const RefundPage = () => {
  return (
    <>
      <PageTitle title="Refund Policy" />
      <TopNavigation />
      <PageTop topHeading="Refund Policy" />
      <RefundSection />
      <Footer />
    </>
  );
};

export default RefundPage;
