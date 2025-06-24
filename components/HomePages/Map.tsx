import { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Map() {
  const mapRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full bg-black flex justify-center relative"
    >
      {/* ✅ Tüm içerik bu sarmalayıcıda, sadece animasyon için */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-40px)",
          transition: "all 1.5s ease-out",
        }}
        className="w-full relative flex justify-center"
      >
        {/* Harita görseli */}
        <img
          src="/harita.png"
          alt="Map"
          className="w-full h-auto object-contain"
        />

        {/* Marker ve hover resmi */}
        <div
          className="absolute z-50 
           top-[45%] left-[70%] 
           sm:top-[40%] sm:left-[50%]
           md:top-[43%] md:left-[66%]"
          style={{
            top: "45%",
            left: "43%",
            transform: "translate(-20%, 120%)",
          }}
        >
          <div className="group relative w-4 h-4">
            <FaMapMarkerAlt
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
              color="red"
            />
            <div className="absolute left-[-60px] hidden group-hover:block z-50">
              <img
                src="/leventteras.jpg"
                alt="Maslak Detay"
                className="sm:w-52 md:w-64 lg:scale-[2.5] origin-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
