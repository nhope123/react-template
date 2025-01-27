/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    clearMocks: true,
    // dir: '**/src/**',
    environment: 'jsdom',
    globals: true,
    mockReset: true,
    restoreMocks: true,
    setupFiles: '/src/test/vitest-setup.tsx',
    reporters: ['default', 'html'],
    include: ['**/*.test.ts?(x)'],
  },
});
