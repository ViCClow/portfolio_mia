import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-white text-xl font-serif tracking-widest uppercase">
        Mia D'Mon
      </div>
      <div className="flex gap-8 text-white/80 text-sm tracking-widest uppercase font-light">
        <a href="/#cine" className="hover:text-[#8B0000] transition-colors">Cine</a>
        <a href="/#modelado" className="hover:text-[#8B0000] transition-colors">Modelado</a>
        <a href="/#voz" className="hover:text-[#8B0000] transition-colors">Voz</a>
        <a href="/#teatro" className="hover:text-[#8B0000] transition-colors">Teatro</a>
        <a href="/#contact" className="hover:text-[#8B0000] transition-colors">Contacto</a>
      </div>
    </motion.nav>
  );
};
