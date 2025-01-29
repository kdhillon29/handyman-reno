import Button from "@/components/Button";
// import Container from "@/components/Container";
import React from "react";
import Image from "next/image";
import starImage from "@/public/star.png";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import HeroCarousel from "./Carousel";

const Hero = () => {
  return (
    <div className=" relative w-full h-[60vh] md:h-[90vh]  mt-0 overflow-hidden ">
      <HeroCarousel />
      <div className="relative  z-10 ps-6  py-5 md:pt-12 flex flex-col  w-full bg-green-500/10 bg-blend-darken place-content-center  h-full text-white">
        <div></div>
        <div className="my-2">
          <div className="flex gap-1">
            <div className="flex items-center gap-[.5]">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={`star${i}`}
                  src={starImage}
                  width={10}
                  height={10}
                  alt="start"
                />
              ))}
            </div>
            <p className=" text-sm md:text-md  text-green-500 font-bold">
              120+ Successful Projects
            </p>
          </div>
          <h2 className=" md:max-w-2xl py-2 text-4xl md:text-6xl">
            WE BUILD WITH
            <span className=" font-bold text-primary p-2">PRECISION</span>
          </h2>
          <p className="mb-8 w-1/2 md:max-w-3xl leading-5 tracking-tight text-sm md:text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            ratione ea consequuntur neque error aperiam assumenda quod aut,
            expedita eligendi.
          </p>
          <Button />
        </div>
        <div>
          <Link
            href="/"
            className="inline-block absolute bottom-0 left-5 rounded-full   p-2 bg-transparent
        text-blue-300 border-2 border-amber-200 shadow-lg animate-bounce"
          >
            <FaArrowDown size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
