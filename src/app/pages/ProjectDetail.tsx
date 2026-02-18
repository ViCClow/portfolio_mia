import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { projects } from '../data/projects';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Calendar, User, Camera, Theater } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Contact } from '../components/Contact';

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-serif mb-4">Proyecto no encontrado</h2>
        <Link to="/" className="text-[#8B0000] uppercase tracking-widest font-bold flex items-center gap-2">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>
      </div>
    );
  }

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
                <h1 className="text-6xl md:text-8xl font-serif leading-none mb-6">{project.title}</h1>
              </div>

              <div className="flex flex-wrap gap-8 py-6 border-y border-[#1A1A1A]/10">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-[#8B0000]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Año</p>
                    <p className="font-serif italic">{project.year}</p>
                  </div>
                </div>
                {project.role && (
                  <div className="flex items-center gap-3">
                    <User size={18} className="text-[#8B0000]" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Rol / Papel</p>
                      <p className="font-serif italic">{project.role}</p>
                    </div>
                  </div>
                )}
                {project.director && (
                  <div className="flex items-center gap-3">
                    <Theater size={18} className="text-[#8B0000]" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Compañía / Director</p>
                      <p className="font-serif italic">{project.director}</p>
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
              className="relative aspect-[3/4] bg-[#2D2D2D] overflow-hidden group"
            >
              <ImageWithFallback 
                src={project.mainImage}
                alt={project.title}
                className={`w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-1000 ${project.position || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent" />
            </motion.div>
          </div>

          {/* Mini Book Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-32">
              <h2 className="text-3xl font-serif mb-12 text-center uppercase tracking-widest">Mini Book</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.gallery.map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square bg-[#2D2D2D] overflow-hidden"
                  >
                    <ImageWithFallback 
                      src={img}
                      alt={`Gallery ${i}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Contact />
    </div>
  );
};
