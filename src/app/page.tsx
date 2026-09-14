 import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-12 md:py-20 px-4">
      
      {/* ================= HERO SECTION ================= */}
      <section className="text-center max-w-4xl mx-auto flex flex-col items-center gap-6 mt-8 md:mt-12">
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full">
          Disponibilidad para nuevos proyectos
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Desarrollo Web y Tiendas Online de <span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Alto Rendimiento</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
          Construimos plataformas rápidas, seguras y autogestionables. Transformá tus ideas en soluciones web concretas que impulsan ventas y automatizan procesos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link 
            href="/contacto" 
            className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
          >
            Iniciar un Proyecto
          </Link>
          <Link 
            href="/soluciones/tiendas-online" 
            className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
          >
            Ver Soluciones
          </Link>
        </div>
      </section>

      {/* ================= STACK TECNOLÓGICO ================= */}
      <section className="max-w-5xl mx-auto w-full text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
          Arquitectura moderna y escalable
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Aquí puedes reemplazar por SVGs reales después */}
          <span className="font-bold text-xl md:text-2xl">Next.js</span>
          <span className="font-bold text-xl md:text-2xl">React</span>
          <span className="font-bold text-xl md:text-2xl">Tailwind CSS</span>
          <span className="font-bold text-xl md:text-2xl">Node.js</span>
          <span className="font-bold text-xl md:text-2xl">Supabase</span>
        </div>
      </section>

      {/* ================= SOLUCIONES / SILOS SEO ================= */}
      <section className="max-w-6xl mx-auto w-full grid md:grid-cols-3 gap-6">
        
        {/* Card 1: E-commerce */}
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
            🛒
          </div>
          <h3 className="text-xl font-bold mb-3">E-commerce y Pagos</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Tiendas online optimizadas para conversión con carritos dinámicos, paneles administrativos e integración directa con Mercado Pago y PayPal.
          </p>
          <Link href="/soluciones/tiendas-online" className="text-blue-600 font-medium hover:underline">
            Explorar solución →
          </Link>
        </div>

        {/* Card 2: Web Apps */}
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
            ⚡
          </div>
          <h3 className="text-xl font-bold mb-3">Aplicaciones Web</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Desarrollo full-stack a medida. Sistemas de gestión, bases de datos en tiempo real y arquitecturas robustas diseñadas para escalar.
          </p>
          <Link href="/soluciones/aplicaciones-web" className="text-blue-600 font-medium hover:underline">
            Explorar solución →
          </Link>
        </div>

        {/* Card 3: Integraciones IA */}
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
            🤖
          </div>
          <h3 className="text-xl font-bold mb-3">Integración con IA</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Potencia tu negocio con herramientas de inteligencia artificial, automatizaciones y flujos de trabajo inteligentes que ahorran tiempo y recursos.
          </p>
          <Link href="/soluciones/desarrollo-ia" className="text-blue-600 font-medium hover:underline">
            Explorar solución →
          </Link>
        </div>

      </section>

      {/* ================= BANNERS CALL TO ACTION ================= */}
      <section className="max-w-4xl mx-auto w-full bg-slate-900 rounded-3xl p-10 md:p-16 text-center mt-10">
        <h2 className="text-3xl font-bold text-white mb-4">¿Estás listo para modernizar tu presencia digital?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Dejá de perder clientes por una web lenta. Hablemos de tus objetivos y construyamos la herramienta exacta que tu negocio necesita.
        </p>
        <Link 
          href="/contacto" 
          className="inline-block bg-white text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
        >
          Agendar consulta gratuita
        </Link>
      </section>

    </div>
  );
}