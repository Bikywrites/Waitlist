"use client";
import { createAmbassador } from "@/actions/formActions";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const campusAmbassador = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const imgUrls = ["/IMG 1.png", "/IMG 2.png", "/IMG 3.png", "/IMG 5.png"];
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const rawFormData = Object.fromEntries(formData);
    console.log(rawFormData);
    const response = await createAmbassador(rawFormData);
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
            Become a Campus Ambassador
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center mt-5">
            <img
              src="/IMG1A.png"
              className="rounded-[7px] h-[200px] min-w-[150px] max-w-[150px] sm:min-w-[200px] sm:max-w-[200px] object-contain bg-[#006FDA]"
            />
            <img
              src="/IMG1C.png"
              className="rounded-[7px] h-[200px] min-w-[150px] max-w-[150px] sm:min-w-[200px] sm:max-w-[200px] object-cover bg-yellowish"
            />
            <img
              src="/IMG1B.png"
              className="rounded-[7px] h-[200px] min-w-[150px] max-w-[150px] sm:min-w-[200px] sm:max-w-[200px] object-contain  bg-[#006FDA]"
            />
            <img
              src="/IMG1D.png"
              className="rounded-[7px] h-[200px] min-w-[150px] max-w-[150px] sm:min-w-[200px] sm:max-w-[200px] object-contain bg-yellowish"
            />
          </div>
        </div>
      </div>
      <form
        className="font-jakata flex flex-col lg:px-20 px-8 my-2 gap-2 mt-5"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          label="full name"
          type="text"
          placeholder="enter your name"
          name="fullname"
        />
        <Input
          label="email"
          type="email"
          placeholder="enter your email"
          name="email"
        />
        <Input
          label="phone number"
          type="tel"
          placeholder="enter your phone number"
          name="phone"
        />
        <Input
          label="university or college attended"
          type="text"
          placeholder="University of Lagos"
          name="university"
        />
        <Input label="course year of study" type="month" name="yearofstudy" />
        <Input label="field of study" type="text" name="fieldofstudy" />
        <Input label="country of residence" type="text" name="country" />
        <Input label="linkedIn profile" type="url" name="linkedin" />
        <Input
          label="resume or CV upload"
          type="url"
          name="resume"
          placeholder="provide a link to your resume, google drive, dropbox..."
        />
        <Input label="social media handle" type="url" name="" />
        <Select
          label="how did you hear about us"
          options={["social media", "a friend", "newspaper"]}
          name="howyouheardaboutus"
        />
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="capitalize">
            Why do you want to become a campus ambassador
          </label>
          <textarea
            name="why_to_be_an_ambassador"
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

export default campusAmbassador;
