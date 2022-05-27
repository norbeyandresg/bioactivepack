import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";
import { Container } from "reactstrap";

const AccordionItem = ({ children, label, collapseId }) => (
  <div className="accordion-item">
    <h2 className="accordion-header" id={`${collapseId}-header`}>
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${collapseId}`}
        aria-expanded="false"
        aria-controls={collapseId}
      >
        {label}
      </button>
    </h2>
    <div
      id={collapseId}
      className="accordion-collapse collapse"
      aria-labelledby={`${collapseId}-header`}
    >
      <div className="accordion-body">{children}</div>
    </div>
  </div>
);

const FAQ = () => {
  return (
    <Layout>
      <Header />
      <section className="section position-relative">
        <Container>
          <p className="fs-2 text-dark">FAQ</p>

          <div className="accordion">
            <AccordionItem
              label="How we determine the weight of each property?"
              collapseId="weightDefinition"
            >
              <p>
                The weight of each property depends on it&apos;s impact for the
                study and further possible applications. (The properties and
                characteristics used in this project was the most common between
                all the articles and studies)
              </p>
              <p>
                <span className="fw-bold text-dark">Sensory evaluation:</span>{" "}
                This property has the highest weight{" "}
                <span className="fw-bold">(6)</span> in the decision matrix
                since the biodegradable active packaging with antimicrobial
                properties is a new packaging technology, and its acceptability,
                utility and application are determined by its results.
              </p>
              <p>
                <span className="fw-bold text-dark">Microbial control:</span>{" "}
                this study characteristic has a weight of{" "}
                <span className="fw-bold">(5)</span> since both the product and
                the packaging must guarantee the microbiological specifications
                required by the legislation, which makes it relevant, since not
                having a good control could affect its quality. For this reason,
                good manufacturing practices must be applied so that the product
                is innocuous and its sensory characteristics are preserved,
                allowing the packaging to work efficiently inhibiting external
                microorganisms and allowing the antimicrobial agent to act as a
                double protective layer.
              </p>
              <p>
                <span className="fw-bold">Mechanical properties: </span>this
                property has a weight of <span className="fw-bold">(4) </span>{" "}
                because it is important to give it priority due to the mass
                transfer that can occur depending on the humidity and the
                solution of the antimicrobial agent that can influence the
                resistance of the material, therefore, it should be taken into
                account how important it was for the study the influence of
                these properties on the material, because if the material has
                deformations it can influence its contamination since it is a
                material of biological origin, which would increase the
                probability of contamination of both the material and the
                product.
              </p>
              <p>
                <span className="fw-bold">Appearance of the packaging: </span>{" "}
                its weight on the material is{" "}
                <span className="fw-bold"> (3)</span> because its importance is
                not so significant, but it is relevant and is related to the
                acceptability of the product by the consumer, since this
                appearance in one way or another tends to be related to the
                quality of the product, so its color is considered by consumers
                as an indicator of the state in which the product is probably
                found.
              </p>
              <p>
                <span className="fw-bold">Statistical analysis: </span>helps us
                to identify which is the statistical method used to evaluate the
                factors that significantly influence the material, its value is{" "}
                <span>(2)</span> because although it is important in itself, it
                is related to all the previous properties, therefore, in this
                case we only evaluate how reliable the study is according to its
                treatment.
              </p>
              <p>
                <span className="fw-bold">
                  Capacity to survive the breakage of the cold chain:{" "}
                </span>{" "}
                its weight is not very significant{" "}
                <span className="fw-bold">(1)</span>, this was determined
                according to the observations that were made to all the studies
                where only some materials could tolerate a certain temperature
                range and still be able to preserve the organoleptic properties
                of the cheese (study product), however, it is not so significant
                since this is not the focus of the study and is an improvement
                that the material can have.
              </p>
            </AccordionItem>

            <AccordionItem
              label="How we determine wich property is most important the other?"
              collapseId="propertyImportance"
            >
              <p>
                The importance of each property according to the study material
                was determined according to the results presented in each study,
                in this sense, the results were analyzed and according to the
                data presented, it was identified how much information it
                provided and how relevant it was for the study. Since this
                review was done by obtaining certain values from the studies to
                corroborate that there was no bias on the data, each one of them
                was rectified, so that the dynamic was that one person obtained
                the data and another rectified it to reduce the probability of
                error.
              </p>
            </AccordionItem>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default FAQ;
