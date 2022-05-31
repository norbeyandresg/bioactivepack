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
              Cheese <span className="fw-bold">active packaging</span> decision
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
                  width="600"
                  height="300"
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

      <section className="section position-relative main-background-color">
        <Container>
          <p className="fs-2 text-end text-white">
            How it <span className="fw-bold fs-1">works</span> ?
          </p>
          <p className="text-white text-center w-75 mx-auto fst-italic">
            <span className="numeral fw-bold">1</span> Each material&apos;s
            property has been evaluated and set a weight betweeh 1 and 6. The
            values are describe as following: 1: poor, 2: minimum, 3: medium, 4:
            significant, 5: quite significat, 6: highly significat
          </p>
          <p className="fs-3 text-white">Materials</p>
          <div className="table-container">
            <table className="table text-center">
              <thead className="table-header">
                <tr>
                  <th scope="col">Identifier</th>
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

          <p className="text-white text-center w-75 mx-auto fst-italic">
            <span className="numeral fw-bold">2</span> Each evaluated property
            has been set a value betweeh 0 and 5. The values are describe as
            following: 0: no importance, 2: minimum importance, 3: medium
            importance, 4: brief importance, 5: high importance
          </p>
          <p className="fs-3 text-white">Coatings</p>
          <div className="table-container">
            <table className="table text-center">
              <thead className="table-header">
                <tr>
                  <th scope="col">Identifier</th>
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

      <section className="section position-relative ">
        <Container>
          <p className="fs-3 mb-5">
            Local evaluated <span className="fw-bold">Cheeses</span> for this
            research
          </p>
          <div className="table-container">
            <table className="table text-center">
              <thead className="table-header">
                <tr>
                  <td className="table-light" />
                  <td colSpan="6">cheese properties</td>
                  <td colSpan="2" className="table-light">
                    tolerances
                  </td>
                </tr>
                <tr>
                  <th className="table-light" />
                  <th scope="col">Humidity</th>
                  <th scope="col">WA</th>
                  <th scope="col">pH</th>
                  <th scope="col">Fat</th>
                  <th scope="col">Protein</th>
                  <th scope="col">Minerals</th>
                  <th scope="col">MNFS</th>
                  <th scope="col">FDM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Quesito Antioqueno</td>
                  <td>63.37</td>
                  <td>0.96</td>
                  <td>6.35</td>
                  <td>46.25</td>
                  <td>12.73</td>
                  <td>3.56</td>
                  <td>&gt;67</td>
                  <td>56-60</td>
                </tr>
                <tr>
                  <td>Queso Campesino</td>
                  <td>48-49</td>
                  <td>0.9</td>
                  <td>6.13-6.33</td>
                  <td>&gt;21</td>
                  <td>17.13-18.97</td>
                  <td>3.56</td>
                  <td>61-69</td>
                  <td>25-60</td>
                </tr>
                <tr>
                  <td>Quesillo Tolimense/Huilense</td>
                  <td>49-55</td>
                  <td>0.96-0.98</td>
                  <td>5.2-5.9</td>
                  <td>26-32</td>
                  <td>19-22</td>
                  <td>1.1-1.5</td>
                  <td>61-69</td>
                  <td>25-60</td>
                </tr>
                <tr>
                  <td>Mozzarella</td>
                  <td>52-61</td>
                  <td>0.97</td>
                  <td>5.2-5.4</td>
                  <td>&gt;17.5</td>
                  <td>19-22</td>
                  <td>3.6-3.8</td>
                  <td>54-63</td>
                  <td>25-45</td>
                </tr>
                <tr>
                  <td>Queso Doblecrema</td>
                  <td>51.86</td>
                  <td>0.97</td>
                  <td>5.1-5.4</td>
                  <td>14</td>
                  <td>18.81</td>
                  <td>5.34</td>
                  <td>54-63</td>
                  <td>25-45</td>
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
