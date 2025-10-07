'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, TrendingUp, Users, Building2, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GrowthPage() {
  const activeCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
    'Surat', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal', 'Visakhapatnam',
    'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana'
  ];

  const targetCities = [
    'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi', 'Srinagar', 'Aurangabad',
    'Dhanbad', 'Amritsar', 'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior'
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Growth <span className="gradient-text">Opportunities</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your City Could Be Next - Be Part of India's Fastest Growing Franchise Network
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-20"
        >
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200"
            alt="India Map"
            className="w-full rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex items-end justify-center p-12">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Expanding Across India</h2>
              <p className="text-xl mb-2">Be the first to represent CityWitty in your city</p>
              <p className="text-lg text-blue-100">and dominate the local market</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: MapPin, number: '50+', label: 'Active Cities', color: 'from-blue-600 to-blue-500' },
            { icon: Building2, number: '500+', label: 'Partner Merchants', color: 'from-orange-500 to-orange-400' },
            { icon: Users, number: '100K+', label: 'Active Users', color: 'from-blue-600 to-blue-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="text-white" size={32} />
                  </div>
                  <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Active Cities</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  CityWitty is already operational and thriving in these cities across India:
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeCities.map((city, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Target Cities</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  These cities are our next expansion targets. Be the first to bring CityWitty here:
                </p>
                <div className="flex flex-wrap gap-2">
                  {targetCities.map((city, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Don't see your city? We're expanding rapidly - apply now and we'll consider your location!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Bring CityWitty to Your City?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Join the growth story and become the exclusive CityWitty representative in your region
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-12 py-6 text-lg">
              Apply for Franchise
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
