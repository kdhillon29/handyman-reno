import Button from '@/components/Button';
import React from 'react';
import Image from 'next/image';
import starImage from '@/public/star.png';
import Link from 'next/link';
import { FaArrowDown, FaGoogle } from 'react-icons/fa';
import HeroCarousel from './Carousel';

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] mt-0 overflow-hidden">
      <HeroCarousel />
      <div
        className="absolute inset-0 
      bg-gradient-to-r from-neutral-900/80 via-teal-300/20 to-transparent"
      />
      <div className="relative z-10 h-full container mx-auto px-4">
        <div className="mt-6 md:mt-20  pb-12 h-full flex flex-col justify-end md:justify-center ">
          {/* Company Name & Rating */}
          <div className="space-y-6 animate-slide-in opacity-0 [--slide-in-delay:100ms]">
            <div className="flex flex-col gap-3 md:gap-6">
              <h1 className="text-3xl md:text-6xl font-bold text-primary/80 ">
                NBG Renovations <br />
              </h1>
              <strong className="text-md font-semibold  md:text-2xl text-neutral-300 tracking-tight">
                A trusted name in residential and commercial building maintenance.
              </strong>
              <div className="flex items-center gap-2 text-white/90">
                {/* <span className="text-green-300 font-semibold">4.9</span> */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={`star${i}`}
                      src={starImage}
                      width={12}
                      height={12}
                      alt="rating star"
                      className="mr-0.5"
                    />
                  ))}
                  <div className="flex items-center gap-1 text-xs text-white/90">
                    <span className="text-xs "> (50+</span>
                    <FaGoogle color="yellowgreen" size={12} />
                    <strong>reviews )</strong>
                  </div>
                </div>
              </div>

              <p className="text-sm md:text-lg  font-semibold text-green-500">
                100+ Successful Projects
              </p>
            </div>

            {/* Main Heading */}
            <div className="animate-slide-in opacity-0 [--slide-in-delay:300ms]">
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wide mb-3">
                WE BUILD WITH <span className="text-primary">PRECISION</span>
              </h2>
            </div>

            {/* Button */}
            <div className="animate-slide-in opacity-0 [--slide-in-delay:500ms]">
              <div className="mt-3">
                <Button />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <Link
            href="#services"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 
              rounded-full p-2 bg-white/10 backdrop-blur-sm border border-white/20
              transition-all hover:bg-white/20 animate-bounce"
            aria-label="Scroll to services section"
          >
            <FaArrowDown className="text-white/90" size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
