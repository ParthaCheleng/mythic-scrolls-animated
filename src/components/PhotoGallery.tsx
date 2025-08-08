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
  guild: string;
  image: string;
  position: string;
  size: string;
}

const diamondItems: DiamondItem[] = [
  { id: "1", guild: "BlackOrder", image: ss1,  position: "top-[10%] left-[36%]",    size: "w-44 h-44" },
  { id: "2", guild: "BlackOrder", image: ss2,  position: "top-[24%] left-[68%]",    size: "w-44 h-44" },
  { id: "3", guild: "BlackOrder", image: ss3,  position: "top-[25%] left-[27%]",    size: "w-52 h-52" },
  { id: "4", guild: "BlackOrder", image: ss4,  position: "top-[18%] left-[51.95555%]", size: "w-52 h-52" },
  { id: "5", guild: "BlackOrder", image: ss5,  position: "top-[38%] left-[59.5%]",  size: "w-52 h-52" },
  { id: "6", guild: "BlackOrder", image: ss6,  position: "top-[41.5%] left-[75%]",  size: "w-52 h-52" },
  { id: "12", guild: "BlackOrder", image: ss16, position: "top-[35%] left-[41.5%]", size: "w-64 h-64" },
  { id: "7", guild: "BlackOrder", image: ss7,  position: "top-[53.5%] left-[31%]",  size: "w-56 h-56" },
  { id: "8", guild: "BlackOrder", image: ss8,  position: "top-[56%] left-[50.5%]",  size: "w-56 h-56" },
  { id: "9", guild: "BlackOrder", image: ss9,  position: "top-[59%] left-[66.6%]",  size: "w-56 h-56" },
  { id: "10", guild: "BlackOrder", image: ss10, position: "top-[70%] left-[40%]",   size: "w-48 h-48" },
  { id: "11", guild: "BlackOrder", image: ss11, position: "top-[76%] left-[58%]",   size: "w-48 h-48" },
  { id: "12b", guild: "BlackOrder", image: ss12, position: "top-[-2%] left-[45.4%]", size: "w-48 h-48" },
  { id: "13", guild: "BlackOrder", image: ss13, position: "top-[42.5%] left-[19%]", size: "w-48 h-48" },
  { id: "14", guild: "BlackOrder", image: ss14, position: "top-[5%] left-[62%]",   size: "w-48 h-48" },
  { id: "15", guild: "BlackOrder", image: ss15, position: "top-[87%] left-[47.5%]", size: "w-48 h-48" },
  { id: "16", guild: "BlackOrder", image: ss17, position: "top-[29%] left-[85.5%]", size: "w-48 h-48" },
  { id: "17", guild: "BlackOrder", image: ss18, position: "top-[57%] left-[83.6%]", size: "w-48 h-48" },
  { id: "18", guild: "BlackOrder", image: ss19, position: "top-[45%] left-[93%]",  size: "w-48 h-48" },
  { id: "19", guild: "BlackOrder", image: ss20, position: "top-[74%] left-[76%]",  size: "w-48 h-48" },
  { id: "20", guild: "BlackOrder", image: ss21, position: "top-[69%] left-[22%]",  size: "w-48 h-48" },
  { id: "21", guild: "BlackOrder", image: ss22, position: "top-[59%] left-[11.5%]", size: "w-48 h-48" },
  { id: "22", guild: "BlackOrder", image: ss23, position: "top-[102%] left-[55.5%]", size: "w-48 h-48" },
  { id: "23", guild: "BlackOrder", image: ss24, position: "top-[26%] left-[11.5%]", size: "w-48 h-48" },
  { id: "24", guild: "BlackOrder", image: ss25, position: "top-[42.5%] left-[4%]",  size: "w-48 h-48" },
];

type ZoomState = null | {
  src: string;
  initialTransform: string;
  box: { width: number; height: number; left: number; top: number };
};

