import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../Hook/useTitle";


const SignUp = () => {
   const {erros, setErrors} = useState('')

   const {newUser} = useContext(AuthContext)

   useTitle('Ani Toys | Sign Up')



  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

   
    newUser(email, password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
    })
    .catch(error =>{
      const errorMessage = error.message
      console.log(errorMessage)
      setErrors(errorMessage)
    }
      )
  };

  return (
    <div className="hero min-h-screen bg-slate-800 mb-10">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-zinc-300">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  name="photo"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <div className="text-xs mt-3">
                  <p className="font-bold">
                    Already have an account ? then
                    <Link
                      className="ml-1 text-blue-500 underline font-semibold"
                      to="/login"
                    >
                      Log In
                    </Link>
                  </p>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#0B2447] mb-4">Login</button>
              </div>
            </form>
            <p>{erros}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
