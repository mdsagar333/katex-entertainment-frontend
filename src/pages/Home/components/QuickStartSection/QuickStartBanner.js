import React from "react";

const QuickStartBannerCard = ({ title, description, linkStr }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href="#" class="btn">
          {linkStr}
        </a>
      </div>
    </div>
  );
};

export default QuickStartBannerCard;
