import { useEffect, useRef, useState } from "react";
import ss1 from "@/assets/pictures/ss_1.webp";
import ss2 from "@/assets/pictures/ss_2.webp";
import ss3 from "@/assets/pictures/ss_3.webp";
import ss4 from "@/assets/pictures/ss_4.webp";
import ss5 from "@/assets/pictures/ss_5.webp";
import ss6 from "@/assets/pictures/ss_6.webp";
import ss7 from "@/assets/pictures/ss_7.webp";
import ss8 from "@/assets/pictures/ss_8.webp";
import ss9 from "@/assets/pictures/ss_9.webp";
import ss10 from "@/assets/pictures/ss_10.webp";
import ss11 from "@/assets/pictures/ss_11.webp";
import ss12 from "@/assets/pictures/ss_12.webp";
import ss13 from "@/assets/pictures/ss_13.webp";
import ss14 from "@/assets/pictures/ss_14.webp";
import ss15 from "@/assets/pictures/ss_15.webp";
import ss16 from "@/assets/pictures/ss_16.webp";
import ss17 from "@/assets/pictures/ss_17.webp";
import ss18 from "@/assets/pictures/ss_18.webp";
import ss19 from "@/assets/pictures/ss_19.webp";
import ss20 from "@/assets/pictures/ss_20.webp";
import ss21 from "@/assets/pictures/ss_21.webp";
import ss22 from "@/assets/pictures/ss_22.webp";
import ss23 from "@/assets/pictures/ss_23.webp";
import ss24 from "@/assets/pictures/ss_24.webp";
import ss25 from "@/assets/pictures/ss_25.webp";

interface DiamondItem {
  id: string;
  image: string;
  position: string;
  size: string;
}

const diamondItems: DiamondItem[] = [
  { id: "d1", image: ss1,  position: "top-[10%] left-[36%]",     size: "w-44 h-44" },
  { id: "d2", image: ss2,  position: "top-[24%] left-[68%]",     size: "w-44 h-44" },
  { id: "d3", image: ss3,  position: "top-[25%] left-[27%]",     size: "w-52 h-52" },
  { id: "d4", image: ss4,  position: "top-[18%] left-[51.955%]", size: "w-52 h-52" },
  { id: "d5", image: ss5,  position: "top-[38%] left-[59.5%]",   size: "w-52 h-52" },
  { id: "d6", image: ss6,  position: "top-[41.5%] left-[75%]",   size: "w-52 h-52" },
  { id: "d7", image: ss16, position: "top-[35%] left-[41.5%]",   size: "w-64 h-64" },
  { id: "d8", image: ss7,  position: "top-[53.5%] left-[31%]",   size: "w-56 h-56" },
  { id: "d9", image: ss8,  position: "top-[56%] left-[50.5%]",   size: "w-56 h-56" },
  { id: "d10", image: ss9, position: "top-[59%] left-[66.6%]",   size: "w-56 h-56" },
  { id: "d11", image: ss10,position: "top-[70%] left-[40%]",     size: "w-48 h-48" },
  { id: "d12", image: ss11,position: "top-[76%] left-[58%]",     size: "w-48 h-48" },
  { id: "d13", image: ss12,position: "top-[-2%] left-[45.4%]",   size: "w-48 h-48" },
  { id: "d14", image: ss13,position: "top-[42.5%] left-[19%]",   size: "w-48 h-48" },
  { id: "d15", image: ss14,position: "top-[5%] left-[62%]",      size: "w-48 h-48" },
  { id: "d16", image: ss15,position: "top-[87%] left-[47.5%]",   size: "w-48 h-48" },
  { id: "d17", image: ss17,position: "top-[29%] left-[85.5%]",   size: "w-48 h-48" },
  { id: "d18", image: ss18,position: "top-[57%] left-[83.6%]",   size: "w-48 h-48" },
  { id: "d19", image: ss19,position: "top-[45%] left-[93%]",     size: "w-48 h-48" },
  { id: "d20", image: ss20,position: "top-[74%] left-[76%]",     size: "w-48 h-48" },
  { id: "d21", image: ss21,position: "top-[69%] left-[22%]",     size: "w-48 h-48" },
  { id: "d22", image: ss22,position: "top-[59%] left-[11.5%]",   size: "w-48 h-48" },
  { id: "d23", image: ss23,position: "top-[102%] left-[55.5%]",  size: "w-48 h-48" },
  { id: "d24", image: ss24,position: "top-[26%] left-[11.5%]",   size: "w-48 h-48" },
  { id: "d25", image: ss25,position: "top-[42.5%] left-[4%]",    size: "w-48 h-48" },
];

type ZoomState = null | {
  src: string;
  initialTransform: string; // translate + scale from origin -> target
};

