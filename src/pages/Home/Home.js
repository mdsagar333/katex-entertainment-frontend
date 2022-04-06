import React from "react";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import heroBg from "../../assets/image/Image.png";
import AkaCoinSection from "./components/AkaCoinSection/AkaCoinSection";
import WalletsSection from "./components/WalletSection/WalletsSection";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Living Ecosystem Decentralized Token"
        description="Akacoin is a open source peer-to-peer digital currency,community-run
technology that supports cryptocurrencies and thousands of
decentralized applications."
        image={heroBg}
      />
      <AkaCoinSection />
      <WalletsSection />
    </>
  );
};
