import React from "react";
import Image from "next/image";
import img from "/public/img.svg";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-base-200">
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row items-center mt-6">
          <Image
            src={img}
            width={700}
            height={700}
            alt="pic"
            className="max-w-s "
          />
          <div className="flex flex-col justify-center lg:justify-normal">
            <h1 className="text-2xl md:text-[3rem] leading-none font-bold text-[#00B09E]">
              Clinic <br /> Management
            </h1>
            <h3 className="mt-10 font-semibold text-lg md:text-2xl text-[#344B47]">
              About
            </h3>
            <p className="pb-6 max-w-xs md:max-w-sm text-[#344B47] font-light">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="/login">
              <button className="btn btn-accent hover:text-white btn-outline mb-10 lg:mb-0">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
