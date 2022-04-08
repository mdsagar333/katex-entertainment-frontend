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
          <div className="col-12 col-md-4">
            <img src={logo} className="d-inline-block mb-3" />
            <p>
              Living Ecosystem <br /> Decentralized Token
            </p>
            <div className="custom__social__link__container"></div>
          </div>
          <div className="col-12 col-md-2">
            <FooterVerticalNav navHeader="Pages" navLists={footerNavPages} />
          </div>
          <div className="col-12 col-md-2">
            <FooterVerticalNav navHeader="Learn" navLists={footerNavLearn} />
          </div>
          <div className="col-12 col-md-2">
            <FooterVerticalNav
              navHeader="Support"
              navLists={footerNavSupport}
            />
          </div>
          <div className="col-12 col-md-2">
            <FooterVerticalNav
              navHeader="About AKA.Coin"
              navLists={footerNavAkaCoin}
            />
          </div>
        </div>
      </div>
      <p className="text-center"> &copy;2022 AKA.COIN. All right reserved</p>
    </footer>
  );
};

export default Footer;
