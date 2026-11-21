import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // Fisioterapia vive en /fisioterapia (servidor principal, puerto 3001)
    basePath: '/fisioterapia',
    images: {
      unoptimized: true,
    },
    allowedDevOrigins: ['192.168.100.1', '192.168.100.*', 'localhost'],
    async redirects() {
      return [
        // La raíz del sitio abre Fisioterapia
        {
          source: '/',
          destination: '/fisioterapia',
          basePath: false,
          permanent: false,
        },
      ];
    },
    async rewrites() {
      return [
        // Estética Corporal (puerto 3002)
        {
          source: '/estetica-corporal',
          destination: 'http://localhost:3002/estetica-corporal',
          basePath: false,
        },
        {
          source: '/estetica-corporal/:path*',
          destination: 'http://localhost:3002/estetica-corporal/:path*',
          basePath: false,
        },
        // Estética Facial (puerto 3003)
        {
          source: '/estetica-facial',
          destination: 'http://localhost:3003/estetica-facial',
          basePath: false,
        },
        {
          source: '/estetica-facial/:path*',
          destination: 'http://localhost:3003/estetica-facial/:path*',
          basePath: false,
        },
      ];
    },
};

export default nextConfig;
