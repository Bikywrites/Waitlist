import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/Halfton png 1.png')" }}
    >
      <div className="flex flex-col">
        <div className="px-5 flex flex-col justify-center py-[30px] md:py-[80px] items-center gap-8 ">
          <h1 className="text-center text-[20px] sm:text-[25px] md:text-[50px] lg:text-[60px]  font-jakata font-extrabold leading-[24px] sm:leading-[40px] md:leading-[72px]">
            Train, Build and Reign With Bikywrites University.
          </h1>
          <Link
            href="/waitlist"
            className="bg-blue px-4 rounded text-white text-center py-4 font-bold text-xs md:text-sm cursor-pointer hover:bg-lighterBlue"
          >
            Join The Waitlist
          </Link>
        </div>
        <div className="w-full flex items-center">
          <img className="bg-[white] w-full" src="/users-2.png" />
        </div>
        <div className="w-full flex items-center">
          <img className="" src="/Logos.svg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
