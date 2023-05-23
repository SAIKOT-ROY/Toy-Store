import React, { useContext, useEffect, useState } from "react";
import MyToy from "./MyToy";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";
import useTitle from "../../Hook/useTitle";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [asc, setAsc] = useState(true);
  const { user } = useContext(AuthContext);

  useTitle("Ani Toy | My Toys");

  // const url = `http://localhost:5000/items?email=${user.email}&sort=${asc ? 'asc' : 'desc'}`;
  const url = `https://assignment-xi-server.vercel.app/items?&sort=${asc ? 'asc' : 'desc'}&&email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user?.email, asc]);

  const handleDelete = (id) => {
    swal("Are you sure you want to do this?", {
      buttons: ["NO", true],
    });
    fetch(`https://assignment-xi-server.vercel.app/items/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) alert("user removed");
        const remaining = myToys.filter((t) => t._id !== id);
        setMyToys(remaining);
      });
  };

  return (
    <div className="mb-10">
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setAsc(!asc)}
          className="border btn font-bold font-serif p-4 bg-slate-800 text-gray-200 rounded"
        >
          {asc ? "High to Low" : "Low to High"}
        </button>
      </div>
      <div className="overflow-hidden md:overflow-x-auto w-full border">
        <table className="md:table table-compact table-zebra border mx-auto w-3/4 md:w-full">
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toys Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToy
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
              ></MyToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
