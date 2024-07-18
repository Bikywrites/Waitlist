"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import Features from "../components/Features";
import Ambassador from "../components/Ambassador";
import Facilitator from "../components/Facilitator";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT US SECTION */}
      <Aboutus />

      {/* FEATURES SECTION */}
      <Features />

      {/* AMBASSADOR SECTION */}
      <Ambassador />

      {/* FACILITATOR SECTION */}
      <Facilitator />
    </>
  );
}
