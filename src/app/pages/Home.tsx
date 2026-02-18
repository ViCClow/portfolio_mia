import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { SectionCortometrajes } from '../components/SectionCortometrajes';
import { SectionTeatro } from '../components/SectionTeatro';
import { SectionVoz } from '../components/SectionVoz';
import { SectionModelado } from '../components/SectionModelado';
import { Filmography } from '../components/Filmography';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] selection:bg-[#8B0000] selection:text-white">
      {/* Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />
      
      <main>
        <Hero />
        
        <About />

        {/* Reordered sections based on user request */}
        <SectionCortometrajes />
        <SectionModelado />
        <SectionVoz />
        <SectionTeatro />
        
        <Filmography />
        
        <Contact />
      </main>

      {/* Footer / Social Floating (Optional) */}
      <div className="fixed left-8 bottom-8 z-50 hidden lg:flex flex-col gap-6 text-[#8B0000]">
        <div className="w-[1px] h-24 bg-[#8B0000]/30 self-center" />
        <span className="[writing-mode:vertical-lr] uppercase tracking-[0.5em] text-[10px] font-bold">Sigue la Sombra</span>
      </div>
    </div>
  );
};
