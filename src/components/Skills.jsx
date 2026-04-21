import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, GitBranch, Users, Database, Globe, Server, Cpu, Sparkles, Zap } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Programming (C, C++, Python, JS)', level: 85, icon: <Code />, color: 'from-purple-500 to-pink-500' },
    { name: 'Frontend (HTML, CSS, React)', level: 80, icon: <Palette />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Tools (Git, VS Code)', level: 75, icon: <GitBranch />, color: 'from-green-500 to-emerald-500' },
    { name: 'Soft Skills', level: 90, icon: <Users />, color: 'from-yellow-500 to-orange-500' },
    { name: 'Data Science', level: 90, icon: <Database />, color: 'from-red-500 to-pink-500' },
    { name: 'Machine Learning', level: 75, icon: <Cpu />, color: 'from-indigo-500 to-purple-500' },
  ];

  const techStack = [
    { name: 'Python', icon: '🐍', level: 85 },
    { name: 'JavaScript', icon: '📜', level: 80 },
    { name: 'React', icon: '⚛️', level: 75 },
    { name: 'Node.js', icon: '🚀', level: 70 },
    { name: 'C++', icon: '⚡', level: 75 },
    { name: 'Machine Learning', icon: '🤖', level: 70 },
    { name: 'Data Analysis', icon: '📊', level: 80 },
    { name: 'SQL', icon: '🗄️', level: 70 },
    { name: 'Git', icon: '📦', level: 75 },
    { name: 'Tailwind CSS', icon: '🎨', level: 80 },
    { name: 'Pandas', icon: '🐼', level: 75 },
    { name: 'NumPy', icon: '🔢', level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          My <span className="text-purple-400">Skills</span>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="inline-block ml-2"
          >
            <Sparkles className="text-yellow-400" size={32} />
          </motion.span>
        </motion.h2>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8">
          {/* Main Skills with 3D Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, rotateX: 5 }}
                className="group perspective-1000"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-purple-500/30 hover:border-purple-500 transition-all transform-style-3d">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg text-white`}>
                      {skill.icon}
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      className={`absolute h-full bg-gradient-to-r ${skill.color}`}
                    />
                    <motion.div
                      className="absolute top-0 h-full w-2 bg-white"
                      animate={{ left: ['0%', '100%'] }}
                      transition={{ duration: 2, delay: 0.4 + index * 0.1, repeat: Infinity }}
                      style={{ filter: 'blur(4px)' }}
                    />
                  </div>
                  <div className="text-right text-sm text-purple-400 mt-1">{skill.level}%</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="text-yellow-400" />
                Tech Stack
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.03 }}
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    className="group perspective-1000"
                  >
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center transform-style-3d transition-all group-hover:shadow-xl">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
                        className="text-3xl mb-2"
                      >
                        {tech.icon}
                      </motion.div>
                      <div className="text-white font-medium text-sm">{tech.name}</div>
                      <div className="text-xs text-purple-400 mt-1">{tech.level}%</div>
                      <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${tech.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.03 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;