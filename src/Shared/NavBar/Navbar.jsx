import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const [tool, setTool] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toolOne = () => {
    setTool(true);
  };
  const toolTwo = () => {
    setTool(false);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="mb-10 mt-5">
      <div className="navbar rounded-lg bg-base-100 border">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/alltoys">All Toys</Link>
              </li>
              <li>{user ? <Link to="/mytoys">My Toys</Link> : ""}</li>
              <li>{user ? <Link to="addtoys">Add a Toys</Link> : ""}</li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-28 rounded-full"
              src="https://i.ibb.co/z2wND4Z/goku.jpg"
              alt=""
            />
            <a className="btn btn-ghost normal-case text-xl">AniToys</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoys">All Toys</Link>
            </li>
            <li>{user ? <Link to="/mytoys">My Toys</Link> : ""}</li>
            <li>{user ? <Link to="addtoys">Add a Toys</Link> : ""}</li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative flex">
            {user ? (
              <>
                <button onClick={handleLogOut}>Log Out</button>
                <img
                  onMouseOver={toolOne}
                  onMouseOut={toolTwo}
                  className="rounded-full w-10 ml-3"
                  src={user.photoURL}
                  alt=""
                />
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
          <div className="absolute ml-44 mb-12 font-bold text-sm">
            <p>{tool == true ? <span>{user?.displayName}</span> : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
