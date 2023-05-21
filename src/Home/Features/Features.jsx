import React from "react";

const Features = () => {
  return (
    <div className="mb-10 md:mb-28 mt-20">
      <h2 className="font-bold text-4xl text-center mb-5 font-serif">Our features</h2>
      <div className="grid md:grid-cols-4 gap-4 w-4/5 mx-auto border justify-center rounded-md shadow-lg p-10 bg-slate-200">
        <div className="border bg-sky-900 shadow-xl p-3 rounded-lg">
          <div className="md:ml-4 ml-10 pt-4" data-aos="fade-right">
            <img
              className="w-40 border rounded-lg"
              src="https://i.ibb.co/KqqLs9V/design-logo.jpg"
              alt=""
            />
            <div className="w-4/5">
              <p className="font-bold text-xl text-white mb-3">Creative Design</p>
              <p className="text-sm text-white">
                Our design is very eye catchy and unique
              </p>
            </div>
          </div>
        </div>
        <div className="border bg-sky-900 shadow-xl p-3 rounded-lg">
          <div className="md:ml-4 ml-10 pt-4" data-aos="fade-right">
            <img
              className="w-40 border rounded-lg"
              src="https://i.ibb.co/rGxTyV7/cargo-ship-icon-meticulously-designed-cargo.jpg"
              alt=""
            />
            <div className="w-4/5">
              <p className="font-bold mb-3 text-xl text-white">Shipping</p>
              <p className="text-sm text-white">
                We provide shipping to worldwide so our product can reach to
                everyone
              </p>
            </div>
          </div>
        </div>
        <div className="border bg-sky-900 shadow-xl p-3 rounded-lg">
          <div className="md:ml-4 ml-10 pt-4" data-aos="fade-left">
            <img
              className="w-40 border rounded-lg"
              src="https://i.ibb.co/B62C5J1/premium.jpg"
              alt=""
            />
            <div className="w-4/5">
              <p className="font-bold text-xl text-white mb-3">Premium Products</p>
              <p className="text-sm text-white">Our product quality is very premium</p>
            </div>
          </div>
        </div>
        <div className="border bg-sky-900 shadow-xl p-3 rounded-lg">
          <div className="md:ml-4 ml-10 pt-4" data-aos="fade-left">
            <img
              className="w-40 border rounded-lg"
              src="https://i.ibb.co/q7JypRc/delivary.jpg"
              alt=""
            />
            <div className="w-4/5">
              <p className="font-bold text-xl text-white mb-5">Fast Delivery</p>
              <p className="text-sm text-white">We provide fast delivery within our range</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
