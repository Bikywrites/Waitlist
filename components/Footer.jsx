import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col p-5 gap-6 bg-blue">
      <div className="flex flex-col md:flex-row justify-between gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-row gap-6">
            <a className="font-jakata font-meduim text-sm text-white cursor-pointer">
              Terms & Conditions
            </a>
            <a className="font-jakata font-meduim text-sm text-white cursor-pointer">
              Privacy Policy
            </a>
          </div>
          <img
            src="/BIKYWRITES LOGO 2.png"
            className="w-[40%] sm:w-[20%] md:w-[60%] h-auto"
          />
        </div>

        <div className="flex flex-row gap-6">
          <a className="flex flex-row items-center justify-center bg-yellowish text-textblack w-8 h-8 rounded-full">
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            target="_blank"
            href="https://x.com/bikywrites?s=21&t=cZqwqr2OeNKzdWOc1dD4IQ"
            className="flex flex-row items-center justify-center bg-yellowish text-textblack w-8 h-8 rounded-full"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/bikywrites_university?igsh=MXFuNDMyYzVvNTVuMA%3D%3D&utm_source=qr"
            className="flex flex-row items-center justify-center bg-yellowish text-textblack w-8 h-8 rounded-full"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/showcase/bikywrites-university/"
            className="flex flex-row items-center justify-center bg-yellowish text-textblack w-8 h-8 rounded-full"
          >
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
  );
};

export default Footer;
