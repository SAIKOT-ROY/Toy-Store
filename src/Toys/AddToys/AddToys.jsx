import React from "react";

const AddToys = () => {
  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.img.value;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toys = {
        img,
        name,
        category,
        price,
        rating,
        quantity,
        description
    }

    console.log(toys);

    fetch('http://localhost:5000/toys',{
        method: 'POST',
        headers:{
                'content-type': 'application/json'
        },
        body: JSON.stringify(toys)
    })
    .then(res => res.json())
    .then(data => console.log(data))



  };

  return (
    <div>
      <form onSubmit={handleAddToys}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL</span>
              </label>
              <input
                type="text"
                defaultValue={" "}
                name="img"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                defaultValue={" "}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="seller"
                defaultValue={" "}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={" "}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={" "}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={" "}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={" "}
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
                defaultValue={" "}
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
                defaultValue={" "}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Add Toy"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
