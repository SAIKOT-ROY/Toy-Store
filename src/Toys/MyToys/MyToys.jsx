import React, { useContext, useEffect, useState } from "react";
import MyToy from "./MyToy";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";
import useTitle from "../../Hook/useTitle";


const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);

  useTitle('Ani Toy | My Toys')


  // url = `https://assignment-xi-server.vercel.app/items?email=${user?.email}`

  useEffect(() => {
    fetch(`https://assignment-xi-server.vercel.app/items?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user?.email]);


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
        <button className="border p-4 bg-slate-300 rounded btn-ghost">Ascending</button>
        <button className="border p-4 bg-black text-white rounded">Descending</button>
      </div>
      <div className="overflow-hidden md:overflow-x-auto w-full border">
        <table className="md:table table-compact table-zebra border mx-auto w-3/4 md:w-full">
          {/* head */}
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
            {/* row 1 */}
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
