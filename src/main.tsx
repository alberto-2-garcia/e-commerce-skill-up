import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function enableMocking() {
  if (process.env.NODE_ENV === 'QA') return;

  const { worker } = await import('./api/index.ts');

  return worker.start();
}

enableMocking().then(() =>
  createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <App />
      </StrictMode>
  )
);

