import React from 'react'
import Image from 'next/image'
import logo from '../public/logo2.png'
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center ">
        <Link href='/' className="flex flex-col md:flex-row items-center gap-1 ">
      <Image src={logo} alt="logo" width={40} height={40} />
      <p className=" text-sm md:text-md font-semibold text-black md:text-white ">Nbg Construction</p>
      </Link>
    </div>
  );
};

export default Logo