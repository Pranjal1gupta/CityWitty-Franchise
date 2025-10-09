"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, Loader2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`
    );
    const mailtoUrl = `mailto:contact@citywitty.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our franchise opportunity? We're here to help
            you get started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to start your franchise journey? Contact our team for
                personalized guidance and support.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-2 sm:space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Office Address</h3>
                  <p className="text-gray-600">
                    Unit 316 & 317, P-3, 3rd Floor,
                    <br /> Paramount Golf Foreste,
                    <br /> Greater Noida, 201311
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+91 6389202030</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">contact@citywitty.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 py-3 lg:my-12">
              <CardHeader>
                <CardTitle className="text-3xl text-center">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                      className="mt-1"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        {...register("email")}
                        className="mt-1"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register("phone")}
                        className="mt-1"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      {...register("message")}
                      className="mt-1"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </form>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                  <Button
                    type="button"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 flex items-center justify-center"
                    onClick={() => handleSubmit(onSubmit)()}
                  >
                    Send via Email
                    <Mail className="ml-2" size={18} />
                  </Button>
                  <Button
                    type="button"
                    className="flex-1 bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 flex items-center justify-center"
                    onClick={() => {
                      const values = getValues();
                      const message = `Hi, my name is ${values.name}. Email: ${values.email}. Phone: ${values.phone}. Message: ${values.message}`;
                      const url = `https://wa.me/916389202030?text=${encodeURIComponent(message)}`;
                      window.open(url, "_blank");
                    }}
                  >
                    Send via WhatsApp
                    <MessageCircle className="ml-2" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
