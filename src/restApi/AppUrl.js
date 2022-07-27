const AppUrl = () => {
  const baseUrl = "http://localhost:8000";

  const chartData = `${baseUrl}/chartData`;
  const clientReview = `${baseUrl}/clientReview`;
  const contactSend = `${baseUrl}/contactSend`;

  const courseHome = `${baseUrl}/courseHome`;
  const courseAll = `${baseUrl}/courseAll`;
  const courseDetails = `${baseUrl}/courseDetails`;

  const footer = `${baseUrl}/footer`;
  const information = `${baseUrl}/information`;
  const services = `${baseUrl}/services`;

  const projectsHome = `${baseUrl}/projectsHome`;
  const projectsAll = `${baseUrl}/projectsAll`;
  const projectsDetails = `${baseUrl}/projectsDetails`;

  const videoHome = `${baseUrl}/videoHome`;
  const totalProjectClient = `${baseUrl}/totalProjectClient`;
  const techDesc = `${baseUrl}/techDesc`;
  const homeTopTitle = `${baseUrl}/homeTopTitle`;

  //   const urlArray = [
  //     chartData,
  //     clientReview,
  //     contactSend,
  //     courseHome,
  //     courseAll,
  //     courseDetails,
  //     footer,
  //     information,
  //     services,
  //     projectsHome,
  //     projectsAll,
  //     projectsDetails,
  //     videoHome,
  //     totalProjectClient,
  //     techDesc,
  //     homeTopTitle,
  //   ];

  //   for (let url of urlArray) {
  //     // console.log(url.split("/")[3]);
  //     if (url.split("/")[3] === getUrl) {
  //       return url;
  //     }
  //   }

  return {
    chartData,
    clientReview,
    contactSend,
    courseHome,
    courseAll,
    courseDetails,
    footer,
    information,
    services,
    projectsHome,
    projectsAll,
    projectsDetails,
    videoHome,
    totalProjectClient,
    techDesc,
    homeTopTitle,
  };
};

export default AppUrl;
