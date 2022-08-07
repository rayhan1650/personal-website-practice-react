import React from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const CourseDetailsPage = () => {
  const { id } = useParams();
  return (
    <>
      <PageTitle title="Course Details" />
      <TopNavigation />
      <CourseDetails id={id} />
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
