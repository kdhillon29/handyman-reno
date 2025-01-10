"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Overlay from "@/components/Overlay";

export default function HeroCarousel() {
  const images = ["/parapija.jpg", "/hero2.jpg", "/hero3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <>
      <div className="absolute inset-0 overflow-hidden ">
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
          >
            <Image
              src={img}
              alt={`carousel img ${index}`}
              fill
              className="object-cover object-center"
              priority={index === currentImageIndex}
            />
          </div>
        ))}
      </div>
      <Overlay />
    </>
  );
}
