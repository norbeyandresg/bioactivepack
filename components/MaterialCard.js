import React from "react";
import { Row, Col } from "reactstrap";

const AccordionItem = ({ children, label, collapseId }) => (
  <div className="accordion-item">
    <h2 className="accordion-header" id={`${collapseId}-header`}>
      <button
        className="accordion-button collapsed py-2"
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

const MaterialCard = (m) => {
  return (
    <div className="material-card">
      <div className="card-header d-flex justify-content-between text-muted">
        <label>weight: {m.weight}</label>
        <label>id: {m.id}</label>
      </div>
      <div className="card-body d-flex flex-column">
        <label className="fs-5 fw-bold border-bottom mb-3">{m.name}</label>

        <label className="fst-italic text-muted fw-light">
          antimicrobial agent:
        </label>
        <label className="card-subttitle fs-5">{m.antimicAgent}</label>

        <label className="fst-italic text-muted fw-light mt-3">
          able to inhibit:
        </label>
        <label className="card-subttitle ">{m.inhibit ? m.inhibit : ""}</label>
      </div>
      <div className="accordion card-footer card-accordion">
        <AccordionItem label="more information" collapseId={`collapse${m.id}`}>
          <label className="fst-italic text-muted fw-light my-3">
            observations:
          </label>
          <ul className="list-group list-group-flush">
            {m.observations
              ? m.observations.map((o) => (
                  <li className="list-group-item text-center my-2" key={o}>
                    {o}
                  </li>
                ))
              : ""}
          </ul>
          <label className="fst-italic text-muted fw-light mt-3">
            references:
          </label>
          <label className="fw-light text-break">
            {m.references ? m.references : ""}
          </label>
        </AccordionItem>
      </div>
    </div>
  );
};

export default MaterialCard;
