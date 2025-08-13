import roseBackground from "@/assets/rose-adjusted.png";
import pillarImage from "@/assets/pillar.png";
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
  // 👇 Add up to 4 names that you want to appear in the right-side empty spaces
  // Replace "Reserved" placeholders with real names when ready.
  const EXTRA_RIGHT = ["MJAD", "Ekca", "Hellscream", "VonHellmann"];

  // Build list that pads the last row on the RIGHT side
  const cols = 6;
  const remainder = rawMembers.length % cols;
  const need = remainder === 0 ? 0 : cols - remainder; // 1..5 (we'll cap at 4)
  const toAdd = Math.min(need, EXTRA_RIGHT.length);

  const members = [...rawMembers];
  const rightPads = EXTRA_RIGHT.slice(0, toAdd);

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
        <div className="w-24 h-1 bg-gradient-gold mx-auto my-6" />
          <p className="text-xl text-muted-foreground fantasy-title font-blackorder max-w-3xl mx-auto leading-relaxed">
            Meet the honored members of BLACKORDER
          </p>
        </div>

        {/* Name grid */}
        <div className="max-w-6xl mx-auto px-0">
          <div className="grid gap-5 grid-cols-6">
            {members.map((name, index) => (
              <div key={`m-${index}`} className="flex justify-center">
                <NameCard name={name} />
              </div>
            ))}

            {/* Right-side fillers to complete last row */}
            {rightPads.map((label, i) => (
              <div key={`pad-${i}`} className="flex justify-center">
                {/* If you replace "Reserved" with real names above,
                    set reserved={false} automatically */}
                <NameCard name={label} reserved={label === "Reserved"} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryHeader;
export { NameCard };
