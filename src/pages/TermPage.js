import React from "react";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import TermsDescription from "../components/TermsDescription/TermsDescription";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const TermPage = () => {
  return (
    <>
      <PageTitle title="Terms &amp; Condition" />
      <TopNavigation />
      <PageTop topHeading="Terms &amp; Condition" />
      <TermsDescription />
      <Footer />
    </>
  );
};

export default TermPage;
