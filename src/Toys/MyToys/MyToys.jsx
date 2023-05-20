import React, { useContext, useEffect, useState } from "react";
import MyToy from "./MyToy";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);

  // url = `http://localhost:5000/items?email=${user?.email}`

  useEffect(() => {
    fetch(`http://localhost:5000/items?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [myToys, user]);

  const handleDelete = (id) => {  
    swal("Are you sure you want to do this?", {
      buttons: ["NO", true],
    });
    fetch(`http://localhost:5000/items/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0)
         alert("user removed");
        const remaining = myToys.filter((t) => t._id !== id);
        setMyToys(remaining);
      });
      
  };

  const handleUpdate = (id) => {
        fetch(`http://localhost:5000/items/${id}`,{
          method: 'PATCH',
          headers: {
                'content-type' : 'application/json'
          },
          body: JSON.stringify({status : 'confirm'})

        })
        .then(res => res.json())
        .then(data => console.log(data))
  }


  return (
    <div className="overflow-hidden md:overflow-x-auto w-full md:w-full border">
      <table className="md:table table-compact table-zebra border mx-auto w-3/4 md:w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Toys Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
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
              handleUpdate={handleUpdate}
            ></MyToy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
