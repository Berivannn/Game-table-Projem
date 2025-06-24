"use client";
import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react"; 
import {  FaDownload } from 'react-icons/fa';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function GamePages() {
   useEffect(() => {
    const target = document.getElementById('animated-form');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add('animate-fade-in-up');
          target.classList.remove('opacity-0');
          observer.unobserve(target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);
   const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);
  const zombieControls = useAnimation();
const [zombieRef, zombieInView] = useInView({ triggerOnce: true, threshold: 0.2 });

useEffect(() => {
  if (zombieInView) {
    zombieControls.start({ opacity: 1, x: 0 });
  }
}, [zombieInView, zombieControls]);
const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div>
  <header className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/creatorbackground.png')" }}>
        <div className="flex items-center w-full justify-start">
          <div className="flex items-center justify-center md:justify-start mt-6 md:mt-2 ml-0 md:ml-[8%] ml-12">
            <Image
           src="/creatorlogo.png"
           alt="GameTable Logo"
           width={150}
          height={80}
          className="w-[120px] md:w-[160px] h-auto"
         />
  <Image
    src="/creatorlogo2.png"
    alt="Creator"
    width={60}
    height={80}
    className="w-[50px] h-[80%] md:w-[60px] h-auto ml-2"
  />
</div>
<div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 px-4 ml-[22%] md:ml-auto mt-6 ">
  <div className="text-white text-sm">
    <Link
      href="/"
      className="bg-white text-black font-semibold px-4 py-2 rounded-full text-sm shadow-md hover:bg-gray-200"
    >
      ANASAYFA
    </Link>
  </div>
  <div className="flex items-center space-x-2 text-white text-sm">
    <span className="text-xs rotate-90">0850</span>
    <div className="flex flex-col items-start">
      <span className="text-xs">BİZE ULAŞ</span>
      <span className="text-lg">4310000</span>
    </div>
    <a
      href="https://www.instagram.com/gametable.tr"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300 transition duration-300"
    >
      <Instagram size={28} />
    </a>
  </div>
</div>
        </div>
        <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
             className="absolute top-[2%] ml-[3%] max-w-sm md:left-10 md:top-[25%] md:max-w-lg text-left text-white"
          >
  <h1 className="md:text-6xl leading-tight-2">
    <span className="md:text-5xl text-2xl block md:mt-[-30px]">game</span>
    <span className="md:text-9xl text-4xl block md:mt-[-25px]">creator</span>
    <span className="md:text-9xl text-md block md:mt-[-25px]">musun?</span>
  </h1>
  <p className="mt-3 text-lg text-gray-300">
    Oyun geliştiricilerine açık bir platform sunarak yaratıcı projelerini hayata geçirme ve kazanca dönüştürme fırsatı sağlıyoruz.
  </p>
</motion.div>
<motion.div
  id="animated-form"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="absolute w-[70%] top-[30%] md:right-[10%] md:top-[15%] bg-white p-6 rounded-2xl shadow-lg md:w-96"
>
  <h2 className="text-black text-2xl font-semibold text-center">creator başvuru</h2>
  <form className="mt-4">
    <input type="text" placeholder="AD SOYAD" className="w-full p-3 mb-3 border border-gray-300 rounded-md" />
    <input type="email" placeholder="E-MAIL" className="w-full p-3 mb-3 border border-gray-300 rounded-md" />
    <input type="tel" placeholder="TELEFON" className="w-full p-3 mb-3 border border-gray-300 rounded-md" />
    <label className="block text-gray-600 mb-2">PORTFOLIO (Dosya Yükle)</label>
    <input type="file" className="w-full p-3 mb-3 border border-gray-300 rounded-md bg-white" />
    <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800">
      GÖNDER
    </button>
  </form>
</motion.div>
          <div
            id="animated-form"
            className="absolute w-[70%] top-[30%] md:right-[10%] md:top-[15%] bg-white p-6 rounded-2xl shadow-lg md:w-96 opacity-0"
          >
            <h2 className="text-black text-2xl font-semibold text-center">creator başvuru</h2>
            <form className="mt-4">
              <input type="text" placeholder="AD SOYAD" className="w-full p-3 mb-3 border border-gray-300 rounded-md" />
              <input type="email" placeholder="E-MAIL" className="w-full p-3 mb-3 border border-gray-300 rounded-md" />
              <input type="tel" placeholder="TELEFON" className="w-full p-3 mb-3 border border-gray-300 rounded-md" />
              <label className="block text-gray-600 mb-2">PORTFOLIO (Dosya Yükle)</label>
              <input type="file" className="w-full p-3 mb-3 border border-gray-300 rounded-md bg-white" />
              <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800">
                GÖNDER
              </button>
            </form>
          </div>
        </div>
      </header>
   <div className="flex flex-col md:flex-row items-start justify-between p-6 md:p-16 bg-white overflow-x-hidden">
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      className="w-full md:max-w-[40%] text-left md:ml-[10%]"
    >
      <h2 className="text-gray-900 text-2xl font-light">haydi!</h2>
      <h1 className="text-black text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mt-2">
        hayalindeki <br /> oyunu <br /> hazırla
      </h1>
      <p className="text-gray-700 mt-4">
        Oyununu Geliştir, bize gönder, Gametable'de yayınlayalım, oynandıkça kazan
      </p>
      <p className="text-gray-700 mt-4">
        Playbox, <span className="font-bold">oyun geliştiricilerine açık bir platform</span> sunarak yaratıcı projelerini hayata geçirme ve kazanca dönüştürme fırsatı sağlıyor. Oyun yaratıcıları, geliştirdikleri oyunları Playbox dokunmatik oyun masası sistemine entegre ederek geniş bir oyun kitlesine ulaşabilir ve oyununun oynanma oranına bağlı olarak gelir elde edebilir.
      </p>
      <p className="text-gray-900 font-bold mt-6 underline">hemen başvur</p>
    </motion.div>

 <motion.div
  ref={zombieRef}
  initial={{ opacity: 0, x: 100 }}
  animate={zombieControls}
  transition={{ duration: 1.5, ease: "easeOut" }}
  className="w-full max-w-[80%] md:max-w-[60%] md:mr-[20%] ml-[-18%] md:mt-[-25%] mt-[-30%]"
>
  <img src="/0_Zombie.png" alt="Zombie Character" className="md:mx-auto" />
</motion.div>
</div>
 <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-black p-8">
      
      {/* Başlık Bölümü */}
      <div
        ref={headingRef}
        className={`text-center transition-all duration-1000 ease-out transform ${
          headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-gray-500 text-lg">gametable</h2>
        <h1 className="text-2xl font-bold">creator avantajları</h1>
      </div>

      {/* Masa Görseli - Soldan Gelen Animasyon */}
     <div
  ref={imageRef}
  className={`relative mt-8 will-change-transform transition-all duration-[4000ms] ease-in-out transform ${
    imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'
  }`}
>
  <Image 
    src="/playmasa.png" 
    alt="GAMETABLE" 
    width={500} 
    height={500} 
    className="mx-auto block"
    priority={true}
  />
</div>

      {/* Karakter Grid */}
      <div 
        ref={gridRef}
        className={`p-6 bg-gray-100 rounded-lg shadow-lg md:mt-[10%] transform transition-all duration-1000 ease-out ${
          gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-md"><img src="/sayfa3karakter.png" alt="Character 1" /></div>
          <div className="p-4 bg-white rounded-md"><img src="/sayfa3karakter1.png" alt="Character 2" /></div>
          <div className="p-4 bg-white rounded-md"><img src="/sayfa3karakter2.png" alt="Character 3" /></div>
          <div className="p-4 bg-white rounded-md"><img src="/sayfa3karakter3.png" alt="Character 4" /></div>
          <div className="p-4 bg-white rounded-md"><img src="/sayfa3karakter.png" alt="Character 1" /></div>
          <div className="p-4 bg-white rounded-md"><img src="/sayfa3karakter1.png" alt="Character 2" /></div>
        </div>
      </div>
    </div>
      <h1 className="absolute left-[30%] mt-[-49%] md:text-8xl font-bold text-black md:mt-[-37%] md:left-[22%]">
        <span className="text-black">Yarat,</span>
        <span className="text-gray-300"> Oynat,</span>
        <span className="text-gray-300"> Kazan!</span>
      </h1>

    <div className="flex flex-col md:flex-row items-start md:items-center">
        <img
      src="/savasoyunuimg.png"
      alt="top-down tasarım"
      className="w-[60%] h-[10%] md:w-[30%] md:h-[10%] object-cover mx-auto md:ml-[16%]"
    />
      
  <div className="flex flex-col justify-center gap-4 md:w-[38%] w-full md:h-[90%] h-full order-1 md:order-2 px-4 mt-6 md:mr-[12%]">
    <h2 className="md:text-xl font-bold">nelere dikkat etmeliyiz?</h2>
    <h1 className="md:text-4xl font-extrabold">top-down tasarım</h1>
    <h3 className="md:text-lg text-sm font-semibold">Neden Top-Down Perspektifi?</h3>
    <p>Oyunlardaki bu perspektif, oyuncunun çevreyle etkileşimini ve düşmanlarla olan çatışma alanını geniş tutar. Bu nedenle birçok strateji ve rol yapma oyununda tercih edilir.</p>
    <p>Oyunlardaki bu perspektif, oyuncunun çevreyle etkileşimini ve düşmanlarla olan çatışma alanını geniş tutar. Bu nedenle birçok strateji ve rol yapma oyununda tercih edilir.</p>
    <h2 className="text-white">hemen başvur</h2>
  </div>
</div>
<div className="relative md:mt-12 mt-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
   
    <div className="relative overflow-hidden">
      <img
        src="/ornekassest.png"
        alt="Örnek asset dosyası"
        className="w-full h-[180px] md:h-[240px] object-cover rounded-sm"
      />
      <a
        href="/path-to-your-file/ornekassest.png"
        download
        className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black text-white py-1.5 px-3 md:py-2 md:px-4 rounded-full shadow-lg flex items-center gap-1 md:gap-2 hover:bg-gray-800 transition duration-300 text-xs md:text-sm"
      >
        <FaDownload className="text-white text-sm md:text-base" />
        <span>İndir</span>
      </a>
    </div>

   
    <div className="relative overflow-hidden">
      <img
        src="/ornekgdd.png"
        alt="Örnek GDD dosyası"
        className="w-full h-[200px] md:h-[240px] object-cover rounded-sm"
      />
      <a
        href="/path-to-your-file/ornekgdd.png"
        download
        className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black text-white py-1.5 px-3 md:py-2 md:px-4 rounded-full shadow-lg flex items-center gap-1 md:gap-2 hover:bg-gray-800 transition duration-300 text-xs md:text-sm"
      >
        <FaDownload className="text-white text-sm md:text-base" />
        <span>İndir</span>
      </a>
    </div>


    <div className="relative overflow-hidden">
      <img
        src="/ornekassest.png"
        alt="Size özel temsilci"
        className="w-full h-[200px] md:h-[240px] object-cover rounded-sm"
      />
      <a
        href="/path-to-your-file/ornekassest.png"
        download
        className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black text-white py-1.5 px-3 md:py-2 md:px-4 rounded-full shadow-lg flex items-center gap-1 md:gap-2 hover:bg-gray-800 transition duration-300 text-xs md:text-sm"
      >
        <FaDownload className="text-white text-sm md:text-base" />
        <span>İndir</span>
      </a>
    </div>
  </div>
</div>

<div className="relative w-full h-[120vh] bg-yellow-100 overflow-hidden">
  <div className="absolute bottom-0 w-full h-[40%]">
    <img src="/parallax01_footer.png" alt="Pyramid Background" className="w-full h-full object-cover" />
  </div>
  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
    <h1 className="md:text-6xl text-4xl font-extrabold tracking-wide">
      <span className="text-black">gametable ile </span>
      <span className="text-black">karakter</span>
      <span className="text-orange-300">leriniz</span>
      <span className="block text-orange-200">hayat<span className="text-orange-200">•</span>verin</span>
    </h1>
  </div>
  <div className="absolute md:mt-[20%] mt-[80%] md:w-full flex justify-center gap-16">
    <img src="/Vectorfooter.png" alt="Lise Mumyası" className="md:w-60 w-24 md:h-60" />
    <img src="/Vectorfooter1.png" alt="Üniversite Mumyası" className="md:w-60 w-24 md:h-60" />
    <img src="/Vectorfooter.png" alt="Uzay Mumyası" className="md:w-60 w-24 md:h-60" />
  </div>
</div>
<div className="min-h-screen flex items-center justify-center bg-[#6A3A2F] px-4">
  <div className="w-full max-w-sm text-center text-[#FFA07A]">
    <h1 className="text-3xl font-semibold">creator<br />basvuru</h1>
    <p className="text-xs mt-2 text-[#D4A190]">
      Size ulaşabilmemiz için tüm uygunluk formu eksiksiz doldurun.
    </p>
    <form className="mt-4 space-y-3">
      <input type="text" placeholder="AD SOYAD" className="w-full p-2.5 rounded-md bg-[#A86E5E] text-white placeholder-[#F4C2AB] outline-none text-sm" />
      <input type="email" placeholder="E-MAIL" className="w-full p-2.5 rounded-md bg-[#A86E5E] text-white placeholder-[#F4C2AB] outline-none text-sm" />
      <div className="relative">
        <input type="tel" placeholder="TELEFON" className="w-full p-2.5 rounded-md bg-[#A86E5E] text-white placeholder-[#F4C2AB] outline-none text-sm" />
        <span className="absolute right-3 top-2.5 text-white text-sm">📞</span>
      </div>
      <input type="text" placeholder="PORTFOLIO" className="w-full p-2.5 rounded-md bg-[#A86E5E] text-white placeholder-[#F4C2AB] outline-none text-sm" />
      <div className="flex items-center text-xs text-[#D4A190]">
        <input type="checkbox" className="mr-2" />
        <span>
          Kabul ediyorum <a href="#" className="text-white underline">ŞARTLAR</a>
        </span>
      </div>
      <button type="submit" className="w-full p-2.5 rounded-md bg-[#FF8C65] text-white font-semibold text-sm">GÖNDER</button>
    </form>
    <div className="mt-4 text-white text-xs">
      <span>kalenda • kayit ol • creator • puan tablosu</span>
    </div>
    <div className="mt-3 text-white font-bold text-base">GAME<span className="text-[#FFA07A]">TABLE</span></div>
  </div>
</div>
</div>
  )
}
