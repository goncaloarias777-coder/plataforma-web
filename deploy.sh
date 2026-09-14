#!/bin/bash
echo "🧹 Limpiando caché..."
rm -rf .next node_modules/.cache

echo "📦 Preparando GitHub..."
git add .
git commit -m "Fix next.config extension para Vercel"

echo "🚀 Subiendo código..."
git push origin main

echo "⚡ Lanzando a producción en Vercel..."
vercel --prod

echo "✅ ¡Listo!"
