import React from "react";

const ToyDc = ({ dc }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={dc?.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{dc?.name}</h2>
        <p>
          Price <span>{dc?.price}</span>
        </p>
        <p>
          Rating <span>{dc?.rating}</span>
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDc;