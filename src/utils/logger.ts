/**
 * Centralized logger — replaces raw console.* calls throughout the app.
 *
 * Behavior:
 *  - Development:  all levels pass through (identical to raw console).
 *  - Production:   only warn + error survive; info/log/group are silenced.
 *  - Runtime override: append `?debug=1` to the URL (or call
 *    `logger.setVerbose(true)`) to re-enable info-level output in prod
 *    for user-assisted diagnostics.
 *
 * Usage:
 *    import { logger } from '../utils/logger';
 *    logger.info('[Module] message', data);
 */

type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'group' | 'groupEnd' | 'debug';

/** Build-time: Vite replaces `import.meta.env.PROD` at compile time. The
 *  typeof guard lets non-Vite ESM runtimes (e.g. `npx tsx` test harnesses,
 *  where import.meta.env is undefined) import src modules without crashing; in
 *  a Vite build the guard is true and the PROD token is still statically
 *  replaced, so info-level logging stays silenced in production. */
const IS_PROD = typeof import.meta.env !== 'undefined' && import.meta.env.PROD === true;

/** Runtime override (URL param or explicit toggle). */
let _verbose = typeof window !== 'undefined'
  && window.location.search.includes('debug=1');

function shouldEmit(level: LogLevel): boolean {
  if (level === 'error' || level === 'warn') return true;   // always
  if (_verbose) return true;                                  // ?debug=1
  return !IS_PROD;                                            // dev only
}

export const logger = {
  log(...args: unknown[])    { if (shouldEmit('log'))    console.log(...args); },
  info(...args: unknown[])   { if (shouldEmit('info'))   console.info(...args); },
  warn(...args: unknown[])   { if (shouldEmit('warn'))   console.warn(...args); },
  error(...args: unknown[])  { console.error(...args); },               // always
  debug(...args: unknown[])  { if (shouldEmit('debug'))  console.debug(...args); },
  group(...args: unknown[])  { if (shouldEmit('group'))  console.group(...args); },
  groupEnd()                 { if (shouldEmit('group'))  console.groupEnd(); },

  /** Toggle verbose output at runtime (e.g. from a settings panel). */
  setVerbose(v: boolean) { _verbose = v; },
  get verbose() { return _verbose; },
};
