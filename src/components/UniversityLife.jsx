import React, { useEffect, useRef, useState } from "react";

/**
 * UniversityLifePro
 * - direction: "right" | "left" (default "right")
 * - speed: seconds for one full loop
 * - colorDuration: seconds for color cycle
 * - pauseOnHover: boolean
 * - finalColor: final color hex (holds at end of cycle)
 */
const UniversityLifePro = ({
  text = "Queenster University Life",
  direction = "right",
  speed = 20,
  colorDuration = 8,
  pauseOnHover = true,
  finalColor = "#059669",
}) => {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Inject scoped CSS once
  useEffect(() => {
    if (document.getElementById("univ-pro-styles")) return;

    const style = document.createElement("style");
    style.id = "univ-pro-styles";
    style.innerHTML = `
      /* UniversityLifePro - component scoped */

      .univ-pro-section { background: linear-gradient(180deg,#ffffff 0%, #fbfbfc 100%); }
      .univ-pro-inner { max-width: 1200px; margin-left:auto; margin-right:auto; padding-left:1.5rem; padding-right:1.5rem; }

      .univ-wrap { position: relative; overflow: hidden; border-radius: 8px; padding: 2.5rem 0; }
      .univ-track {
        display:flex;
        align-items:center;
        white-space:nowrap;
        will-change: transform;
        /* default uses left-moving keyframe; direction class overrides */
      }
      .univ-track.direction-right { animation: univ-marquee-right var(--univ-duration, 20s) linear infinite; }
      .univ-track.direction-left  { animation: univ-marquee-left  var(--univ-duration, 20s) linear infinite; }

      .univ-item { display:inline-flex; align-items:center; padding: 0 3rem; }

      .univ-text {
        font-family: Georgia, "Times New Roman", serif;
        font-weight: 800;
        margin: 0;
        line-height: 1;
        letter-spacing: -0.01em;
        font-size: 2rem;
        text-rendering: optimizeLegibility;
        animation: univ-color var(--univ-colorDuration, 8s) linear infinite;
        -webkit-font-smoothing: antialiased;
        text-shadow: 0 2px 8px rgba(31,42,68,0.06);
      }
      @media(min-width:768px) { .univ-text { font-size: 3.5rem; } }

      /* RIGHT: move track from -50% -> 0% (text moves right) */
      @keyframes univ-marquee-right {
        0%   { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
      /* LEFT: old behavior (for optional use) */
      @keyframes univ-marquee-left {
        0%   { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }

      /* color sequence: white -> red -> blue -> finalColor (green) */
      @keyframes univ-color {
        0%   { color: #ffffff; }
        18%  { color: #ef4444; }
        45%  { color: #2563eb; }
        78%  { color: var(--univ-final-color, #059669); }
        100% { color: var(--univ-final-color, #059669); }
      }

      /* edge fade for polish */
      .univ-wrap::before,
      .univ-wrap::after {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 6%;
        pointer-events: none;
        z-index: 2;
      }
      .univ-wrap::before {
        left: 0;
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      }
      .univ-wrap::after {
        right: 0;
        background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      }

      /* pause/play state */
      .univ-track.paused { animation-play-state: paused; }
      .univ-text.paused { animation-play-state: paused; }

      .univ-control {
        position: absolute;
        right: 1.25rem;
        top: 50%;
        transform: translateY(-50%);
        z-index: 5;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        width:44px;
        height:44px;
        border-radius:10px;
        background: rgba(31,42,68,0.06);
        backdrop-filter: blur(6px);
        box-shadow: 0 6px 18px rgba(31,42,68,0.06);
        transition: transform .18s ease, background .18s ease;
        cursor: pointer;
        border: 1px solid rgba(31,42,68,0.04);
      }
      .univ-control:hover { transform: translateY(-50%) scale(1.04); background: rgba(31,42,68,0.08); }
      .univ-control:focus { outline: 3px solid rgba(59,130,246,0.12); }

      .univ-wrap:focus-within { box-shadow: 0 8px 30px rgba(31,42,68,0.04); border-radius: 8px; }

      /* reduced motion fallback */
      @media (prefers-reduced-motion: reduce) {
        .univ-track, .univ-text { animation: none !important; transform: none !important; }
        .univ-text { color: var(--univ-final-color, #059669) !important; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Apply runtime CSS vars and set direction class
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    wrap.style.setProperty("--univ-duration", `${speed}s`);
    wrap.style.setProperty("--univ-colorDuration", `${colorDuration}s`);
    wrap.style.setProperty("--univ-final-color", finalColor);

    // set direction class on track
    track.classList.remove("direction-left", "direction-right");
    track.classList.add(direction === "left" ? "direction-left" : "direction-right");

    // handle hover-based pause
    const enter = () => { if (pauseOnHover) pause(); };
    const leave = () => { if (pauseOnHover) play(); };

    if (pauseOnHover) {
      wrap.addEventListener("mouseenter", enter);
      wrap.addEventListener("mouseleave", leave);
    }

    return () => {
      if (pauseOnHover) {
        wrap.removeEventListener("mouseenter", enter);
        wrap.removeEventListener("mouseleave", leave);
      }
    };
  }, [direction, speed, colorDuration, pauseOnHover, finalColor]);

  const pause = () => {
    const track = trackRef.current;
    if (!track) return;
    track.classList.add("paused");
    track.querySelectorAll(".univ-text").forEach((t) => t.classList.add("paused"));
    setIsPaused(true);
  };
  const play = () => {
    const track = trackRef.current;
    if (!track) return;
    track.classList.remove("paused");
    track.querySelectorAll(".univ-text").forEach((t) => t.classList.remove("paused"));
    setIsPaused(false);
  };
  const toggle = () => (isPaused ? play() : pause());

  // keyboard toggle (Space/Enter)
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const onKey = (e) => {
      if (e.key === " " || e.key === "Spacebar" || e.key === "Enter") {
        e.preventDefault();
        toggle();
      }
    };
    wrap.addEventListener("keydown", onKey);
    return () => wrap.removeEventListener("keydown", onKey);
  }, [isPaused]);

  return (
    <section className="univ-pro-section py-20">
      <div className="univ-pro-inner">
        <div
          ref={wrapRef}
          className="univ-wrap"
          tabIndex={0}
          aria-label="University life marquee, press space to pause or play"
        >
          <div className="univ-track" ref={trackRef}>
            <div className="univ-item" aria-hidden="false">
              <h1 className="univ-text">{text}</h1>
            </div>
            <div className="univ-item" aria-hidden="true">
              <h1 className="univ-text">{text}</h1>
            </div>
          </div>

          <button
            onClick={toggle}
            className="univ-control"
            aria-pressed={isPaused}
            aria-label={isPaused ? "Play marquee" : "Pause marquee"}
            title={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 3v18l15-9L5 3z" fill="#1f2a44" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="#1f2a44" />
              </svg>
            )}
          </button>
        </div>

        <p className="mt-6 text-center text-lg text-gray-600 max-w-3xl mx-auto">
          Experience campus life at Queenster.
        </p>
      </div>
    </section>
  );
};

export default UniversityLifePro;
