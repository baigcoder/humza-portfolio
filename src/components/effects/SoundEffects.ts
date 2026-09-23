// Zero-dependency native Web Audio API synthesizer for tactile UI haptics
// Generates subtle, elegant mechanical clicks, ticks, and tones without external audio files.

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

// Initialize on first client interaction
function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isSoundEnabled(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("humza-haptic-sound");
  return stored === "true";
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
  if (typeof window !== "undefined") {
    localStorage.setItem("humza-haptic-sound", enabled ? "true" : "false");
    window.dispatchEvent(new CustomEvent("humza-sound-state-change", { detail: enabled }));
    if (enabled) {
      playTactileSound("toggle");
    }
  }
}

export type SoundType = "click" | "tick" | "modal" | "toggle" | "slider" | "success";

export function playTactileSound(type: SoundType = "click"): void {
  if (typeof window === "undefined") return;
  if (!isSoundEnabled()) return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    switch (type) {
      case "click":
        // Crisp, ultra-soft mechanical switch click (luxury watch / Leica feel)
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.035);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
        osc.start(now);
        osc.stop(now + 0.035);
        break;

      case "tick":
        // High-precision clock/slider tick
        osc.type = "sine";
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.02);
        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.02);
        osc.start(now);
        osc.stop(now + 0.02);
        break;

      case "slider":
        // Tactile stepped resistor adjustment
        osc.type = "triangle";
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.025);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.025);
        osc.start(now);
        osc.stop(now + 0.025);
        break;

      case "modal":
        // Soft executive chime for dossier expansion
        osc.type = "sine";
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.12);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.16);
        break;

      case "toggle":
        // Double micro-pip confirmation
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.setValueAtTime(900, now + 0.04);
        gain.gain.setValueAtTime(0.035, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
        break;

      case "success":
        // Warm advisory confirmation chord
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.18);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
        break;
    }
  } catch {
    // Graceful silent fail if audio context blocked by browser autoplay policy
  }
}
