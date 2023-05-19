import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
 
  const {logIn} = useContext(AuthContext)
  
  const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        logIn(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser)
        })
        .catch(error => console.log(error))

  }


  return (
    <div className="hero min-h-screen bg-slate-800 mb-10">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-zinc-300">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="font-bold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-bold">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <div className="text-xs mt-3">
                <p className="font-bold">
                  Are you new here ? then
                  <Link
                    className="ml-1 text-blue-500 underline font-semibold"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#0B2447] mb-4">Login</button>
              <div className="flex btn bg-[#0B2447]">
                <FcGoogle className="text-white"></FcGoogle>
                <p>Google</p>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
