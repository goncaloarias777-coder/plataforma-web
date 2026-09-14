 export const metadata = {
  title: 'Recursos y Blog de Desarrollo Web | Gonzalo Arias',
  description: 'Artículos, guías y recursos sobre desarrollo web, e-commerce y tecnología para negocios.',
};

export default function BlogPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto min-h-[60vh]">
      <header className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Recursos y <span className="text-blue-600">Tecnología</span>
        </h1>
        <p className="text-lg text-slate-600">
          Guías, análisis y herramientas para escalar tu negocio en el mundo digital.
        </p>
      </header>

      <div className="flex flex-col items-center justify-center py-10 text-center bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
        <span className="text-4xl mb-4">✍️</span>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Preparando los primeros artículos</h2>
        <p className="text-slate-500 max-w-md">
          Estamos redactando contenido técnico sobre Next.js, optimización SEO y estrategias para e-commerce. Volvé pronto.
        </p>
      </div>
    </div>
  );
}