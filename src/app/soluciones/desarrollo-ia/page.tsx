 import Link from 'next/link';

export const metadata = {
  title: 'Desarrollo e Integración de Inteligencia Artificial | Gonzalo Arias',
  description: 'Implementación de soluciones con Inteligencia Artificial, automatización de procesos, y servidores de inferencia locales con modelos LLM a medida.',
};

export default function DesarrolloIAPage() {
  return (
    <div className="flex flex-col gap-16 py-12 px-4 max-w-5xl mx-auto">
      
      {/* ================= HERO SECTION ================= */}
      <section className="text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Inteligencia Artificial <span className="text-purple-600">Aplicada a tu Negocio</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Optimizá tus tiempos y reducí costos operativos integrando herramientas de IA en tus procesos diarios. Desde asistentes virtuales hasta análisis automatizado de datos y código.
        </p>
      </section>

      {/* ================= CARACTERÍSTICAS / SOLUCIONES ================= */}
      <section className="grid md:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-purple-100 transition-colors">
          <div className="text-3xl mb-4">🧠</div>
          <h3 className="text-xl font-bold mb-2">Modelos Locales y Privacidad</h3>
          <p className="text-slate-600">
            Despliegue de modelos de lenguaje (LLM en formato GGUF) en servidores propios utilizando Node.js. Ideal para empresas que necesitan auditar código o analizar datos sensibles sin enviarlos a la nube.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-purple-100 transition-colors">
          <div className="text-3xl mb-4">🔌</div>
          <h3 className="text-xl font-bold mb-2">APIs de IA a Medida</h3>
          <p className="text-slate-600">
            Creación de endpoints personalizados con Express y Node.js para conectar tu software actual o tu e-commerce con motores de inteligencia artificial que automaticen tareas repetitivas.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-purple-100 transition-colors">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="text-xl font-bold mb-2">Automatización de Procesos</h3>
          <p className="text-slate-600">
            Sistemas que leen, clasifican y responden información de manera automática. Transformamos flujos de trabajo manuales en arquitecturas inteligentes que operan 24/7.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-purple-100 transition-colors">
          <div className="text-3xl mb-4">📈</div>
          <h3 className="text-xl font-bold mb-2">Integración en Aplicaciones Web</h3>
          <p className="text-slate-600">
            Incorporación de funciones impulsadas por IA directamente en el frontend (React/Next.js), mejorando la experiencia del usuario final con búsquedas semánticas o recomendaciones dinámicas.
          </p>
        </div>

      </section>

      {/* ================= CALL TO ACTION FINAL ================= */}
      <section className="bg-slate-900 rounded-3xl p-10 text-center mt-4">
        <h2 className="text-2xl font-bold text-white mb-4">¿Querés integrar IA sin perder el control de tus datos?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Podemos diseñar una arquitectura que se adapte exactamente a tus necesidades operativas y de privacidad.
        </p>
        <Link 
          href="/contacto" 
          className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30"
        >
          Consultar sobre Integraciones IA
        </Link>
      </section>

    </div>
  );
}