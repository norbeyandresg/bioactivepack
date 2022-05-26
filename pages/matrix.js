import Layout from "../components/Layout";
import Header from "../components/Header";
import MatrixForm from "../components/MatrixForm";
import { rawMaterials } from "../components/MatrixForm/materials";
import { Container, Col, Row } from "reactstrap";
import React, { useState } from "react";
import MaterialCard from "../components/MaterialCard";

const Matrix = () => {
  const [availableMaterials, setAvailableMaterials] = useState([]);

  const validateMaterialProp = (propValue, range) => {
    if (range.low <= propValue && propValue <= range.high) {
      return true;
    } else {
      return false;
    }
  };

  const sortByWeight = (a, b) => b.weight - a.weight;

  const filterMaterials = (values) => {
    const materialList = rawMaterials.map((material) => {
      let validProps = [];
      for (const prop in material) {
        if (
          typeof material[prop] === "object" &&
          validateMaterialProp(values[prop], material[prop])
        ) {
          validProps = [...validProps, prop];
        }
      }
      if (validProps.length >= 4) {
        return material;
      }
    });

    materialList.sort(sortByWeight);
    setAvailableMaterials(materialList);
  };

  return (
    <Layout pageTitle="Bioactive Pack">
      <Header />
      <Container>
        <Row>
          <Col lg={{ size: 4, offset: 1 }} md={6}>
            <div>
              <MatrixForm handleOnSubmit={filterMaterials} />
            </div>
          </Col>
          <Col lg={7} md={6}>
            <div className="d-flex justify-content-evenly px-0 flex-wrap">
              {availableMaterials.map((m) => {
                if (m) {
                  return <MaterialCard {...m} />;
                }
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Matrix;
