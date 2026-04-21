import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Trophy, Code, Mic, Calendar, MapPin } from 'lucide-react';

const Clubs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clubs = [
    {
      name: 'EWU CSE Club',
      role: 'Senior General Member',
      period: '2022 - Present',
      description: 'Organized coding workshops and hackathons to foster technical skills among peers. Led a team of 15 members in organizing the annual Tech Fest 2023.',
      achievements: [
        'Organized 5 coding workshops with 200+ attendees',
        'Led the team for Intra-University Hackathon 2023',
        'Mentored 30+ juniors in competitive programming'
      ],
      icon: <Code size={32} />,
      color: 'from-blue-500 to-cyan-500',
      events: [
        'Tech Fest 2023 - Coordinator',
        'Code War 2023 - Organizer',
        'Python Workshop - Instructor'
      ]
    },
    {
      name: 'EWU Robotics Club',
      role: 'Senior General Member',
      period: '2022 - Present',
      description: 'Contributed to robotics projects and competitions, enhancing teamwork and innovation. Specialized in autonomous robot programming.',
      achievements: [
        'Secured 2nd position in Robo Soccer 2023',
        'Developed line-follower robot with 95% accuracy',
        'Conducted robotics workshop for high school students'
      ],
      icon: <Trophy size={32} />,
      color: 'from-green-500 to-emerald-500',
      events: [
        'Robo Soccer 2023 - Team Lead',
        'Arduino Workshop - Instructor',
        'Tech Exhibition 2023 - Exhibitor'
      ]
    },
    {
      name: 'EWU MUNC',
      role: 'Workshops & Events',
      period: '2021 - Present',
      description: 'Participated in model UN conferences, developing leadership and communication skills. Represented university in national-level MUN.',
      achievements: [
        'Best Delegate Award - EWUMUNC 2023',
        'Organized 3 MUN workshops',
        'Head of Delegation for National MUN 2024'
      ],
      icon: <Mic size={32} />,
      color: 'from-yellow-500 to-orange-500',
      events: [
        'EWUMUNC 2023 - Delegate',
        'Diplomacy Workshop - Organizer',
        'National MUN 2024 - Head Delegate'
      ]
    },
    {
      name: 'EWU Telecom Club',
      role: 'Data War Participant',
      period: '2023 - Present',
      description: 'Competed in data analysis challenges, showcasing proficiency in data science tools. Worked on real-world telecom datasets.',
      achievements: [
        'Top 5 in Data War Competition 2023',
        'Best Data Visualization Award',
        'Published analysis on network optimization'
      ],
      icon: <Users size={32} />,
      color: 'from-purple-500 to-pink-500',
      events: [
        'Data War 2023 - Participant',
        'Data Science Bootcamp - Attendee',
        'Network Analytics Workshop - Volunteer'
      ]
    }
  ];

  return (
    <section id="clubs" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Clubs & <span className="text-purple-400">Activities</span>
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`bg-gradient-to-br ${club.color} bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500 transition-all h-full`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${club.color} rounded-xl text-white`}>
                    {club.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{club.name}</h3>
                    <p className="text-sm text-purple-300">{club.role}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {club.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {club.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-white font-semibold text-sm mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {club.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-xs flex items-start gap-2">
                        <span className="text-purple-400 mt-1">→</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm mb-2">Events:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.events.map((event, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;