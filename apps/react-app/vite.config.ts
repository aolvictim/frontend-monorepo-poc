import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/frontend-monorepo-poc/react-app/' // TODO: use proper multi-environment
});
