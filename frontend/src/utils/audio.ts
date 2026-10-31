// Web Audio API Synthesizer for Siren & Warning Dispatches

class SoundFX {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Two-tone emergency siren dispatch
  playEmergencySiren(durationSeconds: number = 3.5) {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      gain.gain.setValueAtTime(0.25, ctx.currentTime);

      // Frequency modulation for siren wail (600Hz to 1100Hz)
      const now = ctx.currentTime;
      for (let t = 0; t < durationSeconds; t += 0.8) {
        osc.frequency.setValueAtTime(650, now + t);
        osc.frequency.exponentialRampToValueAtTime(1150, now + t + 0.4);
        osc.frequency.exponentialRampToValueAtTime(650, now + t + 0.8);
      }

      gain.gain.exponentialRampToValueAtTime(0.001, now + durationSeconds);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + durationSeconds);
    } catch (e) {
      console.warn('Audio not supported or blocked by user interaction policy', e);
    }
  }

  // Crisp telemetry ping
  playPing(pitch: number = 880) {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, ctx.currentTime);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {
      console.warn('Audio error', e);
    }
  }
}

export const soundFX = new SoundFX();
