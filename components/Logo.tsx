import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src={logo} alt="logo" width={50} height={50} />
      <h1 className="text-2xl font-bold">Nbg Construction</h1>
    </div>
  );
};

export default Logo