import React from "react";
import { useLoaderData } from "react-router-dom";


const OneToy = () => {
  const singleToy = useLoaderData();

  const {img, seller, email, price, rating, quantity, description, name} = singleToy || {}



  return (
    <div className="mb-20">
        <h2 className="font-bold text-4xl text-center mb-10 font-serif">Single Toy Information</h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="md:w-1/2 w-full">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <p><span className="font-bold">Quantity </span>: <span>{quantity}</span></p>
            <p><span className="font-bold">Seller Name</span>: <span>{seller}</span></p>
            <p><span className="font-bold">Seller Email</span> : <span>{email == null ? 'Not avilable' : email}</span></p>
            <p><span className="font-bold">Price</span> : <span>{price == null ? 'Stock Out' : price}</span></p>
            <p><span className="font-bold">Rating</span> : <span>{rating}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneToy;
