import React, { useEffect, useState } from "react";
import SingleToys from "./singleToys/SingleToys";

const AllToys = () => {
  const [alltoys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  return (
    <div className="mb-10">
      <div className="overflow-hidden md:overflow-x-auto w-full md:w-full">
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
              {
                alltoys.map(toys => <SingleToys
                key={toys._id}
                toys={toys}
                >
                </SingleToys>)
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
