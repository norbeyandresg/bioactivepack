import Layout from "../components/Layout";
import Header from "../components/Header";
import MatrixForm from "../components/MatrixForm";
import { rawMaterials } from "../components/MatrixForm/materials";
import { Container, Col, Row } from "reactstrap";
import React, { useState } from "react";
import Image from "next/image";
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
    // Reset materials
    setAvailableMaterials([]);

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

    materialList = materialList.filter((e) => e !== undefined);
    materialList.sort(sortByWeight);
    setAvailableMaterials(materialList);
  };

  return (
    <Layout pageTitle="Bioactive Pack">
      <Header />
      <Container>
        <Row>
          <p className="fs-2 text-center my-5 fw-light text-dark">
            Cheese <span className="fw-bold">Material Selector </span> Tool
          </p>
        </Row>
        <Row>
          <p className="text-center">
            At the end of this long jurney of research development this is our
            final result, a parametric tool that can provide the best material
            for a certain type of cheese given it&apos;s properties. The only
            thing you need to do is set the corresponding values for your cheese
            in the fields below and click the button{" "}
            <span className="fw-bold fst-italic"> Find Materials </span>, and
            the tool will provide you a list with all the posible materials that
            can work for your cheese.
          </p>
          <p className="text-center">
            Since the types and conditions for the ceeses in this study are not
            the same as the ones we have and produce in{" "}
            <span className="fw-bold">Colombia</span> the materials and coatings
            show below may not work as well for your product, or can cause
            adverse effects on it.
          </p>
        </Row>
        <Row>
          <div className="form-container mt-4">
            <MatrixForm handleOnSubmit={filterMaterials} />
          </div>
        </Row>
        <Row className="mt-5">
          <p className="text-dark fs-4">
            Available <span className="fw-bold">Materials</span>
          </p>
          <div className="d-flex justify-content-evenly px-0 flex-wrap">
            {availableMaterials.length > 0 ? (
              availableMaterials.map((m) => {
                if (m) {
                  return <MaterialCard key={m.id} {...m} />;
                }
              })
            ) : (
              <Image
                alt="no materials to show"
                src="/images/no-result.jpeg"
                width={400}
                height={300}
              />
            )}
          </div>
        </Row>
      </Container>
      <section className="section position-relative" />
    </Layout>
  );
};
export default Matrix;
