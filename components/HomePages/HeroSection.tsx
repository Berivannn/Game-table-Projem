"use client";

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { Mouse } from "lucide-react";




export default function HeroSection(): JSX.Element {
 const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
 
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: "url('/contentbackground.png')" }}
      ></div>

     
<div
  className={`relative z-10 flex flex-col justify-start items-center h-full 
              pt-24 px-4 text-center 
              md:pt-24 md:justify-center md:items-start md:text-left md:px-10 md:ml-10
              transition-all duration-700 
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
>
  <h1 className="text-5xl sm:text-5xl md:text-9xl text-black leading-tight md:leading-[0.7]">
    dokun, <br /> oyna
  </h1>
  <p className="mt-3 md:mt-[6%] text-sm md:text-md text-black max-w-[250px] md:max-w-sm">
    Cafe ve benzeri işletmelerde, hem bireysel hem de grup oyunlarını destekleyen yapısıyla, kullanıcıları eğlendirmenin ötesinde bir cihaz.
  </p>
</div>

 
     <div
  className={`absolute z-10 transition-all duration-700
              top-[50%] ml-[19%] -translate-x-1/2
              md:top-[25%] md:left-auto md:right-[10%] md:translate-x-0
              ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
>
  <div className="absolute inset-0 flex justify-center items-center -z-10">
    <Image
      src="/yeninesil.png"
      alt="Masa Arkası"
      width={350}
      height={250}
      className="opacity-90 md:w-[700px] md:h-[500px] transition-all duration-700"
    />
  </div>
   <Image
        src="/masa.png"
        alt="Game Table"
        width={280}
        height={200}
        className={`
          md:w-[600px] md:h-[400px]
          transition-all ease-out
          ${loaded ?['spin-in'] : 'opacity-0'}
        `}
      />
</div>

 
      <div className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <Mouse className="w-5 h-5 md:w-6 md:h-6 text-black animate-bounce" />
      </div>
    </div>
  );
}