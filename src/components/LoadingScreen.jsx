import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const letters = ['S', 'H', 'A', 'K', 'I', 'B'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* 3D Rotating Cube */}
        <motion.div
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 mx-auto mb-8 relative perspective-1000"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform-style-3d animate-glow" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg transform-style-3d" style={{ transform: 'rotateY(90deg)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform-style-3d" style={{ transform: 'rotateX(90deg)' }} />
        </motion.div>

        {/* Animated Name Letters */}
        <div className="flex gap-3 justify-center mb-8 perspective-1000">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-3xl font-bold text-white shadow-lg"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
              }}
            >
              {letter}
            </motion.div>
          ))}
        </div>

        {/* Loading Bar with Glow */}
        <div className="w-72 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden relative">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
          />
          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{
              boxShadow: '0 0 20px #8b5cf6, 0 0 40px #ec4899',
              filter: 'blur(4px)'
            }}
          />
        </div>

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5], y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-4 text-lg font-semibold"
        >
          Loading Amazing Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;