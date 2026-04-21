import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { icon: '🚀', size: 50, delay: 0, duration: 25, left: '5%', top: '15%' },
    { icon: '💻', size: 40, delay: 2, duration: 22, left: '85%', top: '25%' },
    { icon: '🤖', size: 45, delay: 4, duration: 28, left: '15%', top: '75%' },
    { icon: '🎯', size: 35, delay: 1, duration: 20, left: '75%', top: '85%' },
    { icon: '⚡', size: 55, delay: 3, duration: 30, left: '45%', top: '35%' },
    { icon: '🌟', size: 40, delay: 5, duration: 24, left: '65%', top: '55%' },
    { icon: '💡', size: 45, delay: 2.5, duration: 26, left: '25%', top: '45%' },
    { icon: '🔥', size: 50, delay: 4.5, duration: 28, left: '55%', top: '20%' },
    { icon: '🎨', size: 35, delay: 1.5, duration: 23, left: '35%', top: '65%' },
    { icon: '📊', size: 40, delay: 3.5, duration: 27, left: '95%', top: '50%' },
    { icon: '🔮', size: 45, delay: 5.5, duration: 29, left: '10%', top: '90%' },
    { icon: '⚙️', size: 35, delay: 0.5, duration: 21, left: '90%', top: '10%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20 hover:opacity-40 transition-opacity"
          style={{
            left: el.left,
            top: el.top,
            fontSize: el.size,
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, -40, 0, 40, 0],
            x: [0, 30, 0, -30, 0],
            rotate: [0, 180, 360, 180, 0],
            scale: [1, 1.3, 1, 1.3, 1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;