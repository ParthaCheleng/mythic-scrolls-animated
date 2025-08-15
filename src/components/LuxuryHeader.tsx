// src/components/LuxuryHeader.tsx
import rosesSweep from "@/assets/rose-sweep.png"; // your rose sweep image
import guildEmblem from "@/assets/BO-logo.webp";
import { cn } from "@/lib/utils";
import { members as rawMembers } from "@/components/data/members";

interface NameCardProps {
  name: string;
  className?: string;
  reserved?: boolean;
}

const NameCard = ({ name, className, reserved }: NameCardProps) => {
  return (
    <span
      className={cn(
        "group inline-flex items-center justify-center gap-2",
        "px-5 md:px-6 py-3 min-w-[140px] md:min-w-[160px] max-w-[180px] min-h-[46px]",
        "rounded-full border",
        reserved
          ? "bg-white/5 border-dashed border-[#6d0e17]/60 text-white/40"
          : "bg-primary/10 border-[#6d0e17] text-[#e11d48] shadow-[0_0_6px_#e11d48] hover:scale-105",
        "text-sm md:text-base font-medium tracking-wide text-center transition-all duration-300",
        className
      )}
    >
      {!reserved && (
        <img
          loading="lazy"
          src={guildEmblem}
          alt="Icon"
          className="w-5 h-5 md:w-6 md:h-6 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#e11d48]"
        />
      )}
      {reserved ? "Reserved" : name}
    </span>
  );
};

const LuxuryHeader = () => {
  const EXTRA_RIGHT = ["Jaders", "Ekca", "Hellscream", "VonHellmann"];

  const cols = 6;
  const remainder = rawMembers.length % cols;
  const need = remainder === 0 ? 0 : cols - remainder;
  const toAdd = Math.min(need, EXTRA_RIGHT.length);

  const members = [...rawMembers];
  const rightPads = EXTRA_RIGHT.slice(0, toAdd);

  return (
    <div className="hidden lg:block relative overflow-hidden isolate">
      {/* Base gradient (same as screenshot) */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[#111111] via-[#1a1a1a] to-[#111111]" />

      {/* Roses sweep overlay */}
      <div
        className="absolute inset-0 -z-20 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${rosesSweep})`,
          backgroundPosition: "center",
          filter: "saturate(.6) brightness(.6) drop-shadow(0 0 15px rgba(0,0,0,0.9))",
          opacity: 0.65,
        }}
      />

      {/* Softer edge shadows */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-40" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/35 to-transparent z-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/35 to-transparent z-40" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black/40 to-transparent -z-10" />

      {/* Content */}
      <section className="relative z-20 w-full min-h-screen text-white px-4 py-12">
        <div className="text-center mb-10 mt-20">
          <h1 className="fantasy-title text-4xl md:text-5xl font-blackorder text-primary mb-4 md:mb-6 text-center">
            Founding members of BLACKORDER
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto my-6" />
          <p className="text-xl text-muted-foreground fantasy-title font-blackorder max-w-1xl mx-auto leading-relaxed">
            Meet the honored founding generation of BlackOrder
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto px-0">
          <div className="grid gap-5 grid-cols-6">
            {members.map((name, index) => (
              <div key={`m-${index}`} className="flex justify-center">
                <NameCard name={name} />
              </div>
            ))}

            {rightPads.map((label, i) => (
              <div key={`pad-${i}`} className="flex justify-center">
                <NameCard name={label} reserved={label === "Reserved"} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer tag with icon on right */}
      <div className="w-full flex items-center justify-center py-4 text-xs text-primary gap-2">
        <span>
          Developed by <span className="font-semibold text-primary">SnowCrowzz</span>
        </span>
        <img
          src={guildEmblem}
          alt="icon"
          className="w-4 h-4 object-contain"
        />
      </div>
    </div>
    
  );
};

export default LuxuryHeader;
export { NameCard };
