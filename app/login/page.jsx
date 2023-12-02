import React from "react";
import login from "../login/login.svg";
import Image from "next/image";
import Link from "next/link";
function page() {
  return (
    <div className="bg-base-100">
      <div className="flex justify-center">
        <div className="md:border border-black md:flex items-center mt-10 shadow-sm hover:shadow-md rounded-md">
          {/* picture */}
          <div className="flex-[.5] items-center ">
            <Image width={400} height={400} src={login} alt="login" />
          </div>
          {/* login */}
          <div className="flex-[.5] ">
            <div className=" hero-content flex-col lg:flex-row-reverse ">
              <div className="card flex-shrink-0 w-full lg:w-[40rem] max-w-sm ">
                <form className="card-body ">
                  <div className="form-control">
                    <div className="flex justify-center">
                      <h1 className="text-4xl font-bold text-[#00B09E] mb-10">
                        Log In
                      </h1>
                    </div>

                    <input
                      type="email"
                      placeholder="Username"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control items-center mt-2">
                    <Link href="/">
                      <button className="btn btn-primary w-40">Login</button>
                    </Link>
                  </div>
                  <div className="form-control flex justify-center items-center ">
                    <Link href="/register">
                      <button className="btn btn-accent text-white w-40">
                        Register
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

{
  /*   LOGIN FORM */
}
{
  /*<div className="flex-[.5] hero-content flex-col lg:flex-row-reverse ">
          <div className="card flex-shrink-0 w-full lg:w-[40rem] max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div> */
}
