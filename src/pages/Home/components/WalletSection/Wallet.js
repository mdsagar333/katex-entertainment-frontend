import React from "react";
import { BsArrowRight } from "react-icons/bs";
import frame1 from "../../../../assets/image/Frame_1.png";
import frame2 from "../../../../assets/image/Frame_2.png";
import frame3 from "../../../../assets/image/Frame_3.png";
import arrow from "../../../../assets/image/Arrow_1.png";

const walletsIcon = [frame1, frame2, frame3];
const Wallet = ({
  title,
  description,
  link,
  icon,
  bgclassStr,
  rectangleBgClassStr,
}) => {
  return (
    <div className="col-12 col-md-4 d-flex align-items-stretch">
      <div className={`card ${bgclassStr} py-5 px-3 position-relative`}>
        <div className="card-body">
          <h5>
            <img src={walletsIcon[icon]} />
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <div className="custom__platform__container">
            <img src="" />
            <img src="" />
            <img src="" />
          </div>
        </div>
        <span className={`custom__rectangle1 ${rectangleBgClassStr}`}></span>
        <span className={`custom__rectangle2 ${rectangleBgClassStr}`}></span>
        <span className="custom__rectangle3 custom__bg__blue"></span>
        <span></span>
        <span></span>
        <div className="card-footer mb-4">
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
