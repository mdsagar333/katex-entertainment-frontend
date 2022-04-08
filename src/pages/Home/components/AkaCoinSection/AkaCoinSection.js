import React from "react";
import ReactPlayer from "react-player";
import arrow from "../../../../assets/image/Arrow_1.png";
import image_2 from "../../../../assets/image/Image_2.png";

const AkaCoinSection = () => {
  return (
    <section className="custom__max__width custom__aka__margin__bottom">
      <div className="container-fluid">
        <h1 className="text-center custom__global__title">What Is Akacoin?</h1>
        <div className="row custom__margin__bottom">
          <div className="col-12 col-md-5">
            <h2 className="custom__akaCoin-h2">
              The fastest growing and community friendly
            </h2>
          </div>
          <div className="col-12 col-md-7">
            <p className="custom__bottom__margin">
              Akacoin is the fastest blockchain in the world and the fastest
              growing ecosystem in crypto, with thousands of projects spanning
              DeFi, NFTs, Web3 and more.
            </p>
            <a href="">
              Explore Ecosystem <img src={arrow} style={{ width: "20px" }} />
            </a>
          </div>
        </div>
        <div className="d-flex align-items-stretch">
          <img src={image_2} className="img-fluid me-4" alt="" />
          {/* react palyer- a third party library component */}
          <div className="custom__player__container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkaCoinSection;
