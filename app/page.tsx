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
  CircleCheck as CheckCircle2,
  ArrowRight,
  Star,
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

const emojiVariants = {
  float: {
    y: [0, -10, 0], // float up/down
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  pulse: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <div className="pt-16">
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
                India’s First Multi-City Multi-Brand Discount Card Platform
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

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle2
                  className="text-green-500 flex-shrink-0"
                  size={24}
                />
                <span className="font-medium">No HR Hassle</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2
                  className="text-green-500 flex-shrink-0"
                  size={24}
                />
                <span className="font-medium">Proven Track Record</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2
                  className="text-green-500 flex-shrink-0"
                  size={24}
                />
                <span className="font-medium">Ongoing Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2
                  className="text-green-500 flex-shrink-0"
                  size={24}
                />
                <span className="font-medium">Scalable Income</span>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

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
        {/* <motion.p variants={fadeInUp} className="text-xl text-blue-50">
          Reach out to us and start your CityWitty journey today!
        </motion.p> */}
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

      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
              Growth Opportunity
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Your City Could Be Next
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200"
              alt="India Map"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end justify-center p-8">
              <div className="text-center text-white">
                <p className="text-2xl font-bold mb-2">
                  CityWitty is expanding rapidly across India
                </p>
                <p className="text-lg">
                  Be the first to represent our brand in your city and dominate
                  the market
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { number: "50+", label: "Active Cities" },
              { number: "500+", label: "Partner Merchants" },
              { number: "100K+", label: "Active Users" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
              What Our Partners Say
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Real stories from successful CityWitty franchise owners
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Rajesh Kumar",
                role: "Franchise Partner - Mumbai",
                image:
                  "https://res.cloudinary.com/dlifnml9x/image/upload/v1760002760/360_F_661301418_Fkwtdj4CORK5IeFD4hYAdMratgVCUi8x_czoo4q.jpg",
                content:
                  "CityWitty has been a game-changer for me. The FOCO model means I earn without the daily operational stress. Highly recommend!",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Franchise Partner - Delhi",
                image:
                  "https://res.cloudinary.com/dlifnml9x/image/upload/v1760002760/360_F_612738927_LIcFCiKHQhHq9R1QhkVRKvT6RelYUmgv_hkmdzq.jpg",
                content:
                  "The support from the CityWitty team is exceptional. They handle everything while I focus on growing my investment.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "Franchise Partner - Bangalore",
                image:
                  "https://res.cloudinary.com/dlifnml9x/image/upload/v1760002960/istockphoto-1433286562-612x612_hm2wus.jpg",
                content:
                  "Best business decision I made. The returns are consistent and the brand is growing rapidly across India.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-orange-500 fill-orange-500"
                          size={18}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Build a Profitable Business?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 text-blue-50">
              Get in touch with our team to explore CityWitty Franchise options
              and grow with us.
            </motion.p>
            <motion.div variants={fadeInUp}>
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
    </div>
  );
}
