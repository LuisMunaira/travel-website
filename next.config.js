/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Desabilita a otimização de imagens no modo estático
  },
};

module.exports = nextConfig;
