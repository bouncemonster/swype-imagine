/**
 * Centralized runtime constants — extracted from scattered magic numbers.
 *
 * Group: rendering pipeline tuning, device limits, timeouts, interaction physics.
 * Reference these instead of hard-coding in hooks/engine to allow quick tuning
 * and a single source of truth for all performance-critical thresholds.
 */

// ─── Performance / Frame-rate ───────────────────────────────────────────────────

export const FPS_TARGET_DESKTOP = 60;
export const FPS_TARGET_MOBILE = 30;

/** Device Pixel Ratio caps — prevent GPU overload on high-DPI displays. */
export const DPR_CAP_DESKTOP = 2.0;
export const DPR_CAP_EMBEDDED = 1.5;
export const DPR_CAP_MOBILE = 1.0;

/** Maximum canvas buffer dimension (longest side). */
export const CANVAS_MAX_DIM_DESKTOP = 3840;
export const CANVAS_MAX_DIM_MOBILE = 1280;
export const CANVAS_MIN_DIM = 320;
export const CANVAS_MIN_HEIGHT = 240;

/** WebGL engine safety cap — refuse render beyond this (prevents GPU OOM). */
export const CANVAS_HARD_CAP = 4096;

// ─── Shader lifecycle ───────────────────────────────────────────────────────────

/** Low-quality warmup frames after shader swap (~0.4 s at 60 fps). */
export const WARMUP_FRAMES = 24;

/** Max concurrent background prefetch compiles (ANGLE driver pool). */
export const PREFETCH_CONCURRENCY = 2;

/** Shader swap guard timeout — reset the blocking flag if exceeded. */
export const SHADER_SWAP_TIMEOUT_MS = 120_000;

/** Poll budget for KHR_parallel_shader_compile non-blocking loop. */
export const SHADER_POLL_MAX_SPINS = 16_000;
export const SHADER_POLL_INTERVAL_MS = 5;

// ─── Loader / Init timeouts ─────────────────────────────────────────────────────

/** Force-hide the loading overlay if no first frame appeared. */
export const LOADER_FORCE_HIDE_MS = 60_000;

/** Engine setup timeout — declare GPU unavailable. */
export const ENGINE_SETUP_TIMEOUT_MS = 20_000;

/** WebGPU adapter request deadline. */
export const GPU_ADAPTER_TIMEOUT_MS = 5_000;

// ─── Dynamic Quality ────────────────────────────────────────────────────────────

/** Minimum interval between quality level changes (prevents oscillation). */
export const QUALITY_COOLDOWN_MS = 3_000;

/** Downgrade trigger: avg FPS below this fraction of target. */
export const QUALITY_DOWN_THRESHOLD_RATIO = 0.35;

/** Upgrade trigger: avg FPS above this fraction of target. */
export const QUALITY_UP_THRESHOLD_RATIO = 0.92;

/** Consecutive render errors before forcing minimum quality. */
export const CONSECUTIVE_ERROR_FLOOR = 10;

// ─── Inertia / Auto-rotation ────────────────────────────────────────────────────

export const INERTIA_DECAY = 0.94;
export const INERTIA_THRESHOLD = 0.000_08;
export const INERTIA_ROT_SPEED = 0.0035;

/** Pause before auto-rotation resumes after user interaction. */
export const AUTO_ROTATE_RESUME_DELAY_MS = 3_000;

/** Auto-rotation base speed (rad/frame). */
export const AUTO_ROTATE_SPEED = 0.12;

// ─── Prefetch / Retry timing ────────────────────────────────────────────────────

export const PREFETCH_INITIAL_DELAY_MS = 300;
export const PREFETCH_RETRY_DELAY_MS = 1_000;
export const PREFETCH_COLD_START_DELAY_MS = 400;