const DiamondCard = ({
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
      className={`absolute ${item.position} transform -translate-x-1/2 -translate-y-1/2 z-20 group ${
        isLoaded ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms`, animationDuration: "800ms", animationFillMode: "forwards" }}
    >
      <button
        onClick={handleClick}
        className={`relative ${item.size} transform rotate-45 overflow-hidden border-2 border-gold/30 
          transition-all duration-500 ease-in-out 
          group-hover:border-gold group-hover:scale-110 group-hover:z-30 
          shadow-[0_0_25px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] cursor-pointer`}
        aria-label="Open image"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          ref={imgRef}
          loading="lazy"
          src={item.image}
          alt=""
          className="w-full h-full object-cover transform -rotate-45 scale-150 group-hover:scale-160 transition-transform duration-700 ease-in-out"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
      </button>
    </div>
  );
};

const PhotoGallery = () => {
  // Desktop-only visibility
  const [showDesktop, setShowDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (min-height: 741px)");
    const sync = () => setShowDesktop(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  const [zoom, setZoom] = useState<ZoomState>(null);
  const zoomBoxRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  // ESC to close
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeZoom();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  // Open: measure image, size box to image ratio (no bars, no crop)
  const openZoom = (src: string, rect: DOMRect) => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;

    img.onload = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const maxW = Math.min(vw * 0.9, 1400);
      const maxH = Math.min(vh * 0.9, 1000);

      const ratio = img.naturalWidth / img.naturalHeight;
      let width = maxW;
      let height = width / ratio;
      if (height > maxH) {
        height = maxH;
        width = height * ratio;
      }

      const left = (vw - width) / 2;
      const top = (vh - height) / 2;

      // FLIP transform from card rect -> target box
      const dx = rect.left - left;
      const dy = rect.top - top;
      const sx = rect.width / width;
      const sy = rect.height / height;
      const initialTransform = `translate3d(${dx}px, ${dy}px, 0) scale(${sx}, ${sy})`;

      setZoom({
        src,
        initialTransform,
        box: { width, height, left, top },
      });

      requestAnimationFrame(() => {
        if (zoomBoxRef.current && backdropRef.current) {
          zoomBoxRef.current.style.transform = "translate3d(0,0,0) scale(1)";
          backdropRef.current.classList.replace("opacity-0", "opacity-100");
        }
      });
    };
  };

  const closeZoom = () => {
    if (!zoom) return;
    if (zoomBoxRef.current && backdropRef.current) {
      zoomBoxRef.current.style.transform = zoom.initialTransform;
      backdropRef.current.classList.replace("opacity-100", "opacity-0");
    }
  };

  const handleZoomEnd = () => {
    if (!zoomBoxRef.current) return;
    const t = getComputedStyle(zoomBoxRef.current).transform;
    if (t !== "none" && !t.includes("matrix(1")) setZoom(null);
  };

  if (!showDesktop) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/40 to-transparent z-40" />

      {/* Lightbox */}
      {zoom && (
        <>
          <div
            ref={backdropRef}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm transition-opacity duration-400 ease-out opacity-0"
            onClick={closeZoom}
          />
          <div
            ref={zoomBoxRef}
            onTransitionEnd={handleZoomEnd}
            className="fixed z-[61] transition-transform duration-400 ease-[cubic-bezier(.22,.61,.36,1)]
                       will-change-transform backface-hidden"
            style={{
              width: zoom.box.width,
              height: zoom.box.height,
              left: zoom.box.left,
              top: zoom.box.top,
              transform: zoom.initialTransform,
            } as React.CSSProperties}
          >
            {/* Hover zoom: container scales 0.9 -> 1.0 */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl transform-gpu transition-transform duration-500 ease-out scale-90 hover:scale-100">
              <img
                src={zoom.src}
                alt="Preview"
                className="w-full h-full object-contain bg-transparent"
                draggable={false}
              />
              <button
                onClick={closeZoom}
                className="absolute top-2 right-2 grid place-items-center w-9 h-9 rounded-full
                           bg-black/70 text-white text-lg hover:bg-red-600 shadow-lg ring-2 ring-white/20"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        </>
      )}

      {/* Cards */}
      <div className="relative w-full h-screen">
        {diamondItems.map((item, index) => (
          <DiamondCard key={item.id} item={item} index={index} onOpen={openZoom} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
