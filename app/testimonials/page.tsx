'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Franchise Partner',
      city: 'Mumbai',
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1760002760/360_F_661301418_Fkwtdj4CORK5IeFD4hYAdMratgVCUi8x_czoo4q.jpg',
      content: 'CityWitty has been a game-changer for me. The FOCO model means I earn without the daily operational stress. The support team is always available, and the returns have been consistent month after month. Highly recommend to anyone looking for a solid business opportunity!',
      rating: 5,
      investment: '₹25L',
      monthlyReturn: '₹1.5L+',
    },
    {
      name: 'Priya Sharma',
      role: 'Franchise Partner',
      city: 'Delhi',
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1760002760/360_F_612738927_LIcFCiKHQhHq9R1QhkVRKvT6RelYUmgv_hkmdzq.jpg',
      content: 'The support from the CityWitty team is exceptional. They handle everything from hiring to marketing while I focus on growing my investment. I was skeptical at first, but the transparency and professionalism won me over. Best decision of my life!',
      rating: 5,
      investment: '₹30L',
      monthlyReturn: '₹2L+',
    },
    {
      name: 'Amit Patel',
      role: 'Franchise Partner',
      city: 'Bangalore',
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1760002960/istockphoto-1433286562-612x612_hm2wus.jpg',
      content: 'Best business decision I made. The returns are consistent and the brand is growing rapidly across India. I manage this alongside my full-time job with zero stress. The dashboard gives me complete visibility and control.',
      rating: 5,
      investment: '₹20L',
      monthlyReturn: '₹1.2L+',
    },
    {
      name: 'Sneha Reddy',
      role: 'Franchise Partner',
      city: 'Hyderabad',
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1760003365/png-indian-business-woman-photography-portrait-smiling_53876-522930_scwhxs.avif',
      content: 'As a working professional, I wanted a business that didn\'t require my constant attention. CityWitty delivered exactly that. The passive income has allowed me to achieve financial freedom while continuing my career.',
      rating: 5,
      investment: '₹22L',
      monthlyReturn: '₹1.3L+',
    },
    {
      name: 'Vikram Singh',
      role: 'Franchise Partner',
      city: 'Jaipur',
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1760003477/gg_vstzyu.jpg',
      content: 'The exclusive territory rights gave me confidence to invest. Within 6 months, I had recovered 40% of my investment. The merchant onboarding process is smooth and the technology platform makes everything easy to track.',
      rating: 5,
      investment: '₹18L',
      monthlyReturn: '₹95K+',
    },
    {
      name: 'Anjali Mehta',
      role: 'Franchise Partner',
      city: 'Pune',
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1760003366/istockphoto-1036079862-612x612_njifmq.jpg',
      content: 'I was looking for a business with a proven model and CityWitty exceeded my expectations. The training, support, and ongoing guidance have been invaluable. My territory is growing rapidly and so are my returns!',
      rating: 5,
      investment: '₹28L',
      monthlyReturn: '₹1.8L+',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Partner <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from successful CityWitty franchise owners across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <Quote className="text-blue-600 mb-4" size={32} />

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-orange-500 fill-orange-500" size={18} />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-3 mb-4 pb-4 border-b">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.city}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Investment</div>
                      <div className="text-lg font-bold text-blue-600">{testimonial.investment}</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Monthly Return</div>
                      <div className="text-lg font-bold text-green-600">{testimonial.monthlyReturn}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            These are real partners achieving real results. Your success story could be next!
          </p>
          <div className="flex justify-center gap-4">
            <a href="/signup">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Apply Now
              </button>
            </a>
            <a href="/model">
              <button className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Learn More
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
