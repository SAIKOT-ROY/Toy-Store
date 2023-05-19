import React, { useEffect, useState } from "react";
import ToyDc from "./SubTab/ToyDc";

const DcToys = () => {
  const [dcToys, setDcToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/dc")
      .then((res) => res.json())
      .then((data) => setDcToys(data));
  }, []);

  return (
    <div className="grid grid-cols-3">
      {dcToys.slice(0, 3).map((dc) => (
        <ToyDc key={dc._id} dc={dc}></ToyDc>
      ))}
    </div>
  );
};

export default DcToys;
