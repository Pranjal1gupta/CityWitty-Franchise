'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, DollarSign, Clock, MapPin, Award, Zap, Shield, Users, TrendingUp, Headphones } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BenefitsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Franchise <span className="gradient-text">Benefits</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive advantages of partnering with CityWitty
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Briefcase,
              title: 'Fully Managed Operations',
              description: 'No HR hassle – we handle hiring, training, and tracking for you. Focus on growth while we manage the day-to-day.',
              color: 'from-blue-600 to-blue-500',
              benefits: ['Professional team management', 'Training programs', 'Performance tracking', 'Quality assurance'],
            },
            {
              icon: DollarSign,
              title: 'Strong ROI',
              description: 'Recover your investment over time with solid monthly returns. Proven track record across 50+ cities.',
              color: 'from-orange-500 to-orange-400',
              benefits: ['Predictable income streams', 'Transparent profit sharing', 'Monthly payouts', 'Growth potential'],
            },
            {
              icon: Clock,
              title: 'Business Flexibility',
              description: 'Manage alongside your existing business or job seamlessly. Truly passive income opportunity.',
              color: 'from-blue-600 to-blue-500',
              benefits: ['Minimal time commitment', 'Remote monitoring', 'Flexible involvement', 'Work-life balance'],
            },
            {
              icon: MapPin,
              title: 'Exclusive Territory',
              description: 'Own CityWitty rights in your city/region with no competition from other franchisees.',
              color: 'from-orange-500 to-orange-400',
              benefits: ['Protected market area', 'First-mover advantage', 'Local monopoly', 'Territory expansion options'],
            },
            {
              icon: Award,
              title: 'Brand Power',
              description: 'Join a growing nationwide network with strong recognition and trusted reputation.',
              color: 'from-blue-600 to-blue-500',
              benefits: ['Established brand', 'National marketing', 'Credibility boost', 'Network effects'],
            },
            {
              icon: Zap,
              title: 'Continuous Support',
              description: 'Marketing, tech, and operational help from HQ at all times. Never feel alone in business.',
              color: 'from-orange-500 to-orange-400',
              benefits: ['24/7 support', 'Regular training', 'Tech platform', 'Strategic guidance'],
            },
            {
              icon: Shield,
              title: 'Proven Business Model',
              description: 'Tested and refined system across multiple markets. Reduce risk with our experience.',
              color: 'from-blue-600 to-blue-500',
              benefits: ['Market validation', 'Best practices', 'Risk mitigation', 'Scalable systems'],
            },
            {
              icon: Users,
              title: 'Ready Customer Base',
              description: 'Access to existing merchant network and customer database to jumpstart your operations.',
              color: 'from-orange-500 to-orange-400',
              benefits: ['Pre-qualified leads', 'Marketing materials', 'Sales scripts', 'CRM system'],
            },
            {
              icon: TrendingUp,
              title: 'Growth Opportunities',
              description: 'Expand to multiple territories as you succeed. Build a portfolio of franchise locations.',
              color: 'from-blue-600 to-blue-500',
              benefits: ['Multi-unit ownership', 'Portfolio building', 'Scaling advantages', 'Increased returns'],
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Technology Platform',
                description: 'Modern dashboard, mobile apps, and automated systems that make management effortless.',
              },
              {
                title: 'Marketing Support',
                description: 'Professional campaigns, creative assets, and digital marketing strategies included.',
              },
              {
                title: 'Training Programs',
                description: 'Comprehensive onboarding and ongoing skill development for your team.',
              },
              {
                title: 'Community Network',
                description: 'Connect with fellow franchise owners, share insights, and learn from successes.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Headphones className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
