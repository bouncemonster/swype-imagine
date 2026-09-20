# UserProblemLogger.ts

**239 lines | Client-side error tracking with IndexedDB**

## Purpose
Persistent storage of errors, warnings, and user interactions using IndexedDB.

## Key Interfaces

### UserLogEntry (lines 6-15)
```typescript
{
  id?: number;
  timestamp: number;
  level: 'info' | 'warn' | 'error' | 'debug';
  category: 'render' | 'math' | 'gpu' | 'performance' | 'user' | 'fractal' | 'system';
  message: string;
  details?: Record<string, any>;
  userAgent?: string;
  url?: string;
}
```

## Key Methods

### `init()` (lines 26-66)
Initializes IndexedDB:
- DB name: `GoldenRatioFractalLogs`
- Store: `userLogs`
- Indexes: timestamp, level, category
- Falls back to memory buffer if DB unavailable

### `log(entry)` (lines 68-94)
Logs entry:
1. Adds timestamp, userAgent, url
2. Console output (error/warn/info/debug)
3. Memory buffer (1000 max)
4. Persists to DB if initialized

### `getLogs(options?)` (lines 126-170)
Retrieves logs with filters:
- level, category, since, limit
- Sorted by timestamp descending
- Falls back to memory buffer if DB unavailable

### `clearLogs()` (lines 183-204)
Clears all logs from DB and memory buffer.

### `exportLogs()` (lines 206-209)
Exports up to 10000 logs as JSON.

### `getStats()` (lines 211-229)
Returns stats: total, errors, warnings, byCategory.

## Critical Notes
1. **Dual storage**: Memory buffer + IndexedDB
2. **Auto-init**: Calls init() on import
3. **Memory limit**: 1000 entries in buffer
4. **Console output**: All levels logged to console
5. **Graceful degradation**: Works without IndexedDB
6. **Singleton**: `userProblemLogger` exported instance

## Usage
Called from FractalCanvas.tsx and engines:
```typescript
userProblemLogger.log({
  level: 'error',
  category: 'render',
  message: 'FractalCanvas: canvas ref is null on mount'
});
```

## Dependencies
- No internal dependencies
- Uses IndexedDB API
