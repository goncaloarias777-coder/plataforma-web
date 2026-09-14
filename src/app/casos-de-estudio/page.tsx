 import Link from 'next/link';

export const metadata = {
  title: 'Casos de Estudio y Soluciones | Gonzalo Arias',
  description: 'Conocé nuestra metodología de trabajo y cómo transformamos problemas de negocio en soluciones web escalables.',
};

export default function CasosDeEstudioPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center max-w-3xl mx-auto min-h-[60vh]">
      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
        🚀
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        Próximos Casos de Éxito
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Actualmente estamos desarrollando nuevas plataformas y estructurando nuestros casos de estudio recientes. ¿Querés que tu negocio sea la próxima solución destacada?
      </p>
      <Link 
        href="/contacto" 
        className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors"
      >
        Hablemos de tu proyecto
      </Link>
    </div>
  );
}