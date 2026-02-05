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
            <Link to="/" className="flex items-center">
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
              className="lg:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-300"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'text-[#2196F3] bg-blue-50'
                          : 'text-gray-700 hover:bg-white/70'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3 px-4">
                  <a 
                    href="tel:+916200837385" 
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-gray-700 bg-white/80 border border-gray-300 rounded-lg hover:bg-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <button 
                    onClick={handleBookTest}
                    className="w-full px-6 py-3 text-base font-semibold text-white bg-[#2196F3] hover:bg-[#1976D2] rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Book Test
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Book Test Modal */}
      <BookTestModal 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
    </>
  );
};