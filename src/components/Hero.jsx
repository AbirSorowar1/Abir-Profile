import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ChevronDown, Rocket } from 'lucide-react';
import profilePicture from '../Photo/profilePicture.jpg'; // সঠিক পাথ ইম্পোর্ট

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive particle count based on screen size
  const particleCount = windowSize.width < 640 ? 20 : windowSize.width < 1024 ? 35 : 50;

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-800 to-black">
      {/* Animated Background Particles - Responsive */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-500 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              x: mousePosition.x * (Math.random() * 0.1) + Math.random() * windowSize.width * 0.2,
              y: mousePosition.y * (Math.random() * 0.1) + Math.random() * windowSize.height * 0.2,
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-30 hidden sm:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Profile Image - Imported from Photo folder */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6 md:mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
            <img
              src={profilePicture}
              alt="Shakib Ibna Sorowar Abir"
              className="relative w-full h-full rounded-full border-2 sm:border-3 md:border-4 border-white object-cover"
              onError={(e) => {
                console.log('Image failed to load, using fallback');
                e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80';
              }}
            />
          </motion.div>

          {/* Name - Responsive text sizes */}
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 px-2"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shakib Ibna Sorowar Abir
            </span>
          </motion.h1>

          {/* Typewriter Effect - Responsive */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 md:mb-8 px-4"
          >
            <Typewriter
              words={['Data Scientist', 'Frontend Developer', 'CSE Student', 'Problem Solver', 'AI Enthusiast']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.div>

          {/* Social Links - Responsive spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          >
            {[
              { Icon: Linkedin, link: 'https://linkedin.com/in/shakib-ibna-sorowar-abir-25780a362/', color: '#0077b5', label: 'LinkedIn' },
              { Icon: Github, link: 'https://github.com', color: '#333', label: 'GitHub' },
              { Icon: Mail, link: 'mailto:abirsorowar001@gmail.com', color: '#ea4335', label: 'Email' }
            ].map(({ Icon, link, color, label }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, backgroundColor: color }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 p-2 sm:p-2.5 md:p-3 rounded-full text-white hover:text-white transition-all"
                aria-label={label}
              >
                <Icon size={windowSize.width < 640 ? 18 : windowSize.width < 768 ? 20 : 24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons Container - Responsive layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 px-4"
          >
            {/* First Button - Discover My Journey */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base md:text-lg"
            >
              Discover My Journey
            </motion.button>

            {/* New Button - Deep Dive In Different Way - Responsive */}
            <motion.a
              href="https://learn-abir-by-space.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto bg-transparent border-2 border-purple-500 text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all overflow-hidden text-sm sm:text-base md:text-lg"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Deep Dive In Different Way
                <Rocket size={windowSize.width < 640 ? 14 : 18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 0 }}
              />
            </motion.a>
          </motion.div>

          {/* Additional info - Hidden on very small screens */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2 }}
            className="text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8 md:mt-10 hidden sm:block"
          >
            ✦ Full Stack Developer | Data Science Enthusiast ✦
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator - Responsive positioning */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;