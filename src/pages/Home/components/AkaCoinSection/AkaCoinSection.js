import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import arrow from "../../../../assets/image/Arrow_1.png";
import image_2 from "../../../../assets/image/Image_2.png";
import Loading from "../../../SharedComponent/Loading";

const AkaCoinSection = () => {
  const [featureInfo, setfeatureInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getBannerInfo = async () => {
      const result = await axios(
        "https://fathomless-sea-96755.herokuapp.com/api/features/active"
      );
      result.data.data;
      setfeatureInfo(result.data.data);
      setIsLoading(false);
    };

    getBannerInfo();
  }, []);

  return (
    <section className="custom__max__width custom__aka__margin__bottom">
      <div className="container-fluid">
        <h1 className="text-center custom__global__title">What Is Akacoin?</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="row custom__margin__bottom">
              <div className="col-12 col-md-5">
                <h2 className="custom__akaCoin-h2 mb-5 mb-md-0">
                  {/* The fastest growing and community friendly */}
                  {featureInfo.title}
                </h2>
              </div>
              <div className="col-12 col-md-7">
                <p className="custom__bottom__margin">
                  {/* Akacoin is the fastest blockchain in the world and the fastest
                  growing ecosystem in crypto, with thousands of projects
                  spanning DeFi, NFTs, Web3 and more. */}
                  {featureInfo.description}
                </p>
                <a href="">
                  Explore Ecosystem{" "}
                  <img src={arrow} style={{ width: "20px" }} />
                </a>
              </div>
            </div>
            <div className="d-flex align-items-stretch custom__media__container">
              <img
                src={image_2}
                className="img-fluid me-md-4 d-inline-block mb-5 mb-md-0"
                alt=""
              />
              {/* react palyer- a third party library component */}
              <div className="custom__player__container">
                {/* <ReactPlayer
                  url={
                    featureInfo.video
                      ? `https://fathomless-sea-96755.herokuapp.com/api/features/video/${featureInfo.video}`
                      : "https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  }
                  // url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  width={"100%"}
                  height={"400px"}
                /> */}
                <video width="100%" height="400px" controls>
                  <source
                    src={`https://fathomless-sea-96755.herokuapp.com/api/features/video/${featureInfo.video}`}
                  ></source>
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AkaCoinSection;
