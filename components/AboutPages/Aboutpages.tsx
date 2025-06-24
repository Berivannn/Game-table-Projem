"use client";

import React, { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import Image from "next/image";

export default function AboutPages() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10 md:py-20 overflow-x-hidden max-w-screen"
    >
      <div
        className={`md:w-2/3 w-full text-center md:text-left transform transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-light text-black mt-10 md:mt-20 md:ml-[3%]">gametable</h2>
        <h1 className="text-3xl sm:text-6xl md:text-7xl text-black leading-tight mt-2">hakkında</h1>

        <p className="text-gray-500 mt-4 text-lg">Teknopark destekli Türk projesi</p>
        <p className="text-gray-600 mt-4 text-sm md:text-base px-2 md:px-0">
          GameTable, işletmelere yenilikçi ve kazanç sağlayan bir eğlence çözümü sunmak amacıyla geliştirilmiş interaktif bir oyun platformudur. Dokunmatik oyun masalarımız, cafe, restoran, eğlence merkezleri ve bekleme alanları gibi işletmelerde müşterilerin vakit geçirirken eğlenmesini ve işletmelerin ekstra gelir elde etmesini sağlar.
        </p>

        <div className="flex justify-center md:justify-start mt-6 gap-4">
          <Image src="/Isoimg3.png" alt="sertifika" width={50} height={50} />
          <Image src="/Isoimg2.png" alt="sertifika" width={50} height={50} />
          <Image src="/Isoimg.png" alt="sertifika" width={50} height={50} />
        </div>
      </div>

     <div
  className={`md:w-1/2 w-full flex justify-center transform transition-all duration-1000 ease-in-out delay-200 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <Image
    src="/playmasa.png"
    alt="GameTable Masa"
    width={550}
    height={400}
    className="w-full max-w-[500px] mt-[15%] md:mt-[20%]h-auto"
  />
</div>
    </section>
  );
}
