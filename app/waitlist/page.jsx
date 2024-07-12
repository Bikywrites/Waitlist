'use client';
import Image from 'next/image';
import Input from '../components/Input';
import Select from '../components/Select';
import { createWaitlist } from '@/actions/createWaitlist';
import { useState } from 'react';

export default function waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const rawFormData = Object.fromEntries(formData);
    const response = await createWaitlist(rawFormData);
    console.log(response);
    setIsSubmitting(false);
  }

  return (
    <section className=''>
      <div
        className='bg-cover bg-center h-fit'
        style={{ backgroundImage: "url('/Halfton png 1.png')" }}>
        <div className='px-8 lg:px-20'>
          <h1 className='lg:text-6xl text-3xl font-jakata font-bold leading-tight text-blue'>
            Waitlist for Potential <br /> Students
          </h1>
        </div>

        <Image
          className='h-auto w-full'
          src='/users.svg'
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <form
        className='font-jakata flex flex-col lg:px-20 px-8 my-2 gap-2'
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <Input
          label='full name'
          type='text'
          placeholder='enter your name'
          name='fullname'
        />
        <Input
          label='email'
          type='email'
          placeholder='enter your email'
          name='email'
        />
        <Input
          label='phone number'
          type='number'
          placeholder='enter your phone number'
          name='phone'
        />
        <Input
          label='country'
          type='text'
          placeholder='Nigeria'
          name='country'
        />
        <Select
          label='preffered course'
          name='preferredcourse'
          options={[
            'UI/UX designer',
            'frontend developer',
            'backend developer',
          ]}
        />
        <Select
          label='current education level'
          name='levelofeducation'
          options={['high school', 'graduate', 'masters']}
        />
        <Select
          label='how did you hear about us'
          name='howyouheardaboutus'
          options={['social media', 'a friend', 'newspaper']}
        />
        <div className='flex flex-col gap-1'>
          <label htmlFor='' className='capitalize'>
            Additional Information
          </label>
          <textarea
            name='additionalnotes'
            id=''
            cols='30'
            rows='10'
            className='border border-slate-400 rounded p-2 '></textarea>
        </div>
        <button
          type='submit'
          className='py-3 px-6 bg-blue hover:bg-lighterBlue self-end w-fit text-white rounded-lg'
          disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </section>
  );
}
