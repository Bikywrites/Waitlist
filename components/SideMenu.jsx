import Link from "next/link";
import React from "react";

const SideMenu = () => {
  return (
    <div className="bg-[#08274680] w-full fixed top-[80px] h-full flex justify-end p-[14px]">
      <div className="bg-white h-[250px] w-[80%] sm:w-[60%] md:w-[50%] rounded-[6px] p-[16px] flex flex-col justify-center gap-[25px]">
        <Link
          href={"/waitlist"}
          className="text-[14px] text-[#00274D] font-jakata leading-[20px]"
        >
          Join our waitlist
        </Link>
        <Link
          href={"/facilitator"}
          className="text-[14px] text-[#00274D] font-jakata leading-[20px]"
        >
          Become a facilitator
        </Link>
        <Link
          href={"/ambassador"}
          className="text-[14px] text-[#00274D] font-jakata leading-[20px]"
        >
          Become a campus ambassador
        </Link>
        <Link
          href={"/"}
          className="text-[14px] text-[#00274D] font-jakata leading-[20px]"
        >
          See our pitch deck
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
