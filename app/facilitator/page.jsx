"use client";
import { createFacilitator } from "@/actions/formActions";
import Input from "../../components/Input";

import Image from "next/image";
import Select from "../../components/Select";
import { useState } from "react";
import Link from "next/link";

const facilitator = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const imgUrls = ["/IMG 1.png", "/IMG 2.png", "/IMG 3.png", "/IMG 5.png"];

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const rawFormData = Object.fromEntries(formData);
    console.log(rawFormData);
    const response = await createFacilitator(rawFormData);
    console.log(response);
    // e.target.reset();
    setIsSubmitting(false);
  }
  return (
    <section className="">
      <div
        className="bg-cover bg-center h-fit"
        style={{ backgroundImage: "url('/Halfton png 1.png')" }}
      >
        <div className="px-8 lg:px-20 flex flex-col gap-4">
          <Link href="/" className="self-end mt-8">
            <img src="/master.png" alt="" />
          </Link>
          <h1 className="lg:text-4xl text-2xl text-center font-jakata font-bold leading-tight text-blue">
            Become a Facilitator
          </h1>

          <Image
            className="w-1/2 h-fit self-center mt-4"
            src="/facilitator.svg"
            width={90}
            height={90}
          />
        </div>
      </div>
      <form
        className="font-jakata flex flex-col lg:px-20 px-8 my-2 gap-4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          label="full name"
          type="text"
          placeholder="Olasehinde Olalekan"
          name="fullname"
        />
        <Input
          label="email"
          type="email"
          placeholder="123@gmail.com"
          name="email"
        />
        <Input
          label="phone number"
          type="tel"
          placeholder="02012345678"
          name="phone"
        />
        <Input
          label="current job title"
          type="text"
          placeholder="mobile developer"
          name="currentjobtitle"
        />
        <Input
          label="company name"
          type="text"
          name="company"
          placeholder={"Konga NG"}
        />
        <Input
          label="linkedIn profile"
          type="url"
          name="linkedin"
          placeholder={"www.linkedIn.com/demoprofile"}
        />
        <Input
          label="resume link"
          type="url"
          name="resume"
          placeholder="provide a link to your resume, google drive, dropbox..."
        />
        <Select
          label="what skill would you like to teach?"
          options={["front end development", "backend development", "design"]}
          name="skilltoteach"
        />
        <Input
          label="years of experience"
          type="number"
          name="yearsofexperience"
        />
        <Input
          label="educational background"
          type="text"
          name="educationalbackground"
        />
        <Input
          label="teaching experience"
          type="number"
          name="teachingexperience"
        />
        <Select
          label="how did you hear about us"
          options={["social media", "a friend", "newspaper"]}
          name="howyouheardaboutus"
        />
        <Input label="sample work or portfolio" type="url" name="portfolio" />
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="capitalize">
            Why do you want to become a facilitator...
          </label>
          <textarea
            name="why_you_want_to_become_a_facilitator"
            id=""
            cols="30"
            rows="10"
            required
            className="border border-slate-400 rounded p-2 "
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="capitalize">
            Additional Information
          </label>
          <textarea
            name="additionalnotes"
            placeholder="any additional thing you would like us to know"
            id=""
            cols="30"
            rows="10"
            className="border border-slate-400 rounded p-2 "
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-6 bg-blue hover:bg-lighterBlue self-end w-fit text-white rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default facilitator;
