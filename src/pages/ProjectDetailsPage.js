import React from "react";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const ProjectDetailsPage = () => {
  return (
    <>
      <PageTitle title="Project Details" />
      <TopNavigation />
      <PageTop topHeading="Project Name" />
      <ProjectDetails />
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
