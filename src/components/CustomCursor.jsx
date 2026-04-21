import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    document.querySelectorAll('a, button, .interactive').forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      document.querySelectorAll('a, button, .interactive').forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <motion.div
        className={`fixed pointer-events-none z-50 rounded-full transition-opacity duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: clicked ? 0.5 : linkHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          width: '16px',
          height: '16px',
          background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
        }}
      />
      <motion.div
        className={`fixed pointer-events-none z-50 rounded-full transition-opacity duration-300 border-2 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: clicked ? 0.8 : linkHovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        style={{
          width: '40px',
          height: '40px',
          borderColor: 'rgba(139, 92, 246, 0.5)',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
        }}
      />
    </>
  );
};

export default CustomCursor;