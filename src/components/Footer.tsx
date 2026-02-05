import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  MessageCircle, 
  Instagram, 
  PhoneCall ,
} from 'lucide-react';

import logo from "../assets/icon-logo-Photoroom.png";

const footerLinks = {
  company: [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Test Catalogue', path: '/tests' },
    { name: 'Contact us', path: '/contact' },
    { name: 'Become Partner', path: 'tel:+91 62008 37385' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/MediKites', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://wa.me/916200837385', label: 'MessageCircle' },
  { icon: Instagram, href: 'https://www.instagram.com/medikites', label: 'Instagram' },
  { icon: PhoneCall , href: 'tel:+91 62008 37385', label: 'PhoneCall' },
];

export const Footer = () => {
  return (
    <footer 
      className="border-t border-gray-200"
      style={{
        background: 'linear-gradient(135deg, #f0f4f8 0%, #e6eef5 50%, #dce7f0 100%)',
      }}
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-6">
            <Link to="/" className="inline-block mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img className='w-48 md:w-52' src={logo} alt="Medikites Logo" />
              </motion.div>
            </Link>
            <p className="text-gray-700 mb-8 max-w-md leading-relaxed text-sm md:text-base">
              Hospital-quality healthcare delivered to your doorstep. Trusted by thousands of families across the nation.
            </p>
            <div className="space-y-4">
              <motion.a 
                href="tel:+916200837385" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/80 border border-gray-200 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <span className="font-medium text-sm md:text-base">+91 620 083 7385</span>
              </motion.a>
              <motion.a 
                href="mailto:support@medikites.in" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/80 border border-gray-200 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <span className="font-medium text-sm md:text-base">support@medikites.in</span>
              </motion.a>

              <motion.a 
                href="mailto:info@medikites.in" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/80 border border-gray-200 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <span className="font-medium text-sm md:text-base">info@medikites.in</span>
              </motion.a>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-700 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/80 border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-white transition-colors shadow-sm">
                  <MapPin className="w-5 h-5 text-gray-700" />
                </div>
                <span className="font-medium text-sm md:text-base leading-relaxed">
                  No 88-250-5AC-922, HRBR 1st Block, Kalyan Nagar, Bengaluru, Karnataka, 560043
                </span>
              </motion.div>
            </div>
          </div>

          {/* Spacer for large screens */}
          <div className="hidden lg:block lg:col-span-3"></div>

          {/* Company Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 mb-6 text-lg md:text-xl">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-2 group text-sm md:text-base"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-gray-600 text-center md:text-left font-medium">
              © {new Date().getFullYear()} Medikites Healthcare Services. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/80 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-lg transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};