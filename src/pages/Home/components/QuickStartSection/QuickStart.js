import React from "react";
import wallet1 from "../../../../assets/image/wallet_1.png";
import wallet2 from "../../../../assets/image/wallet_2.png";
import wallet3 from "../../../../assets/image/wallet_3.png";
import wallet4 from "../../../../assets/image/wallet_4.png";
import QuickStartBannerCard from "./QuickStartBanner";
import QuickStartCard from "./QuickStartCard";

const quickStartImgs = [wallet1, wallet2, wallet3, wallet4];
const quickStartInfo = [
  {
    title: "Create a wallet",
    description:
      "Create a Wallet using either a desktop computer or an mobile device",
  },
  {
    title: "Buy ETH",
    description:
      "You can buy Ethereum (ETH) directly on MetaMask or transfer it",
  },
  {
    title: "Connect your wallet",
    description:
      "Access your wallet to AoaSwap by clicking ‘Connect to a wallet’",
  },
  {
    title: "Swap ETH to AKO",
    description:
      "You can start swapping as you have ETH available! Press ‘Select a token’",
  },
];

const QuickStart = () => {
  return (
    <div>
      <h1 className="text-center">Quick Start Guide</h1>
      <div className="container-fluid">
        <div className="row">
          {quickStartInfo.map((item, index) => {
            return (
              <QuickStartCard
                {...item}
                index={index + 1}
                key={index}
                image={quickStartImgs[index]}
              />
            );
          })}
        </div>
        <div className="custom__quick_banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-3">
                <QuickStartBannerCard
                  title="Akacoin Community"
                  description="There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing."
                  linkStr="Learn More"
                />
              </div>
              <div className="col-12 col-md-4">
                <QuickStartBannerCard
                  title="Become a Validator"
                  description="Help secure the network by running decentralized infrastructure. Learn about operating a validator node."
                  linkStr="Learn More"
                />
              </div>
              <div className="col-12 col-md-5">
                <QuickStartBannerCard
                  title="Dev. Resource"
                  description="See the get started guide, videos, tutorials, SDKs, reference implementations, and more."
                  linkStr="Start Building"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStart;
