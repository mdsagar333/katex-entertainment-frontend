import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../SharedComponent/Loading";
import { Link } from "react-router-dom";

const BannersList = () => {
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdateNeeded, setIsUpdateNeeded] = useState(0);

  // activate banner function
  const handleActiveBanner = async (id) => {
    const url = `http://localhost:5000/api/hero-banner/activate/${id}`;
    console.log(url);
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

  // delete single banner function
  const handleDelete = async (id) => {
    const url = `http://localhost:5000/api/hero-banner/${id}`;
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

  // getting all banner lists
  useEffect(() => {
    const url = "http://localhost:5000/api/hero-banner";
    const getBanners = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setBanners(result.data.data);
      setIsLoading(false);
    };

    getBanners();
  }, [isUpdateNeeded]);
  return (
    <div className="custom__dashboard__margin container">
      <h1 className="text-center mt-3">Hero Banner Lists</h1>
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
            {banners.length < 1 ? (
              <h4>There are no banner at this momment.</h4>
            ) : (
              banners.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{`${item.description}`.substring(0, 50)}...</td>
                    <td className="d-flex align-items-center">
                      <img
                        src={item.image}
                        style={{ width: "100px", height: "120px" }}
                        alt=""
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-primary me-2 mb-2"
                        onClick={() => handleActiveBanner(item._id)}
                      >
                        Activate
                      </button>
                      <Link
                        className="btn btn-primary me-2 mb-2"
                        to={`/dashboard/update/hero-banner/${item._id}`}
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-outline-danger mb-2"
                        onClick={() => handleDelete(item._id)}
                        disabled={index === 0 ? true : false}
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

export default BannersList;
