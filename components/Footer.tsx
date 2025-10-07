import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="https://res.cloudinary.com/dlifnml9x/image/upload/v1759837938/logo2_jn3hre.png"
                alt="CityWitty Logo"
                className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              India's First Multi-City Multi-Brand Discount Card Platform.
              Empowering entrepreneurs to build profitable businesses.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/CityWitty.in"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                target="_blank"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://x.com/CityWitty_India"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-black transition-colors"
                target="_blank"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/citywitty-digital-ventures-pvt-ltd/"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                target="_blank"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/citywitty.in"
                className="w-9 h-9 rounded-lg flex items-center justify-center 
             bg-gray-800 text-white transition-all duration-300 
             hover:bg-gradient-to-tr hover:from-pink-500 hover:via-purple-500 hover:to-yellow-400 
             hover:scale-110 hover:shadow-lg"
                target="_blank"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                target="_blank"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                target="_blank"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/model"
                  className="hover:text-white transition-colors"
                >
                  FOCO Model
                </Link>
              </li>
              <li>
                <Link
                  href="/benefits"
                  className="hover:text-white transition-colors"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/growth"
                  className="hover:text-white transition-colors"
                >
                  Growth Cities
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="hover:text-white transition-colors"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="font-semibold mb-4 text-lg">Contact Info</h3>

            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start space-x-2">
                <MapPin
                  size={18}
                  className="text-blue-500 mt-1 flex-shrink-0"
                />
                <span>
                  Unit 316 & 317, P-3, 3rd Floor, Paramount Golf Foreste,
                  Greater Noida, 201311
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <span>+91 6389202030</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <span>contact@citywitty.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://www.citywitty.com/"
                  className="w-full sm:w-auto"
                  target="_blank"
                >
                  <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-orange-500 text-white px-9 py-2.5 rounded-lg text-sm hover:opacity-90 transition-all duration-300">
                    CityWitty.com
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="https://partner.citywitty.com/"
                  className="w-full sm:w-auto"
                  target="_blank"
                >
                  <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-orange-500 text-white px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-all duration-300">
                    CW Merchant Hub
                  </button>
                </a>
              </li>
            </ul>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 w-full"></div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Blogs</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get updates on franchise opportunities and business
              tips.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 CityWitty. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
