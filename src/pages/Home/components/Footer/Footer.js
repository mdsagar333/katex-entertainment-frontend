import React from "react";
import logo from "../../../../assets/image/Logo.png";

import {
  footerNavPages,
  footerNavLearn,
  footerNavSupport,
  footerNavAkaCoin,
} from "../../../../data/navabarData";
import FooterVerticalNav from "./FooterVerticalNav";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <img src={logo} />
            <p>
              Living Ecosystem <br /> Decentralized Token
            </p>
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
      <p></p>
    </footer>
  );
};

export default Footer;
