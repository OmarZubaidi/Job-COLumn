import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // Strict mode incompatible with BlueprintJS lol.
  <StrictMode>
    <App />
  </StrictMode>
);
