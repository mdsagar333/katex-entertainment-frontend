import React from "react";
import logo from "../../../../assets/image/Logo.png";

import {
  footerNavPages,
  footerNavLearn,
  footerNavSupport,
  footerNavAkaCoin,
} from "../../../../data/navabarData";
import FooterVerticalNav from "./FooterVerticalNav";

import github from "../../../../assets/image/Ellipse_9.png";
import dribble from "../../../../assets/image/Ellipse_10.png";
import facebook from "../../../../assets/image/Ellipse_11.png";
import instagram from "../../../../assets/image/Ellipse_12.png";

const Footer = () => {
  return (
    <footer className="custom__max__width">
      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <img src={logo} className="d-inline-block mb-3" />
            <p>
              Living Ecosystem <br /> Decentralized Token
            </p>
            <div className="custom__social__link__container">
              <a href="https://github.com/">
                <img src={github} className="d-inline-block" />
              </a>
              <a href="https://dribbble.com/">
                <img src={dribble} className="d-inline-block" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={facebook} className="d-inline-block" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagram} className="d-inline-block" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-2 mb-5 mb-md-0">
            <FooterVerticalNav navHeader="Pages" navLists={footerNavPages} />
          </div>
          <div className="col-12 col-md-2 mb-5 mb-md-0">
            <FooterVerticalNav navHeader="Learn" navLists={footerNavLearn} />
          </div>
          <div className="col-12 col-md-2 mb-5 mb-md-0">
            <FooterVerticalNav
              navHeader="Support"
              navLists={footerNavSupport}
            />
          </div>
          <div className="col-12 col-md-2 mb-5 mb-md-0">
            <FooterVerticalNav
              navHeader="About AKA.Coin"
              navLists={footerNavAkaCoin}
            />
          </div>
        </div>
      </div>
      <p className="text-center mb-4 mb-md-2">
        {" "}
        &copy;2022 AKA.COIN. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
