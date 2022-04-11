import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import FormComponent from "./compopnent/FormDataComponent";
import LoadingBtn from "../SharedComponent/LoadingBtn";

const AddFeature = () => {
  const [featureInfo, setFeatureInfo] = useState({
    title: "",
    description: "",
    video: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitFeatureInfo = () => {
    console.log(featureInfo);
    setIsLoading(true);
    const url = "http://localhost:5000/api/features";
    const formData = new FormData();
    formData.append("title", featureInfo.title);
    formData.append("description", featureInfo.description);
    formData.append("video", featureInfo.video);

    axios
      .post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((data) => {
        if (data.status === 201) {
          Swal.fire({
            title: "Congratulations",
            text: "New Feature Created Successfully!",
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
    if (e.target.name === "video") {
      setFeatureInfo({ ...featureInfo, [e.target.name]: e.target.files[0] });
    } else {
      setFeatureInfo({ ...featureInfo, [e.target.name]: e.target.value });
    }
  };
  return (
    <div className="custom__dashboard__margin container">
      <h1 className="text-center mb-4">Add Feature</h1>
      <FormComponent
        fileType="video"
        handler={handleChange}
        isFileNeeded={true}
        isRequired={true}
        data={featureInfo}
      />
      {isLoading ? (
        <LoadingBtn />
      ) : (
        <button className="btn btn-primary" onClick={submitFeatureInfo}>
          Create New Feature
        </button>
      )}
    </div>
  );
};

export default AddFeature;
