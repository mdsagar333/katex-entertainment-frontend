import React from "react";
import frame1 from "../../../../assets/image/Frame_1.png";
import frame2 from "../../../../assets/image/Frame_2.png";
import frame3 from "../../../../assets/image/Frame_3.png";
import arrow from "../../../../assets/image/Arrow_1.png";

const walletsIcon = [frame1, frame2, frame3];
const Wallet = ({ title, description, link, icon, classStr }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="card ">
        <div className=" card-body">
          <h5>
            <img src={walletsIcon[icon]} />
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <div className="custom__platform__container"></div>
        </div>
        <div className="card-footer">
          <a href="#">Choose Wallet</a>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
