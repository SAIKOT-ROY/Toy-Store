import React, { useEffect, useState } from "react";
import ToyMar from "./SubTab/ToyMar";

const MarvelToys = () => {
  const [marvelToys, setMarvelToys] = useState([]);

  useEffect(() => {
    fetch("https://assignment-xi-server.vercel.app/marvel")
      .then((res) => res.json())
      .then((data) => setMarvelToys(data));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-5 justify-center">
      {marvelToys.slice(0, 3).map((marToys) => (
        <ToyMar key={marToys._id} marToys={marToys}></ToyMar>
      ))}
    </div>
  );
};

export default MarvelToys;
