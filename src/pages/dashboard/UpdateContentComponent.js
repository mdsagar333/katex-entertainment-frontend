import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Loading from "../SharedComponent/Loading";
import FormComponent from "./compopnent/FormDataComponent";

const UpdateContentComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [infoData, setInfoData] = useState({});
  const { collection, id } = useParams();

  const url = `https://fathomless-sea-96755.herokuapp.com/api/${collection}/${id}`;
  let fileNeeded;
  if (collection === "hero-banner" || collection === "features") {
    fileNeeded = true;
  } else {
    fileNeeded = false;
  }

  const handleChange = (e) => {
    if (e.target.name === "video" || e.target.name === "image") {
      setInfoData({
        ...infoData,
        [e.target.name]: e.target.files[0],
        [`prev${e.target.name}`]: infoData[e.target.name],
      });
    } else {
      setInfoData({ ...infoData, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = async () => {
    infoData;
    setIsLoading(true);
    const updateAPI = `https://fathomless-sea-96755.herokuapp.com/api/${collection}/${id}`;

    delete infoData._id;

    const formData = new FormData();
    formData.append("title", infoData.title);
    formData.append("description", infoData.description);

    typeof infoData.image === "object";
    if (infoData.image && typeof infoData.image === "object") {
      formData.append("image", infoData.image);
      formData.append("prevImage", infoData.prevImage);
    }
    if (infoData.video && typeof infoData.video === "object") {
      formData.append("video", infoData.video);
      formData.append("prevVideo", infoData.prevvideo);
    }

    formData.get("prevVideo");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const updated = await axios.patch(updateAPI, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          if (updated.status === 200) {
            Swal.fire("Updated!", "Your file has been updated.", "success");
          }
          setIsLoading(false);
        } catch (err) {
          err;
        }
      }
    });
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios(url);
      setInfoData({ ...result.data.data });
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="custom__dashboard__margin container">
      <h1>Update {collection} data</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <FormComponent
            handler={handleChange}
            fileType={collection === "features" ? "video" : "image"}
            isFileNeeded={fileNeeded}
            data={infoData}
            isRequired={false}
          />
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateContentComponent;
