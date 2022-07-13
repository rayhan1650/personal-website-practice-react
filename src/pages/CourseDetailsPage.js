import React from "react";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const CourseDetailsPage = () => {
  return (
    <>
      <PageTitle title="Course Details" />
      <TopNavigation />
      <CourseDetails />
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
