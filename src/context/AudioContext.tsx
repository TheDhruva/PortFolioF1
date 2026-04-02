"use client";

/**
 * AudioContext — Cinematic Audio Engine for THE DHRUVA
 * ─────────────────────────────────────────────────────
 */

import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";

/* ── SFX catalogue ────────────────────────────────────────── */
export const SFX = {
  buttonClick:   "/audio/sfx/button-click.MP3",
  buttonHover:   "/audio/sfx/button-hover.MP3",
  cursorHover:   "/audio/sfx/cursor-hover.mp3",
  elementAppear: "/audio/sfx/element-appear.mp3",
  inputFocus:    "/audio/sfx/input-focus.mp3",
  sectionSnap:   "/audio/sfx/section-snap.mp3",
  submitSuccess: "/audio/sfx/submit-success.mp3",
} as const;

export type SfxKey = keyof typeof SFX;

/* ── SFX volumes ──────────────────────────────────────────── */
const SFX_VOL: Record<SfxKey, number> = {
  buttonClick:   0.45,
  buttonHover:   0.45,
  cursorHover:   0.15,
  elementAppear: 0.45,
  inputFocus:    0.09,
  sectionSnap:   0.09,
  submitSuccess: 0.25,
};

/* ── Ambient Config ───────────────────────────────────────── */
const AMBIENT_TARGET_VOL = 0.40; // 40% volume - loud enough to be heard, not overpowering
const AMBIENT_FADE_MS = 200;     // 200ms - fast, crisp, but avoids audio popping

/* ── Context shape ────────────────────────────────────────── */
interface AudioAPI {
  play:         (key: SfxKey) => void;
  muted:        boolean;
  toggleMute:   () => void;
  unlockAudio:  () => void;   
}

const AudioCtx = createContext<AudioAPI>({
  play:        () => {},
  muted:       false,
  toggleMute:  () => {},
  unlockAudio: () => {},
});

export const useAudio = () => useContext(AudioCtx);

/* ── Provider ─────────────────────────────────────────────── */
export function AudioProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted]       = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const sfxRefs    = useRef<Partial<Record<SfxKey, HTMLAudioElement>>>({});
  const mutedRef   = useRef(false);   
  const fadeFrameRef = useRef<number | null>(null);

  useEffect(() => { mutedRef.current = muted; }, [muted]);

  /* ── Preload SFX on mount (client-only) ─────────────────── */
  useEffect(() => {
    (Object.keys(SFX) as SfxKey[]).forEach(key => {
      const el = new Audio(SFX[key]);
      el.preload  = "auto";
      el.volume   = SFX_VOL[key];
      sfxRefs.current[key] = el;
    });

    const amb = new Audio("/audio/ambient/Heavenly Music.MP3");
    amb.loop    = true;
    amb.volume  = 0;          
    ambientRef.current = amb;

    return () => {
      ambientRef.current?.pause();
    };
  }, []);

  /* ── Fade ambient volume in/out ─────────────────────────── */
  const fadeAmbient = useCallback((toVol: number, durationMs: number) => {
    const amb = ambientRef.current;
    if (!amb) return;

    if (fadeFrameRef.current !== null) {
      cancelAnimationFrame(fadeFrameRef.current);
      fadeFrameRef.current = null;
    }

    const startVol = amb.volume;
    const startTs  = performance.now();
    const tick = (now: number) => {
      const pct = Math.min((now - startTs) / durationMs, 1);
      const nextVolume = Math.min(1, Math.max(0, startVol + (toVol - startVol) * pct));
      amb.volume = nextVolume;
      if (pct < 1) {
        fadeFrameRef.current = requestAnimationFrame(tick);
      } else {
        fadeFrameRef.current = null;
      }
    };
    fadeFrameRef.current = requestAnimationFrame(tick);
  }, []);

  /* ── Unlock + start ambient ─────────────────────────────── */
  const unlockAudio = useCallback(() => {
    if (unlocked) return;
    setUnlocked(true);

    const amb = ambientRef.current;
    if (!amb) return;

    amb.play().then(() => {
      fadeAmbient(AMBIENT_TARGET_VOL, AMBIENT_FADE_MS); 
    }).catch(() => {
      /* Silently ignore if browser still blocks */
    });
  }, [unlocked, fadeAmbient]);

  /* ── Mute / unmute ──────────────────────────────────────── */
  const toggleMute = useCallback(() => {
    setMuted(prev => {
      const next = !prev;
      const amb  = ambientRef.current;
      if (amb) {
        if (next) {
          fadeAmbient(0, AMBIENT_FADE_MS);
        } else {
          fadeAmbient(AMBIENT_TARGET_VOL, AMBIENT_FADE_MS);
        }
      }
      return next;
    });
  }, [fadeAmbient]);

  /* ── Play an SFX ────────────────────────────────────────── */
  const play = useCallback((key: SfxKey) => {
    if (mutedRef.current || !unlocked) return;
    const el = sfxRefs.current[key];
    if (!el) return;
    el.currentTime = 0;
    el.play().catch(() => {});
  }, [unlocked]);

  return (
    <AudioCtx.Provider value={{ play, muted, toggleMute, unlockAudio }}>
      {children}
    </AudioCtx.Provider>
  );
}