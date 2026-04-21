import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Users, Target, Heart, User } from 'lucide-react';

// ইমেজ ইমপোর্ট
import aboutImage from '../Photo/About_ME.jpeg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Award />, value: '30+', label: 'Projects', color: 'from-purple-500 to-pink-500' },
    { icon: <BookOpen />, value: '4+', label: 'Years Coding', color: 'from-blue-500 to-cyan-500' },
    { icon: <Users />, value: '100+', label: 'Connections', color: 'from-green-500 to-emerald-500' },
    { icon: <Heart />, value: '15+', label: 'Happy Clients', color: 'from-yellow-500 to-orange-500' },
  ];

  const qualities = [
    'Truthful', 'Genuine', 'Hardworking',
    'People Person', 'Music Lover', 'Problem Solver'
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="relative rounded-2xl overflow-hidden group h-full">
              <img
                src={aboutImage}
                alt="Shakib"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                style={{ minHeight: '550px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">"Better version of myself, one step at a time"</p>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 h-full flex flex-col justify-between"
            style={{ minHeight: '550px' }}
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
                <User className="text-purple-400" />
                Who Am I?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I'm Shakib Ibna Sorowar Abir, a Computer Science graduate from East West University
                with a passion for technology and innovation. I thrive on challenging work that pushes
                my boundaries and helps me grow both personally and professionally.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Beyond coding, I find joy in life's simple pleasures - a peaceful walk, the rhythm of
                music, and meaningful connections with people. I believe that true success lies not just
                in technical achievements, but in the relationships we build and the lives we touch.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I pride myself on being truthful and genuine in all my interactions. Every day, I strive
                to become a better version of myself - learning from my mistakes, embracing new challenges,
                and taking one step at a time toward personal and professional excellence.
              </p>
            </div>

            {/* Qualities */}
            <div className="flex flex-wrap gap-3 mb-8">
              {qualities.map((quality, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                >
                  {quality}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${stat.color} bg-opacity-10 rounded-xl p-4 text-center`}
                >
                  <div className="text-purple-400 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;