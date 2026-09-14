 import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Desarrollo Web y Tiendas Online (2026) | Gonzalo Arias',
  description: 'Soluciones web a medida. Especialista en creación de tiendas online, integración de pagos y aplicaciones web rápidas para escalar tu negocio.',
  keywords: [
    'desarrollo web', 
    'diseño web', 
    'ecommerce', 
    'tiendas online', 
    'argentina', 
    'soluciones web', 
    'aplicaciones a medida'
  ],
  authors: [{ name: 'Gonzalo Arias' }],
  openGraph: {
    title: 'Soluciones Web a Medida | Gonzalo Arias',
    description: 'Construimos plataformas rápidas, seguras y autogestionables para impulsar tus ventas.',
    url: 'https://tudominio.com', // Reemplazar por tu dominio .com
    siteName: 'Gonzalo Arias Web Dev',
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col`}>
        
        {/* ================= HEADER & NAVEGACIÓN ================= */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
            
            {/* Logo o Marca Personal */}
            <Link href="/" className="font-bold text-2xl tracking-tighter">
              GA<span className="text-blue-600">.</span>
            </Link>
            
            {/* Navegación Desktop */}
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors font-semibold">
                Inicio
              </Link>
              <Link href="/soluciones/tiendas-online" className="hover:text-blue-600 transition-colors">
                Tiendas Online
              </Link>
              <Link href="/soluciones/aplicaciones-web" className="hover:text-blue-600 transition-colors">
                Web Apps
              </Link>
              <Link href="/soluciones/desarrollo-ia" className="hover:text-blue-600 transition-colors">
                IA
              </Link>
              <Link href="/casos-de-estudio" className="hover:text-blue-600 transition-colors">
                Soluciones
              </Link>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Recursos
              </Link>
            </nav>
            
            {/* Call to Action (Botón principal) */}
            <Link 
              href="/contacto" 
              className="bg-slate-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              Cotizar Proyecto
            </Link>
          </div>
        </header>

        {/* ================= CONTENIDO DINÁMICO ================= */}
        <main className="flex-1 w-full max-w-6xl mx-auto">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t bg-white py-12 mt-auto">
          <div className="container mx-auto px-4 text-center max-w-6xl">
            <h3 className="font-semibold text-lg mb-4">¿Listo para escalar tu negocio?</h3>
            <p className="text-slate-500 mb-6 text-sm">
              Diseño y desarrollo enfocado en resultados directos y rendimiento.
            </p>
            <div className="text-sm text-slate-400">
              <p>© {new Date().getFullYear()} Gonzalo Arias. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}