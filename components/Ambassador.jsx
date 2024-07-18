import Image from "next/image";
import React from "react";

const Ambassador = () => {
  return (
    <div className="flex flex-col w-full gap-6 p-5">
      <h2 className="text-blue text-2xl md:text-4xl text-center font-inter font-semibold">
        Become a Campus Ambassador
      </h2>
      <p className="text-xl text-textblack text-center font-ubuntu font-normal">
        Ready to become a leader on your campus and represent Bikywrites
        University in your community? Join our <br /> Campus Ambassador Program
        and play a key role in spreading the message of innovation, technology,
        and education across your campus.
      </p>
      <div className="flex justify-around gap-2 sm:gap-6 overflow-y-scroll lg:hidden">
        <img
          src="/IMG1A.png"
          className="rounded-[7px] w-[80px] sm:min-w-[100px] md:min-w-[150px] bg-[#006FDA]"
        />
        <img
          src="/IMG1C.png"
          className="rounded-[7px] w-[80px] sm:min-w-[100px] md:min-w-[150px] bg-yellowish"
        />
        <img
          src="/IMG1B.png"
          className="rounded-[7px] w-[80px] sm:min-w-[100px] md:min-w-[150px] bg-[#006FDA]"
        />
        <img
          src="/IMG1D.png"
          className="rounded-[7px] w-[80px] sm:min-w-[100px] md:min-w-[150px] bg-yellowish"
        />
      </div>
      <div className="flex flew-row px-2 mt-10 gap-10">
        <div className="flex flex-col gap-11">
          {/* LISTED FEATURES */}
          <div className="flex flex-col gap-2">
            <h5 className="text-xl text-textheading font-jakata font-semibold">
              1. Promote Bikywrites University:
            </h5>
            <p className="text-textblack text-base font-ubuntu font-normal">
              Share your passion for technology-driven education and encourage
              others to explore the programs and opportunities available at
              Bikywrites University.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="text-xl text-textheading font-jakata font-semibold">
              2. Organize Campus Events:
            </h5>
            <p className="text-textblack text-base font-ubuntu font-normal">
              Plan and host engaging events, workshops, and information sessions
              to raise awareness of Bikywrites University and its offerings.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="text-xl text-textheading font-jakata font-semibold">
              3. Foster Community Engagement:
            </h5>
            <p className="text-textblack text-base font-ubuntu font-normal">
              Build connections with students and faculty members, fostering a
              sense of community and collaboration around the principles of
              innovation and education.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="text-xl text-textheading font-jakata font-semibold">
              4. Gain Valuable Experience:
            </h5>
            <p className="text-textblack text-base font-ubuntu font-normal">
              Develop leadership, communication, and networking skills that will
              benefit you both during your time at university and in your future
              career endeavors.
            </p>
          </div>
          <a
            href="/ambassador"
            className="bg-blue rounded text-white text-center py-4 font-bold text-sm cursor-pointer w-40 h-14 hover:bg-lighterBlue"
          >
            APPLY NOW
          </a>
        </div>
        <div className="hidden lg:flex  gap-4">
          <div className="flex flex-col gap-3">
            <img
              src="/IMG1A.png"
              className="rounded-[7px] w-full min-w-[230px] h-[55%] bg-[#006FDA]"
            />
            <img
              src="/IMG1B.png"
              className="rounded-[7px] h-[45%] min-w-[230px] w-full bg-[#006FDA]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <img
              src="/IMG1C.png"
              className="rounded-[7px] h-[40%] min-w-[230px] w-full bg-yellowish"
            />
            <img
              src="/IMG1D.png"
              className="rounded-[7px] h-[60%] min-w-[230px] w-full bg-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
