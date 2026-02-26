import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, MapPin } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#1A1A1A] text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.5em] text-[#DC143C] mb-6">Contratación y Consultas</h2>
            <h3 className="text-5xl md:text-7xl font-serif mb-12">Vamos a crear.</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#DC143C]/20 flex items-center justify-center rounded-full">
                  <Mail className="w-5 h-5 text-[#DC143C]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Contacto Profesional</p>
                  <a href="mailto:mia.dmonn@gmail.com" className="text-xl font-serif hover:text-[#DC143C] transition-colors">
                    mia.dmonn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#DC143C]/20 flex items-center justify-center rounded-full">
                  <MapPin className="w-5 h-5 text-[#DC143C]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Base</p>
                  <p className="text-xl font-serif">Concepción / Santiago, Chile</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <a href="https://www.instagram.com/dulcymia/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC143C] transition-colors">
                <Instagram className="w-12 h-12" />
              </a>
              <a href="https://www.tiktok.com/@dulcymiaa?_r=1&_t=ZS-940iyoXmY92" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC143C] transition-colors">
                <TikTokIcon className="w-12 h-12" />
              </a>
              <div className="flex-1 border-b border-white/10" />
            </div>
          </div>

          <div className="bg-[#2D2D2D] p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Nombre Completo</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#DC143C] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Correo Electrónico</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#DC143C] outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Asunto</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#DC143C] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Mensaje</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#DC143C] outline-none transition-colors resize-none" />
              </div>
              <button className="w-full bg-[#DC143C] text-white py-4 uppercase tracking-[0.3em] text-xs font-bold hover:bg-[#FF1744] transition-colors cursor-pointer">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-white/20 uppercase">
          <p>© 2026 Mia D'Mon Portfolio</p>
          <p>Diseñado para el Alma</p>
        </div>
      </div>
    </section>
  );
};