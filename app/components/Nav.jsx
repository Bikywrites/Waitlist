'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

export default function Nav() {
   const pathname = usePathname();
  // Define your navigation links
  const links = [
    { href: '/waitlist', label: 'Join our waitlist' },
    { href: '/facilitator', label: 'Become a facilitator' },
    { href: '/campus-ambassador', label: 'Become a campus ambassador' },
    { href: '/', label: 'See our pitch deck' },
  ];
  return (
    <nav className='relative flex items-center px-8 h-20 lg:px-20'>
      <Image
        className='w-20 h-auto md:w-24 lg:w-40 '
        src='/BIKYWRITES LOGO 1.png'
        width={100}
        height={100}
        quality={100}
      />
      <div className='hidden lg:flex items-center justify-evenly w-full text-textblack text-base'>
        {links.map(({ href, label }) => {
          return (
            <MenuButton key={label}>
              <Link
                href={href}
                className={`link ${pathname === href ? 'text-blue' : ''}`}>
                {label}
              </Link>
            </MenuButton>
          );
        })}
      </div>
    </nav>
  );
}
const MenuButton = styled.button.attrs({
  className: 'hover:text-black font-jakata cursor-pointer',
})``;
