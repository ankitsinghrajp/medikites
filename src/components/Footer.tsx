import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from "../assets/icon-logo-Photoroom.png";

const footerLinks = {

  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Careers', path: '/contact' },
    { name: 'Contact', path: '/contact' },
  ],
  support: [
    { name: 'Book a Test', path: '/tests' },
    { name: 'Test Catalogue', path: '/tests' },
    { name: 'Health Packages', path: '/tests' },
    { name: 'FAQs', path: '/contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export const Footer = () => {
  return (
    <footer 
      className="border-t border-white/30"
      style={{
        background: 'linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 50%, #81d4fa 100%)',
      }}
    >
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <img className='w-52' src={logo} alt="logo-medikites" />
              </motion.div>
            </Link>
            <p className="text-gray-700 mb-6 max-w-sm leading-relaxed">
              Hospital-quality healthcare delivered to your doorstep. Trusted by thousands of families across the nation.
            </p>
            <div className="space-y-3">
              <motion.a 
                href="tel:+916200837385" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white/40 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+91 620 083 7385</span>
              </motion.a>
              <motion.a 
                href="mailto:care@medikites.com" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white/40 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">care@medikites.com</span>
              </motion.a>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-700"
              >
                <div className="w-10 h-10 rounded-lg bg-white/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">123 Healthcare Avenue, Medical District, City - 110001</span>
              </motion.div>
            </div>
          </div>

        <div></div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700 text-center md:text-left font-medium">
              © 2024 Medikites Healthcare Services. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/40 flex items-center justify-center text-gray-700 hover:text-white hover:shadow-lg transition-all duration-200"
                  style={{
                    background: 'rgba(255, 255, 255, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #2196F3 0%, #42a5f5 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                  }}
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