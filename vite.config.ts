import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub Project Pages: https://<user>.github.io/<repo>/
 * Repo: arenacash → base must be /arenacash/
 */
export default defineConfig({
  plugins: [react()],
  base: '/arenacash/',
});
