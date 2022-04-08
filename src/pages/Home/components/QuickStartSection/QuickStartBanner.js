import React from "react";

const QuickStartBannerCard = ({ title, description, linkStr, pos }) => {
  const bgclassStr =
    pos % 2 === 0 ? "custom__wallet__primary" : "custom__wallet__secondary";
  const rectangleBgClassStr =
    pos % 2 === 0
      ? "custom__rectanlg__primary"
      : "custom__rectangle__secondary";
  return (
    <div class={`card p-3 ${bgclassStr} position-relative`}>
      <div class="card-body custom__z__index position-relative">
        <h3 class="card-title mb-3">{title}</h3>
        <p class="card-text">{description}</p>
      </div>
      <div className="card-footer custom__z__index position-relative">
        <a href="#" class="btn">
          {linkStr}
        </a>
      </div>
      <span
        className={`quickstart__banner__rectanlge-1 ${rectangleBgClassStr}`}
      ></span>
      <span
        className={`quickstart__banner__rectanlge-2 ${rectangleBgClassStr}`}
      ></span>
      <span
        className={`quickstart__banner__rectanlge-3 ${rectangleBgClassStr}`}
      ></span>
      <span
        className={`quickstart__banner__rectanlge-4 ${rectangleBgClassStr}`}
      ></span>
    </div>
  );
};

export default QuickStartBannerCard;
