import Image from "next/image";
import React from "react";

const Facilitator = () => {
  return (
    <div className="flex flex-col w-full gap-6 mt-[50px] p-5 md:p-20">
      <h2 className="text-blue text-2xl md:text-4xl text-center font-inter font-semibold">
        Become a Facilitator
      </h2>
      <p className="text-xl text-textblack text-left font-ubuntu font-normal">
        Join the Future: Become a Facilitator at Bikywrites University!
      </p>
      <p className="text-base text-textblack text-left font-ubuntu font-normal">
        At Bikywrites University, we're on a mission to empower the next
        generation of innovators, <br /> creators, and leaders. Are you ready to
        inspire, educate, and shape the future?
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="md:order-2">
          <img className="" src="/facilitator.svg" />
        </div>
        <div className="flex mt-8 flex-col gap-11 basis-1/2 md:order-1">
          <h5 className="font-jakata font-semibold text-xl text-textheading">
            We're Looking for{" "}
            <span className="text-blue">Expert Facilitators</span> in:
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                1. Software Development
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                2. Hardware Development
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                3. Blockchain Technology
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                4. Metaverse Technology
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                5. Artificial Intelligence and Machine Learning
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                6. IoT (Internet of Things)
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                7. 5G Connectivity
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                8. Edge Computing
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                9. Cybersecurity
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                10. Augmented and Virtual Reality
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                11. Renewable Energy and Sustainability
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                12. Quantum Computing
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                13. Automation and Robotics
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                14. Visual and Brand Identity Design
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                15. Marketing
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                16. Video Editing
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                17. Web 3 Technology
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                18. Animation
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                19. DeFi and Degen
              </p>
              <p className="text-base text-textblack text-left font-ubuntu font-normal">
                20. Financial Management and The Financial Market
              </p>
            </div>
          </div>
          <a
            href="/facilitator"
            className="bg-yellowish rounded text-textblack text-center py-4 font-bold text-sm cursor-pointer w-40 h-14 hover:bg-lighterBlue"
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Facilitator;
