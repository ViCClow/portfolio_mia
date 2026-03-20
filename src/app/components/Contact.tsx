import React, { useState } from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Contact = () => {
  // Estados para manejar el botón y el feedback visual
  const [status, setStatus] = useState("Enviar Mensaje");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Enviando...");

    // 1. Guardamos la referencia del formulario antes de que React la borre
    const form = e.currentTarget;
    
    const formData = new FormData(form);
    
    formData.append("access_key", (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log("Llave cargada:", (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY ? "Sí" : "No");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setStatus("¡Mensaje Enviado!");
        // 2. Usamos la variable que guardamos arriba para limpiar el formulario
        form.reset(); 
      } else {
        console.error("Error de Web3Forms:", data.message);
        setStatus("Hubo un error");
      }
    } catch (error) {
      console.error("Error de red:", error);
      setStatus("Hubo un error");
    }

    setTimeout(() => {
      setStatus("Enviar Mensaje");
      setIsSubmitting(false);
    }, 3000);
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Nombre Completo</label>
                  <input type="text" name="name" required className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#DC143C] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Correo Electrónico</label>
                  <input type="email" name="email" required className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#DC143C] outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Asunto</label>
                <input type="text" name="subject" required className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#DC143C] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Mensaje</label>
                <textarea name="message" rows={4} required className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#DC143C] outline-none transition-colors resize-none" />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full text-white py-4 uppercase tracking-[0.3em] text-xs font-bold transition-colors cursor-pointer ${
                  status === "¡Mensaje Enviado!" ? "bg-green-600 hover:bg-green-700" : "bg-[#DC143C] hover:bg-[#FF1744]"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status}
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