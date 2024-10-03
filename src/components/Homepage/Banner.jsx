import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { id: 1, image: '/image.png', title: 'KRADLE', subtitle: '2023' },
    { id: 2, image: '/image-2.jpg', title: 'Slide 2', subtitle: '2023' },
    { id: 3, image: '/image-3.jpg', title: 'Slide 3', subtitle: '2023' },
  ];

  const goToNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIsHovering(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setTimeout(() => {
        setIsTransitioning(false);
        setIsHovering(false);
      }, 1000);
    }
  };

  const nextSlideIndex = (currentSlide + 1) % slides.length;

  return (
    <div className="relative overflow-hidden h-screen">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 flex flex-col justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={`pl-[10%] pr-[15%] pb-16 ${isHovering || isTransitioning ? '-translate-x-16' : ''} transition-transform duration-500`}>
              <p className="text-white text-xl mb-2">{slides[currentSlide].subtitle}</p>
              <h2 className="text-white text-7xl font-bold mb-4">{slides[currentSlide].title}</h2>
              <div className="flex items-center">
                <span className="text-white text-lg mr-2">see project</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="absolute top-0 right-0 bottom-0 overflow-hidden cursor-pointer"
        initial={{ width: '5%' }}
        animate={{ width: isHovering || isTransitioning ? '10%' : '5%' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        onMouseEnter={() => !isTransitioning && setIsHovering(true)}
        onMouseLeave={() => !isTransitioning && setIsHovering(false)}
        onClick={goToNextSlide}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[nextSlideIndex].image})` }}
        />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering || isTransitioning ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white text-sm mb-1">{slides[nextSlideIndex].subtitle}</p>
          <h3 className="text-white text-xl font-bold">{slides[nextSlideIndex].title}</h3>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;