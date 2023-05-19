import React, { useEffect, useState } from "react";
import ToyMar from "./SubTab/ToyMar";

const MarvelToys = () => {
  const [marvelToys, setMarvelToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/marvel")
      .then((res) => res.json())
      .then((data) => setMarvelToys(data));
  }, []);

  return (
    <div className="grid grid-cols-3">
      {marvelToys.slice(0, 3).map((marToys) => (
        <ToyMar key={marToys._id} marToys={marToys}></ToyMar>
      ))}
    </div>
  );
};

export default MarvelToys;
