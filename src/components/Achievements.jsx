import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Medal, Star, TrendingUp, Target, Crown, Code, Users, BookOpen } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: '30+ Projects Completed',
      description: 'Successfully delivered numerous web development and data science projects across various domains',
      icon: <Code size={32} />,
      year: '2024',
      category: 'Development',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: '10-15 Professional Projects at Boomdevs',
      description: 'Completed 10-15 full-stack projects during internship at Boomdevs Information Technology Company',
      icon: <Crown size={32} />,
      year: '2025-2026',
      category: 'Professional',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Research Publications',
      description: 'Published 2 research papers in IEEE conferences with 4 total citations',
      icon: <BookOpen size={32} />,
      year: '2024',
      category: 'Research',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Data War Competition - Top 5',
      description: 'Secured position among top 5 participants in inter-university data analysis competition',
      icon: <Target size={32} />,
      year: '2023',
      category: 'Competition',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Best Tutor Award',
      description: 'Recognized as Best Tutor at MH Care Coaching Center for exceptional teaching performance',
      icon: <Award size={32} />,
      year: '2023',
      category: 'Teaching',
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Active Club Member',
      description: 'Active participation in EWU CSE Club, Robotics Club, and Telecom Club activities',
      icon: <Users size={32} />,
      year: '2022-2024',
      category: 'Leadership',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  const stats = [
    { value: '30+', label: 'Projects', icon: <Code size={24} /> },
    { value: '10-15', label: 'Internship Projects', icon: <Crown size={24} /> },
    { value: '2', label: 'Publications', icon: <BookOpen size={24} /> },
    { value: '4', label: 'Citations', icon: <Award size={24} /> }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Achievements & <span className="text-purple-400">Awards</span>
        </motion.h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-purple-500/30"
            >
              <div className="text-purple-400 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-purple-500 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-xl text-white`}>
                    {achievement.icon}
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{achievement.description}</p>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                    {achievement.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30">
            <TrendingUp size={48} className="text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Add More?</h3>
            <p className="text-gray-300 mb-4">I'm constantly working on new projects and challenges</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold"
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;