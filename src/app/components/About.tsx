import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[#1A1A1A] text-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-[#8B0000]/30 hidden md:block" />
            <div className="relative z-10 aspect-[4/5] bg-[#2D2D2D]">
              <ImageWithFallback
                src="https://i.ibb.co/9k2YWyLC/DSC00411.jpg"
                alt="Mia D'Mon Pola"
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#8B0000] p-8 hidden md:block">
              <p className="text-4xl font-serif leading-none italic">Registro</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm uppercase tracking-[0.5em] text-[#8B0000] mb-6">La Narrativa</h2>
            <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Una fuerza escénica desde el sur de Chile.
            </h3>
            <div className="space-y-6 text-[#FDFBF7]/70 font-light leading-relaxed text-lg">
              <p>
                Mia D'Mon es una actriz y modelo radicada en el sur de Chile, cuya identidad artística se define por una versatilidad que transita entre la intensidad del teatro clásico y la sofisticación de la moda atemporal. Con una formación sólida en actuación frente a cámara y voz, Mia no solo habita el encuadre, sino que aporta una profundidad narrativa que transforma cada fotograma en una escena cinematográfica.
              </p>
              <p>
                Su registro camaleónico le permite navegar con naturalidad entre la carga dramática del cine independiente y la pulcritud del universo editorial. Es en esa intersección —donde la esencia cruda del entorno se encuentra con la elegancia analógica de su presencia— donde reside el sello distintivo de su propuesta escénica.
              </p>
              <p className="font-serif italic text-white/90">
                "Mia posee esa cualidad cinematográfica innata: la capacidad de sostener el peso de una narrativa entera con la sutil arquitectura de una mirada."
              </p>
            </div>

            <div className="mt-12 flex gap-12 border-t border-white/10 pt-12">
              <div>
                <p className="text-[#8B0000] text-2xl font-serif">10+</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-1">Producciones</p>
              </div>
              <div>
                <p className="text-[#8B0000] text-2xl font-serif">04</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-1">Disciplinas</p>
              </div>
              <div>
                <p className="text-[#8B0000] text-2xl font-serif">CHL</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-1">Base</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
