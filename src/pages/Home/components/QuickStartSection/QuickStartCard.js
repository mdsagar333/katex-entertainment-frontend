import React from "react";

const QuickStartCard = ({ title, image, description, index }) => {
  return (
    <div className="col-12 col-md-6 p-5">
      <div className="d-flex align-items-center">
        <img src={image} className="d-inline-block me-4" />
        <div>
          <h4 className="mb-3">{`${index}. ${title}`}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStartCard;
