import '@testing-library/jest-dom/';
import render from './vitest-setup.tsx';

(global as any).render = render;
