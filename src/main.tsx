import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { FractalErrorBoundary } from './App';
import { logger } from './utils/logger';
import './index.css';

// StrictMode removed: it double-invokes effects in dev mode, causing dual WebGPU
// device initialization and dual render loops which crash the browser.
// Catch unhandled Promise rejections to prevent silent failures and browser error reports
window.addEventListener('unhandledrejection', (event) => {
  logger.error('[unhandledrejection]', event.reason);
  // Prevent the rejection from propagating to the browser's error handler
  event.preventDefault();
});

const rootElement = document.getElementById('root');
if (rootElement) {
  // Boundary wraps <App/> at the root so it catches throws from App's own render
  // body (engine/palette init), not just its subtree — users see the fallback UI
  // instead of a blank white screen.
  ReactDOM.createRoot(rootElement).render(
    <FractalErrorBoundary>
      <App />
    </FractalErrorBoundary>
  );
} else {
  logger.error('[main] Root element #root not found — application cannot mount.');
}
