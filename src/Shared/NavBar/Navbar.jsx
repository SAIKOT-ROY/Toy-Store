import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
      <div className="navbar rounded-lg bg-base-100 border-sky-950 bg-zinc-50">
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
                <NavLink className={({ isActive,  }) =>isActive ? "text-blue-400" : "" } to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive,  }) =>isActive ? "text-blue-400" : "" } to="/alltoys">All Toys</NavLink>
              </li>
              <li>{user ? <NavLink className={({ isActive,  }) =>isActive ? "text-blue-400" : "" } to="/mytoys">My Toys</NavLink> : ""}</li>
              <li>{user ? <NavLink to="addtoys">Add a Toys</NavLink> : ""}</li>
              <li>
                <NavLink className={({ isActive,  }) =>isActive ? "text-blue-400" : "" } to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-28 rounded-full"
              src="https://i.ibb.co/z2wND4Z/goku.jpg"
              alt=""
            />
            <a className="btn btn-ghost normal-case text-2xl font-serif font-bold">Ani Toys</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex font-semibold font-serif">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className={({ isActive,  }) =>isActive ? "text-blue-400" : "" } to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive,  }) =>isActive ? "text-blue-400" : "" } to="/alltoys">All Toys</NavLink>
            </li>
            <li>{user ? <NavLink className={({ isActive,  }) =>isActive ? "text-blue-400" : "" } to="/mytoys">My Toys</NavLink> : ""}</li>
            <li>{user ? <NavLink className={({ isActive,  }) =>isActive ? "text-blue-400" : "" } to="addtoys">Add a Toys</NavLink> : ""}</li>
            <li>
              <NavLink className={({ isActive,  }) =>isActive ? "text-blue-400" : "" } to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative flex flex-col-reverse md:flex-row font-bold font-serif mr-4">
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
          <div className="absolute md:ml-44 mt-16 md:mb-32 font-bold text-sm bg-slate-200">
            <p>{tool == true ? <span className="p-2 rounded-lg text-slate-900 shadow border bg-slate-300">{user?.displayName}</span> : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
