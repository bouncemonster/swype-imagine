/**
 * Render Diagnostics System
 * Advanced logging and validation for fractal rendering pipeline
 */

export interface RenderStats {
  // Performance metrics
  frameTime: number;
  fps: number;
  rayMarchSteps: number;
  rayMarchStepsAvg: number;
  
  // Math validation
  sdfMin: number;
  sdfMax: number;
  sdfNaN: number;
  sdfInfinity: number;
  
  // Rendering quality
  hitRate: number; // percentage of rays that hit geometry
  averageDistance: number;
  maxDistance: number;
  
  // GPU health
  gpuMemoryUsed: number;
  shaderCompileTime: number;
  contextLost: boolean;
}

export interface DiagnosticLog {
  timestamp: number;
  level: 'info' | 'warn' | 'error' | 'debug';
  category: 'render' | 'math' | 'gpu' | 'performance';
  message: string;
  data?: any;
}

export class RenderDiagnostics {
  private logs: DiagnosticLog[] = [];
  private stats: RenderStats = this.getInitialStats();
  private frameCount = 0;
  private lastFrameTime = performance.now();
  private enabled = true;
  
  private getInitialStats(): RenderStats {
    return {
      frameTime: 0,
      fps: 0,
      rayMarchSteps: 0,
      rayMarchStepsAvg: 0,
      sdfMin: Infinity,
      sdfMax: -Infinity,
      sdfNaN: 0,
      sdfInfinity: 0,
      hitRate: 0,
      averageDistance: 0,
      maxDistance: 0,
      gpuMemoryUsed: 0,
      shaderCompileTime: 0,
      contextLost: false,
    };
  }
  
  /**
   * Log a diagnostic message
   */
  log(level: DiagnosticLog['level'], category: DiagnosticLog['category'], message: string, data?: any): void {
    if (!this.enabled) return;
    
    const log: DiagnosticLog = {
      timestamp: performance.now(),
      level,
      category,
      message,
      data,
    };
    
    this.logs.push(log);
    
    // Keep only last 1000 logs
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000);
    }
    
    // Console output for errors and warnings
    if (level === 'error' || level === 'warn') {
      console[level](`[${category}] ${message}`, data);
    }
  }
  
  /**
   * Update frame statistics
   */
  updateFrameStats(steps: number, hitDistance: number, maxRayDistance: number): void {
    const now = performance.now();
    const deltaTime = now - this.lastFrameTime;
    this.lastFrameTime = now;
    
    this.frameCount++;
    
    // Update performance metrics
    this.stats.frameTime = deltaTime;
    this.stats.fps = 1000 / deltaTime;
    this.stats.rayMarchSteps = steps;
    this.stats.rayMarchStepsAvg = (this.stats.rayMarchStepsAvg * 0.9 + steps * 0.1);
    
    // Update math validation
    if (isNaN(hitDistance)) {
      this.stats.sdfNaN++;
      this.log('error', 'math', 'NaN detected in SDF calculation', { steps, hitDistance });
    }
    
    if (!isFinite(hitDistance)) {
      this.stats.sdfInfinity++;
    }
    
    this.stats.sdfMin = Math.min(this.stats.sdfMin, hitDistance);
    this.stats.sdfMax = Math.max(this.stats.sdfMax, hitDistance);
    
    // Update rendering quality
    const isHit = hitDistance < 0.001;
    this.stats.hitRate = this.stats.hitRate * 0.95 + (isHit ? 1 : 0) * 0.05;
    this.stats.averageDistance = this.stats.averageDistance * 0.95 + hitDistance * 0.05;
    this.stats.maxDistance = Math.max(this.stats.maxDistance, maxRayDistance);
  }
  
  /**
   * Validate SDF function output
   */
  validateSDF(sdfValue: number, position: [number, number, number]): boolean {
    if (isNaN(sdfValue)) {
      this.log('error', 'math', 'SDF returned NaN', { position, sdfValue });
      return false;
    }
    
    if (!isFinite(sdfValue)) {
      this.log('error', 'math', 'SDF returned Infinity', { position, sdfValue });
      return false;
    }
    
    if (sdfValue < -1000) {
      this.log('warn', 'math', 'SDF returned unusually large negative value', { position, sdfValue });
    }
    
    return true;
  }
  
  /**
   * Validate normal calculation
   */
  validateNormal(normal: [number, number, number], position: [number, number, number]): boolean {
    const length = Math.sqrt(normal[0] ** 2 + normal[1] ** 2 + normal[2] ** 2);
    
    if (isNaN(length)) {
      this.log('error', 'math', 'Normal contains NaN', { position, normal });
      return false;
    }
    
    if (Math.abs(length - 1.0) > 0.01) {
      this.log('warn', 'math', 'Normal is not normalized', { position, normal, length });
      return false;
    }
    
    return true;
  }
  
  /**
   * Track GPU context state
   */
  trackGPUContext(lost: boolean, shaderCompileTime?: number): void {
    this.stats.contextLost = lost;
    
    if (lost) {
      this.log('error', 'gpu', 'GPU context lost');
    }
    
    if (shaderCompileTime !== undefined) {
      this.stats.shaderCompileTime = shaderCompileTime;
      
      if (shaderCompileTime > 1000) {
        this.log('warn', 'gpu', 'Shader compilation took too long', { shaderCompileTime });
      }
    }
  }
  
  /**
   * Get current statistics
   */
  getStats(): RenderStats {
    return { ...this.stats };
  }
  
  /**
   * Get logs filtered by level/category
   */
  getLogs(level?: DiagnosticLog['level'], category?: DiagnosticLog['category']): DiagnosticLog[] {
    let filtered = this.logs;
    
    if (level) {
      filtered = filtered.filter(log => log.level === level);
    }
    
    if (category) {
      filtered = filtered.filter(log => log.category === category);
    }
    
    return filtered;
  }
  
  /**
   * Export diagnostics report
   */
  exportReport(): string {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      recentLogs: this.logs.slice(-100),
      summary: {
        totalLogs: this.logs.length,
        errors: this.logs.filter(l => l.level === 'error').length,
        warnings: this.logs.filter(l => l.level === 'warn').length,
        nanCount: this.stats.sdfNaN,
        infinityCount: this.stats.sdfInfinity,
      },
    };
    
    return JSON.stringify(report, null, 2);
  }
  
  /**
   * Reset all statistics
   */
  reset(): void {
    this.stats = this.getInitialStats();
    this.logs = [];
    this.frameCount = 0;
    this.lastFrameTime = performance.now();
  }
  
  /**
   * Enable/disable diagnostics
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }
  
  /**
   * Check if diagnostics is healthy
   */
  isHealthy(): boolean {
    return (
      this.stats.sdfNaN === 0 &&
      this.stats.sdfInfinity === 0 &&
      !this.stats.contextLost &&
      this.stats.fps > 10
    );
  }
}

// Singleton instance
export const renderDiagnostics = new RenderDiagnostics();
