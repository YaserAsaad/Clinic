import React from "react";
import login from "../login/login.svg";
import Image from "next/image";
import Link from "next/link";
function page() {
  return (
    <div className="bg-base-800">
      <div className="flex justify-center">
        <div className="md:border border-black md:flex items-center mt-8 shadow-sm hover:shadow-md rounded-md">
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
                        Register
                      </h1>
                    </div>

                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
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
                  </div>
                  {/* RADIO */}
                  <div className="flex items-center justify-center mt-2">
                    <div className="mr-6">
                      <h2 className="text-lg md:text-xl">Gender:</h2>
                    </div>

                    <input
                      type="radio"
                      id="male"
                      name="radio-4"
                      className="radio mr-2 radio-accent"
                    />
                    <label id="male" className="md:text-lg mr-6" htmlFor="male">
                      Male
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="radio-4"
                      className="radio mr-2 radio-accent"
                    />
                    <label id="female" className="md:text-lg " htmlFor="female">
                      Female
                    </label>
                  </div>
                  {/* BUTTONS */}

                  <div className="form-control flex justify-center items-center mt-4">
                    <Link href="/">
                      <button className="btn btn-accent text-white w-40">
                        Sign Up
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
