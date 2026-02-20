import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY;
    if (latest < 100) {
      setHidden(false);
    } else if (diff > 5) {
      setHidden(true);
    } else if (diff < -5) {
      setHidden(false);
    }
    setLastScrollY(latest);
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 px-12 py-8 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-white text-2xl font-serif tracking-[0.2em] uppercase">
        <a href="/">Mia D'Mon</a>
      </div>
      <div className="flex gap-12 text-white/80 text-xs tracking-[0.2em] uppercase font-bold">
        <a href="/#cine" className="hover:text-[#8B0000] transition-colors">Cine</a>
        <a href="/#modelado" className="hover:text-[#8B0000] transition-colors">Modelado</a>
        <a href="/#voz" className="hover:text-[#8B0000] transition-colors">Voz</a>
        <a href="/#teatro" className="hover:text-[#8B0000] transition-colors">Teatro</a>
        <a href="/#contact" className="hover:text-[#8B0000] transition-colors">Contacto</a>
      </div>
    </motion.nav>
  );
};
