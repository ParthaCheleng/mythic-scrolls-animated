import { useState, useEffect } from "react";
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
  { id: "1", guild: "BlackOrder", image: ss1, position: "top-[10%] left-[36%]", size: "w-44 h-44" },
  { id: "2", guild: "BlackOrder", image: ss2, position: "top-[24%] left-[68%]", size: "w-44 h-44" },
  { id: "3", guild: "BlackOrder", image: ss3, position: "top-[25%] left-[27%]", size: "w-52 h-52" },
  { id: "4", guild: "BlackOrder", image: ss4, position: "top-[18%] left-[51.95555%]", size: "w-52 h-52" },
  { id: "5", guild: "BlackOrder", image: ss5, position: "top-[38%] left-[59.5%]", size: "w-52 h-52" },
  { id: "6", guild: "BlackOrder", image: ss6, position: "top-[41.5%] left-[75%]", size: "w-52 h-52" },
  { id: "12", guild: "BlackOrder", image: ss16, position: "top-[35%] left-[41.5%]", size: "w-64 h-64" },
  { id: "7", guild: "BlackOrder", image: ss7, position: "top-[53.5%] left-[31%]", size: "w-56 h-56" },
  { id: "8", guild: "BlackOrder", image: ss8, position: "top-[56%] left-[50.5%]", size: "w-56 h-56" },
  { id: "9", guild: "BlackOrder", image: ss9, position: "top-[59%] left-[66.6%]", size: "w-56 h-56" },
  { id: "10", guild: "BlackOrder", image: ss10, position: "top-[70%] left-[40%]", size: "w-48 h-48" },
  { id: "11", guild: "BlackOrder", image: ss11, position: "top-[76%] left-[58%]", size: "w-48 h-48" },
  { id: "12", guild: "BlackOrder", image: ss12, position: "top-[-2%] left-[45.4%]", size: "w-48 h-48" },
  { id: "13", guild: "BlackOrder", image: ss13, position: "top-[42.5%] left-[19%]", size: "w-48 h-48" },
  { id: "14", guild: "BlackOrder", image: ss14, position: "top-[5%] left-[62%]", size: "w-48 h-48" },
  { id: "15", guild: "BlackOrder", image: ss15, position: "top-[87%] left-[47.5%]", size: "w-48 h-48" },
  { id: "16", guild: "BlackOrder", image: ss17, position: "top-[29%] left-[85.5%]", size: "w-48 h-48" },
  { id: "17", guild: "BlackOrder", image: ss18, position: "top-[57%] left-[83.6%]", size: "w-48 h-48" },
  { id: "18", guild: "BlackOrder", image: ss19, position: "top-[45%] left-[93%]", size: "w-48 h-48" },
  { id: "19", guild: "BlackOrder", image: ss20, position: "top-[74%] left-[76%]", size: "w-48 h-48" },
  { id: "20", guild: "BlackOrder", image: ss21, position: "top-[69%] left-[22%]", size: "w-48 h-48" },
  { id: "21", guild: "BlackOrder", image: ss22, position: "top-[59%] left-[11.5%]", size: "w-48 h-48" },
  { id: "22", guild: "BlackOrder", image: ss23, position: "top-[102%] left-[55.5%]", size: "w-48 h-48" },
  { id: "23", guild: "BlackOrder", image: ss24, position: "top-[26%] left-[11.5%]", size: "w-48 h-48" },
  { id: "24", guild: "BlackOrder", image: ss25, position: "top-[42.5%] left-[4%]", size: "w-48 h-48" },
];

const DiamondCard = ({
  item,
  index,
  onClick,
}: {
  item: DiamondItem;
  index: number;
  onClick: (image: string) => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`absolute ${item.position} transform -translate-x-1/2 -translate-y-1/2 z-20 group ${
        isLoaded ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        animationDuration: "800ms",
        animationFillMode: "forwards",
      }}
      onClick={() => onClick(item.image)}
    >
      <div
        className={`relative ${item.size} transform rotate-45 overflow-hidden border-2 border-gold/30 
        transition-all duration-500 ease-in-out 
        group-hover:border-gold group-hover:scale-110 group-hover:z-30 
        shadow-[0_0_25px_rgba(255,0,0,0.4)] 
        hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] cursor-pointer`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <img
            loading="lazy"
            src={item.image}
            alt=""
            className="w-full h-full object-cover transform -rotate-45 scale-150 group-hover:scale-160 transition-transform duration-700 ease-in-out"
            onLoad={() => setIsLoaded(true)}
          />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
    </div>
  );
};

const PhotoGallery = () => {
  const [mounted, setMounted] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
      {/* Shadows */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/40 to-transparent z-40" />

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="relative transition-all duration-500 scale-90 hover:scale-100">
            <img
              src={modalImage}
              alt="Full View"
              className="max-w-[90vw] max-h-[90vh] rounded shadow-2xl transition-all duration-500 ease-in-out"
            />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white text-xl bg-black/50 px-3 py-1 rounded hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="relative w-full h-screen">
        {diamondItems.map((item, index) => (
          <DiamondCard key={item.id} item={item} index={index} onClick={setModalImage} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
