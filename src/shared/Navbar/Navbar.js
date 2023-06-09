import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div className="navbar bg-base-100">
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
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold text-red-500">TechVerse</a> <br />
        {/* <small>Create Your Future With Tech</small> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/courses"}>Courses</Link>
          </li>
          <li>
            <Link to={"/faq"}>FAQ</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
      {user?.uid ? (
        <>
          <div className="navbar-end">
            <Link onClick={handleSignOut} className="btn btn-outline mr-5">
              Logout
            </Link>
          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img title={user.displayName} src={user.photoURL} />
            </div>
          </label>
        </>
      ) : (
        <div className="navbar-end">
          <Link to={"/login"} className="btn btn-outline">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
