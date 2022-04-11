import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import FormComponent from "./compopnent/FormDataComponent";
import LoadingBtn from "../SharedComponent/LoadingBtn";

const AddHeroBanner = () => {
  const [bannerInfo, setBannerInfo] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const submitBannerInfo = () => {
    setIsLoading(true);
    const url = "http://localhost:5000/api/hero-banner";
    const formData = new FormData();
    formData.append("title", bannerInfo.title);
    formData.append("description", bannerInfo.description);
    formData.append("image", bannerInfo.image);

    axios
      .post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
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
    console.log("changed");
    if (e.target.name === "image") {
      setBannerInfo({ ...bannerInfo, [e.target.name]: e.target.files[0] });
    } else {
      setBannerInfo({ ...bannerInfo, [e.target.name]: e.target.value });
    }
  };
  return (
    <div className="custom__dashboard__margin container container-fluid">
      <h1 className="text-center mb-4">Add Hero Banner</h1>
      <FormComponent
        handler={handleChange}
        fileType="image"
        isFileNeeded={true}
        isRequired={true}
        data={bannerInfo}
      />
      {isLoading ? (
        <LoadingBtn />
      ) : (
        <button className="btn btn-primary" onClick={submitBannerInfo}>
          Create New Banner
        </button>
      )}
    </div>
  );
};

export default AddHeroBanner;
