import React from "react";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import heroBg from "../../assets/image/Image.png";
import AkaCoinSection from "./components/AkaCoinSection/AkaCoinSection";
import WalletsSection from "./components/WalletSection/WalletsSection";
import QuickStart from "./components/QuickStartSection/QuickStart";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import HeaderSection from "./components/Header/HeaderSection";

export const Home = () => {
  return (
    <div className="custom__main__container">
      <HeaderSection />
      <AkaCoinSection />
      <WalletsSection />
      <QuickStart />
      <Counter />
      <Footer />
    </div>
  );
};
