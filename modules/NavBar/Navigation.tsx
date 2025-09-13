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

  return (
    <nav className="fixed top-0 left-0 right-0 p-1 md:hidden z-50">
      <div className="bg-neutral-700/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-4">
              <a 
                href='tel:0406490575' 
                className="flex items-center justify-center w-10 h-10 rounded-full 
                  bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Call us"
              > 
                <FaPhone size={18} /> 
              </a>
              <Link 
                href='/#contact' 
                className="flex items-center  justify-center w-10 h-10 scroll-smooth rounded-full 
                  bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Contact form"
              > 
                <SiMinutemailer size={18} /> 
              </Link>
              <button 
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full 
                  bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <FaTimes size={18} /> : <GiHamburgerMenu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-16 h-[calc(100vh-4rem)] bg-neutral-300/95 backdrop-blur-md
          transition-transform duration-1000 ease-in-out transform
          ${isOpen ? 'translate-x-[20%]' : 'translate-x-full'}`}
      >
        <Container>
          <div className="py-8">
            <NavMenu handleClick={handleClick} />
          </div>
        </Container>
      </div>
    </nav>
  );
}
