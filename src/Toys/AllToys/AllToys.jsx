import React, { useEffect, useState } from "react";
import SingleToys from "./singleToys/SingleToys";

const AllToys = () => {
  const [alltoys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);


  const handleSearch = () => {
        fetch(`http://localhost:5000/toysSearch/${searchText}`)
        .then(res => res.json())
        .then(data => setAllToys(data))
  }

  return (
    <div className="mb-10">
      <div className="mx-auto w-1/4 mb-10">
        <h3 className="text-center font-extrabold text-3xl mb-3">Search Here</h3>
        <div className="form-control ml-5">
          <div className="input-group">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input shadow-sm bg-slate-400 text-white font-semibold"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
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
            {alltoys.map((toys) => (
              <SingleToys key={toys._id} toys={toys}></SingleToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