const DiamondCardAbsolute = ({
  item,
  index,
  onOpen,
}: {
  item: DiamondItem;
  index: number;
  onOpen: (src: string, rect: DOMRect) => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleClick = () => {
    if (imgRef.current) onOpen(item.image, imgRef.current.getBoundingClientRect());
  };

  return (
    <div
      className={`absolute ${item.position} -translate-x-1/2 -translate-y-1/2 z-20 group ${
        isLoaded ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 120}ms`, animationDuration: "700ms", animationFillMode: "forwards" }}
    >
      <button
        onClick={handleClick}
        className={`relative ${item.size} rotate-45 overflow-hidden border-2 border-gold/30 
          transition-all duration-500 ease-in-out group-hover:border-gold group-hover:scale-110 group-hover:z-30 
          shadow-[0_0_25px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]`}
        aria-label="Open image"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          ref={imgRef}
          loading="lazy"
          src={item.image}
          alt=""
          className="w-full h-full object-cover -rotate-45 scale-150 group-hover:scale-160 transition-transform duration-700 ease-in-out"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
      </button>
    </div>
  );
};

const PhotoGallery = () => {
  const [showDesktop, setShowDesktop] = useState(false);

  // FLIP lightbox
  const [zoom, setZoom] = useState<ZoomState>(null);
  const zoomBoxRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (min-height: 741px)");
    const sync = () => setShowDesktop(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  // esc to close
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeZoom();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  const openZoom = (src: string, rect: DOMRect) => {
    // target box (centered)
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const targetW = Math.min(vw * 0.9, 1400);
    const targetH = Math.min(vh * 0.9, 1000);
    const left = (vw - targetW) / 2;
    const top = (vh - targetH) / 2;

    // compute initial transform (from origin rect -> target rect)
    const dx = rect.left - left;
    const dy = rect.top - top;
    const sx = rect.width / targetW;
    const sy = rect.height / targetH;
    const initialTransform = `translate3d(${dx}px, ${dy}px, 0) scale(${sx}, ${sy})`;

    setZoom({ src, initialTransform });

    // next frame: animate transform -> identity; backdrop -> visible
    requestAnimationFrame(() => {
      if (zoomBoxRef.current && backdropRef.current) {
        zoomBoxRef.current.style.transform = "translate3d(0,0,0) scale(1)";
        backdropRef.current.classList.remove("opacity-0");
        backdropRef.current.classList.add("opacity-100");
      }
    });
  };

  const closeZoom = () => {
    if (!zoom) return;
    if (zoomBoxRef.current && backdropRef.current) {
      // animate back to origin transform
      zoomBoxRef.current.style.transform = zoom.initialTransform;
      backdropRef.current.classList.remove("opacity-100");
      backdropRef.current.classList.add("opacity-0");
    }
  };

  const handleZoomEnd = () => {
    // if we ended in initialTransform (collapsed), clear; otherwise we finished opening—do nothing
    if (zoomBoxRef.current && backdropRef.current) {
      const style = getComputedStyle(zoomBoxRef.current);
      const t = style.transform;
      // if not identity, it means we just finished collapsing
      if (t !== "none" && !t.includes("matrix(1")) {
        setZoom(null);
      }
    }
  };

  if (!showDesktop) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/40 to-transparent z-40" />

      {/* Backdrop + Zoom box */}
      {/* Zoom overlay (desktop) */}
      {zoom && (
        <>
          {/* Backdrop */}
          <div
            ref={backdropRef}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm transition-opacity duration-400 ease-out opacity-0"
            onClick={closeZoom}
          />
          {/* Zoom container — no overflow here */}
          <div
            ref={zoomBoxRef}
            onTransitionEnd={handleZoomEnd}
            className="fixed z-[61] transition-transform duration-400 ease-[cubic-bezier(.22,.61,.36,1)]
                      will-change-transform backface-hidden"
            style={{
              width: Math.min(window.innerWidth * 0.9, 1400),
              height: Math.min(window.innerHeight * 0.9, 1000),
              left: (window.innerWidth - Math.min(window.innerWidth * 0.9, 1400)) / 2,
              top: (window.innerHeight - Math.min(window.innerHeight * 0.9, 1000)) / 2,
              transform: zoom.initialTransform, // FLIP start
            } as React.CSSProperties}
          >
            {/* Inner media shell handles rounding + clipping */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
              <img
                src={zoom.src}
                alt="Preview"
                className="w-full h-full object-contain bg-black/40"
                draggable={false}
              />

              {/* Close button lives INSIDE the clipped area */}
              <button
                onClick={closeZoom}
                className="absolute top-2 right-2 grid place-items-center
                          w-9 h-9 rounded-full bg-black/70 text-white text-lg
                          hover:bg-red-600 shadow-lg ring-2 ring-white/20"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        </>
      )}


      {/* Diamonds */}
      <div className="relative w-full h-[100svh] overflow-visible">
        {diamondItems.map((item, index) => (
          <DiamondCardAbsolute key={item.id} item={item} index={index} onOpen={openZoom} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
