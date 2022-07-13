import React from "react";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const CoursesPage = () => {
  return (
    <>
      <PageTitle title="Course" />
      <TopNavigation />
      <PageTop topHeading="All Courses" />
      <AllCourses />
      <Footer />
    </>
  );
};

export default CoursesPage;
