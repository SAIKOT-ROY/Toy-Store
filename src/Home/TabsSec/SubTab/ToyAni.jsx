import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToyAni = ({aToys}) => {


  const toasty = () => {
    toast('Please Login')
  }


    return (
        <div  className="card w-96 bg-base-100 shadow-xl" data-aos="flip-down">
          <figure className="px-10 pt-10">
            <img
              src={aToys?.img}
              alt="Shoes"
              className="rounded-xl h-[300px]"
              data-aos="example-anim1"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{aToys?.name}</h2>
            <p>Price $<span>{aToys?.price}</span></p>
            <p>Rating <span>{aToys?.rating}</span></p>
            <div className="card-actions">
            <Link
            onClick={toasty}
            className="btn font-bold bg-blue-900"
            to={`/onetoy/${aToys._id}`}
          >
            View Details
          </Link>
            </div>
          </div>
          <ToastContainer />
        </div>
    );
};

export default ToyAni;