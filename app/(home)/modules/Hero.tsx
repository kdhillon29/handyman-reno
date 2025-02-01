import Button from '@/components/Button';
import React from 'react';
import Image from 'next/image';
import starImage from '@/public/star.png';
import Link from 'next/link';
import { FaArrowDown, FaGoogle } from 'react-icons/fa';
import HeroCarousel from './Carousel';

const Hero = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[90vh] mt-0 overflow-hidden">
      <HeroCarousel />
      <div className="absolute inset-0 
      bg-gradient-to-r from-zinc-900/80 via-teal-300/20 to-transparent" />
      <div className="relative z-10 h-full container mx-auto px-4">
        <div className="mt-6 md:mt-12  pb-12 h-full flex flex-col justify-end md:justify-center ">
          {/* Company Name & Rating */}
          <div className="space-y-6 animate-slide-in opacity-0 [--slide-in-delay:100ms]">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl md:text-2xl font-bold text-primary/80 ">
                NBG Construction <br />
                
              </h1>
              <strong className="text-sm font-semibold  md:text-md text-neutral-300 tracking-wide">
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

              <p className="text-sm  font-semibold text-green-500">100+ Successful Projects</p>
              
            </div>

            {/* Main Heading */}
            <div className="animate-slide-in opacity-0 [--slide-in-delay:300ms]">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-3">
                WE BUILD WITH  <span className="text-primary">PRECISION</span>
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-2xl animate-slide-in opacity-0 [--slide-in-delay:500ms]">
              {/* <p className="text-white/90 text-sm md:text-base leading-relaxed tracking-wide font-medium">
                We deliver comprehensive residential and commercial building maintenance solutions,
                tailored to your specific needs and budget. With over 8 years of industry
                experience, we have built a reputation for reliability and trust, serving over 100
                satisfied clients.
              </p> */}
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
