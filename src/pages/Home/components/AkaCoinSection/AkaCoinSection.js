import React from "react";
import ReactPlayer from "react-player";
import arrow from "../../../../assets/image/Arrow_1.png";
import image_2 from "../../../../assets/image/Image_2.png";

const AkaCoinSection = () => {
  return (
    <>
      <h1 className="text-center my-4">What Is Akacoin?</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-5">
            <h2>The fastest growing and community friendly</h2>
          </div>
          <div className="col-12 col-md-7">
            <p>
              Akacoin is the fastest blockchain in the world and the fastest
              growing ecosystem in crypto, with thousands of projects spanning
              DeFi, NFTs, Web3 and more.
            </p>
            <a href="">
              Explore Ecosystem <img src={arrow} style={{ width: "20px" }} />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5">
            <img src={image_2} className="img-fluid" />
          </div>
          <div className="col-12 col-md-7">
            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AkaCoinSection;
