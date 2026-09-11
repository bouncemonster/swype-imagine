# main.tsx

**10 lines | Application entry point**

## Purpose
React application bootstrap - renders the root App component into the DOM.

## Code Structure
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
```

## Critical Notes
1. **No StrictMode**: React.StrictMode was removed because it double-invokes effects in development mode
2. **WebGPU conflict**: Double invocation caused dual WebGPU device initialization and dual render loops, crashing the browser
3. **Single render**: Only one App instance is created
4. **CSS import**: Global styles loaded before App renders
5. **Null check**: Safe guard against missing root element

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
