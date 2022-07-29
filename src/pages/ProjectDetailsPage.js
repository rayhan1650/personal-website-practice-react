import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import PageTitle from "../components/PageTitle/PageTitle";
import PageTop from "../components/PageTop/PageTop";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  // const [projects, setProjects] = useState([]);
  // const url = `http://localhost:8000/projectsDetails/${id}`;

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then(function (response) {
  //       // handle success
  //       setProjects(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // }, [url]);
  return (
    <>
      <PageTitle title="Project Details" />
      <TopNavigation />
      <PageTop topHeading="Project Name" />
      <ProjectDetails id={id} />
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
