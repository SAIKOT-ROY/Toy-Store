import React from "react";

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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default SingleToys;
