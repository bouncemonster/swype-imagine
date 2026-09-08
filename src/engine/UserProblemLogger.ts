/**
 * User Problem Logger — Client-side database for tracking user issues
 * Uses IndexedDB for persistent storage of errors, warnings, and user interactions
 */

export interface UserLogEntry {
  id?: number;
  timestamp: number;
  level: 'info' | 'warn' | 'error' | 'debug';
  category: 'render' | 'math' | 'gpu' | 'performance' | 'user' | 'fractal' | 'system';
  message: string;
  details?: Record<string, any>;
  userAgent?: string;
  url?: string;
}

const DB_NAME = 'GoldenRatioFractalLogs';
const DB_VERSION = 1;
const STORE_NAME = 'userLogs';

class UserProblemLogger {
  private db: IDBDatabase | null = null;
  private initialized = false;
  private memoryBuffer: UserLogEntry[] = []; // Buffer before DB is ready

  async init(): Promise<void> {
    if (this.initialized) return;

    return new Promise((resolve, reject) => {
      try {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
          console.warn('[UserLogger] IndexedDB unavailable, using memory buffer only');
          this.initialized = true;
          resolve();
        };

        request.onsuccess = () => {
          this.db = request.result;
          this.initialized = true;
          
          // Flush memory buffer to DB
          this.flushBuffer();
          resolve();
        };

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            const store = db.createObjectStore(STORE_NAME, { 
              keyPath: 'id', 
              autoIncrement: true 
            });
            store.createIndex('timestamp', 'timestamp', { unique: false });
            store.createIndex('level', 'level', { unique: false });
            store.createIndex('category', 'category', { unique: false });
          }
        };
      } catch (e) {
        console.warn('[UserLogger] IndexedDB init failed:', e);
        this.initialized = true;
        resolve();
      }
    });
  }

  async log(entry: Omit<UserLogEntry, 'timestamp' | 'userAgent' | 'url'>): Promise<void> {
    const fullEntry: UserLogEntry = {
      ...entry,
      timestamp: Date.now(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    };

    // Always log to console for immediate visibility
    const consoleMethod = entry.level === 'error' ? 'error' : 
                          entry.level === 'warn' ? 'warn' : 
                          entry.level === 'debug' ? 'debug' : 'info';
    console[consoleMethod](`[UserLogger][${entry.category}] ${entry.message}`, entry.details || '');

    // Store in memory buffer
    this.memoryBuffer.push(fullEntry);

    // Keep memory buffer limited
    if (this.memoryBuffer.length > 1000) {
      this.memoryBuffer.shift();
    }

    // Try to persist to DB
    if (this.initialized && this.db) {
      await this.persistToDB(fullEntry);
    }
  }

  private async persistToDB(entry: UserLogEntry): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve) => {
      try {
        const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        store.add(entry);
        
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => {
          console.warn('[UserLogger] Failed to persist log entry');
          resolve();
        };
      } catch (e) {
        console.warn('[UserLogger] DB write error:', e);
        resolve();
      }
    });
  }

  private flushBuffer(): void {
    if (this.memoryBuffer.length === 0) return;
    
    const entries = [...this.memoryBuffer];
    this.memoryBuffer = [];
    
    entries.forEach(entry => this.persistToDB(entry));
  }

  async getLogs(options?: {
    level?: string;
    category?: string;
    limit?: number;
    since?: number;
  }): Promise<UserLogEntry[]> {
    if (!this.db) {
      return this.memoryBuffer.filter(e => this.matchesFilter(e, options));
    }

    return new Promise((resolve) => {
      try {
        const transaction = this.db!.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => {
          let logs = request.result || [];
          
          // Apply filters
          if (options) {
            logs = logs.filter(e => this.matchesFilter(e, options));
          }

          // Sort by timestamp descending
          logs.sort((a, b) => b.timestamp - a.timestamp);

          // Apply limit
          if (options?.limit) {
            logs = logs.slice(0, options.limit);
          }

          resolve(logs);
        };

        request.onerror = () => {
          console.warn('[UserLogger] Failed to read logs');
          resolve([]);
        };
      } catch (e) {
        console.warn('[UserLogger] DB read error:', e);
        resolve([]);
      }
    });
  }

  private matchesFilter(entry: UserLogEntry, options?: {
    level?: string;
    category?: string;
    since?: number;
  }): boolean {
    if (options?.level && entry.level !== options.level) return false;
    if (options?.category && entry.category !== options.category) return false;
    if (options?.since && entry.timestamp < options.since) return false;
    return true;
  }

  async clearLogs(): Promise<void> {
    if (!this.db) {
      this.memoryBuffer = [];
      return;
    }

    return new Promise((resolve) => {
      try {
        const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        store.clear();
        
        transaction.oncomplete = () => {
          this.memoryBuffer = [];
          resolve();
        };
        transaction.onerror = () => resolve();
      } catch (e) {
        resolve();
      }
    });
  }

  async exportLogs(): Promise<string> {
    const logs = await this.getLogs({ limit: 10000 });
    return JSON.stringify(logs, null, 2);
  }

  getStats(): { total: number; errors: number; warnings: number; byCategory: Record<string, number> } {
    const logs = this.memoryBuffer;
    const byCategory: Record<string, number> = {};
    let errors = 0;
    let warnings = 0;

    logs.forEach(log => {
      byCategory[log.category] = (byCategory[log.category] || 0) + 1;
      if (log.level === 'error') errors++;
      if (log.level === 'warn') warnings++;
    });

    return {
      total: logs.length,
      errors,
      warnings,
      byCategory,
    };
  }
}

// Singleton instance
export const userProblemLogger = new UserProblemLogger();

// Auto-init on import
if (typeof window !== 'undefined') {
  userProblemLogger.init().catch(() => {});
}
