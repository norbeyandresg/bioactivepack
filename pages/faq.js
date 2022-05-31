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

            <AccordionItem
              label="Why do good manufacturing practices influence the efficiency of cheese packaging or coating?"
              collapseId="manufactureProperties"
            >
              When manufacturing practices are not carried out, the place where
              the product is made, the personnel who have direct or indirect
              contact with the product and the place, can contaminate the cheese
              and even the packaging material, since this is of biological
              origin, which causes losses.
            </AccordionItem>

            <AccordionItem
              label="Why is the safety of cheese processing and packaging elements so important?"
              collapseId="importanceOfElements"
            >
              Induces the propagation of microorganisms, which can cause
              illnesses in people who consume it.
            </AccordionItem>

            <AccordionItem
              label="Why is cheese production in developed countries higher than in developing countries if the latter get more milk?"
              collapseId="outProduction"
            >
              In Colombia there are no technologies to increase the amount of
              cheese produced and there is also a lack of information on the
              alternatives that could be tested to avoid losses and expand the
              range of products such as cheese. World milk production in
              developing countries is approximately{" "}
              <span className="fw-bold">500</span> thousand tons and in
              developed countries <span className="fw-bold">400</span> thousand
              tons, so it can be said that milk production in developing
              countries is higher than in developed countries. However, world
              cheese production in developing countries is much lower than in
              developed countries, being <span className="fw-bold">5 </span>{" "}
              thousand tons and <span className="fw-bold">20</span>
              thousand tons respectively, so it is possible that this is due to
              the lack of technologies in the production of cheese, or the waste
              of these products due to the lack of packaging to preserve the
              product, prevent or inhibit its contamination.
            </AccordionItem>

            <AccordionItem
              label="How does active packaging work in food protection?"
              collapseId="activePackagingWorks"
            >
              To understand how active packaging works, three elements must be
              taken into account: packaging, food and environment, which
              interact with each other, where the role of the packaging in this
              case is to protect the food from external contamination, together
              with an antimicrobial agent or active compound that, in addition
              to protecting the food, allows it to last much longer.
            </AccordionItem>

            <AccordionItem
              label="Why pay more for a product just because it is a greener alternative for the environment?"
              collapseId="morePayment"
            >
              Because it not only protects the product from contamination and is
              environmentally friendly, it also reduces product losses because
              the active components of both the packaging and the antimicrobial
              agent make the product last much longer.
            </AccordionItem>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default FAQ;
