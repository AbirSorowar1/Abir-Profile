import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, BookOpen, Award, MapPin, Code, Users, Trophy, Star } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.Sc. in Computer Science and Engineering',
      institution: 'East West University',
      location: 'Dhaka, Bangladesh',
      major: 'Data Science',
      period: '2021 – 2025',
      cgpa: '3.09 out of 4.00',
      achievements: [
        'Active member of EWU CSE Club, Robotics Club, and Telecom Club',
        'Published 2 research papers in IEEE conferences',
        'Completed 30+ personal and academic projects',
        'Participated in Data War competition (Top 5)',
        'Volunteer at university tech events and workshops',
        'Best Tutor Award at MH Care Coaching Center (2023)'
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Deep Learning',
        'Web Development',
        'Database Systems',
        'Statistical Analysis',
        'Computer Networks',
        'Artificial Intelligence',
        'Cloud Computing',
        'Software Engineering'
      ]
    }
  ];

  const bestGrades = [
    { name: 'Algorithms', grade: 'A+', credits: 4, icon: <Code size={16} /> },
    { name: 'Machine Learning', grade: 'A+', credits: 4, icon: <BookOpen size={16} /> },
    { name: 'Software Engineering', grade: 'A+', credits: 4, icon: <Code size={16} /> },
    { name: 'Data Communication', grade: 'A+', credits: 4, icon: <BookOpen size={16} /> },
    { name: 'Thesis', grade: 'A+', credits: 6, icon: <Award size={16} /> },
    { name: 'Image Processing', grade: 'A', credits: 4, icon: <Code size={16} /> },
    { name: 'Data Science', grade: 'A', credits: 4, icon: <Star size={16} /> }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          My <span className="text-purple-400">Education</span>
        </motion.h2>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500 transition-all"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-xl text-purple-400 mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award size={14} />
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { value: '3.09', label: 'CGPA' },
                    { value: '40+', label: 'Courses' },
                    { value: '30+', label: 'Projects' },
                    { value: '4+', label: 'Years' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-3 bg-purple-500/10 rounded-lg">
                      <div className="text-xl font-bold text-purple-400">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Award size={18} className="text-purple-400" />
                    Activities & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-purple-400 mt-1">★</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-purple-400" />
                    Key Coursework
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {edu.coursework.slice(0, 6).map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-purple-500/10 rounded-lg text-sm text-gray-300 text-center"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Side Card - Best Grades */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Trophy className="text-yellow-400" size={24} />
              Best Grades
            </h3>
            <div className="space-y-4">
              {bestGrades.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 hover:border-purple-500 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-purple-400">{course.icon}</div>
                    <div>
                      <span className="text-white font-medium text-sm">{course.name}</span>
                      <span className="text-xs text-gray-400 block">{course.credits} credits</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    course.grade === 'A+' 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                      : 'bg-green-500/20 text-green-300'
                  }`}>
                    {course.grade}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
              <p className="text-sm text-gray-300">
                <span className="text-white font-semibold">Major:</span> Data Science
              </p>
              <p className="text-sm text-gray-300 mt-2">
                <span className="text-white font-semibold">Research Focus:</span> Machine Learning, Deep Learning, Computer Vision
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;