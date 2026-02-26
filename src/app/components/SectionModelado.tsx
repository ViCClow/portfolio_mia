import React from 'react';
import { motion } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

const modelingPhotos = [
  {
    id: "bear-barber",
    src: "https://i.ibb.co/C5GNWr9n/photo-5096194257273859518-y.webp",
    title: "Bear Barber: Barbería del Ayer",
    category: "Comercial"
  },
  {
    id: "rock",
    src: "https://i.ibb.co/4wBmNzY5/DSC00480-ed.webp",
    title: "Elegancia Eléctrica",
    category: "Colaboración / Polas"
  },
  {
    id: "oldcars",
    src: "https://i.ibb.co/mryFzYZC/photo-5078274726002011951-y.webp",
    title: "Legado en Metal",
    category: "Colaboración"
  },
  {
    id: "rio",
    src: "https://i.ibb.co/XkzqvxPz/DSC-0061.webp",
    title: "Misterio del Bío-Bío",
    category: "Colaboración"
  },
  {
    id: "speakeasy",
    src: "https://i.ibb.co/XxmDN8Ww/photo-5078274726002011894-y.webp",
    title: "Relatos de SpeakEasy",
    category: "Colaboración"
  },
  {
    id: "r2estudio",
    src: "https://i.ibb.co/8ngXKrt4/Whats-App-Image-2026-02-25-at-20-15-13.webp",
    title: "Vintage Pin-Up: R2Estudio",
    category: "Colaboración / Pinup"
  },
  {
    id: "libreria",
    src: "https://i.ibb.co/wZqbK5jn/PHOTO-279.webp",
    title: "Notas y Letras",
    category: "Colaboración"
  },
  {
    id: "lluvia",
    src: "https://i.ibb.co/d0N442kp/IMG-9772.webp",
    title: "City Pop Nocturno",
    category: "Colaboración"
  },
  {
    id: "picnic",
    src: "https://i.ibb.co/hFM5qrvQ/photo-5078274726002012021-y.webp",
    title: "Placeres de Antaño",
    category: "Colaboración"
  }
];

export const SectionModelado = () => {
  return (
    <section id="modelado" className="py-24 bg-[#FDFBF7] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-sm uppercase tracking-[0.5em] text-[#DC143C] mb-4 font-medium">Estética y Forma</h2>
          <h3 className="text-5xl md:text-7xl font-serif mb-6">Modelado</h3>
          <p className="max-w-2xl text-[#1A1A1A]/60 font-light leading-relaxed">
            Explorando la narrativa a través de la imagen, desde el editorial artístico de alto contraste hasta campañas comerciales con impacto regional.
          </p>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1200: 3 }}>
          <Masonry gutter="2rem">
            {modelingPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-[#1A1A1A]"
              >
                <Link to={`/project/${photo.id}`}>
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.title}
                    className="w-full saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-[#DC143C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#1A1A1A] to-transparent">
                    <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.3em] underline block">Ver Mini Book</span>
                    <h4 className="text-white text-2xl md:text-3xl font-serif mb-2">{photo.title}</h4>
                    <span className="text-[#DC143C] text-xs md:text-sm uppercase tracking-widest font-bold block mb-3">{photo.category}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};
