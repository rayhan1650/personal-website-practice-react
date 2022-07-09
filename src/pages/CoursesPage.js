import React from "react";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const CoursesPage = () => {
  return (
    <>
      <TopNavigation />
      <PageTop />
      <AllCourses />
      <Footer />
    </>
  );
};

export default CoursesPage;
