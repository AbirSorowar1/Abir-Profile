import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

// ইমেজ ইমপোর্ট
import logo from '../Photo/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) {
        setIsOpen(false); // Close menu on scroll
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navItems = [
    'Home', 'About', 'Skills', 'Experience', 'Projects',
    'Publications', 'Education', 'Clubs', 'Achievements',
    'Blog', 'Testimonials', 'Gallery', 'Contact'
  ];

  const scrollToSection = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-gray-900/90 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo - Left Side */}
            <motion.img
              src={logo}
              alt="Logo"
              className="h-12 w-auto cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              onClick={() => scrollToSection('home')}
            />

            {/* Desktop Menu - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.slice(0, 7).map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-purple-400 font-medium relative group text-sm"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Three Dots Menu Button - Top Right Side */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden bg-purple-600/20 hover:bg-purple-600 p-2 rounded-full transition-colors relative z-50"
            >
              {isOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Three Dots Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-40 lg:hidden overflow-y-auto"
          >
            <div className="w-full flex justify-start p-6 mb-8 relative z-50">
              <motion.button
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-purple-600/20 hover:bg-purple-600 p-3 rounded-full text-white transition-colors"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 -mt-24">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="text-2xl text-white hover:text-purple-400 my-3 font-medium w-full text-center py-2"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;