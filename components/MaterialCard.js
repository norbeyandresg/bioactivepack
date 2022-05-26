import React from "react";

const MaterialCard = (m) => {
  return (
    <div className="material-card">
      <div className="material-weight">
        <div>{m.weight}</div>
      </div>
      <div className="card-title">{m.id}</div>
      <div className="card-content">
        This is a brief description of the material with some relevant elements
      </div>
    </div>
  );
};

export default MaterialCard;
