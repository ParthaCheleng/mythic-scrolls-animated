import roseBackground from "@/assets/rose-adjusted.png";
import pillarImage from "@/assets/pillar.png";
import guildEmblem from "@/assets/BO-logo.webp";
import { cn } from "@/lib/utils";
import { members } from "@/components/data/members";

interface NameCardProps {
  name: string;
  className?: string;
}

const NameCard = ({ name, className }: NameCardProps) => {
  return (
    <span
      className={cn(
        "group inline-flex items-center justify-center gap-2",
        "px-5 md:px-6 py-3 min-w-[140px] md:min-w-[160px] max-w-[180px] min-h-[46px]",
        "rounded-full bg-primary/10 border-[#6d0e17]",
        "text-[#e11d48] text-sm md:text-base font-medium tracking-wide text-center",
        "shadow-[0_0_6px_#e11d48] hover:scale-105 transition-all duration-300",
        className
      )}
    >
      <img
        loading="lazy"
        src={guildEmblem}
        alt="Icon"
        className="w-5 h-5 md:w-6 md:h-6 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#e11d48]"
      />
      {name}
    </span>
  );
};

const LuxuryHeader = () => {
  return (
    // 👇 Hide entire section below lg
    <div className="hidden lg:block relative overflow-hidden isolate bg-background">
      {/* Top/Bottom shadows */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-black/30 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black/40 to-transparent z-30" />

      {/* Rose overlays */}
      <div
        className="absolute inset-0 z-10 bg-no-repeat bg-cover opacity-10 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url(${roseBackground})`,
          backgroundPosition: "top right",
          backgroundSize: "cover",
          animation: "slowRose 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 z-10 bg-no-repeat bg-cover opacity-10 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url(${roseBackground})`,
          backgroundPosition: "bottom left",
          backgroundSize: "cover",
          animation: "slowRose 9s ease-in-out infinite reverse",
        }}
      />

      {/* Pillars */}
      <div className="absolute z-30 top-16 left-[-50px] h-[110vh] w-[500px] pointer-events-none">
        <img
          src={pillarImage}
          alt="Left Pillar"
          className="h-full w-full object-contain opacity-90 drop-shadow-[40px_0px_15px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="absolute z-30 top-16 right-[-50px] h-[110vh] w-[500px] pointer-events-none scale-x-[-1]">
        <img
          src={pillarImage}
          alt="Right Pillar"
          className="h-full w-full object-contain opacity-90 drop-shadow-[60px_0px_15px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Main */}
      <section className="relative z-20 w-full min-h-screen bg-gradient-shadow text-white px-4 py-12">
        <div className="text-center mb-10 mt-20">
          <h1 className="fantasy-title text-5xl font-blackorder text-primary">
            Founding members of BLACKORDER
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto my-6"></div>
          <p className="text-xl text-muted-foreground fantasy-title font-blackorder max-w-3xl mx-auto leading-relaxed">
            Meet the honored members of BLACKORDER
          </p>
        </div>

        {/* Name grid (desktop keeps the centered-last-two behavior) */}
        <div className="max-w-6xl mx-auto px-0">
          <div className="grid gap-5 grid-cols-6">
            {members.map((name, index) => {
              const isSecondLast = index === members.length - 2;
              const isLast = index === members.length - 1;
              const needCenterPair = members.length % 6 === 2;

              if (needCenterPair && isSecondLast) {
                return (
                  <div
                    key={`${index}-desktop-pair`}
                    className="col-span-2 col-start-3 flex justify-center gap-4"
                  >
                    <NameCard name={name} />
                    <NameCard name={members[index + 1]} />
                  </div>
                );
              }
              if (needCenterPair && isLast) return null;

              return (
                <div key={index} className="flex justify-center">
                  <NameCard name={name} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryHeader;
export { NameCard };
