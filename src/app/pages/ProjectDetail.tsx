import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Calendar, User, Camera, Theater, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Contact } from '../components/Contact';

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-serif mb-4 text-[#1A1A1A]">Proyecto no encontrado</h2>
        <Link to="/" className="text-[#8B0000] uppercase tracking-widest font-bold flex items-center gap-2">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>
      </div>
    );
  }

  const allImages = [project.mainImage, ...(project.gallery || [])];

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setLightboxIndex(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] selection:bg-[#8B0000] selection:text-white">
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#1A1A1A]/40 hover:text-[#8B0000] transition-colors uppercase tracking-[0.3em] text-[10px] font-bold mb-12"
          >
            <ArrowLeft size={14} /> Volver al Portafolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <span className="text-[#8B0000] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                  {project.type === 'modelado' ? 'Modelado' : project.type === 'cortometraje' ? 'Actuación de Cine' : 'Teatro'}
                </span>
                <h1 className="text-6xl md:text-8xl font-serif leading-none mb-6 text-[#1A1A1A]">{project.title}</h1>
              </div>

              <div className="flex flex-wrap gap-8 py-6 border-y border-[#1A1A1A]/10">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-[#8B0000]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Año</p>
                    <p className="font-serif italic text-[#1A1A1A]">{project.year}</p>
                  </div>
                </div>
                {project.role && (
                  <div className="flex items-center gap-3">
                    <User size={18} className="text-[#8B0000]" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Rol / Papel</p>
                      <p className="font-serif italic text-[#1A1A1A]">{project.role}</p>
                    </div>
                  </div>
                )}
                {project.director && (
                  <div className="flex items-center gap-3">
                    <Theater size={18} className="text-[#8B0000]" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Compañía / Director</p>
                      <p className="font-serif italic text-[#1A1A1A]">{project.director}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="prose prose-lg">
                <p className="text-[#1A1A1A]/70 leading-relaxed text-lg font-light first-letter:text-5xl first-letter:font-serif first-letter:text-[#8B0000] first-letter:mr-3 first-letter:float-left">
                  {project.description}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setLightboxIndex(0)}
              className="relative aspect-[3/4] bg-[#2D2D2D] overflow-hidden group cursor-zoom-in"
            >
              <ImageWithFallback 
                src={project.mainImage}
                alt={project.title}
                className={`w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-1000 ${project.position || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent group-hover:from-[#1A1A1A]/60 transition-all duration-500" />
              <div className="absolute bottom-8 right-8 text-white/40 group-hover:text-white transition-colors duration-500">
                <Maximize2 size={24} strokeWidth={1} />
              </div>
            </motion.div>
          </div>

          {/* Mini Book Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-32">
              <h2 className="text-3xl font-serif mb-12 text-center uppercase tracking-widest text-[#1A1A1A]">Mini Book</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.gallery.map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setLightboxIndex(i + 1)}
                    className="aspect-[4/5] bg-[#2D2D2D] overflow-hidden group cursor-zoom-in relative"
                  >
                    <ImageWithFallback 
                      src={img}
                      alt={`Gallery ${i}`}
                      className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Contact />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            {/* Grain on modal */}
            <div className="fixed inset-0 pointer-events-none z-[110] opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-8 right-8 z-[120] text-white/50 hover:text-white transition-colors"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-12 z-[120] text-white/30 hover:text-white transition-colors p-4"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-12 z-[120] text-white/30 hover:text-white transition-colors p-4"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="max-w-full max-h-full flex items-center justify-center"
              >
                <img 
                  src={allImages[lightboxIndex]} 
                  alt="Full size"
                  className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                />
              </motion.div>
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/40 text-xs tracking-[0.5em] uppercase font-bold">
                {lightboxIndex + 1} / {allImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
