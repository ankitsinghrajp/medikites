import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from "../assets/icon-logo-Photoroom.png";
import BookTestModal from './home/BookNowModal';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Lab Tests', path: '/tests' },
  { name: 'Franchise', path: '/franchise' },
  { name: 'Contact', path: '/contact' },
];

const additionalLinks = [
  { name: 'Physiotherapy', path: '/services/physiotherapy-at-home' },
  { name: 'Home Care Service', path: '/services/home-attendant-caretaker' },
  { name: 'Surgery', path: '/services/surgery' },
  { name: 'Medicine Delivery', path: '/services/medicine-delivery' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Medical Equipment', path: '/services/medical-equipments' },
   { name: 'Partner With Us', path: 'tel:+916200837385' }
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleBookTest = () => {
    setIsBookModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 py-2 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'shadow-md'
            : 'shadow-sm'
        }`}
        style={{
          background: 'linear-gradient(135deg, #f0f4f8 0%, #e6eef5 50%, #dce7f0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  className='h-10 sm:h-12 w-auto' 
                  src={logo} 
                  alt="logo-medikites" 
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group px-4 py-2"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-[#2196F3] font-semibold'
                        : 'text-gray-700 hover:text-[#2196F3]'
                    }`}
                  >
                    {link.name}
                  </span>
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#2196F3] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="tel:+916200837385" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#2196F3] transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <motion.button
                onClick={handleBookTest}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-[#2196F3] hover:bg-[#1976D2] rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                Book Test
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/50 transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <img 
                  className='h-10 w-auto' 
                  src={logo} 
                  alt="logo-medikites" 
                />
             
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {/* Main Navigation */}
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'text-[#2196F3] bg-blue-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="py-2">
                  <div className="border-t border-gray-200"></div>
                </div>

                {/* Additional Links Section */}
                <div className="pt-2">
                  <h3 className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Our Services
                  </h3>
                  {additionalLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + index) * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-2.5 px-4 text-sm font-medium rounded-lg transition-colors ${
                          location.pathname === link.path
                            ? 'text-[#2196F3] bg-blue-50'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="p-4 border-t border-gray-200 space-y-3 bg-gray-50">
                <a 
                  href="tel:+916200837385" 
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:border-[#2196F3] hover:text-[#2196F3] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <button 
                  onClick={handleBookTest}
                  className="w-full px-6 py-3 text-base font-semibold text-white bg-[#2196F3] hover:bg-[#1976D2] rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Book Test
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book Test Modal */}
      <BookTestModal 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
    </>
  );
};