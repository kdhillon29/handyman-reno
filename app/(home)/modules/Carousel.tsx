"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Overlay from "@/components/Overlay";
import { useRef } from "react";

export default function HeroCarousel() {
  const images = ["/hero5.jpg", "/hero4.jpg", "/hero2.jpg", "/hero3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement|null>(null);

  function handleImageChange(newIndex: number) {
    if (newIndex !== currentImageIndex) setCurrentImageIndex(newIndex);
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleImageChange((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  useEffect(() => {
    if (!containerRef.current) return;
    const speed = .5;
    containerRef.current.style.transform = `translateY(${offset * speed}px)`;
  }, [offset]);
  //parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0  overflow-hidden ">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all 
     duration-1000
    ${
      index === currentImageIndex
        ? "opacity-100 scale-105"
        : "opacity-0 scale-100"
    }
      `}
      style={{
        transform: `translateY(${(index-currentImageIndex)*5}px)`,
      }}
          >
            <Image
              src={img}
              alt={`carousel img ${index}`}
              fill
              className="object-cover object-center "
              priority={index === currentImageIndex}
            />
          </div>
        ))}
      </div>
      <Overlay />

      <div className="absolute right-4 bottom-4 z-40 ">
        <div className="flex gap-2">
          {images.map((img, index) => (
            <button
              key={img}
              onClick={() => handleImageChange(index)}
              className={`w-6 h-2 transition-all duration-300 shadow
             ${
               currentImageIndex == index ? "bg-primary" : "bg-white"
             } hover:bg-green-300`}
            >
              {" "}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
