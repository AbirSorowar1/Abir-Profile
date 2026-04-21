import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Blog', link: '#blog' },
    { name: 'Contact', link: '#contact' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/abirsorowar/', label: 'LinkedIn' },
    { icon: <Github size={20} />, link: 'https://github.com/AbirSorowar1?tab=repositories', label: 'GitHub' },
    { icon: <Instagram size={20} />, link: 'https://www.instagram.com/abir_pagla/', label: 'Instagram' },
    { icon: <Twitter size={20} />, link: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black pt-20 pb-10 relative">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-xl"
      >
        <ArrowUp size={24} />
      </motion.button>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Shakib Ibna Sorowar Abir</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Data Scientist & Frontend Developer passionate about creating innovative solutions and making a difference through technology.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-purple-400" />
                abirsorowar001@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-purple-400" />
                +880 1760350939
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-purple-400" />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="p-3 bg-white/5 rounded-full hover:bg-purple-500 text-white transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-3">Subscribe to my newsletter</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg text-white text-sm placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Location</h4>
            <div className="bg-white/5 rounded-lg p-4 h-32 flex items-center justify-center border border-purple-500/30">
              <p className="text-gray-400 text-sm text-center">
                Dhaka, Bangladesh<br />
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Shakib Ibna Sorowar Abir. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-pink-500 animate-pulse" /> by Shakib
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;