import React from "react";
import bannerImg from "../../../../assets/image/bannerImg.jpg";

const QuickStartBannerCard = ({ title, description, linkStr, pos, image }) => {
  const bgclassStr =
    pos % 2 === 0 ? "custom__wallet__primary" : "custom__wallet__secondary";
  const rectangleBgClassStr =
    pos % 2 === 0
      ? "custom__rectanlg__primary"
      : "custom__rectangle__secondary";
  return (
    <div
      className={`card ${bgclassStr} position-relative overflow-hidden`}
      style={{ padding: "40px", minHeight: "380px", borderRadius: "15px" }}
    >
      <div className="card-body custom__z__index position-relative p-0">
        <h3 className="card-title mb-3">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
      {image && (
        <div className="my-4 overflow-hidden position-relative custom__z__index rounded-3">
          <img src={bannerImg} alt="" className="img-fluid " />
        </div>
      )}
      <div className="card-footer custom__z__index position-relative p-0">
        <a href="#" className="btn">
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
