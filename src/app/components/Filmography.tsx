import React from 'react';
import { motion } from 'motion/react';

const credits = [
  { year: '2025', title: 'Cuando las hojas lloran', role: 'Protagonista', director: 'Cine de Autor / Académico', medium: 'Cortometraje' },
  { year: '2025', title: 'Jörmungandr', role: 'Protagonista', director: 'Cine de Autor / Académico', medium: 'Cortometraje' },
  { year: '2025', title: 'Isidora y el puma', role: 'Actriz', director: 'Teatro del Valle Nonguen', medium: 'Teatro' },
  { year: '2025', title: 'Vivimos en peligro', role: 'Actriz', director: 'Parque Nacional Nonguén', medium: 'Teatro' },
  { year: '2017', title: 'Salvemos a la Aurora', role: 'Actriz', director: 'La otra zapatilla', medium: 'Teatro' },
  { year: '2025', title: 'GRIMA', role: 'Actuación de Voz', director: 'Animación / Terror', medium: 'Voz / Short' },
  { year: '2025', title: 'Bear Barber: Barbería del Ayer', role: 'Modelo', director: 'Comercial', medium: 'Modelado' },
  { year: '2026', title: 'Elegancia Eléctrica', role: 'Modelo', director: 'Colab / Polas', medium: 'Modelado' },
];

export const Filmography = () => {
  const handleDownloadCV = () => {
    // El archivo CV_Mia_DMon.pdf debe existir en la carpeta /public
    const link = document.createElement('a');
    link.href = '/CV_YannelySalas.pdf';
    link.download = 'CV_YannelySalas.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-[#FDFBF7] text-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.5em] text-[#8B0000] mb-4 font-medium">Trayectoria</h2>
          <h3 className="text-5xl font-serif">Créditos Seleccionados</h3>
          <p className="mt-4 text-[#1A1A1A]/50 uppercase tracking-widest text-xs italic">Actuación frente a cámara y voz</p>
        </div>

        <div className="border-t border-[#1A1A1A]/10">
          {credits.map((credit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_150px_150px] gap-4 py-8 border-b border-[#1A1A1A]/10 items-center hover:bg-[#8B0000]/5 transition-colors px-4"
            >
              <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 font-bold">{credit.year}</span>
              <div>
                <h4 className="text-xl md:text-2xl font-serif group-hover:text-[#8B0000] transition-colors">{credit.title}</h4>
                <p className="text-sm italic text-[#1A1A1A]/60">como {credit.role}</p>
              </div>
              <span className="text-sm uppercase tracking-widest font-light hidden md:block">{credit.director}</span>
              <span className="text-[10px] uppercase tracking-widest bg-[#1A1A1A] text-[#FDFBF7] px-2 py-1 self-center justify-self-start md:justify-self-end text-center min-w-[100px]">
                {credit.medium}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={handleDownloadCV}
            className="border border-[#1A1A1A] px-10 py-4 uppercase tracking-[0.3em] text-xs hover:bg-[#1A1A1A] hover:text-[#FDFBF7] transition-all duration-300 cursor-pointer"
          >
            Descargar CV Completo
          </button>
        </div>
      </div>
    </section>
  );
};
