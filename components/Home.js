import React from "react";
import { Container, Row, Col } from "reactstrap";
const Home = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                <span className="text-primary font-weight-medium ">Cheese</span>{" "}
                active packaging decision matrix
              </h1>
              <p className="text-muted mb-4 pb-2">
                This is our final project as last-year students of Biochemical
                Engineer at ICESI university Cali. Our goal is to provide an
                easy and reliable way to create the perfect active package for a
                sertain cheese using the best materials.
              </p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={3}>
              <img
                src="/images/isabella_bedoya.jpeg"
                alt=""
                className="img-fluid d-block rounded-circle"
              />
            </Col>
            <Col lg={3}>
              <img
                src="/isabella_munera.jpeg"
                alt=""
                className="img-fluid d-block rounded-circle"
              />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Home;
