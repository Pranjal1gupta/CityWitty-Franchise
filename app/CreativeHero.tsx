import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const CreativeHero = () => {
  const particles = Array.from({ length: 8 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative mt-10 md:mt-0"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden flex justify-center items-center">
        {/* Rotating Ring */}
        <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border-[6px] border-transparent border-t-blue-400 border-r-orange-400 opacity-40 blur-sm animate-spin-slow"></div>

        {/* Gradient Orbs */}
        <div className="absolute w-56 h-56 bg-blue-400/30 rounded-full blur-3xl top-0 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-orange-400/30 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>

        {/* Floating Particles */}
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: `${10 + Math.random() * 10}px`,
              height: `${10 + Math.random() * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-${i} ${5 + Math.random() * 5}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="relative group w-[85%] sm:w-[70%] md:w-full mx-auto z-10">
        <img
          src="https://res.cloudinary.com/dlifnml9x/image/upload/v1759836983/istockphoto-1409520341-612x612_rtnedg.jpg"
          alt="Business Partnership"
          className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-600/30 via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Floating Stats Card */}
      <div className="absolute -bottom-6 sm:-bottom-8 right-0 sm:-right-8 bg-white text-gray-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-orange-100 backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
            <TrendingUp className="text-white" size={24} />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-700">50+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">
              Active Cities
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }

        ${particles
          .map(
            (_, i) => `
          @keyframes float-${i} {
            0% { transform: translateY(0) translateX(0); opacity: 0.5; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
            100% { transform: translateY(0) translateX(-10px); opacity: 0.5; }
          }
        `
          )
          .join("")}
      `}</style>
    </motion.div>
  );
};

export default CreativeHero;
