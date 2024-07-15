'use client';
import { createAmbassador } from '@/actions/formActions';
import Input from '../components/Input';
import Select from '../components/Select';
import { useState } from 'react';
import Link from 'next/link';

const campusAmbassador = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const imgUrls = ['/IMG 1.png', '/IMG 2.png', '/IMG 3.png', '/IMG 5.png'];
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const rawFormData = Object.fromEntries(formData);
    console.log(rawFormData)
    const response = await createAmbassador(rawFormData);
    console.log(response);
    // e.target.reset();
    setIsSubmitting(false);
  }
  return (
    <section className=''>
      <div
        className='bg-cover bg-center h-fit'
        style={{ backgroundImage: "url('/Halfton png 1.png')" }}>
        <div className='px-8 lg:px-20'>
          <div className='flex flex-col'>
            <Link href='/' className='self-end'>
              <img src='/master.png' alt='' />
            </Link>
            <h1 className='lg:text-6xl text-3xl font-jakata font-bold leading-tight text-blue'>
              Become a Campus <br /> Ambassador
            </h1>
          </div>

          <div className='md:hidden flex flex-row justify-between gap-1'>
            {imgUrls.map((imgUrl, index) => {
              return (
                <div
                  key={imgUrl}
                  className={`w-fit p-4 pb-0 rounded-lg ${
                    (index + 1) % 2 === 0 ? 'bg-yellowish' : 'bg-blue'
                  }`}>
                  <img
                    src={imgUrl}
                    alt='Description of the image'
                    className=''
                  />
                </div>
              );
            })}
          </div>
        </div>
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
          type='tel'
          placeholder='enter your phone number'
          name='phone'
        />
        <Input
          label='university or college attended'
          type='text'
          placeholder='University of Lagos'
          name='university'
        />
        <Input label='course year of study' type='month' name='yearofstudy' />
        <Input label='field of study' type='text' name='fieldofstudy' />
        <Input label='country of residence' type='text' name='country' />
        <Input label='linkedIn profile' type='url' name='linkedin' />
        <Input
          label='resume or CV upload'
          type='url'
          name='resume'
          placeholder='provide a link to your resume, google drive, dropbox...'
        />
        <Input label='social media handle' type='url' name='' />
        <Select
          label='how did you hear about us'
          options={['social media', 'a friend', 'newspaper']}
          name='howyouheardaboutus'
        />
        <div className='flex flex-col gap-1'>
          <label htmlFor='' className='capitalize'>
            Why do you want to become a campus ambassador
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
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
      </form>
    </section>
  );
};

export default campusAmbassador;
