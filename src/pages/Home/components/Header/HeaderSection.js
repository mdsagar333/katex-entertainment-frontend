import React from "react";
import heroBg from "../../../../assets/image/Image.png";
import HeroSection from "../Hero/HeroSection";
import Navbar from "../Navbar/Navbar";

const HeaderSection = () => {
  return (
    <header className="custom__header position-relative">
      <Navbar />
      <HeroSection
        title="Living Ecosystem Decentralized Token"
        description="Akacoin is a open source peer-to-peer digital currency,community-run
technology that supports cryptocurrencies and thousands of
decentralized applications."
        image={heroBg}
      />
    </header>
  );
};

export default HeaderSection;
