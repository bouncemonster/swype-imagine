# main.tsx

**19 lines | Application entry point**

## Purpose
React application bootstrap - renders the root App component into the DOM and guards against unhandled promise rejections.

## Code Structure
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Catch unhandled Promise rejections to prevent silent failures and browser error reports
window.addEventListener('unhandledrejection', (event) => {
  console.error('[unhandledrejection]', event.reason);
  // Prevent the rejection from propagating to the browser's error handler
  event.preventDefault();
});

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
```

## Unhandled Rejection Handler (lines 9-13)
Logs the rejection reason via `console.error('[unhandledrejection]', ...)` and calls `event.preventDefault()` so async GPU/init rejections don't propagate to the browser's error UI as red overlays.

## Critical Notes
1. **No StrictMode**: React.StrictMode was removed because it double-invokes effects in development mode
2. **WebGPU conflict**: Double invocation caused dual WebGPU device initialization and dual render loops, crashing the browser
3. **Single render**: Only one App instance is created
4. **CSS import**: Global styles loaded before App renders
5. **Null check**: Safe guard against missing root element
6. **Rejection guard**: `unhandledrejection` listener prevents silent failures and browser error reports

## Why StrictMode Was Removed
```typescript
// StrictMode removed: it double-invokes effects in dev mode, causing dual WebGPU
// device initialization and dual render loops which crash the browser.
```

**Problem**: React.StrictMode intentionally renders components twice in development to detect side effects. For WebGPU:
- First render: Creates GPU device, starts render loop
- Second render: Creates another GPU device, starts another render loop
- Result: Two GPU contexts competing → browser crash

**Solution**: Disable StrictMode, accept loss of development-mode side effect detection.

## Dependencies
- `react`: React library
- `react-dom/client`: React 18+ client API
- `./App`: Root component
- `./index.css`: Global styles

## Related Files
- `index.html`: Contains `<div id="root"></div>`
- `App.tsx`: Root component
- `index.css`: Global CSS with Tailwind
