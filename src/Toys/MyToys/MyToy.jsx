import React from "react";
import MyModal from "./MyModal";

const MyToy = ({ myToy, handleDelete, handleUpdate }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{myToy?.seller}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-medium">{myToy?.name}</div>
      </td>
      <td>{myToy?.category}</td>
      <td>{myToy?.price}</td>
      <td>{myToy?.quantity}</td>
      <th>
        <div>
          <MyModal
          myToy={myToy}
          handleUpdate={handleUpdate}
          ></MyModal>
        </div>
        <div className="border w-20 text-center rounded bg-gray-600 text-white font-extrabold p-1">
          <button onClick={() => handleDelete(myToy._id)} className="">
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
};

export default MyToy;
