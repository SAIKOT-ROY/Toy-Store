import React from "react";
import { Link } from "react-router-dom";

const ToyDc = ({ dc }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={dc?.img} alt="Shoes" className="rounded-xl h-[300px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{dc?.name}</h2>
        <p>
          Price $<span>{dc?.price}</span>
        </p>
        <p>
          Rating <span>{dc?.rating}</span>
        </p>
        <div className="card-actions">
        <Link
            className="btn font-bold bg-blue-900"
            to={`/onetoy/${dc?._id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyDc;
