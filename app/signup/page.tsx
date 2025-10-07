'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CircleCheck as CheckCircle2, ArrowRight, ArrowLeft, Upload, Eye, EyeOff, Loader as Loader2 } from 'lucide-react';
import { setSession } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please select your state'),
  investmentRange: z.string().min(1, 'Please select an investment range'),
  experience: z.string().min(1, 'Please select your experience level'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);

    setTimeout(() => {
      const user = {
        id: '1',
        email: data.email,
        name: data.name,
        role: 'franchise' as const,
      };

      setSession(user);

      setIsSubmitted(true);
      toast({
        title: 'Application Submitted!',
        description: 'We will review your application and get back to you within 2-3 business days.',
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-green-600" size={48} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your interest in CityWitty franchise. Our team will review your application and contact you within 2-3 business days.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Application Review</h4>
                    <p className="text-gray-600 text-sm">Our team will review your application details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Initial Call</h4>
                    <p className="text-gray-600 text-sm">We'll schedule a call to discuss the opportunity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Agreement & Onboarding</h4>
                    <p className="text-gray-600 text-sm">Sign the agreement and begin your journey</p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              onClick={() => router.push('/dashboard/overview')}
              className="mt-8 bg-blue-600 hover:bg-blue-700"
            >
              Go to Dashboard
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">
            Join <span className="gradient-text">CityWitty</span>
          </h1>
          <p className="text-xl text-gray-600">
            Create your account and apply for franchise ownership
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
            <span className="text-sm font-medium text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-orange-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold mb-6">Account Information</h2>

                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        {...register('name')}
                        className="mt-1"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          {...register('email')}
                          className="mt-1"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          {...register('phone')}
                          className="mt-1"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <div className="relative mt-1">
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          {...register('password')}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <div className="relative mt-1">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          {...register('confirmPassword')}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-sm text-red-600 mt-1">{errors.confirmPassword.message}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          placeholder="Mumbai"
                          {...register('city')}
                          className="mt-1"
                        />
                        {errors.city && (
                          <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          placeholder="Maharashtra"
                          {...register('state')}
                          className="mt-1"
                        />
                        {errors.state && (
                          <p className="text-sm text-red-600 mt-1">{errors.state.message}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold mb-6">Business Details</h2>

                    <div>
                      <Label htmlFor="investmentRange">Investment Range *</Label>
                      <Select onValueChange={(value) => setValue('investmentRange', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select investment range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15-20">₹15-20 Lakhs</SelectItem>
                          <SelectItem value="20-30">₹20-30 Lakhs</SelectItem>
                          <SelectItem value="30-50">₹30-50 Lakhs</SelectItem>
                          <SelectItem value="50+">₹50+ Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.investmentRange && (
                        <p className="text-sm text-red-600 mt-1">{errors.investmentRange.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="experience">Business Experience *</Label>
                      <Select onValueChange={(value) => setValue('experience', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Business Experience</SelectItem>
                          <SelectItem value="1-3">1-3 Years</SelectItem>
                          <SelectItem value="3-5">3-5 Years</SelectItem>
                          <SelectItem value="5+">5+ Years</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.experience && (
                        <p className="text-sm text-red-600 mt-1">{errors.experience.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Tell Us About Yourself *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us why you want to become a CityWitty franchise partner and any relevant experience..."
                        {...register('message')}
                        className="mt-1"
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold mb-6">Documents (Optional)</h2>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                      <p className="text-gray-600 mb-2">Upload Business Plan or Resume</p>
                      <p className="text-sm text-gray-500">PDF, DOC up to 5MB</p>
                      <Input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold mb-3 flex items-center">
                        <CheckCircle2 className="text-blue-600 mr-2" size={20} />
                        Review Your Application
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Name:</span>
                          <span className="font-medium">{watch('name')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Email:</span>
                          <span className="font-medium">{watch('email')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">City:</span>
                          <span className="font-medium">{watch('city')}, {watch('state')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Investment:</span>
                          <span className="font-medium">{watch('investmentRange')} Lakhs</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <input type="checkbox" required className="mt-1 mr-2" />
                      <span className="text-sm text-gray-600">
                        I agree to the{' '}
                        <Link href="#" className="text-blue-600 hover:text-blue-700">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="#" className="text-blue-600 hover:text-blue-700">
                          Privacy Policy
                        </Link>
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                  >
                    <ArrowLeft className="mr-2" size={18} />
                    Previous
                  </Button>
                )}

                {step < totalSteps ? (
                  <Button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="ml-auto bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="ml-auto bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={18} />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <CheckCircle2 className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
