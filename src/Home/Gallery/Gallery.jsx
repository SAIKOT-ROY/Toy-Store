import React from "react";

const Gallery = () => {
  return (
    <div className="mb-20 rounded-lg">
        <h2 className="font-bold text-center text-5xl">Top Products</h2>
      <div className="mx-auto bg-[#0B2447] mt-10 p-10">
        <div className="mb-10 md:flex-row gap-10 md:gap-8 flex flex-col justify-center items-center">
          <div className="w-3/4 p-4">
            <img
              className="rounded-full"
              src="../../../public/11-pic/itachi.webp"
              alt=""
            />
          </div>
          <div className="w-3/4">
            <img
              className="rounded-full"
              src="../../../public/11-pic/gojo.jpg"
              alt=""
            />
          </div>
          <div className="w-3/4">
            <img
              className="rounded-full"
              src="../../../public/11-pic/kakashi.webp"
              alt=""
            />
          </div>
          <div className="w-3/4">
            <img
              className="rounded-full"
              src="../../../public/11-pic/megumi.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="md:flex-row gap-10 md:gap-8 flex flex-col justify-center items-center">
          <div className="w-3/4">
            <img
              className="rounded-full"
              src="../../../public/11-pic/kamado.jpg"
              alt=""
            />
          </div>
          <div className="w-3/4 h-1/3">
            <img
              className="rounded-full"
              src="../../../public/11-pic/sukuna.jpg"
              alt=""
            />
          </div>
          <div className="w-3/4">
            <img
              className="rounded-full"
              src="../../../public/11-pic/sasuke.webp"
              alt=""
            />
          </div>
          <div className="w-3/4">
            <img
              className="rounded-full"
              src="../../../public/11-pic/bakugo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
