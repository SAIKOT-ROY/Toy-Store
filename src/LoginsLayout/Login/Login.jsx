import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../Hook/useTitle";


const Login = () => {
 
  const {logIn, googleLogin} = useContext(AuthContext)
  const [error, setError] = useState(" ")
  const [success, setSuccess] = useState(" ")
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useTitle('Ani toys | Login')

  
  const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        setError(" ")
        logIn(email, password)
        .then(result => {
          const loggedUser = result.user;
          setSuccess("Login successful")
          console.log(loggedUser)
          navigate(from, {replace: true})
        })
        .catch(error => {
          console.log(error.message)
          setError('Wrong id and password')        
        })

  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
        const user = result.user
        navigate(location.state?.from?.pathname)
        console.log(user)
    })
    .catch(error => console.log(error.message))
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
              <div onClick={handleGoogleLogin} className="flex btn bg-[#0B2447]">
                <FcGoogle className="text-white"></FcGoogle>
                <p>Google</p>
              </div>
            </div>
            </form>
            <p className="text-red-600">{error}</p>
            <p className="text-green-600">{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
