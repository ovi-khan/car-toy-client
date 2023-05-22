import React, { useContext } from "react";
import logo from "../../../assets/logo1.png"
import userImg from '../../../assets/user.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navItems = (
    <>
      <li className="hover:text-red-500">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-red-500">
        <Link to="/addatoy">Add A Toy</Link>
      </li>
      <li className="hover:text-red-500">
        <Link to='/mytoys'>My Toys</Link>
      </li>
      <li className="hover:text-red-500">
        <Link to="/blog">Blogs</Link>
      </li>
      {/* <li>
        <Link to="/login">Login</Link>
      </li> */}
      <li className="hover:text-red-500">
        {user?.email}
      </li>
      <li className="hover:text-red-500">
        <Link to="/signup">Sign Up</Link>
      </li>
      {/* <li> */}
        {user?.email ? (
          <li className="hover:text-red-500">
            <button
            onClick={handleLogOut}
            className="bg-slate-500 px-3 py-1 rounded-lg"
          >
            Log Out
          </button>
          </li>
        ) : (
          <li>
            <Link className="ms-5" to="/login">
            Log in
          </Link>
          </li>
        )}
      {/* </li> */}
    </>
  );

  return (
    <div className="navbar bg-base-100 bg-green-600 text-black">
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
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost normal-case text-3xl">
            <img className="w-14 h-14 rounded-lg object-cover bg-white" src={logo} alt="" />
            </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <img className="h-10 rounded-full" src={userImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
