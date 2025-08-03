import roseBackground from "@/assets/rose-corner.png"; // This is your full image
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
        "px-6 py-3 min-w-[160px] max-w-[180px] min-h-[50px]",
        "rounded-full bg-primary/10 border-[#6d0e17]",
        "text-[#e11d48] text-base font-medium tracking-wide text-center",
        "shadow-[0_0_6px_#e11d48] hover:scale-105 transition-all duration-300",
        className
      )}
    >
      <img
        loading="lazy"
        src={guildEmblem}
        alt="Icon"
        className="w-6 h-6 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#e11d48]"
      />
      {name}
    </span>
  );
};

const LuxuryHeader = () => {
  return (
    <div className="relative overflow-hidden isolate bg-background">
      {/* Top and Bottom Shadows */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-40" />
      {/* Decorative Rose Background Layer */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover pointer-events-none"
        style={{
          backgroundImage: `url(${roseBackground})`,
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}

      />

      {/* Shadow Overlay */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-10" />

      {/* Main Section */}
      <section className="relative z-20 w-full min-h-screen bg-gradient-shadow text-white px-4 py-12">
        <div className="text-center mb-12 mt-20">
          <h1 className="fantasy-title text-5xl md:text-5xl font-blackorder text-primary mb-4">
            Founding members of BLACKORDER
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8 mt-3"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the honored members of BLACKORDER
          </p>
        </div>

        {/* Name Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {members.map((name, index) => {
            const isSecondLast = index === members.length - 2;
            const isLast = index === members.length - 1;

            if (isSecondLast && members.length % 6 === 2) {
              return (
                <div
                  key={index}
                  className="col-span-2 col-start-3 flex justify-center gap-8"
                >
                  <NameCard name={name} />
                  <NameCard name={members[index + 1]} />
                </div>
              );
            }

            if (isLast && members.length % 6 === 2) return null;

            return (
              <div key={index} className="flex justify-center">
                <NameCard name={name} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default LuxuryHeader;
export { NameCard };
