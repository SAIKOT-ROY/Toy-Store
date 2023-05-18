import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const SignUp = () => {

   const {newUser} = useContext(AuthContext)
   console.log(newUser);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(photo, name, email, password);
    newUser(email, password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
    })
    .catch(error => console.log(error))
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
