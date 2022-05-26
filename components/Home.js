import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="section position-relative main-background-color">
        <Container>
          <Row className="text-center">
            <h1 className="mb-5 fw-light text-white">
              cheese <span className="fw-bold">active packaging</span> decision
              matrix
            </h1>
          </Row>
          <Row>
            <p className="text-center fs-6 text-light">
              Our objective is to provide an easy and reliable tool that
              provides and selects information about an active packaging for a
              certain cheese according to its characteristics, where by means of
              the decision matrix the best materials are delimited according to
              their weight, based on the information obtained about each
              material of the reference articles, where finally they were
              classified according to the physicochemical properties taking into
              account both those of the reference cheeses, and the study cheeses
              that are those produced by the Colombian cheesemaking industries.
            </p>
          </Row>
        </Container>
      </section>

      <section className="section position-relative">
        <Container>
          <Row>
            <p className="text-dark fs-4">
              Our <span className="fw-bold">team</span>
            </p>
          </Row>
          <Row className="mt-4">
            <Col>
              <div className="mx-auto team-member-card">
                <Image
                  className="team-member-pic"
                  alt="Isabella Bedoya"
                  src="/images/isabella_bedoya.jpeg"
                  width={250}
                  height={250}
                />
                <label className="m-auto fw-light fs-5">Isabella Bedoya</label>
              </div>
            </Col>
            <Col>
              <div className="mx-auto team-member-card">
                <Image
                  className="team-member-pic"
                  alt="Isabella Bedoya"
                  src="/images/isabella_munera.jpeg"
                  width={250}
                  height={250}
                />
                <label className="m-auto fw-light fs-5">Isabella Munera</label>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section position-relative main-background-color">
        <Container>
          <Row>
            <Col lg={6}>
              <p className="fs-1 fw-light text-white">
                The <span className="fw-bold text-warning">Decision</span>{" "}
                Matrix
              </p>
              <div className="text-center fs-5 text-light">
                <p>
                  The aim of this tool build for the Colombian cheese industries
                  is to clasify and select materials and coatings based on their
                  characteristics ( microbial control, sensory evaluation,
                  statistics analysis, packaging appearance, mechanical
                  properties and the ability to survive cold break ) which are
                  evaluated in each article, and each result was taken into
                  account.
                </p>
                <Row className="mt-5">
                  <p className="mt-3">
                    The matrix was build based on the following considerations
                  </p>
                </Row>
                <Row className="fs-6">
                  <ul className="text-start list-group options-list">
                    <li className="list-group-item">
                      All the reference materials should be biodegradables
                    </li>
                    <li className="list-group-item">
                      All the studies should be finished with no extra tests
                      needed for the material
                    </li>
                    <li className="list-group-item">
                      Any material with non specific efficiency values or
                      inhibition diameter will be removed from the matrix
                    </li>
                    <li className="list-group-item">
                      All the sensory evaluations should be acceptable
                    </li>
                  </ul>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="position-relative d-flex justify-content-end mt-5">
                <Image
                  className="table-image"
                  alt="table"
                  src="/images/table.png"
                  width="360"
                  height="500"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section position-relative">
        <Container>
          <div className="m-auto quote">
            <p className="fst-italic">
              During the construction of this tool the{" "}
              <span className="fw-bold">&quot;weight&quot;</span> value was
              defined as a number between <span className="fw-bold">1</span> and{" "}
              <span className="fw-bold">6</span>. This value represent the
              influence of each property in their studies to determine if the
              material is viable. On the other hand the{" "}
              <span className="fw-bold"> &quot;importance&quot; </span> was
              defined as a number between <span className="fw-bold">0</span> and{" "}
              <span className="fw-bold">5</span>. This value represents the
              relevance of each material property in the study.
            </p>
          </div>
        </Container>
      </section>
      <section className="section position-relative">
        <Container>
          <div className="table-container">
            <table className="table text-center">
              <thead className="table-header">
                <tr>
                  <th scope="col">Material</th>
                  <th scope="col">Microbial Control</th>
                  <th scope="col">Sensory Evaluation</th>
                  <th scope="col">Statistics Analysis</th>
                  <th scope="col">Packaging Appearance</th>
                  <th scope="col">Mechanical Properties</th>
                  <th scope="col">Cold Break Resistance</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-weights">
                  <td>weight</td>
                  <td>5</td>
                  <td>6</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>1</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>5</td>
                  <td>3</td>
                  <td>5</td>
                  <td>4.5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>91.5</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>5</td>
                  <td>0</td>
                  <td>5</td>
                  <td>2.5</td>
                  <td>3</td>
                  <td>5</td>
                  <td>59.5</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>5</td>
                  <td>0</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>0</td>
                  <td>5</td>
                  <td>0</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>0</td>
                  <td>4</td>
                  <td>1</td>
                  <td>82</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>5</td>
                  <td>0</td>
                  <td>5</td>
                  <td>4</td>
                  <td>0</td>
                  <td>0</td>
                  <td>37</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>0</td>
                  <td>5</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>0</td>
                  <td>0</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>3.5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>0</td>
                  <td>0</td>
                  <td>1</td>
                  <td>58.5</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>5</td>
                  <td>3.5</td>
                  <td>5</td>
                  <td>0</td>
                  <td>0</td>
                  <td>3.5</td>
                  <td>59.5</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>5</td>
                  <td>0</td>
                  <td>5</td>
                  <td>3</td>
                  <td>5</td>
                  <td>0</td>
                  <td>64</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <table className="table text-center">
              <thead className="table-header">
                <tr>
                  <th scope="col">Coatnings</th>
                  <th scope="col">Microbial Control</th>
                  <th scope="col">Sensory Evaluation</th>
                  <th scope="col">Statistics Analysis</th>
                  <th scope="col">Cold Break Resistance</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-weights">
                  <td>weight</td>
                  <td>3</td>
                  <td>4</td>
                  <td>2</td>
                  <td>1</td>
                  <td></td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>0</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>3</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>17</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Home;
