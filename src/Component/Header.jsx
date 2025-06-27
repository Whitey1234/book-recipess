import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ThemeToggle from "./Extra/ThemeToggle";

const Header = () => {
  const { user, logout } = use(AuthContext);
  const handleLogoutClick = () => logout();

  return (
    <div className="bg-blue-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link className="" to="/">Home</Link></li>
              <li><Link className="" to="/allrecipe">All Recipes</Link></li>
              <li><Link className="" to="/about">About Us</Link></li>
              <li><Link className="" to="/contact">Contact</Link></li>
              {user && (
                <>
                  <li><Link className="" to="/dashboard"> DashBoard</Link></li>
                 
                </>
              )}
              </ul>
            </div>
           <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
 <img  src="https://i.ibb.co/SD19W4K1/chef-1.png" alt="logo" className="w-10 h-9 " />

  Recipe Book
</Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link className="text-white" to="/">Home</Link></li>
              <li><Link className="text-white" to="/allrecipe">All Recipes</Link></li>
              <li><Link className="text-white" to="/about">About Us</Link></li>
              <li><Link className="text-white" to="/contact">Contact</Link></li>
              {user && (
                <>
                  <li><Link className="text-white" to="/dashboard"> DashBoard</Link></li>
                 
                </>
              )}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end space-x-4">
            <ThemeToggle />
            {user ? (
              <>
                <Link onClick={handleLogoutClick} to="/" className="btn btn-outline btn-sm text-white">Logout</Link>
                <div className="dropdown dropdown-start">
                  <div tabIndex={0} role="button" className="btn m-1">
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} alt="Profile" />
                      </div>
                    </div>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>{user.displayName}</li>
                    <li>{user.email}</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline btn-sm text-white">Login</Link>
                <Link to="/register" className="btn btn-outline btn-sm text-white">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
