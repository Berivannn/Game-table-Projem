"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mouse } from "lucide-react";

export default function BayiPages() {
  const games = [
    { src: "/reactor_bayi.png", alt: "Reactor Fusion" },
    { src: "/okcu_bayi.png", alt: "Okçu Ninja" },
    { src: "/neono_bayi.png", alt: "Neon Hockey" },
    { src: "/bombaci_bayi.png", alt: "Bombacı" },
    { src: "/kizmabirader_bayi.png", alt: "Kızma Birader" },
    { src: "/kelimeavi_bayi.png", alt: "Kelime Avı" },
    { src: "/kafatopu_bayi.png", alt: "Kafa Golü" },
    { src: "/hafiza_bayi.png", alt: "Hafıza Oyunu" },
    { src: "/fingerGoal_bayi.png", alt: "Finger Goal" },
    { src: "/elevencard_bayi.png", alt: "Eleven Cards" },
    { src: "/dogruluk_bayi.png", alt: "Doğruluk Cesaret" },
    { src: "/kubikzeka.png", alt: "Kubik Zeka" },
    { src: "/bilvekazan_bayi.png", alt: "Bil ve Kazan" },
    { src: "/bilardo_bayi.png", alt: "Bilardo" },
    { src: "/2048_bayi.png", alt: "2048" }
  ];
  const faqItems = [
    {
      question: 'İşletmeme koymak için ücret öder miyim?',
      answer:
        'Hayır, GameTable’in kurulumu tamamen ücretsizdir. İşletmenize hiçbir maliyet yansıtılmaz ve cihaz için ödeme yapmanız gerekmez.',
    },
    {
      question: 'GameTable ile nasıl gelir elde edebilirim?',
      answer:
        'Gelir modeli oynanma süresine dayalıdır. Müşteriler oyun oynadıkça işletmeniz belirlenen kazanç oranında gelir elde eder. Ne kadar çok oyun oynanırsa, kazancınız o kadar artar.',
    },
    {
      question: 'GameTable’ın kurulumu ne kadar sürer?',
      answer:
        'Kurulum oldukça hızlı ve kolaydır. Uzman ekibimiz cihazı işletmenize getirir, kurulumunu yapar ve anında kullanıma hazır hale getirir.',
    },
    {
      question: 'GameTable işletmemde ne kadar alan kaplar?',
      answer:
        'Cihaz kompakt ve ergonomik bir tasarıma sahiptir. Masaların üzerine veya özel bir alana kolayca yerleştirilebilir. İşletmenizde büyük bir yer kaplamaz, alanınıza uygun olarak konumlandırılabilir.',
    },
    {
      question: 'GameTable hangi oyunları içeriyor?',
      answer:
        'GameTable her yaş grubuna hitap eden geniş bir oyun yelpazesi sunar. Zeka oyunları, yarış oyunları, refleks gerektiren eğlenceler, strateji oyunları ve çocuk dostu içerikler gibi birçok seçeneğe sahiptir.',
    },
    {
      question: 'Müşterilerim GameTable’a nasıl ödeme yapacak?',
      answer:
        'Oyunları oynamak için, GameTable sistemi üzerinden kredi kartlarını okuturlar. Müşteriler dokunmatik ekran üzerinden oyun süresi satın alabilir ve anında oynamaya başlayabilir.',
    },
  ];
  const [loaded, setLoaded] = useState(false);
  const [activeWord, setActiveWord] = useState(0);
  const words = ["müşteriler", "oynasın","sen",  ".", "kazan"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      const section = document.getElementById("animated-text-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.5) {
          let index = 0;
          const interval = setInterval(() => {
            setActiveWord(index);
            index++;
            if (index >= words.length) {
              clearInterval(interval);
            }
          }, 1000);
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bayiarkaplan.png')" }}
      >
 
        <div className="absolute md:top-5 top-[15%] right-[30%] md:right-5 flex items-center space-x-4">
          <Link
            href="/"
            className="bg-white text-black font-semibold px-4 py-2 rounded-full md:text-sm shadow-md hover:bg-gray-200"
          >
            ANASAYFA →
          </Link>
          <div className="text-white font-bold">BİZE ULAŞ<br />4310000</div>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <Instagram size={28} />
          </a>
        </div>

    
        <div className="absolute md:top-10 top-[5%] left-[20%] md:left-10 flex items-center space-x-2">
          <Image src="/creatorlogo.png" alt="GameTable Logo" width={150} height={50} />
          <Image src="/bayilogo.png" alt="GameTable Bayi" width={50} height={20} />
        </div>

    
        <div className="absolute md:mt-[20%] mt-[50%] md:mt-[15%] md:left-10 text-white md:max-w-md">
          <h1 className="text-white">
            <span className="md:text-3xl ">dokunmatik</span><br />
            <span className="md:text-9xl">oyun masası</span>
          </h1>
          <p className="md:mt-4 md:text-md">
            Müşterilerinizin keyifli vakit geçirmesini sağlarken işletmenize yeni bir gelir kaynağı eklemeye ne dersin?
          </p>
          <a href="#" className="md:mt-6 md:text-lg font-bold underline">Başvuru Yap</a>
        </div>

     
        <div className="absolute md:left-[60%] mt-[80%] md:w-[40%] md:h-[60%] left-[5%] md:mt-[23%]">
          <Image src="/bayimasa.png" alt="Oyun Masası" width={500} height={250} />
        </div>
        <div className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Mouse className="w-5 h-5 md:w-6 md:h-6 text-black animate-bounce" />
        </div>
      </div>

      <div className="w-full bg-black py-20 flex flex-col md:flex-row items-center justify-center text-white px-6">
        <div className="absolute md:mt-[-36%] max-w-[60%] md:ml-[12%] sm:block hidden">
        <p className="md:text-xl md:mb-4">
            <span className="text-gray-500 md:mt-[50%] md:ml-[20%]">gametable ile</span><br />
            {words.map((word, index) => (
              <span
                key={index}
                className={`text-8xl  transition-colors duration-500 ${activeWord === index ? 'text-white' : 'text-blue-900'}`}
              >
                {word} {" "}
              </span>
            ))}
          </p>
        </div>
        <div className="md:w-1/2 w-[40%] flex justify-center md:mt-[30%]">
          <Image src="/playmasa.png" alt="Oyun Masası" width={500} height={250} />
        </div>
        <div id="animated-text-section" className="md:w-[40%] text-left md:mt-[30%] md:pl-10">
          
          <h2 className="md:text-4xl font-bold">maliyet yok <br /><span className="text-white md:text-5xl">Sıfır risk!</span></h2>
          <p className="md:mt-4 md:text-lg">
            İşletmenize eğlence katarken hiçbir maliyet olmadan ek gelir elde etmek ister misiniz?
          </p>
          <ul className="md:mt-4 space-y-2 md:text-lg list-disc list-inside">
            <li>Playox işletmenize tamamen ücretsiz olarak kurulur.</li>
            <li>Müşteriler oyun oynadıkça, gelir elde edersiniz.</li>
            <li>Gelir paylaşım modeli sayesinde siz sadece kazandıkça kazanırsınız.</li>
          </ul>
          <a href="#" className="mt-6 inline-block text-lg font-bold underline">Hemen Başvur</a>
        </div>
      </div>
      <div className="bg-white py-20 px-5 md:px-20 text-black">
        <h2 className="text-4xl font-bold text-center mb-10">Gametable’ın avantajları</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
          <div className="bg-blue-100 p-5 rounded-xl">
            <h2 className="font-bold text-left">Kurulum ve bakım maliyeti yok</h2>
            <h4 className="text-left mt-2">İşletmeniz için hiçbir masraf oluşturmaz. Tamamen ücretsizdir.</h4>
            </div>
          <div className="bg-blue-100 p-5 rounded-xl text-left">
          <h2 className="font-bold text-left">Pasif gelir modeli</h2>
          <h4 className="text-left mt-2">Oyun oynandıkça otomatik olarak kazanç sağlarsınız.</h4>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl text-left">
          <h2 className="font-bold text-left">Müşterileriniz uzun süre kalır</h2>
          <h4 className="text-left mt-2">Eğlenceli bir deneyim sunduğunuz için müşteri memnuniyeti artar.</h4>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl text-left">
          <h2 className="font-bold text-left">Rakiplerinizden farklılaşın</h2>
          <h4 className="text-left mt-2">İşletmenizi yenilikçi bir eğlence konsepti ile güçlendirin.</h4>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl text-left">
          <h2 className="font-bold text-left">Influencer ve ücretsiz PR</h2>
          <h4 className="text-left mt-2">Tanınmış influencer ve içerik üreticileriyle iş birliği yaparak otel ve restoranlarda tanıtım etkinlikleri düzenlenir.s</h4>
          </div>
        </div>
      </div>

    
      <div className="bg-white py-20 px-5 md:px-20 text-black flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image src="/influncerdestekimg.png" alt="Influencer Desteği" width={550} height={350} />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-3xl font-bold">İşletmenize Özel Influencer Desteği</h3>
          <p className="mt-4">
            Gametable ile işletmenize ücretsiz reklam ve PR desteği sağlıyoruz. 
            Influencerlar ile iş birliği yaparak tanıtım etkinlikleri düzenliyoruz.
          </p>
          <div>
          <h3 className="text-xl font-bold md:mt-2">Nasıl çalışır</h3>
          <p className="md:mt-2">✅ Playbox, tanınmış influencer ve içerik üreticileriyle iş birliği yaparak cafe ve restoranlarda tanıtım etkinlikleri düzenler.
          </p>
          <p className="md:mt-2">
        ✅ Influencerlar, Playbox’un bulunduğu mekanlarda oyun deneyimlerini paylaşarak işletmenizin adını geniş kitlelere duyurur.
        </p>
         <p className="md:mt-2">
         ✅ Paylaşımlar sosyal medya platformlarında binlerce potansiyel müşteriye ulaşarak işletmenize ekstra görünürlük kazandırır.
          </p>
          </div>
          <div>
          <h3 className="text-xl font-bold md:mt-2">Ücretsiz Reklam ve PR Avantajları:</h3>
          <p className="md:mt-2">✅ Influencer desteğiyle işletmenizin tanıtımı yapılır.
          </p>
          <p className="md:mt-2">
          ✅ Ekstra pazarlama bütçesi ayırmanıza gerek kalmadan sosyal medyada geniş kitlelere ulaşabilirsiniz.
        </p>
         <p className="md:mt-2">
         ✅ Daha çok müşteri işletmenizi ziyaret eder, mağdur trafiğiniz artar.
          </p>
          <p className="md:mt-2">
          ✅ Rakiplerinizden ayrışarak Playbox sayesinde yenilikçi bir imaj kazanırsınız.
          </p>
          </div>
          <a href="#" className="mt-6 inline-block bg-black text-white px-5 py-2 rounded-lg">Hemen Başvur</a>
        </div>
        
      </div>
      <div className="container px-12 md:w-full overflow-hidden mx-auto">
  
  <div className="grid grid-cols-2 gap-4 md:col-span-2">
    <Image 
      src="/bayiimg.png" 
      alt="GameTable Kullanım" 
      width={400} 
      height={300} 
      className="md:w-full object-cover"
    />
    <Image 
      src="/bayiimg2.png" 
      alt="GameTable Eğlence" 
      width={400} 
      height={300} 
      className="md:w-[60%] md:h-[80%]"
    />
  </div>


  <div className="grid grid-cols-2 gap-4 md:col-span-2">
  <div className="md:mt-[-30%] mt-[-90%]">
    <Image 
      src="/rekabetimg3.png" 
      alt="GameTable Oynayanlar" 
      width={400} 
      height={300} 
      className="md:w-[105%] md:h-[75%] object-cover"
    />
   </div>
   <div className="md:mt-[-18%] mt-[5%]">
    <Image 
      src="/bayiimg4.png" 
      alt="GameTable Deneyimi" 
      width={400} 
      height={300} 
      className="md:w-[60%] md:h-[70%]"
    />
    </div>
</div>
</div>
<div className="max-w-5xl mx-auto px-4 py-10">
    
      <div className="mb-8">
        <h2 className="text-xl font-light uppercase tracking-wide text-gray-700">
          gametable
        </h2>
        <h1 className="text-5xl font-bold leading-tight">teslim içeriği</h1>
      </div>

     
      <div className="space-y-6">
      
        <div className="border-t border-black pt-4 flex justify-between items-start">
          <div className="w-1/3 font-semibold text-lg">
            1 Adet Gametable <br /> oyun masası:
          </div>
          <div className="w-2/3 text-gray-600">
            We don’t do volume. We partner with only five clients a year, 
            focusing our expertise on their success. Every detail is crafted, 
            every decision strategic, and every outcome transformative. 
            We build brands that set new benchmarks.
          </div>
          <div className="text-sm font-semibold text-gray-800 underline ml-2"><a href="#">resimi gör</a></div>
        </div>

      
        <div className="border-t border-black pt-4 flex justify-between items-start">
          <div className="w-1/3 font-semibold text-lg">
            1 Adet Led ışıklı, <br /> baskılı halı
          </div>
          <div className="w-2/3 text-gray-600">
            Data is vital. Fostering an emotional connection with your audience 
            is equally vital if you want to drive retention and advocacy. 
            That’s why we create brands that not only captivate but also deliver 
            measurable and sustainable growth.
          </div>
          <div className="text-sm font-semibold text-gray-800 underline ml-2"><a href="#">resimi gör</a></div>
        </div>

        <div className="border-t border-black pt-4 flex justify-between items-start">
          <div className="w-1/3 font-semibold text-lg">
            2 Adet baskılı <br /> Roll-Up
          </div>
          <div className="w-2/3 text-gray-600">
            Data is vital. Fostering an emotional connection with your audience 
            is equally vital if you want to drive retention and advocacy.
          </div>
          <div className="text-sm font-semibold text-gray-800 underline ml-2"><a href="#">resimi gör</a></div>
        </div>
      </div>
    </div>
    <div className="bg-black py-16 text-center">
      <h2 className="text-white text-4xl font-bold mb-10">Oyunlar</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {games.map((game, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={game.src}
              alt={game.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="bg-black min-h-screen flex flex-col items-center py-16 px-4">
      <h2 className="text-white text-4xl font-semibold mb-8 text-center">Sıkça sorulan sorular</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
            <p className="text-gray-700 mb-4">{item.answer}</p>
            <button className="text-black font-semibold underline">hemen başvur</button>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
}
