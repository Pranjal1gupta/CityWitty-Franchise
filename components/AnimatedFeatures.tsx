"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  Target,
  Briefcase,
  Shield,
  Zap,
  ArrowRight,
  MapPin,
  Handshake,
  DollarSign,
  Clock,
  Award,
  IndianRupee,
} from "lucide-react";

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

export function AnimatedFeatures() {
  return (
    <>
      {/* Why CityWitty Section */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
              Why <span className="gradient-text">CityWitty</span>?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Join a proven platform that's revolutionizing local business
              growth across India
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://res.cloudinary.com/dlifnml9x/image/upload/v1759840139/istockphoto-2170333451-612x612_nrv69q.jpg"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                {
                  icon: Shield,
                  title: "Strong Brand Presence",
                  description:
                    "CityWitty is already helping businesses in multiple cities across India.",
                },
                {
                  icon: TrendingUp,
                  title: "Growing Demand",
                  description:
                    "Merchants are looking for innovative ways to attract customers – we solve that.",
                },
                {
                  icon: Users,
                  title: "Community Model",
                  description:
                    "Connecting businesses and customers under one platform.",
                },
                {
                  icon: Award,
                  title: "Proven System",
                  description:
                    "Standardized operations with FOCO (Franchise Owned Company Operated) model.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOCO Franchise Model Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-blue-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
              <span className="gradient-text">FOCO</span> Franchise Model
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Franchise Owned Company Operated - The Best of Both Worlds
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "You Invest",
                description:
                  "Provide the initial capital and secure your territory",
                icon: IndianRupee,
              },
              {
                step: "02",
                title: "We Operate",
                description:
                  "CityWitty handles all operations, hiring, and management",
                icon: Briefcase,
              },
              {
                step: "03",
                title: "We Market",
                description:
                  "Professional campaigns to drive merchant sign-ups",
                icon: Target,
              },
              {
                step: "04",
                title: "You Earn",
                description:
                  "Receive consistent profits without daily involvement",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all border-2 border-transparent hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold text-blue-400 mb-4">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center md:items-start justify-between"
          >
            {/* Left Text */}
            <div className="md:w-2/3 text-left mb-8 md:mb-0">
              <motion.h6
                variants={fadeInUp}
                className="text-xl md:text-3xl font-bold mb-4"
              >
                Reach out to discuss how you can join and grow with CityWitty.
              </motion.h6>
            </div>

            {/* Right Button */}
            <motion.div variants={fadeInUp} className="md:w-1/3 flex justify-end">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg animate-bounce"
                >
                  Contact Us
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
              Eligibility Criteria
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Who Can Become a CityWitty Franchise Partner?
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Handshake,
                title: "Business Passion",
                description: "Passionate about business growth and networking",
              },
              {
                icon: TrendingUp,
                title: "Long-term Vision",
                description:
                  "Willing to invest in a long-term, scalable business",
              },
              {
                icon: Briefcase,
                title: "Office Space",
                description:
                  "Access to a small office space or ability to arrange one",
              },
              {
                icon: MapPin,
                title: "Market Knowledge",
                description: "Basic understanding of local market dynamics",
              },
              {
                icon: Shield,
                title: "Brand Alignment",
                description:
                  "Commitment to brand values and customer satisfaction",
              },
              {
                icon: Users,
                title: "People Skills",
                description:
                  "Good communication and relationship-building abilities",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Franchise Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
              Franchise Benefits
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Why CityWitty is the Perfect Business Opportunity
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Briefcase,
                title: "Fully Managed Operations",
                description:
                  "No HR hassle – we handle hiring, training, and tracking for you.",
                color: "from-blue-600 to-blue-500",
              },
              {
                icon: IndianRupee,
                title: "Strong ROI",
                description:
                  "Recover your investment over time with solid monthly returns.",
                color: "from-orange-500 to-orange-400",
              },
              {
                icon: Clock,
                title: "Business Flexibility",
                description:
                  "Manage alongside your existing business or job seamlessly.",
                color: "from-blue-600 to-blue-500",
              },
              {
                icon: MapPin,
                title: "Exclusive Territory",
                description:
                  "Own CityWitty rights in your city/region with no competition.",
                color: "from-orange-500 to-orange-400",
              },
              {
                icon: Award,
                title: "Brand Power",
                description:
                  "Join a growing nationwide network with strong recognition.",
                color: "from-blue-600 to-blue-500",
              },
              {
                icon: Zap,
                title: "Continuous Support",
                description:
                  "Marketing, tech, and operational help from HQ at all times.",
                color: "from-orange-500 to-orange-400",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}