import React from "react";
import ContactSection from "../components/ContactSecton/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const ContactPage = () => {
  return (
    <>
      <PageTitle title="Contact" />
      <TopNavigation />
      <PageTop topHeading="Contact" />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;
