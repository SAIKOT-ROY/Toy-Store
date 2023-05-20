import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Select from 'react-select';

const options = [
  { value: 'Marvel', label: 'Marvel' },
  { value: 'Anime', label: 'Anime' },
  { value: 'DC', label: 'DC' },
];

const AddToys = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const {user} = useContext(AuthContext)

  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.img.value;
    const name = form.name.value;
    const email = form.email.value;
    const seller = form.seller.value;
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
        email,
        seller,
        quantity,
        description,
    }

    console.log(toys);

    fetch('http://localhost:5000/items',{
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
      <h3 className="font-bold text-4xl text-center mb-4 font-serif">Add a Toy here</h3>
      <div className="border border-black shadow-md bg-slate-200">
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
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  isMulti
                  name="category"
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
                <span className="label-text">Rating</span>
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
              className="btn bg-slate-500 btn-block"
              type="submit"
              value="Add Toy"
            />
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddToys;
