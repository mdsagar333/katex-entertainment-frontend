import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../SharedComponent/Loading";
import { Link } from "react-router-dom";

const FeatureLists = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [featureLists, setFeatureLists] = useState([]);
  const [isUpdateNeeded, setIsUpdateNeeded] = useState(0);

  // activate banner function
  const handleActiveFeature = async (id) => {
    const url = `http://localhost:5000/api/features/activate/${id}`;
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const activeBanner = await axios.patch(url);
        if (activeBanner.status === 200) {
          Swal.fire("Saved!", "", "success");
          setIsUpdateNeeded(isUpdateNeeded + 1);
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // delte a single feature function
  const handleDelete = async (id) => {
    const url = `http://localhost:5000/api/features/${id}`;
    console.log(url);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const res = await axios.delete(url);
        console.log(res);
        if (res.status === 204) {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
          setIsUpdateNeeded(isUpdateNeeded + 1);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong, please try again later!",
            timer: 1500,
          });
        }
      } else if (result.isDenied) {
      }
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const url = "http://localhost:5000/api/features";
    const getFeatures = async () => {
      const result = await axios(url);
      setFeatureLists(result.data.data);
      setIsLoading(false);
    };

    getFeatures();
  }, [isUpdateNeeded]);

  return (
    <div className="custom__dashboard__margin container">
      <h1 className="text-center mt-3">Feature Lists</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Decription</th>
              <th scope="col">Media</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {featureLists.length < 1 ? (
              <h4>There are no feature at this momment.</h4>
            ) : (
              featureLists.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <video width="80px" height="50px" controls>
                        <source src={item.video}></source>
                      </video>{" "}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => handleActiveFeature(item._id)}
                      >
                        Activate
                      </button>
                      <Link
                        className="btn btn-primary me-2"
                        to={`/dashboard/update/features/${item._id}`}
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FeatureLists;
