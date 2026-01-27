import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from "../assets/icon-logo-Photoroom.png";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Test Catalogue', path: '/tests' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md shadow-lg'
          : ''
      }`}
      style={{
        background: 'linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 50%, #81d4fa 100%)',
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <img className='w-52' src={logo} alt="logo-medikites" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group px-5 py-2"
              >
                <span
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-5 right-5 h-0.5 rounded-full"
                    style={{ backgroundColor: '#2196F3' }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+916200837385" className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 text-base font-semibold text-white rounded-full shadow-lg transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #2196F3 0%, #42a5f5 100%)',
                boxShadow: '0 4px 20px rgba(33, 150, 243, 0.4)'
              }}
            >
              Book Test
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/30 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="lg:hidden border-t border-white/30 mt-4"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          >
            <div className="container-custom py-6 space-y-2">
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
                        ? 'text-gray-800 bg-white/50'
                        : 'text-gray-700 hover:bg-white/30'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-4">
                <a href="tel:+916200837385" className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-gray-700 border border-gray-400/30 rounded-lg hover:bg-white/30 transition-colors">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <button 
                  className="w-full px-6 py-3 text-base font-semibold text-white rounded-full shadow-lg transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #2196F3 0%, #42a5f5 100%)',
                    boxShadow: '0 4px 20px rgba(33, 150, 243, 0.4)'
                  }}
                >
                  Book Test
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};