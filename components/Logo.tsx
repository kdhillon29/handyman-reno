import React from 'react'
import Image from 'next/image'
import logo from '../public/logo3.png'
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href='/' className="flex items-center gap-2 group">
        <div className="relative w-10 h-10 overflow-hidden rounded-full 
          transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={logo} 
            alt="NBG Construction Logo" 
            fill
            className="object-cover   bg-gradient-to-r from-primary to-green-500/40"
            sizes="(max-width: 42px) 100vw"
            priority
          />
        </div>
        <div className="flex flex-col ">
          <span className="text-xs md:text-sm font-bold  tracking-wide">
            NBG
          </span>
          <span className="text-xs md:text-sm font-medium ">
            Building Services<br/>
            <strong className=' text-xs'>Mobile:0406490575</strong>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;