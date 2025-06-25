import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite
export default defineConfig({
  // Caminho base para deploy, altere conforme necessário
  base: '/Portiflio-3D/',
  plugins: [
    react(), // Plugin para suporte ao React
  ],
});
