import Button from '@/components/Button';
// import Container from "@/components/Container";
import React from 'react';
import Image from 'next/image';
import starImage from '@/public/star.png';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
import HeroCarousel from './Carousel';

const Hero = () => {
  return (
    <div className=" relative w-full h-[60vh] md:h-[90vh]  mt-0 overflow-hidden ">
      <HeroCarousel />
      <div className="relative z-10 ps-3 py-5 pt-16 md:pt-12  flex flex-col items-start justify-end  w-full bg-green-500/10 bg-blend-darken   h-full text-white">
        <div></div>
        <div className="my-2 ">
          <div className="animate-slide-in opacity-0 [--slide-in-delay:200ms]">
            <p
              className=" text-xl md:text-2xl 
          font-bold text-primary/80
         "
            >
              NBG Building Services
            </p>
            <div className="flex flex-col  mt-1 gap-2">
              <div className="flex items-center gap-[.5]">
                {[...Array(5)].map((_, i) => (
                  <Image key={`star${i}`} src={starImage} width={10} height={10} alt="start" />
                ))}
                <span className=" text-green-300 text-xs">(70+ reviews) </span>
              </div>
              
              <p className=" text-sm md:text-md  text-green-500 font-bold">
                100+ Successfull Projects
              </p>
            </div>
          </div>
          <h2
            className=" md:max-w-2xl py-6 md:py-12  text-xl md:text-3xl tracking-wide
             animate-slide-in opacity-0 [--slide-in-delay:300ms]"
          >
            WE BUILD WITH
            
            <span className=" font-bold text-primary p-2">PRECISION</span>
          </h2>
          <p
            className=" text-neutral-50/80 mb-12 hidden md:block  font-semibold md:max-w-3xl leading-5 tracking-tight
           text-clamp animate-slide-in opacity-0 [--slide-in-delay:500ms]
          "
          >
            8+ years of experience in Construction Services.
            <br />
            We are Trusted by more than 100+ clients.
          </p>
          <Button />
        </div>
        <div>
          <Link
            href="/"
            className="inline-block absolute bottom-5 right-2 mr-auto rounded-full   p-1 bg-transparent
        text-blue-300 border-2 border-amber-200 shadow-lg animate-bounce"
          >
            <FaArrowDown size={12}  />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
