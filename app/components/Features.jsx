import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col w-full gap-9 p-5 md:p-20">
      <h3 className="uppercase text-blue font-[500] text-base text-center font-inter leading-[21px]">
        Our Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex flex-col border-[0.75px] rounded-[15px] border-[#006FDA] p-[20px] gap-[9px]">
          <img className="h-20 w-20" src="/Frame 1000002366.png" />
          <h5 className="text-2xl font-inter font-semibold text-blue">Train</h5>
          <p className="text-base text-textblack text-left font-ubuntu font-[500]">
            At Bikywrites University, we cover a wide range of technologies,
            from software to hardware, blockchain to AI, IoT to metaverse tech,
            and more. Our curriculum spans today's most in-demand fields.
          </p>
        </div>
        <div className="flex flex-col border-[0.75px] rounded-[15px] border-yellowish p-[20px] gap-[9px]">
          <img className="h-20 w-20" src="/Frame 1000002366(1).png" />
          <h5 className="text-2xl font-inter font-semibold text-yellowish">
            Build
          </h5>
          <p className="text-base text-textblack text-left font-ubuntu font-normal">
            We prioritize emerging areas like 5G, edge computing, cybersecurity,
            AR/VR, renewable energy, sustainability, quantum computing,
            automation, and robotics. This ensures our students thrive in a
            constantly evolving digital world.
          </p>
        </div>
        <div className="flex flex-col border-[0.75px] rounded-[15px] border-blue p-[20px] gap-[9px]">
          <img className="h-20 w-20" src="/Frame 1000002366(2).png" />
          <h5 className="text-2xl font-inter font-semibold text-blue">Reign</h5>
          <p className="text-base text-textblack text-left font-ubuntu font-normal">
            With Bikywrites University, students aren't just learning – they're
            actively shaping the future. Join us and unlock your potential to
            make a meaningful impact on the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
