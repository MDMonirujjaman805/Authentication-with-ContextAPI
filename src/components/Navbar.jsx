import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">
        <li className="m-2">Home</li>
      </NavLink>
      <NavLink to="/login">
        <li className="m-2">Login</li>
      </NavLink>
      <NavLink to="/register">
        <li className="m-2">Register</li>
      </NavLink>
    </>
  );

  // const authInfo = useContext(AuthContext);
  // console.log(authInfo);

  const { name } = useContext(AuthContext);
  console.log(name);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Auth
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">{name}</a>
      </div>
    </div>
  );
};

export default Navbar;
