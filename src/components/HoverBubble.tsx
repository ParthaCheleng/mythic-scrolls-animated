import { useEffect, useRef, useState, ReactNode } from "react";

type Side = "top" | "top-right" | "right" | "left";

type Props = {
  src: string;
  size?: number;
  position?: Side;
  offsetX?: number;
  offsetY?: number;
  children: ReactNode;
};

/* ---- quick knobs ---- */
const DOT_COUNT = 4;                         // 3–5 looks nice
const DOT_SIZES = [11, 8.5, 6, 4];           // biggest -> smallest
const DOT_COLOR = "#fff";                    // slightly warm? try "#f7f5f2"
const DOT_GLOW = "rgba(255,255,255,0.55)";   // halo around dots
const EDGE_STROKE = "rgba(0,0,0,0.42)";      // softer rim
const EDGE_WIDTH = 3.5;                      // thinner rim
/* --------------------- */

export default function HoverBubble({
  src,
  size = 248,
  position = "top-right",
  offsetX = -8,
  offsetY = 0,
  children,
}: Props) {
  const [show, setShow] = useState(false);
  const [shimY, setShimY] = useState(0);
  const bubbleRef = useRef<HTMLSpanElement>(null);

  // rounded, cleaner bubble
  const CLOUD_PATH = `
    M175 72
    C232 38 330 36 386 76
    C448 60 505 104 496 162
    C541 188 534 248 485 278
    C452 296 410 300 378 290
    C342 322 280 330 238 312
    C203 330 150 324 129 294
    C92 301 61 280 64 244
    C34 222 43 180 90 171
    C102 134 142 96 175 72 Z`;

  // anchor classes by side
  const anchorCls =
    position === "right"
      ? "absolute left-full top-1/2 -translate-y-1/2"
      : position === "left"
      ? "absolute right-full top-1/2 -translate-y-1/2"
      : position === "top"
      ? "absolute left-1/2 bottom-full -translate-x-1/2"
      : "absolute left-full bottom-full"; // top-right

  const spacingStyle =
    position === "right"
      ? { marginLeft: `${offsetX}px` }
      : position === "left"
      ? { marginRight: `${offsetX}px` }
      : position === "top-right"
      ? { marginLeft: `${offsetX}px`, marginBottom: `${offsetY + shimY}px` }
      : { marginBottom: `${offsetY + shimY}px` };

  // quadratic curve sampler (for curved dot tail)
  const q = (
    p0: [number, number],
    p1: [number, number],
    p2: [number, number],
    t: number
  ) => {
    const x = (1 - t) * (1 - t) * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0];
    const y = (1 - t) * (1 - t) * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1];
    return { x, y };
  };

  // tail for top-right: short curved arc toward the crest
  const tTopRight = () => {
    const p0: [number, number] = [210, 274]; // start near lower-left of cloud
    const p1: [number, number] = [176, 318]; // curve control
    const p2: [number, number] = [150, 338]; // end aiming toward crest
    const ts =
      DOT_COUNT === 4
        ? [0.35, 0.58, 0.78, 0.92]
        : Array.from({ length: DOT_COUNT }, (_, i) => 0.35 + (0.57 / (DOT_COUNT - 1)) * i);
    return ts.map((t, i) => ({ ...q(p0, p1, p2, t), r: DOT_SIZES[i] ?? 6 }));
  };

  const dots =
    position === "top-right"
      ? tTopRight()
      : position === "top"
      ? [0.35, 0.6, 0.82, 0.94].map((t, i) => ({
          ...q([280, 280], [280, 330], [280, 352], t),
          r: DOT_SIZES[i] ?? 6,
        }))
      : position === "right"
      ? [0.35, 0.6, 0.82, 0.94].map((t, i) => ({
          ...q([92, 180], [60, 180], [38, 180], t),
          r: DOT_SIZES[i] ?? 6,
        }))
      : [0.35, 0.6, 0.82, 0.94].map((t, i) => ({
          ...q([468, 180], [500, 180], [522, 180], t),
          r: DOT_SIZES[i] ?? 6,
        }));

  // prevent clipping under the top bar
  useEffect(() => {
    if (!show) return;
    const el = bubbleRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pad = 14;
    setShimY(rect.top < pad ? pad - rect.top : 0);
  }, [show]);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <span
        ref={bubbleRef}
        className={[
          "pointer-events-none",
          anchorCls,
          "hidden lg:block",
          "transition-all duration-200 ease-out z-[200]",
          show
            ? "opacity-100 scale-100 translate-x-0 translate-y-0"
            : "opacity-0 scale-95 translate-x-1 translate-y-2",
        ].join(" ")}
        style={{ ...spacingStyle, width: size, height: size * 0.64 }}
      >
        <svg
          viewBox="0 0 560 360"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          <defs>
            {/* soft drop shadow */}
            <filter id="softShadow" x="-20%" y="-30%" width="140%" height="160%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
              <feOffset dx="0" dy="8" result="offset" />
              <feMerge>
                <feMergeNode in="offset" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* gentle inner shine */}
            <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="white" stopOpacity="0.03" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>

            {/* radial glow for dots (no harsh stroke) */}
            <radialGradient id="dotGlow">
              <stop offset="0" stopColor={DOT_COLOR} stopOpacity="1" />
              <stop offset="0.9" stopColor={DOT_COLOR} stopOpacity="0.95" />
              <stop offset="1" stopColor={DOT_GLOW} stopOpacity="0" />
            </radialGradient>

            <clipPath id="cloudClip">
              <path d={CLOUD_PATH} />
            </clipPath>
          </defs>

          <g filter="url(#softShadow)">
            {/* image inside bubble */}
            <image
              href={src}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#cloudClip)"
            />
            {/* subtle inner highlight */}
            <path d={CLOUD_PATH} fill="url(#shine)" />

            {/* soft rim (no white outline) */}
            <path
              d={CLOUD_PATH}
              fill="none"
              stroke={EDGE_STROKE}
              strokeWidth={EDGE_WIDTH}
              strokeLinejoin="round"
            />
          </g>

          {/* curved “beads” tail */}
          <g>
            {dots.map((d, i) => (
              <g key={i} opacity={0.98}>
                <circle cx={d.x} cy={d.y} r={d.r} fill="url(#dotGlow)" />
                {/* tiny shadow to lift from background */}
                <circle cx={d.x} cy={d.y} r={d.r} fill="transparent" filter="url(#softShadow)" />
              </g>
            ))}
          </g>
        </svg>
      </span>
    </span>
  );
}
