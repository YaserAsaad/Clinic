import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Patients</a>
            </li>
            <li>
              <a>Appointments</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Clinic<p className="text-green-100">+</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/patients">Patients</Link>
          </li>
          <li>
            <Link href="/appointments">Appointments</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/login"
          className="btn bg-green-200 hover:text-green-200 text-white"
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
