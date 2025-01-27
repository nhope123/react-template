import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import GlobalProvider from './GlobalProvider.tsx';
import './index.css';

// @ts-ignore
createRoot(document.getElementById?.('root')).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
);
