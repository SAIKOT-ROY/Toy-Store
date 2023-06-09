import React, { useEffect, useState } from "react";
import ToyDc from "./SubTab/ToyDc";

const DcToys = () => {
  const [dcToys, setDcToys] = useState([]);

  useEffect(() => {
    fetch("https://assignment-xi-server.vercel.app/dc")
      .then((res) => res.json())
      .then((data) => setDcToys(data));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-5 justify-center">
      {dcToys.slice(0, 3).map((dc) => (
        <ToyDc key={dc._id} dc={dc}></ToyDc>
      ))}
    </div>
  );
};

export default DcToys;
