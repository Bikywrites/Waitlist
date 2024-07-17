import React from "react";

const Aboutus = () => {
  return (
    <div className="flex flex-col w-full gap-9 p-5 md:p-20">
      <h3 className="uppercase text-blue text-center font-[500] text-[14px] tracking-[1px] font-inter leading-5">
        About Bikywrites university
      </h3>
      <p className="text-2xl text-center font-inter font-normal text-textblack">
        Bikywrites University is a dynamic online tech-driven institution
        committed to teaching and raising young people living in Africa and
        beyond to provide solutions to real world problems through diverse
        technological systems, spanning software applications, hardware,
        blockchain, metaverse tech, AI, ML, IoT, 5G, Edge computing,
        cybersecurity, AR and VR, renewable energy, sustainability, quantum
        computing, automation and robotics and so on.
      </p>
    </div>
  );
};

export default Aboutus;
