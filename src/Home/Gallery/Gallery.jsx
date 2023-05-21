import React from "react";

const Gallery = () => {
  return (
    <div className="mb-20 rounded-lg">
        <h2 className="font-bold text-center text-5xl font-serif">Top Products</h2>
      <div className="mx-auto bg-[#0B2447] mt-10 p-10 rounded-lg shadow-2xl">
        <div className="mb-10 md:flex-row gap-10 md:gap-8 flex flex-col justify-center items-center">
          <div className="w-3/4" data-aos="zoom-in">
            <img
              className="rounded-full"
              src="https://i.ibb.co/VYkxXNL/itachi.webp"
              alt=""
            />
          </div>
          <div className="w-3/4" data-aos="zoom-in">
            <img
              className="rounded-full"
              src="https://i.ibb.co/9mxRpCj/gojo.jpg"
              alt=""
            />
          </div>
          <div className="w-3/4" data-aos="zoom-in">
            <img
              className="rounded-full"
              src="https://i.ibb.co/27vft35/kakashi.webp"
              alt=""
            />
          </div>
          <div className="w-3/4" data-aos="zoom-in">
            <img
              className="rounded-full"
              src="https://i.ibb.co/LnCj3HV/megumi.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="md:flex-row gap-10 md:gap-8 flex flex-col justify-center items-center">
          <div className="w-3/4" data-aos="zoom-in">
            <img
              className="rounded-full"
              src="https://i.ibb.co/y6kkx9Z/kamado.jpg"
              alt=""
            />
          </div>
          <div className="w-3/4 h-1/3" data-aos="zoom-in">
            <img
              className="rounded-full"
              src="https://i.ibb.co/CJpm5RB/sukuna.jpg"
              alt=""
            />
          </div>
          <div className="w-3/4" data-aos="zoom-in">
            <img
              className="rounded-full"
              src="https://i.ibb.co/ZHx2cRG/sasuke.webp"
              alt=""
            />
          </div>
          <div className="w-3/4" data-aos="zoom-in">
            <img
              className="rounded-full"
              src="https://i.ibb.co/qDTRWtw/bakugo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
