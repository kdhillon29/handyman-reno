import React from 'react'
import Image from 'next/image'
import logo from '../public/logo2.png'

const Logo = () => {
  return (
    <div className="flex items-center ">
      <Image src={logo} alt="logo" width={40} height={40} />
      <h1 className="text-2xl font-bold ml-1">Nbg Construction</h1>
    </div>
  );
};

export default Logo