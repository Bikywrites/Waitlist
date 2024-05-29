"use client";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      {/* NAVIGATION SECTION */}
      <nav className="relative flex items-center px-8 h-20 lg:px-20">
        <Image
          className="w-20 h-auto md:w-24 lg:w-40 "
          src="/BIKYWRITES LOGO 1.png"
          width={100}
          height={100}
          quality={100}
        />
        <div className="hidden lg:flex items-center justify-evenly w-full text-textblack text-base">
          <MenuButtton>Join our waitlist</MenuButtton>
          <MenuButtton>Become a facilitator</MenuButtton>
          <MenuButtton>Become a campus ambassador</MenuButtton>
          <MenuButtton>See our pitch deck</MenuButtton>
        </div>
      </nav>
      {/* HERO SECTION */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/Halfton png 1.png')" }}
      >
        <div className=" flex flex-col justify-center items-center gap-8 h-96">
          <h1 className="text-center text-6xl font-jakata font-extrabold leading-tight">
            Train, Build and Reign <br /> With Bikywrites University.
          </h1>
          <a className="bg-blue rounded text-white text-center py-4 font-bold text-sm cursor-pointer w-40 h-14 hover:bg-lighterBlue">
            Join The Waitlist
          </a>
        </div>
        <Image
          className="h-auto lg:w-full"
          src="/Frame 1000002352.png"
          width={100}
          height={100}
          quality={100}
        />
      </div>
      {/* COMING SOON SECTION */}
      <Image
        className="h-auto lg:w-full"
        src="/Logos group.png"
        width={100}
        height={100}
      />

      {/* ABOUT US SECTION */}
      <div className="flex flex-col w-full p-20 gap-9">
        <h3 className="uppercase text-blue text-base font-inter leading-5">
          About Bikywrites university
        </h3>
        <p className="text-2xl font-inter font-normal text-left text-textblack">
          Bikywrites University is a dynamic online tech-driven institution
          committed to teaching and raising young people living in Africa and
          beyond to provide solutions to real world problems through diverse
          technological systems, spanning software applications, hardware,
          blockchain, metaverse tech, AI, ML, IoT, 5G, Edge computing,
          cybersecurity, AR and VR, renewable energy, sustainability, quantum
          computing, automation and robotics and so on.
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="flex flex-col w-full p-20 gap-9">
        <h3 className="uppercase text-blue text-base text-center font-inter leading-5">
          Our Features
        </h3>
        <div className="grid grid-cols-3 gap-16">
          <FeaturesCard>
            <Image
              className="h-20 w-20"
              src="/Frame 1000002366.png"
              width={90}
              height={90}
            />
            <h5 className="text-2xl font-inter font-semibold text-blue">
              Train
            </h5>
            <p className="text-base text-textblack text-left font-ubuntu font-normal">
              At Bikywrites University, we cover a wide range of technologies,
              from software to hardware, blockchain to AI, IoT to metaverse
              tech, and more. Our curriculum spans today's most in-demand
              fields.
            </p>
          </FeaturesCard>
          <FeaturesCard className="border-yellowish">
            <Image
              className="h-20 w-20"
              src="/Frame 1000002366(1).png"
              width={90}
              height={90}
            />
            <h5 className="text-2xl font-inter font-semibold text-yellowish">
              Build
            </h5>
            <p className="text-base text-textblack text-left font-ubuntu font-normal">
              We prioritize emerging areas like 5G, edge computing,
              cybersecurity, AR/VR, renewable energy, sustainability, quantum
              computing, automation, and robotics. This ensures our students
              thrive in a constantly evolving digital world.
            </p>
          </FeaturesCard>
          <FeaturesCard>
            <Image
              className="h-20 w-20"
              src="/Frame 1000002366(2).png"
              width={90}
              height={90}
            />
            <h5 className="text-2xl font-inter font-semibold text-blue">
              Reign
            </h5>
            <p className="text-base text-textblack text-left font-ubuntu font-normal">
              With Bikywrites University, students aren't just learning –
              they're actively shaping the future. Join us and unlock your
              potential to make a meaningful impact on the world.
            </p>
          </FeaturesCard>
        </div>
      </div>

      {/* AMBASSADOR SECTION */}
      <div className="flex flex-col w-full p-20 gap-6">
        <h2 className="text-blue text-4xl text-center font-inter font-semibold">
          Become a Campus Ambassador
        </h2>
        <p className="text-xl text-textblack text-center font-ubuntu font-normal">
          Ready to become a leader on your campus and represent Bikywrites
          University in your community? Join our <br /> Campus Ambassador
          Program and play a key role in spreading the message of innovation,
          technology, and education across your campus.
        </p>
        <div className="flex flew-row px-2 mt-10 gap-10">
          <div className="flex flex-col gap-11 basis-1/2">
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
                Plan and host engaging events, workshops, and information
                sessions to raise awareness of Bikywrites University and its
                offerings.
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
                Develop leadership, communication, and networking skills that
                will benefit you both during your time at university and in your
                future career endeavors.
              </p>
            </div>
            <a className="bg-blue rounded text-white text-center py-4 font-bold text-sm cursor-pointer w-40 h-14 hover:bg-lighterBlue">
              APPLY NOW
            </a>
          </div>
          <Image
            className="w-1/2 h-fit"
            src="/Group 2318.png"
            width={90}
            height={90}
          />
        </div>
      </div>

      {/* FACILITATOR SECTION */}
      <div className="flex flex-col w-full p-20 gap-6">
        <h2 className="text-blue text-4xl text-center font-inter font-semibold">
          Become a Facilitator
        </h2>
        <div className="flex flex-col gap-3">
          <p className="text-xl text-textblack text-left font-ubuntu font-normal">
            Join the Future: Become a Facilitator at Bikywrites University!
          </p>
          <p className="text-base text-textblack text-left font-ubuntu font-normal">
            At Bikywrites University, we're on a mission to empower the next
            generation of innovators, <br /> creators, and leaders. Are you
            ready to inspire, educate, and shape the future?
          </p>
        </div>
        <div className="flex flew-row px-2 mt-10 gap-10">
          <div className="flex flex-col gap-11 basis-1/2">
            <h5 className="font-jakata font-semibold text-xl text-textheading">
              We're Looking for{" "}
              <span className="text-blue">Expert Facilitators</span> in:
            </h5>
            <div className="flex flex-row gap-10">
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
            <a className="bg-yellowish rounded text-textblack text-center py-4 font-bold text-sm cursor-pointer w-40 h-14 hover:bg-lighterBlue">
              APPLY NOW
            </a>
          </div>
          <Image
            className="w-1/2 h-fit"
            src="/Group 1.png"
            width={90}
            height={90}
          />
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="flex flex-col px-24 py-14 gap-6 bg-blue">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6">
            <a className="font-jakata font-meduim text-sm text-white cursor-pointer">
              Terms & Conditions
            </a>
            <a className="font-jakata font-meduim text-sm text-white cursor-pointer">
              Privacy Policy
            </a>
          </div>
          <Image
            className="w-20 h-auto md:w-24 lg:w-40 "
            src="/BIKYWRITES LOGO 2.png"
            width={100}
            height={100}
          />
          <div className="flex flex-row gap-6">
            <a className="flex flex-row items-center justify-center bg-yellowish text-textblack w-8 h-8 rounded-full">
              <i className="bx bxl-facebook"></i>
            </a>
            <a className="flex flex-row items-center justify-center bg-yellowish text-textblack w-8 h-8 rounded-full">
              <i className="bx bxl-twitter"></i>
            </a>
            <a className="flex flex-row items-center justify-center bg-yellowish text-textblack w-8 h-8 rounded-full">
              <i className="bx bxl-instagram"></i>
            </a>
            <a className="flex flex-row items-center justify-center bg-yellowish text-textblack w-8 h-8 rounded-full">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a className="flex flex-row items-center justify-center bg-yellowish text-textblack w-8 h-8 rounded-full">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
        </div>
        <hr className="h-0.5" />
        <small className="font-jakata font-light text-white text-center text-sm">
          Copywight Bikywrites 2024
        </small>
      </footer>
    </>
  );
}

const MenuButtton = styled.button.attrs({
  className: "hover:text-black font-jakata cursor-pointer",
})``;
const FeaturesCard = styled.button.attrs({
  className:
    "flex flex-col items-start gap-4 py-4 px-6 border border-blue rounded-xl",
})``;
