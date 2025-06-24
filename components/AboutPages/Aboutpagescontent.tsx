"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// Fade-in animasyonu için bileşen
function FadeInWhenVisible({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Stagger efektli grup animasyonu
function FadeInStaggerGroup({
  items,
  delayStep = 0.3,
}: {
  items: { element: React.ReactNode; key: string | number }[];
  delayStep?: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
      {items.map((item, index) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * delayStep,
          }}
          className="relative overflow-hidden"
        >
          {item.element}
        </motion.div>
      ))}
    </div>
  );
}

// Ana içerik bileşeni
export default function Aboutpagescontent() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const words = ["tek", "dokunuşla", "sınırsız", "eğlence!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <FadeInWhenVisible>
        <div className="flex justify-center md:mt-[-10px]">
          <Image src="/yarimay.png" alt="Half Moon" width={20} height={20} />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <div className="relative text-[6vw] leading-tight font-light text-gray-400 max-w-[50%] mx-auto">
          <h1 className="flex flex-wrap justify-center">
            {words.map((word, index) => (
              <span
                key={index}
                className={`transition-colors duration-500 mr-2 ${
                  index === highlightIndex ? "text-black" : "text-gray-400"
                } ${word === "tek" ? "text-black font-normal" : ""}`}
              >
                {word === "sınırsız" ? (
                  <>
                    sınırsız<span className="text-black">•</span>
                  </>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>
          <span className="absolute top-[-5px] ml-[52%] text-[2vw] text-gray-400">
            gametable ile
          </span>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <div className="px-10 md:px-40 mt-16">
          <div className="flex flex-col md:flex-row justify-between text-left space-y-10 md:space-y-0 md:space-x-10">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold">Hedefimiz</h2>
              <p className="text-gray-600 text-sm mt-4">
                Müşteri deneyimini geliştirmek ve işletmelere değer katmak bizim önceliğimizdir. GameTable, modern ve kullanıcı dostu bir oyun deneyimi sunarken, işletmelerin müşteri trafiğini artırmasına ve rakiplerinden ayrışmasına yardımcı olur. Aynı zamanda influencer destekli pazarlama çalışmalarıyla iş ortaklarımıza ücretsiz reklam ve PR fırsatları sunarak, hem eğlenceyi hem de işletme büyümesini destekleyen bir sistem oluşturuyoruz.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold">Vizyonumuz</h2>
              <p className="text-gray-600 text-sm mt-4">
                Amacımız, herkes için erişilebilir, keyifli ve kazançlı bir oyun ekosistemi yaratmak. Teknoloji ve oyun dünyasındaki yenilikleri yakından takip ederek, işletmelerin ve müşterilerin memnuniyetini en üst seviyeye çıkarmak için çalışıyoruz.
              </p>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3}>
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 space-y-10 md:space-y-0 md:space-x-16 px-10 md:px-40">
          <div className="md:w-1/2">
            <div className="relative">
              <span className="text-sm text-gray-500 uppercase absolute -top-5 left-0">gametable ile</span>
              <h2 className="text-4xl font-bold leading-tight">Yeni nesil eğlenceyi keşfedin</h2>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Türkiye’de yeni nesil eğlenceyi yaygınlaştırıyoruz. GameTable, modern oyun teknolojileriyle interaktif ve sosyal bir deneyim sunar. Eğlencenin sınırlarını aşarak, kullanıcılarına daha önce yaşamadıkları bir deneyim sunmayı amaçlar.
            </p>
          </div>
          <div className="bg-white p-2 shadow-lg relative z-10 md:mt-[10%]">
            <Image src="/twopageimg.png" alt="Man" width={350} height={450} />
          </div>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <div className="bg-black text-white mt-20 px-4 md:px-20 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="max-w-md">
              <h2 className="text-5xl font-bold mb-10 leading-tight">Gelecekten günümüze</h2>
            </div>
            <div className="max-w-md">
              <h3 className="text-lg font-semibold mb-4">One Team, Global Talent</h3>
              <p className="text-gray-400 mb-6">
                We curate the best talent from all corners of the world. This enables us to leverage diverse perspectives and expertise to deliver fresh and tailored solutions.
              </p>
              <h3 className="text-lg font-semibold mb-4">Strategic Simplicity</h3>
              <p className="text-gray-400 mb-6">
                Simplicity is the ultimate sophistication. We distill complexity collaboratively with our partners to build high-performing brands.
              </p>
              <p className="text-white font-semibold max-w-xs">
                We partner like your co-founders. Straight talk, no sugarcoating.
              </p>
            </div>
          </div>

          <FadeInStaggerGroup
            items={[
              {
                key: "img1",
                element: (
                  <Image
                    src="/threepageimg.png"
                    alt="Image 1"
                    width={300}
                    height={200}
                    className="w-full object-cover"
                  />
                ),
              },
              {
                key: "img2",
                element: (
                  <Image
                    src="/threepageimg2.png"
                    alt="Image 2"
                    width={300}
                    height={200}
                    className="w-full object-cover"
                  />
                ),
              },
            ]}
          />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.5}>
        <section className="flex flex-col items-center text-center py-12 px-4 md:px-20 overflow-x-hidden">
          <p className="text-sm text-gray-900">İşimizi severek yapıyoruz</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            We match your project <br /> with the right experts
          </h2>
          <p className="mt-10 text-base md:text-lg font-medium text-gray-700 border-b-4 border-black pb-2">
            info@gametable.com.tr
          </p>
        </section>
      </FadeInWhenVisible>
    </div>
  );
}
