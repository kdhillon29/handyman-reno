'use client';

import Container from '@/components/Container';
import Logo from '@/components/Logo';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import { GiHamburgerMenu } from 'react-icons/gi';
import NavMenu from './NavMenu';
import { FaPhone } from 'react-icons/fa6';
import { SiMinutemailer } from 'react-icons/si';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  };
  const handleClick = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // const myClass = clsx({
  //     'transition-all duration-1000 h-screen mt-5 fixed z-10 ': true,
  //     '-left-80 w-80': isOpen,
  //     'left-0 w-80': !isOpen
  //   });
  return (
    <nav
      className="container mx-auto px-4 fixed top-0 left-0 right-0 flex justify-between
              items-center h-16 bg-neutral-400 md:hidden z-50"
    >
      <Logo />
      <a href='tel:0433698637' className='  rounded-full  p-2'> <FaPhone size={24} /> </a>
      <Link href='#contact' className='   rounded-full  p-2' > <SiMinutemailer size={24} /> </Link>
      <button onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      <div
        className={`fixed bg-blend-luminosity top-16 backdrop-blur-md transition-all delay-75 duration-500 h-screen
       bg-neutral-200 z-50  ${!isOpen ? '-right-80 w-80' : 'right-0 w-80  bg-blend-darken'}`}
      >
        <Container>
          <div className="flex justify-center mt-8">
            <NavMenu handleClick={handleClick} />
          </div>
        </Container>
      </div>
    </nav>
  );
}
