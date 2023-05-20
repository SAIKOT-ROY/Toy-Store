import React from "react";
import { Link } from "react-router-dom";

const SingleToys = ({ toys }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
       
          <div>
            <div className="font-bold">{toys?.seller}</div>
          </div>
        </div>
      </td>
      <td>
         <div className="font-medium">{toys.name}</div>
      </td>
      <td>{toys.category}</td>
      <td>{toys.price}</td>
      <td>{toys.quantity}</td>
      <th>
        <Link
         className="btn btn-ghost text-sky-700 font-bold btn-xs"
         to={`/onetoy/${toys._id}`}>View Details</Link>
      </th>
    </tr>
  );
};

export default SingleToys;
