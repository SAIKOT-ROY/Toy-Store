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
    <div>
      <div className="overflow-x-auto w-3/4 md:w-full">
        <table className="table w-3/4 md:w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
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
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
