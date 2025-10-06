'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">CityWitty</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing local business growth across India through innovative franchise partnerships
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
            alt="Team"
            className="w-full rounded-2xl shadow-2xl"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To empower entrepreneurs across India by providing a proven business model that creates sustainable income streams while helping local merchants grow their customer base through our innovative discount card platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center">
                <Eye className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To become India's most trusted franchise platform, creating a nationwide network of successful entrepreneurs who drive local economic growth and bring value to communities across every city in India.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from operations to partner support.',
              },
              {
                icon: Heart,
                title: 'Integrity',
                description: 'We build trust through transparency, honesty, and ethical business practices.',
              },
              {
                icon: Users,
                title: 'Partnership',
                description: 'We believe in true partnerships where mutual success is the ultimate goal.',
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                description: 'We are committed to continuous innovation and expansion opportunities.',
              },
              {
                icon: Target,
                title: 'Customer Focus',
                description: 'We put merchants and customers at the heart of every decision we make.',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'We build strong local communities that support each other and thrive together.',
              },
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              CityWitty was founded with a simple yet powerful idea: to create a win-win platform where local businesses could attract more customers while entrepreneurs could build profitable businesses without the traditional hassles of business ownership.
            </p>
            <p>
              Our innovative FOCO (Franchise Owned Company Operated) model emerged from understanding that many aspiring entrepreneurs have capital and ambition but lack the time or expertise to manage day-to-day operations. By handling operations, marketing, and team management, we've created a truly passive income opportunity.
            </p>
            <p>
              Today, CityWitty operates in over 50 cities across India, partnering with hundreds of merchants and serving thousands of happy customers. Our franchise partners enjoy consistent returns while we continue to innovate and expand into new markets.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
