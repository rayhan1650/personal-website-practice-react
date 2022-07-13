import React from "react";
import ContactSection from "../components/ContactSecton/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const ContactPage = () => {
  return (
    <>
      <TopNavigation />
      <PageTop />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;
