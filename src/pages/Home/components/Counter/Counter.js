import React from "react";

const networkStatistics = [
  {
    title: "Transactions/Second",
    value: "2,905",
    dollerSign: false,
  },
  {
    title: "Total Transactions",
    value: "64,540,470,129",
    dollerSign: true,
  },
  {
    title: "Avg. Cost/Transaction",
    value: "0.00025",
    dollerSign: true,
  },
  {
    title: "Validator Nodes",
    value: "1,645",
    dollerSign: false,
  },
];

const Counter = () => {
  return (
    <div className="custom__counter__container">
      <div className="container-fluid">
        <div className="row">
          {networkStatistics.map((item, index) => {
            return (
              <div className="col-12 col-md-3" key={index}>
                <h6>{item.title}</h6>
                <h3>{`${item.dollerSign ? "$" : ""}${item.value}`}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Counter;
