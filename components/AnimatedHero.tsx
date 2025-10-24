"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function AnimatedHero() {
  return (
    <section className="relative text-black overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-2000" />
      <div className="absolute inset-0 bg-grid-white/[0.07] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Text Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* ✅ Animated Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block bg-blue-50 text-blue-700 font-semibold text-sm sm:text-base px-5 py-2.5 
        rounded-full mb-5 shadow-sm border border-blue-100 hover:shadow-md hover:scale-105 transition-all
        text-center md:text-left animate-pulse duration-1000"
            >
              ⭐ Trusted by{" "}
              <span className="text-blue-800 font-bold">
                500+ Franchise Partners
              </span>{" "}
              Across India
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 
        bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 
        bg-clip-text text-transparent drop-shadow-sm text-center md:text-left pb-2"
            >
              Start Your Own Business with CityWitty
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-blue-700 font-medium mb-3 sm:mb-4 text-center md:text-left"
            >
              India's First Multi-City Multi-Brand Discount Card Platform
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-10 leading-relaxed max-w-md mx-auto md:mx-0 text-center md:text-left"
            >
              Empowering entrepreneurs to build profitable ventures without
              disturbing their current careers.
            </motion.p>

            {/* ✅ Motivational Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg text-orange-600 font-semibold mb-5 sm:mb-6 text-center md:text-left"
            >
              🚀 1000+ Indians are building their dream business — and still
              keeping their jobs. Why not you?
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            >
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Apply for Franchise
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/model">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mt-10 md:mt-0"
          >
            <div className="relative group w-[85%] sm:w-[70%] md:w-full mx-auto">
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
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md animate-bounce">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div className="">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    Active Cities
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}