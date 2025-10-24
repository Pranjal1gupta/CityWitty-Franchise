"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";

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

export function AnimatedTestimonials() {
  return (
    <>
      {/* Testimonials Section */}
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

      {/* Final CTA Section */}
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
    </>
  );
}