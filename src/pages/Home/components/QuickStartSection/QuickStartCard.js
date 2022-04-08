import React from "react";

const QuickStartCard = ({ title, image, description, index }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="d-flex ">
        <img src={image} />
        <div>
          <h6>{`${index}. ${title}`}</h6>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStartCard;
