import React from "react";
import { BsArrowRight } from "react-icons/bs";
import frame1 from "../../../../assets/image/Frame_1.png";
import frame2 from "../../../../assets/image/Frame_2.png";
import frame3 from "../../../../assets/image/Frame_3.png";

import socialImgBlack1 from "../../../../assets/image/social_1_black.png";
import socialImgBlack2 from "../../../../assets/image/social_2_black.png";
import socialImgBlack3 from "../../../../assets/image/social_3_black.png";

import socialImgWhite1 from "../../../../assets/image/social_1_white.png";
import socialImgWhite2 from "../../../../assets/image/social_2_white.png";
import socialImgWhite3 from "../../../../assets/image/social_3_white.png";

const walletsIcon = [frame1, frame2, frame3];
const socialImages = [
  [socialImgBlack1, socialImgBlack2, socialImgBlack3],
  [socialImgWhite1, socialImgWhite2, socialImgWhite3],
];

const Wallet = ({ title, description, link, iconPos, pos }) => {
  const indexPos = pos % 2;
  const bgclassStr =
    pos % 2 === 0 ? "custom__wallet__primary" : "custom__wallet__secondary";
  const rectangleBgClassStr =
    pos % 2 === 0
      ? "custom__rectanlg__primary"
      : "custom__rectangle__secondary";

  const rectangleWidth = pos % 2 ? 244 : 153;

  return (
    <div className="me-4 d-flex align-items-stretch mb-5 mb-md-3">
      <div
        className={`card ${bgclassStr} py-4 px-3 position-relative custom__wallet__card`}
      >
        <div className="card-body custom__z__index position-relative">
          <h5 className="mb-4">
            <img
              src={walletsIcon[iconPos]}
              alt=""
              className="d-inline-block me-1"
            />
            {title}
          </h5>
          <p className="card-text mb-4">{description}</p>
          <div className="custom__platform__container">
            <img
              src={socialImages[indexPos][0]}
              alt=""
              className="d-inline-block me-1"
            />
            <img
              src={socialImages[indexPos][1]}
              alt=""
              className="d-inline-block me-1"
            />
            <img
              src={socialImages[indexPos][2]}
              alt=""
              className="d-inline-block me-1"
            />
          </div>
        </div>
        <span className={`custom__rectangle1 ${rectangleBgClassStr}`}></span>
        <span className={`custom__rectangle2 ${rectangleBgClassStr}`}></span>
        <span
          className="custom__rectangle3 custom__bg__blue"
          style={{ width: `${rectangleWidth}px` }}
        ></span>

        <div className="card-footer mb-4 position-relative custom__z__index">
          <a href="#" className="me-2">
            Choose Wallet
          </a>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
