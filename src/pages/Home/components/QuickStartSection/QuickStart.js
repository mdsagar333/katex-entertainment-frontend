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
    <div className="custom__max__width" style={{ marginTop: "100px" }}>
      <h1 className="text-center mb-5">Quick Start Guide</h1>
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
            <div className="row g-5">
              <div className="col-12 col-md-3 mb-3 d-flex align-items-stretch">
                <QuickStartBannerCard
                  title="Akacoin Community"
                  description="There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing."
                  linkStr="Learn More"
                  pos={0}
                />
              </div>
              <div className="col-12 col-md-4 mb-3 d-flex align-items-stretch">
                <QuickStartBannerCard
                  title="Become a Validator"
                  description="Help secure the network by running decentralized infrastructure. Learn about operating a validator node."
                  linkStr="Learn More"
                  pos={1}
                />
              </div>
              <div className="col-12 col-md-5 mb-3 d-flex align-items-stretch">
                <QuickStartBannerCard
                  title="Dev. Resource"
                  description="See the get started guide, videos, tutorials, SDKs, reference implementations, and more."
                  linkStr="Start Building"
                  pos={2}
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
