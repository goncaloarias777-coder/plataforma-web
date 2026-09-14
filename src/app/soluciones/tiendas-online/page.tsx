 import Link from 'next/link';

export const metadata = {
  title: 'Desarrollo de Tiendas Online y E-commerce | Gonzalo Arias',
  description: 'Creación de tiendas virtuales a medida con carritos dinámicos, paneles de administración privados e integración de checkout con Mercado Pago.',
};

export default function TiendasOnlinePage() {
  return (
    <div className="flex flex-col gap-16 py-12 px-4 max-w-5xl mx-auto">
      
      {/* Encabezado del Servicio */}
      <section className="text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Tiendas Online <span className="text-blue-600">Optimizadas para Vender</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          No dependas de plataformas de terceros con comisiones altas. Llevá tu marca al siguiente nivel con un e-commerce propio, rápido y con control total sobre tu inventario y tus pagos.
        </p>
      </section>

      {/* Características Clave */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-3xl mb-4">💳</div>
          <h3 className="text-xl font-bold mb-2">Integración de Mercado Pago</h3>
          <p className="text-slate-600">
            Checkout transparente o Pro integrado directamente en tu web. Gestión de cobros, manejo de webhooks para actualizaciones automáticas de stock y transferencias seguras sin fricción para el usuario.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-3xl mb-4">🔐</div>
          <h3 className="text-xl font-bold mb-2">Panel de Administración Privado</h3>
          <p className="text-slate-600">
            Gestioná tus productos, categorías y precios desde un dashboard exclusivo y seguro. Arquitectura robusta respaldada por bases de datos modernas (como PostgreSQL/Supabase) para carga instantánea.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2">Rendimiento y SEO</h3>
          <p className="text-slate-600">
            Desarrollo nativo que garantiza tiempos de carga ultrarrápidos. Estructura de metadatos optimizada para que tus productos aparezcan primero en las búsquedas orgánicas de Google.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-3xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">Diseño Responsive y Catálogos Dinámicos</h3>
          <p className="text-slate-600">
            Carritos de compras fluidos y una experiencia de navegación perfecta tanto en celulares como en escritorio, adaptada a la identidad visual de tu marca de indumentaria o negocio.
          </p>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="bg-slate-900 rounded-3xl p-10 text-center mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">¿Tenés un catálogo listo para digitalizar?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Podemos armar la estructura de tu tienda, conectar los pagos y dejarla lista para que empieces a cargar tus productos esta misma semana.
        </p>
        <Link 
          href="/contacto" 
          className="inline-block bg-white text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
        >
          Cotizar mi Tienda Online
        </Link>
      </section>

    </div>
  );
}