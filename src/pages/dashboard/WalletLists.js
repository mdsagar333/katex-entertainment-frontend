import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../SharedComponent/Loading";
import { Link } from "react-router-dom";

const WalletLists = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [walletLists, setWalletLists] = useState([]);
  const [isUpdateNeeded, setIsUpdateNeeded] = useState(0);

  // delete a wallete function
  const handleDelete = async (id) => {
    const url = `https://fathomless-sea-96755.herokuapp.com/api/wallets/${id}`;
    url;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(url);
        res;
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
    const url = "https://fathomless-sea-96755.herokuapp.com/api/wallets";
    const getWalletLists = async () => {
      const result = await axios(url);
      setWalletLists(result.data.data);
      setIsLoading(false);
    };

    getWalletLists();
  }, [isUpdateNeeded]);

  return (
    <div className="custom__dashboard__margin container">
      <h1 className="text-center mt-3">Wallet Lists</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Decription</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {walletLists.length < 1 ? (
              <h4>There are no banner at this momment.</h4>
            ) : (
              walletLists.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <div className="d-flex flex-column">
                        {/* <button className="btn btn-primary">Activate</button> */}
                        <Link
                          className="btn btn-warning me-2 mb-1 text-white"
                          to={`/dashboard/update/wallets/${item._id}`}
                          style={{ width: "120px" }}
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(item._id)}
                          disabled={index < 3 ? true : false}
                          style={{ width: "120px" }}
                        >
                          Delete
                        </button>
                      </div>
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

export default WalletLists;
