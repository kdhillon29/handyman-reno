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
      <div className="relative z-10 ps-3 py-6 md:pt-24 flex flex-col items-start 
        justify-end  md:justify-center  w-full bg-green-500/10 bg-blend-darken 
        h-full  text-white
        ">
        <div></div>
        <div className="  ">
          <div className="animate-slide-in opacity-0 [--slide-in-delay:100ms]">
            <p
              className=" text-md md:text-xl mb-3
          font-bold text-primary/80
         "
            >
              NBG Building Services
            </p>
            <div className="flex flex-col  mt-1 gap-3">
              <div className="flex items-center gap-[.5]">
                <span className='text-green-300'>{"4.9 "}</span>
                {[...Array(5)].map((_, i) => (
                  <Image key={`star${i}`} src={starImage} width={10} height={10} alt="start" />
                ))}
                <span className=" text-green-300 text-xs">(50+ reviews) </span>
              </div>
              
              <p className=" text-md md:text-xl  text-green-500 font-bold">
                100+ Successful Projects
              </p>
            </div>
          </div>
          <h2
            className=" md:max-w-2xl py-6   text-2xl md:text-3xl tracking-wide
             animate-slide-in opacity-0 [--slide-in-delay:300ms]"
          >
             WE BUILD WITH<br/>
            
            <span className=" font-bold text-primary ">PRECISION</span>
          </h2>
          <p
            className=" text-blue-100/90 w-2/3 text-justify hidden md:block  font-semibold md:max-w-3xl leading-6 tracking-wide
            text-clamp animate-slide-in opacity-0 [--slide-in-delay:500ms]
          "
          >
            We deliver comprehensive residential and commercial building maintenance solutions, tailored to your specific needs
            and budget. With over 8 years of industry experience, we have built a reputation for reliability and trust,
            serving over 100 satisfied clients.
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
