import React from "react";
import { Link } from "react-router-dom";

const ToyMar = ({ marToys }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl" data-aos="flip-down">
      <figure className="px-10 pt-10">
        <img src={marToys?.img} alt="Shoes" className="rounded-xl h-[300px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{marToys?.name}</h2>
        <p>
          Price $<span>{marToys?.price}</span>
        </p>
        <p>
          Rating <span>{marToys?.rating}</span>
        </p>
        <div className="card-actions">
          <Link
            className="btn font-bold bg-blue-900"
            to={`/onetoy/${marToys._id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyMar;
