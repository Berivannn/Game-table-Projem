import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function OyunlarPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const hoverVariant = {
    hover: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop'
      }
    }
  };

  
  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: i * 0.2, 
        ease: 'easeOut',
      }
    })
  };

  const images = [
    "/tower.png", "/dogruluk.png", "/okcuninja.png", "/magictemplate.png",
    "/reactor.png", "/kafatopu.png", "/kubikzeka.png", "/kucukkapak.png"
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 relative">
      <h1 className="absolute top-[35%] md:top-[25%] text-white text-[30vw] md:text-[20vw] z-20">
        oyunlar
      </h1>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-4 gap-4 w-full max-w-6xl relative z-10 md:mt-20 sm:mt-[15%]"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="col-span-1"
            custom={index}
            initial="hidden"
            animate={controls}
            whileHover="hover"
     
          >
            <img
              src={src}
              alt={`game-${index}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
