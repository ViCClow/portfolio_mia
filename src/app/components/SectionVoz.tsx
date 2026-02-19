import React from 'react';
import { motion } from 'motion/react';
import { Mic2, Play, Volume2 } from 'lucide-react';

const voiceWorks = [
  {
    id: "grima",
    title: "GRIMA",
    type: "Narración de Terror / Animación",
    year: "2025",
    status: "Proyecto Destacado",
    description: "Interpretación vocal del personaje Alison para cortometraje de animación de terror, explorando matices oscuros y atmosféricos.",
    link: "https://www.youtube.com/watch?v=kPzhHMVHrTA"
  },
  {
    id: "corazon-deforme",
    title: "Corazón Deforme",
    type: "Interpretación Musical / Soundtrack",
    year: "2025",
    status: "Canción Original",
    description: "Canción original creada para el cortometraje 'Jörmungandr', interpretada en su totalidad por Mia D'Mon.",
    link: "#" // Placeholder if no link provided yet
  }
];

export const SectionVoz = () => {
  return (
    <section id="voz" className="py-24 bg-[#1A1A1A] text-[#FDFBF7] relative overflow-hidden border-t border-white/5">
      {/* Background grain texture effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.5em] text-[#8B0000] mb-4">El Poder del Sonido</h2>
          <h3 className="text-5xl md:text-7xl font-serif">Actuación de Voz</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {voiceWorks.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#2D2D2D]/30 p-8 md:p-12 border border-white/5 relative overflow-hidden group backdrop-blur-sm flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Mic2 className="w-24 h-24" />
              </div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <span className="text-[#8B0000] text-[10px] uppercase tracking-[0.4em] font-bold block mb-3">{work.type}</span>
                  <h4 className="text-4xl md:text-5xl font-serif mb-2">{work.title}</h4>
                  <p className="text-white/40 font-serif italic text-base">{work.year}</p>
                </div>

                <p className="text-white/60 text-base leading-relaxed mb-12 font-light tracking-wide">
                  {work.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-auto">
                  <div className="flex-1 h-px bg-white/10" />
                  <motion.a 
                    href={work.link}
                    target={work.link !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group cursor-pointer no-underline"
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold group-hover:text-[#8B0000] transition-colors text-[#FDFBF7]">
                      {work.id === 'grima' ? 'Ver en YouTube' : 'Proximamente'}
                    </span>
                    <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center group-hover:bg-[#A50000] transition-all duration-300">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
