import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
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
  )
}

export default Footer