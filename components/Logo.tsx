import React from 'react'
import Image from 'next/image'
import logo from '../public/logo2.jpg'
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href='/' className="flex items-center gap-2 group">
        <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary/80
          transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={logo} 
            alt="NBG Construction Logo" 
            fill
            className="object-cover"
            sizes="(max-width: 40px) 100vw"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm md:text-lg font-bold text-black md:text-white tracking-wide">
            NBG
          </span>
          <span className="text-xs md:text-sm font-medium text-black/80 md:text-white/90">
            Building Services
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;