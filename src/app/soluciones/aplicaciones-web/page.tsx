 import Link from 'next/link';

export const metadata = {
  title: 'Desarrollo de Aplicaciones Web y Sistemas a Medida | Gonzalo Arias',
  description: 'Creación de aplicaciones web, portales de gestión, sistemas POS y plataformas SaaS. Desarrollo Full Stack con React, Node.js y bases de datos en tiempo real.',
};

export default function AplicacionesWebPage() {
  return (
    <div className="flex flex-col gap-16 py-12 px-4 max-w-5xl mx-auto">
      
      {/* ================= HERO SECTION ================= */}
      <section className="text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Aplicaciones Web a <span className="text-emerald-600">Medida de tu Negocio</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Si un Excel o un software genérico ya no es suficiente, es hora de construir tu propia herramienta. Desarrollamos plataformas escalables, portales de usuarios y sistemas de gestión interna.
        </p>
      </section>

      {/* ================= CARACTERÍSTICAS / SOLUCIONES ================= */}
      <section className="grid md:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors">
          <div className="text-3xl mb-4">⚙️</div>
          <h3 className="text-xl font-bold mb-2">Sistemas de Gestión y POS</h3>
          <p className="text-slate-600">
            Paneles administrativos a medida, puntos de venta (POS) para comercios físicos con soporte para escáner de código de barras y control de inventario dinámico.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors">
          <div className="text-3xl mb-4">📶</div>
          <h3 className="text-xl font-bold mb-2">Soporte Offline y PWAs</h3>
          <p className="text-slate-600">
            Aplicaciones que siguen funcionando incluso sin conexión a internet utilizando tecnologías de almacenamiento local en el navegador, ideales para entornos con conectividad inestable.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors">
          <div className="text-3xl mb-4">👥</div>
          <h3 className="text-xl font-bold mb-2">Portales y Plataformas SaaS</h3>
          <p className="text-slate-600">
            Creación de plataformas multi-usuario, desde portales de empleo con carga de CVs hasta sistemas de suscripción (Software as a Service) con bases de datos aisladas y seguras.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors">
          <div className="text-3xl mb-4">🔄</div>
          <h3 className="text-xl font-bold mb-2">Bases de Datos y Tiempo Real</h3>
          <p className="text-slate-600">
            Arquitecturas sólidas utilizando Node.js, Express y bases de datos relacionales (PostgreSQL/Supabase) para chats en vivo, notificaciones instantáneas y actualización de datos en tiempo real.
          </p>
        </div>

      </section>

      {/* ================= STACK TÉCNICO COMPACTO ================= */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Stack Tecnológico Moderno</h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-sm">
          Utilizamos las herramientas que impulsan a las startups más rápidas del mundo para garantizar que tu sistema no quede obsoleto.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500">
          <span className="bg-white px-4 py-2 rounded-md shadow-sm border border-slate-100">React & Next.js</span>
          <span className="bg-white px-4 py-2 rounded-md shadow-sm border border-slate-100">Node.js & Express</span>
          <span className="bg-white px-4 py-2 rounded-md shadow-sm border border-slate-100">PostgreSQL</span>
          <span className="bg-white px-4 py-2 rounded-md shadow-sm border border-slate-100">Supabase</span>
          <span className="bg-white px-4 py-2 rounded-md shadow-sm border border-slate-100">Tailwind CSS</span>
        </div>
      </section>

      {/* ================= CALL TO ACTION FINAL ================= */}
      <section className="bg-slate-900 rounded-3xl p-10 text-center mt-4">
        <h2 className="text-2xl font-bold text-white mb-4">¿Tenés un problema complejo que resolver?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Contame cómo funciona tu negocio actualmente y diseñemos juntos el software que va a automatizar tus procesos.
        </p>
        <Link 
          href="/contacto" 
          className="inline-block bg-emerald-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/30"
        >
          Desarrollemos tu App
        </Link>
      </section>

    </div>
  );
}