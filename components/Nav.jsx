"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();
  // Define your navigation links
  const links = [
    { href: "/waitlist", label: "Join our waitlist" },
    { href: "/facilitator", label: "Become a facilitator" },
    { href: "/ambassador", label: "Become a campus ambassador" },
    { href: "/", label: "See our pitch deck" },
  ];
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const handleResize = () => {
    if (window.innerWidth >= 976) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav className=" sticky top-0 bg-[#E5F2FF] backdrop-blur flex items-center justify-between px-8 h-20  gap-4">
        <Image
          className="w-20 h-auto md:w-24 lg:w-40 "
          src="/BIKYWRITES LOGO 1.png"
          alt="logo"
          width={100}
          height={100}
          quality={100}
        />
        <div className="hidden lg:flex items-center justify-evenly w-full text-textblack text-base">
          {links.map(({ href, label }) => {
            return (
              <MenuButton key={label}>
                <Link
                  href={href}
                  className={`link ${pathname === href ? "text-blue" : ""}`}
                >
                  {label}
                </Link>
              </MenuButton>
            );
          })}
        </div>

        {!sidebarOpen && (
          <IoMdMenu
            onClick={openSidebar}
            className="flex lg:hidden text-[24px] text-blue"
          />
        )}
        {sidebarOpen && (
          <IoMdClose className="text-[24px] text-blue" onClick={closeSidebar} />
        )}
      </nav>
      {sidebarOpen && <SideMenu />}
    </>
  );
}
const MenuButton = styled.button.attrs({
  className: "hover:text-black font-jakata cursor-pointer",
})``;
