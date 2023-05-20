import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateToys = () => {
  const toys = useLoaderData();

  const { price, description, quantity, _id } = toys;

  const toasty = () => {
    toast('A new toy is updated')
}

  const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value
        const description = form.description.value;

        const updatedToys = {price, quantity, description}

          console.log(updatedToys);

    fetch(`http://localhost:5000/items/${_id}`,{
        method: 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedToys)

        })
        .then(res => res.json())
        .then(data => console.log(data))
}

  return (
    <form onSubmit={handleUpdate}>
      <div className="card-body border bg-stone-200 pt-20">
        <div className="grid grid-cols-1 w-1/2 mx-auto bg-slate-200 p-11 border border-black shadow-md gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              defaultValue={price}
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Quantity</span>
            </label>
            <input
              type="text"
              defaultValue={quantity}
              name="quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control w-1/2 mx-auto mt-6">
          <input
            onClick={toasty}
            className="btn bg-gray-700 btn-block"
            type="submit"
            value="Add Toy"
          />
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default UpdateToys;
