import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

const plays = [
  {
    id: "isidora-y-el-puma",
    title: "Isidora y el puma",
    role: "Actriz",
    year: "2024",
    director: "Compañía “Teatro del Valle Nonguen”"
  },
  {
    id: "vivimos-en-peligro",
    title: "Vivimos en peligro",
    role: "Actriz",
    year: "2023",
    director: "Asociación de Municipalidades Parque Nacional Nonguén"
  },
  {
    id: "salvemos-a-la-aurora",
    title: "Salvemos a la Aurora",
    role: "Actriz",
    year: "2023",
    director: "Compañía teatral “La otra zapatilla”"
  }
];

export const SectionTeatro = () => {
  return (
    <section id="teatro" className="py-24 bg-[#FDFBF7] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.5em] text-[#8B0000] mb-4">Tablas y Escenarios</h2>
            <h3 className="text-5xl md:text-7xl font-serif">Teatro</h3>
          </div>
          <p className="max-w-xs text-sm uppercase tracking-widest text-[#1A1A1A]/50 font-light text-right">
            La pureza de la interpretación en vivo, donde no hay segunda toma.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-[#1A1A1A]/10 border-t border-b border-[#1A1A1A]/10">
          {plays.map((play, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/project/${play.id}`} className="py-12 flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] items-center gap-8 hover:bg-[#8B0000]/5 transition-colors px-4 block">
                <span className="text-4xl font-serif italic text-[#1A1A1A]/20 group-hover:text-[#8B0000] transition-colors">0{index + 1}</span>
                <div>
                  <h4 className="text-3xl md:text-5xl font-serif mb-2 group-hover:text-[#8B0000] transition-colors">{play.title}</h4>
                  <div className="flex gap-4 items-center">
                    <span className="text-[#8B0000] text-xs uppercase tracking-[0.2em] font-bold">{play.role}</span>
                    <span className="w-8 h-px bg-[#1A1A1A]/20" />
                    <span className="text-[#1A1A1A]/60 text-xs uppercase tracking-widest italic">{play.director}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-2">
                  <span className="text-xl font-serif text-[#1A1A1A]/40">{play.year}</span>
                  <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity">Ver Detalles</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-32 relative h-48 flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://i.ibb.co/yMtR9CH/DSC00438.jpg"
            alt="Grainy Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="w-16 h-px bg-[#8B0000]" />
          <p className="text-[#FDFBF7]/40 text-[10px] uppercase tracking-[0.8em] font-bold">Resumen de Carrera</p>
          <div className="w-16 h-px bg-[#8B0000]" />
        </div>
      </div>
    </section>
  );
};
