import { useEffect, useState } from "react";
import logo from '@/assets/BO-BS-LOGO.png';

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2; // slower progression
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setFadeOut(true);
        setTimeout(() => setHidden(true), 1000);
        setTimeout(() => onFinish(), 1000);
      }
    }, 60); // slower update speed

    return () => clearInterval(interval);
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white transition-all duration-1000 ${fadeOut ? "opacity-0 blur-sm" : "opacity-100 blur-none"}`}
    >
      <img
        src={logo}
        alt="Logo"
        className="w-16 h-16 mb-3 animate-bounce-slow"
        style={{ filter: "drop-shadow(0 0 12px #dc2626)" }}
      />
      <div className="text-sm font-mono mb-2 text-red-600">{progress}%</div>
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="bg-red-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
