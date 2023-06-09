import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../Hook/useTitle";

const options = [
  { value: 'Marvel', label: 'Marvel' },
  { value: 'Anime', label: 'Anime' },
  { value: 'DC', label: 'DC' },
];

const AddToys = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  useTitle('Ani Toy | Add Toys')

  const {user} = useContext(AuthContext)

  const toasty = () => {
      toast('A new toy is added')
  }


  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.img.value;
    const name = form.name.value;
    const email = form.email.value;
    const seller = form.seller.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
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

    fetch('https://assignment-xi-server.vercel.app/items',{
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
      <div className="border border-black shadow-md bg-slate-200 w-full w-4/5 mx-auto">
      <form onSubmit={handleAddToys}>
        <div className="card-body">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              onClick={toasty}
              className="btn bg-slate-500 btn-block"
              type="submit"
              value="Add Toy"
            />
          </div>
        </div>
      </form>
    </div>
    <ToastContainer />
    </div>
  );
};

export default AddToys;
