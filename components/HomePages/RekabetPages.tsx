'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';

function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return { ref, controls };
}

export default function RekabetPages() {
  const title = useScrollAnimation();
  const metin = useScrollAnimation();
  const tac = useScrollAnimation();
  const paragraf = useScrollAnimation();

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 5,
        ease: 'easeOut',
      },
    }),
  };

  const images = [
    { src: "/rekabetimg3.png", alt: "slide-1", className: "w-full h-auto md:h-[70%]" },
    { src: "/rekabetimg2.png", alt: "slide-2", className: "flex justify-center w-full h-auto" },
    { src: "/rekabetimg.png", alt: "slide-3", className: "w-full h-[400px] md:h-[500px]" },
  ];

  return (
    <div className="layout-sm md:layout-md lg:layout-lg bg-black min-h-screen flex flex-col items-center mt-24 relative">

  
      <motion.div
        ref={title.ref}
        initial="hidden"
        animate={title.controls}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="absolute left-1/2 transform -translate-x-1/2 z-20 top-[10%] md:left-[40%] md:-translate-x-0"
      >
        <img
          src="/rekabet.png"
          alt="Rekabet"
          className="w-auto h-auto"
        />
      </motion.div>

      
      <div
        ref={metin.ref}
        className="flex overflow-hidden gap-4 w-full mt-[10px] px-6"
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={metin.controls}
            variants={imageVariants}
            className={item.className}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

     
      <div className="layout-sm md:layout-md lg:layout-lg mt-2 md:mt-[-25%] md:w-[30%] max-w-3xl px-4 ml-2 mr-auto">
        <h2 className="text-xl md:text-3xl font-semibold mb-2 text-left text-white">rekabet ortamı</h2>
        <p className="text-base md:text-md text-gray-300 mb-4 text-left">
          Çok oyunculu rekabetçi oyun seçenekleriyle arkadaşlarınızla eğlenceli yarışa katılın.
          Hız, strateji ve refleks gerektiren yarışma senaryolarıyla bireysel yeteneklerinizi test edebilir
          veya takım halinde mücadele edebilirsiniz.
        </p>
        <a href="#" className="underline text-white text-sm text-left block">nerede var?</a>
      </div>

    
      <motion.div
        ref={tac.ref}
        initial="hidden"
        animate={tac.controls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.4 } },
        }}
        className="relative flex flex-col items-center text-center text-white md:mt-[25%] py-12"
      >
        <div className="absolute top-[-1vw] left-[78%] md:top-[-1.6vw] md:ml-[-1%] w-[25vw] h-[10vw] md:w-[6vw] md:h-[6vw] lg:w-[5vw] lg:h-[5vw] -translate-x-1/2 z-20">
          <Image
            src="/kraltac.png"
            alt="Kral Tacı"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 10vw, (max-width: 1024px) 6vw, 5vw"
            priority
          />
        </div>

        <div className="relative z-0">
          <div className="ml-[10%] mt-[-12%] md:ml-[7%] md:-mt-[8%] inline-block rounded-3xl border-4 border-orange-500 overflow-hidden w-[140px] h-[140px] md:w-[200px] md:h-[200px] relative">
            <Image
              src="/tacinresmii.png"
              alt="Tower Image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <Image
            src="/defense.png"
            alt="Defense"
            width={280}
            height={120}
            className="mb-2 md:w-[400px] md:h-[150px] sm:w-[200px] sm:h-[40px] w-[280px] h-[120px] md:ml-[2%]"
          />

          <Image
            src="/haftaninoyunu.png"
            alt="Haftanın Oyunu"
            width={180}
            height={80}
            className="mb-2 md:ml-[28%] w-[180px] h-[30px] md:w-[200px] md:h-[40px]"
          />
        </div>
      </motion.div>

  
      <motion.p
        ref={paragraf.ref}
        initial="hidden"
        animate={paragraf.controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 5, delay: 0.5 } },
        }}
        className="max-w-2xl text-sm px-4 -mt-8 text-white"
      >
        Kaleyi korumak için savunma kuleleri inşa edilmeye başlandı. Okçular yüksek kulelerden düşmanı durdurmaya çalışırken,
        büyücüler ateş toplarıyla yollarını kesiyordu. Mühendisler, dev mancınıklar kurarak gelen dalgaları püskürtmeye çalışıyordu.
      </motion.p>
    </div>
  );
}
