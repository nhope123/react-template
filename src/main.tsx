import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import AppWrapper from './AppWrapper.tsx';
import './index.css';

// @ts-ignore
createRoot(document.getElementById?.('root')).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>
);
