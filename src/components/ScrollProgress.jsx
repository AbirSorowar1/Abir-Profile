import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <motion.div
        className="fixed bottom-8 right-8 bg-gray-900/90 backdrop-blur-lg border border-purple-500 rounded-full px-4 py-2 z-40 hidden md:block"
        style={{
          scale: useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
        }}
      >
        <motion.span className="text-white font-bold">
          {Math.round(scrollYProgress.get() * 100)}%
        </motion.span>
      </motion.div>
    </>
  );
};

export default ScrollProgress;