 "use client";

import { useState } from "react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Acá más adelante podés integrar Resend API o tu propio backend
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="flex flex-col gap-12 py-12 px-4 max-w-6xl mx-auto">
      
      {/* Encabezado */}
      <section className="text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Hablemos de tu <span className="text-blue-600">Proyecto</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Completá el formulario con los detalles de lo que tenés en mente o escribime directamente por WhatsApp para una respuesta más rápida.
        </p>
      </section>

      <div className="grid md:grid-cols-5 gap-12 items-start mt-8">
        
        {/* Columna Izquierda: Formulario (Ocupa 3 columnas) */}
        <div className="md:col-span-3 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          {enviado ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
              <h3 className="font-bold text-lg mb-2">¡Mensaje enviado!</h3>
              <p>Gracias por contactarte. Te voy a estar respondiendo a la brevedad para analizar tu proyecto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="text-sm font-semibold text-slate-700">Nombre completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    required
                    className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="servicio" className="text-sm font-semibold text-slate-700">¿Qué tipo de solución buscás?</label>
                <select 
                  id="servicio"
                  className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="ecommerce">Tienda Online / E-commerce</option>
                  <option value="webapp">Aplicación Web a medida</option>
                  <option value="ia">Integración con Inteligencia Artificial</option>
                  <option value="otro">Otro tipo de proyecto</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensaje" className="text-sm font-semibold text-slate-700">Detalles del proyecto</label>
                <textarea 
                  id="mensaje" 
                  rows={5}
                  required
                  className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Contame un poco sobre tu negocio, qué funcionalidades necesitás y cuáles son tus objetivos..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-slate-900 text-white font-semibold py-4 rounded-lg hover:bg-slate-800 transition-colors mt-2"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>

        {/* Columna Derecha: Información Directa (Ocupa 2 columnas) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-slate-900">Contacto Directo</h3>
            
            <div className="flex flex-col gap-6">
              
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center shrink-0 text-xl">
                  📱
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/541136516734?text=Hola%20Gonzalo,%20tengo%20una%20consulta%20sobre%20un%20proyecto%20web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-green-600 transition-colors"
                  >
                    +54 11 3651-6734
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 text-xl">
                  📍
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">Ubicación</p>
                  <p className="text-slate-600">
                    San Antonio de Padua,<br />
                    Buenos Aires, Argentina.
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center shrink-0 text-xl">
                  🕒
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">Horario de atención</p>
                  <p className="text-slate-600">Lunes a Viernes<br />9:00 a 18:00 hs</p>
                </div>
              </div>

            </div>
          </div>

          {/* Banner pequeño */}
          <div className="bg-blue-600 p-6 rounded-2xl text-white">
            <h4 className="font-bold mb-2">¿Necesitás algo urgente?</h4>
            <p className="text-sm text-blue-100 mb-4">
              Si tu proyecto requiere atención inmediata o tenés un e-commerce caído, mandame un WhatsApp directamente.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}