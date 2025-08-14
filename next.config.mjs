/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para mayor estabilidad
  reactStrictMode: true,
  swcMinify: true,
  
  // Configuración de imágenes
  images: {
    unoptimized: true,
  },
  
  // Configuración de experimental features
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
};

export default nextConfig; 