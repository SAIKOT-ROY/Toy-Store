import React from "react";
import { Link } from "react-router-dom";


const MyToy = ({ myToy, handleDelete }) => {

  const {seller, name, category, price, quantity, _id} = myToy

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{seller}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-medium">{name}</div>
      </td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <div className="border w-20 text-center rounded bg-gray-600 text-white font-extrabold p-1">
        <Link to={`/mytoys/${_id}`}>Update</Link>
        </div>
        <div className="border w-20 text-center rounded bg-gray-600 text-white font-extrabold p-1">
          <button onClick={() => handleDelete(_id)} className="">
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
};

export default MyToy;
