import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from 'react';


const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.8, 
      duration: 2,
      ease: "easeOut"
    }
  })
};

export default function GameTableSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
            ease: "easeOut"
          }
        }
      }}
      className="relative flex flex-col items-center text-black mt-10 md:mt-20 px-4"
    >
      <div className="relative text-center flex flex-col items-center text-5xl md:text-9xl">
        <div className="flex items-center">
          <span>yeni</span>
          <div className="relative mx-2 md:mx-3 group">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full cursor-pointer"></div>
            <div className="absolute left-[180%] transform -translate-x-1/2 top-full mt-2 hidden group-hover:block w-[150px] md:w-[230px] h-[90px] md:h-[140px]">
              <Image 
                src="/kirmizibutonimg.png" 
                alt="Hover Image"
                fill 
                className="object-contain transition-transform duration-300 scale-100 group-hover:scale-125"
              />
            </div>
          </div>
          <span>nesil</span>
        </div>
        <span className="mt-1 md:mt-2 text-5xl md:text-9xl">oyun</span>
        <span className="mt-1 md:mt-2 text-5xl md:text-9xl">masası</span>
      </div>

      <p className="text-center text-sm md:text-lg max-w-xs md:max-w-2xl mt-2 md:mt-4">
        Geleneksel oyun anlayışını geride bırakın ve Playbox ile interaktif eğlencenin yeni dünyasına adım atın! 
        Yüksek hassasiyetli dokunmatik ekran, çok oyunculu destek sunan gelişmiş oyun sistemi ve geniş oyun kütüphanesiyle Playbox, 
        her yaşa hitap eden eşsiz bir oyun deneyimi sunuyor.
      </p>

      <div className="relative mt-5 md:mt-[10%]">
        <h1 className="absolute text-9xl md:text-[300px] text-black top-[1%] md:top-[20%] left-1/2 transform -translate-x-1/2 z-0 tracking-[5px] md:tracking-[20px]">
          play
        </h1>
     <Image
  ref={imageRef}
  src="/playmasa.png"
  alt="Game Table"
  width={300}
  height={180}
  className={`relative z-10 w-[300px] h-[180px] md:w-[600px] md:h-[500px] transition-all duration-[5000ms] ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'
  }`}
/>

        
        <div className="mt-20 md:mt-0 relative flex flex-col items-center gap-8 md:absolute md:inset-0 md:flex-none md:w-full md:max-w-[1200px] mx-auto">

          {[
            {
              title: "Çoklu Oyuncu",
              desc: "Tek başınıza oynayabileceğiniz oyunların yanı sıra çok oyunculu deneyimi de destekler.",
              className: "md:left-[-290px] md:top-[2%] md:items-start md:text-left"
            },
            {
              title: "Touch Screen",
              desc: "Yüksek hassasiyetli dokunmatik ekran teknolojisi ile daha keyifli bir oyun deneyimi.",
              className: "md:right-[-260px] md:top-[10%] md:items-end md:text-left"
            },
            {
              title: "Oyun Çeşitliliği",
              desc: "Her yaşa ve her zevke hitap eden geniş oyun yelpazesi ile eğlenceyi çeşitlendiriyor.",
              className: "md:left-[-350px] md:top-[50%] md:items-start md:text-left"
            },
            {
              title: "Ödül Sistemi",
              desc: "Netabetal oyun sistemi, heyecanı artıran ödüller ve sıralama fırsatları sunuyor.",
              className: "md:right-[-190px] md:top-[60%] md:items-end md:text-left"
            }
          ].map((item, index) => (
          <motion.div
  key={index}
  custom={index}
  variants={itemVariants}
  initial="hidden"
  animate={controls}
  className={`flex flex-col md:absolute items-center text-center gap-2 md:gap-4 max-w-[250px] ${item.className}`}
>

  <div className="flex flex-row items-center gap-1">
    <div className="md:w-6 md:h-6 sm:w-2 sm:w-2 bg-black rounded-full translate-x-1"></div>

   <div className="border-t border-black w-[200%] md:w-48"></div>
  </div>
  <div>
    <h3 className="font-bold text-lg md:text-4xl">{item.title}</h3>
    <p className="text-xs md:text-sm max-w-[220px]">{item.desc}</p>
  </div>
</motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
