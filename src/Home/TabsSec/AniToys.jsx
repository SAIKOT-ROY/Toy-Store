
import React, { useEffect, useState } from "react";
import ToyAni from "./SubTab/ToyAni";

const AniToys = () => {
  const [aniToys, setAniToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/anime")
      .then((res) => res.json())
      .then((data) => setAniToys(data));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-5 justify-center">
       {
        aniToys.slice(0, 3).map(aToys => <ToyAni key={aToys._id} aToys={aToys}></ToyAni>)
       }
    </div>
  );
};

export default AniToys;
