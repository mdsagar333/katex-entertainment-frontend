import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingBtn from "../SharedComponent/LoadingBtn";
import FormComponent from "./compopnent/FormDataComponent";

const AddWallet = () => {
  const [walletInfo, setWalletInfo] = useState({
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitWalletInfo = () => {
    console.log(walletInfo);
    setIsLoading(true);
    const url = "http://localhost:5000/api/wallets";

    axios
      .post(url, walletInfo)
      .then((data) => {
        if (data.status === 201) {
          Swal.fire({
            title: "Congratulations",
            text: "New Banner Created Successfully!",
            icon: "success",
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 1500,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setWalletInfo({ ...walletInfo, [e.target.name]: e.target.value });
  };
  return (
    <div className="custom__dashboard__margin container">
      <h1 className="text-center mb-4">Add Wallet</h1>
      <FormComponent
        handler={handleChange}
        isFileNeeded={false}
        isRequired={true}
        data={walletInfo}
      />
      {isLoading ? (
        <LoadingBtn />
      ) : (
        <button className="btn btn-primary" onClick={submitWalletInfo}>
          Create New Wallet
        </button>
      )}
    </div>
  );
};

export default AddWallet;
