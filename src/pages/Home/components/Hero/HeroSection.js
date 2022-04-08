import React from "react";
import github from "../../../../assets/image/Ellipse_9.png";

const HeroSection = ({ title, description, image }) => {
  return (
    <div className="container-fluid custom__hero__section custom__max__width">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h6 className="custom__hero__section-h6">
            Introducing <span className="heroSubtitle custom_primary">AKA</span>
            <span className="heroSubtitle custom_secodary">COIN</span>
          </h6>
          <h1 className="custom__hero__section-title">{title}</h1>
          <p>{description}</p>
          <div className="hero_btn_group">
            <button className="btn text-capitalize custom__hero__section-btn__1">
              get started
            </button>
            <button className="btn text-capitalize">
              <img src={github} alt="github_icon" className="github__img" />
              <span>Source</span>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-5 custom__hero__section-height">
          <img
            src={image}
            alt="hero_bg"
            className="img-fluid custom__hero__section-img"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// Living Ecosystem Decentralized Token

// Akacoin is a open source peer-to-peer digital currency,community-run
// technology that supports cryptocurrencies and thousands of
// decentralized applications.
