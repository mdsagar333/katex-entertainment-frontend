import React from "react";
import Wallet from "./Wallet";

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
];

const WalletsSection = () => {
  return (
    <div>
      <h1>Choose Your Wallets</h1>

      <div className="row">
        {walletsInfo.map((item, index) => {
          return (
            <Wallet
              key={index}
              {...item}
              icon={index % 3}
              classStr={index % 2}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WalletsSection;
