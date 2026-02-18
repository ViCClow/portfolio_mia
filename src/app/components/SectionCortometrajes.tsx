import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

const shortFilms = [
  {
    id: "cuando-las-hojas-lloran",
    title: "Cuando las hojas lloran",
    year: "2025",
    role: "Protagonista",
    desc: "Un drama sobre la pérdida, la busqueda y la memoria.",
    image: "https://i.ibb.co/XZtH7RRr/587430810-17852890605591522-4509560540323528349-n.jpg",
    position: "object-center"
  },
  {
    id: "jormungandr",
    title: "Jörmungandr",
    year: "2025",
    role: "Protagonista",
    desc: "Una busqueda del arte entre las visitudes de la vida.",
    image: "https://i.ibb.co/yGtKpbX/IMG-4726.jpg",
    position: "object-center"
  },
  {
    id: "de-grises-y-colores",
    title: "De grises y colores",
    year: "2025",
    role: "Protagonista",
    desc: "Un triangulo amoroso entre la estabilidad y el caos",
    image: "https://i.ibb.co/RGdsz85L/581113457-17850758871590035-8729580885854625903-n.jpg",
    position: "object-top"
  }
];

export const SectionCortometrajes = () => {
  return (
    <section id="cine" className="py-24 bg-[#1A1A1A] text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.5em] text-[#8B0000] mb-4">Séptimo Arte</h2>
          <h3 className="text-5xl md:text-7xl font-serif">Cortometrajes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {shortFilms.map((film, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <Link to={`/project/${film.id}`} className="block">
                <div className="aspect-[16/9] overflow-hidden bg-[#2D2D2D] mb-6">
                  <ImageWithFallback 
                    src={film.image} 
                    alt={film.title}
                    className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110 ${film.position || 'object-center'}`}
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-3xl font-serif mb-1 group-hover:text-[#8B0000] transition-colors">{film.title}</h4>
                    <p className="text-[#8B0000] uppercase tracking-widest text-xs font-bold">{film.role}</p>
                  </div>
                  <span className="text-[#FDFBF7]/30 font-serif italic text-2xl">{film.year}</span>
                </div>
                <p className="text-[#FDFBF7]/60 font-light leading-relaxed max-w-md mb-4">
                  {film.desc}
                </p>
                <span className="text-[#8B0000] text-[10px] uppercase tracking-[0.4em] font-bold border-b border-[#8B0000]/30 pb-1">Ver Detalles del Proyecto</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
