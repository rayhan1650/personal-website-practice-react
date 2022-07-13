import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  console.log(title);
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageTitle;
