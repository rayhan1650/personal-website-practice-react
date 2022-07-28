import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const Analysis = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/chartData")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  // console.log(data);
  // const data = [
  //   {
  //     name: "Java",
  //     Projects: 400,
  //   },
  //   {
  //     name: "Kotlin",
  //     Projects: 300,
  //   },
  //   {
  //     name: "SQL",
  //     Projects: 200,
  //   },
  //   {
  //     name: "Bootstrap",
  //     Projects: 278,
  //   },
  //   {
  //     name: "Jquery",
  //     Projects: 189,
  //   },
  //   {
  //     name: "React",
  //     Projects: 239,
  //   },
  //   {
  //     name: "PHP",
  //     Projects: 349,
  //   },
  //   {
  //     name: "Angular",
  //     Projects: 309,
  //   },
  // ];
  return (
    <>
      <Container>
        <h1 className="text-center text-uppercase serviceMainTitle">
          Technology Used
        </h1>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                <XAxis dataKey="name" stroke="#0073e6" />
                <Tooltip />
                <Bar dataKey="projects" fill="#0073e6" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <p className="analysisText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              beatae reiciendis dignissimos ea delectus sapiente iure atque
              corporis doloribus veritatis, officiis dolor, hic aspernatur earum
              mollitia eveniet rem velit dolores alias maxime. Maxime quasi amet
              aspernatur unde illum iusto beatae, porro numquam dolor?
              Laudantium temporibus rerum esse ratione modi! Quibusdam sapiente,
              enim repellendus perferendis optio suscipit! Hic quis numquam,
              tempora saepe ullam sapiente quidem modi ad dolore adipisci
              dolores fuga asperiores eveniet, ea eius totam. Et repellendus,
              aspernatur vel provident laborum, animi nihil sequi placeat modi
              mollitia tempore quo inventore corporis! Eos architecto doloribus
              distinctio vero, quos alias magnam dolores.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Analysis;
