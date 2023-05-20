import React from "react";

const MyModal = ({ myToy, handleUpdate }) => {
  const { price, quantity, _id, description } = myToy;

  return (
    <div>
      {/* The button to open modal */}
      <div className="border w-20 text-center rounded bg-gray-600 text-white p-1">
        <label htmlFor="my-modal-6">Update</label>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              className="input input-bordered"
            />
          </div>
          <div onClick={() => handleUpdate(_id)} className="form-control mt-6">
            <input
              className="btn btn-active btn-block"
              type="submit"
              value="Update"
            />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
