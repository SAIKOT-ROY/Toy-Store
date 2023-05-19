import React, { useEffect, useState } from "react";
import MyToy from "./MyToy";

const MyToys = () => {
    const [myToys, setMyToys] = useState([])
  
    useEffect(() => {
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[])


  return (
    <div className="overflow-x-auto">
  <table className="table-normal table-zebra border w-full">
    <thead>
      <tr>  
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        myToys.map(myToy => <MyToy
        key={myToy._id}
        myToy={myToy}
        ></MyToy>)
      }
    </tbody>
  </table>
</div>
  );
};

export default MyToys;
