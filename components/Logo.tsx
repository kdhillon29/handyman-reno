import React from 'react'
import Image from 'next/image'
import logo from '../public/logo2.png'
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center ">
        <Link href='/' className="flex items-center ">
      <Image src={logo} alt="logo" width={40} height={40} />
      <h1 className="text-2xl font-bold ml-1">Nbg Construction</h1>
      </Link>
    </div>
  );
};

export default Logo