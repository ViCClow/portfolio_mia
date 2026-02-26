import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 opacity-60">
        <ImageWithFallback
          src="https://i.ibb.co/zTt15SPj/DSC00438.webp"
          alt="Mia D'Mon Portrait"
          className="w-full h-full object-cover object-[50%_5%] grayscale brightness-75 scale-125 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-[#8B0000] uppercase tracking-[0.5em] text-sm mb-4 block font-medium">
            Escenario y Pantalla
          </span>
          <h1 className="text-[#FDFBF7] text-7xl md:text-9xl font-serif mb-6 leading-none">
            Mia D'Mon
          </h1>
          <p className="text-[#FDFBF7]/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto italic">
            "Una presencia que trasciende el lente y una voz que habita el misterio."
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#8B0000] to-transparent" />
      </motion.div>
    </section>
  );
};
