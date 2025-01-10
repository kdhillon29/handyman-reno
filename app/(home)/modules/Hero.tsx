import Button from "@/components/Button";
import Container from "@/components/Container";
import React from "react";
import Image from "next/image";
import starImage from "@/public/star.png";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import HeroCarousel from "./Carousel";

const Hero = () => {
  return (
    <div className=" relative w-full h-screen  mt-0 overflow-hidden">
      <HeroCarousel />
      <Container className="relative  z-10 flex flex-col justify-between h-full text-white">
        <div></div>
        <div className="my-4">
          <div className="flex gap-1">
            <div className="flex items-center gap-[.8]">
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
            <p className="text-xl p-3 text-green-500 font-bold">
              50+ Successful Projects
            </p>
          </div>
          <h2 className=" md:max-w-2xl py-2">
            WE BUILD WITH
            <span className=" font-bold text-primary p-2">PRECISION</span>
          </h2>
          <p className="mb-8 md:max-w-3xl leading-7 tracking-wide text-clamp">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            ratione ea consequuntur neque error aperiam assumenda quod aut,
            expedita eligendi.
          </p>
          <Button />
        </div>
        <div>
          <Link
            href="/"
            className="inline-block rounded-full  p-2 bg-transparent
        text-blue-300 border-2 border-amber-200 shadow-lg animate-bounce"
          >
            <FaArrowDown size={24} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
