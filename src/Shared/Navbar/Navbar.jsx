import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_150x.webp";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handelLogOut = ()=>{
    logOut()
    .then(()=>{

    })
    .catch(error => console.error(error))
  }
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
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                All Toys
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <a>
              All Toys
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
          </li>
          { user && <Link to='/orders'>
            <li>
              <a>My Toys</a>
            </li>
          </Link>}
          { user && <Link to='/addToy'>
            <li>
              <a>Add a Toy</a>
            </li>
          </Link>}
          <Link to='/blog'>
            <li>
              <a>Blog</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
      {user?.email ? <>
          <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <button onClick={handelLogOut} className="btn btn-outline text-teal-600 hover:bg-teal-700">
            Log-Out
          </button>
      </>:
        <Link to="/login">
          <button className="btn btn-outline text-teal-600 hover:bg-teal-700">
            Login
          </button>
        </Link>}
      </div>
    </div>
  );
};

export default Navbar;
