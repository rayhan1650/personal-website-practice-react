import React from "react";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const PrivacyPage = () => {
  return (
    <>
      <PageTitle title="Privacy Policy" />
      <TopNavigation />
      <PageTop topHeading="Privacy Policy" />
      <PrivacyDescription />
      <Footer />
    </>
  );
};

export default PrivacyPage;
