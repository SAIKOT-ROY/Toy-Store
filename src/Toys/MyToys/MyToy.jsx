import React from "react";

const MyToy = ({ myToy }) => {
  return (
    <tr className="ml-4">
      <td>{myToy?.name}</td>
      <td>{myToy?.price}</td>
      <td>{myToy?.description}</td>
      <td>{myToy?.description}</td>
      <td>
        <div className="flex flex-col-reverse gap-2">
          <button className="border bg-slate-300 rounded-lg py-2 w-20 font-semibold">Update</button>
          <button className="border bg-slate-300 rounded-lg py-2 w-20 font-semibold">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default MyToy;
