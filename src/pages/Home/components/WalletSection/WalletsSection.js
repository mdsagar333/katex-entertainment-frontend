import React, { useEffect, useState } from "react";
import Wallet from "./Wallet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Loading from "../../../SharedComponent/Loading";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const walletsInfo = [
  {
    icon: "",
    title: "AkaWallet",
    description:
      "Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide",
    link: "#",
  },
  {
    icon: "",
    title: "AkaSafe",
    description:
      "AkaSafe wallet is a secure, decentralized, easy-to-use, and free application to manage more than 10,000 cryptocurrencies.",
    link: "#",
  },
  {
    icon: "",
    title: "AkaMask",
    description:
      "AkaMask is a decentralized multi-chain digital wallet, dedicated to providing safe and convenient one-stop digital asset management services to users around the world.",
    link: "#",
  },
  {
    icon: "",
    title: "AkaSagar",
    description:
      "AkaMask is a decentralized multi-chain digital wallet, dedicated to providing safe and convenient one-stop digital asset management services to users around the world.",
    link: "#",
  },
];

const WalletsSection = () => {
  const [walletLists, setWalletLists] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getBannerInfo = async () => {
      const result = await axios(
        "https://fathomless-sea-96755.herokuapp.com/api/wallets"
      );
      console.log(result.data.data);
      setWalletLists(result.data.data);
      setIsLoading(false);
    };

    getBannerInfo();
  }, []);
  return (
    <div className="custom__max__width">
      <h1 className="text-center custom__margin__bottom">
        Choose Your Wallets
      </h1>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container-fluid">
          <div className="row g-md-5">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              partialVisible={true}
            >
              {walletLists.map((item, index) => {
                return (
                  <Wallet
                    key={item._id}
                    {...item}
                    iconPos={index % 3}
                    pos={index}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletsSection;
