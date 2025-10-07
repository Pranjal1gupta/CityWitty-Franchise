'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DollarSign, Briefcase, Target, TrendingUp, CircleCheck as CheckCircle2, Users, Building2, Megaphone, ChartBar as BarChart3, ArrowRight, IndianRupee } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ModelPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">FOCO</span> Franchise Model
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Franchise Owned Company Operated - The Perfect Balance of Investment and Passive Income
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 to-orange-500 text-white rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">How FOCO Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'You Invest',
                description: 'Provide capital and secure exclusive territory rights',
                icon: IndianRupee,
              },
              {
                step: '02',
                title: 'We Operate',
                description: 'CityWitty manages all daily operations and team',
                icon: Briefcase,
              },
              {
                step: '03',
                title: 'We Market & Grow',
                description: 'Professional campaigns drive merchant sign-ups',
                icon: Target,
              },
              {
                step: '04',
                title: 'You Earn Profits',
                description: 'Receive consistent monthly returns on investment',
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white/30 mb-4">{item.step}</div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-50">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">What We Handle</h2>
            <div className="space-y-4">
              {[
                { icon: Users, text: 'Hiring & training your local team' },
                { icon: Megaphone, text: 'Marketing campaigns and brand promotion' },
                { icon: Target, text: 'Merchant acquisition and onboarding' },
                { icon: BarChart3, text: 'Operations management and optimization' },
                { icon: Building2, text: 'Technology platform and support' },
                { icon: TrendingUp, text: 'Performance tracking and reporting' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Your Role</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <IndianRupee className="text-blue-600 mr-2" />
                  Initial Investment
                </h3>
                <p className="text-gray-600 mb-4">
                  Provide the franchise fee and working capital to launch operations in your territory.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>One-time franchise fee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Working capital for initial 3-6 months</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Office setup (optional - can be arranged)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart3 className="text-orange-600 mr-2" />
                  Ongoing Involvement
                </h3>
                <p className="text-gray-600 mb-4">
                  Stay informed with regular updates and strategic input while we handle daily operations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Monthly performance reviews</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Strategic planning sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Network and relationship building</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join successful entrepreneurs across India who are building wealth with CityWitty's proven FOCO model
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 py-6 text-lg">
              Apply for Franchise
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
