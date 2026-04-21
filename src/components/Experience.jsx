import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Award, BookOpen, Code } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Boomdevs Information Technology Company',
      location: 'Dhaka, Bangladesh',
      period: '2025 - 2026',
      description: [
        'Developed and maintained 10-15 full-stack web applications using modern technologies',
        'Collaborated with senior developers to implement responsive and user-friendly interfaces',
        'Worked on both frontend and backend development using React, Node.js, and MongoDB',
        'Participated in code reviews and contributed to team discussions on best practices'
      ],
      achievements: [
        'Successfully delivered 10+ client projects',
        'Implemented performance optimizations reducing load time by 30%',
        'Received appreciation for clean code and timely delivery'
      ],
      icon: <Code size={24} />
    },
    {
      title: 'Academic Tutor',
      company: 'MH Care Coaching Center',
      location: 'Dhaka, Bangladesh',
      period: '2021 - 2023',
      description: [
        'Taught Physics, Mathematics, and Chemistry to high school students',
        'Developed personalized lesson plans based on individual student needs',
        'Conducted regular assessments to track student progress',
        'Helped students prepare for competitive examinations'
      ],
      achievements: [
        'Mentored 50+ students with 90% success rate',
        'Developed innovative teaching methods for complex topics',
        'Received positive feedback from students and parents'
      ],
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Work <span className="text-purple-400">Experience</span>
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white z-10 font-bold"
                >
                  {index + 1}
                </motion.div>

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;