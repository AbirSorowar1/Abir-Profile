import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, ExternalLink, Calendar, Award, BookOpen } from 'lucide-react';

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications = [
    {
      title: 'Comparative Forecasting of Sustainable and Green Energy Demand Across Bangladesh\'s Divisions Using Classical and Deep Learning Models',
      description: 'A comprehensive analysis comparing classical statistical methods with deep learning approaches for forecasting energy demand across different divisions of Bangladesh.',
      fullTitle: 'Comparative Forecasting of Sustainable and Green Energy Demand Across Bangladesh\'s Divisions Using Classical and Deep Learning Models',
      link: 'https://ieeexplore.ieee.org/document/11381781',
      publisher: 'IEEE',
      year: '2026',
      doi: '10.1109/EXAMPLE.2026.11381781',
      citations: 2,
      type: 'Conference Paper',
      authors: ['Shakib Ibna Sorowar Abir', 'Dr. Rahman', 'Dr. Ahmed'],
      keywords: ['Deep Learning', 'Energy Forecasting', 'Bangladesh', 'LSTM', 'ARIMA']
    },
    {
      title: 'Analyzing CO2 Emissions using Machine Learning and Explainable AI',
      description: 'A comprehensive analysis of CO2 emissions from natural gas-fired power plants using advanced machine learning techniques and explainable AI.',
      fullTitle: 'Analyzing CO2 Emissions using Machine Learning and Explainable AI: A Case Study of Natural Gas-Fired Powered Plant in Bangladesh',
      link: 'https://ieeexplore.ieee.org/document/11013818',
      publisher: 'IEEE',
      year: '2025',
      doi: '10.1109/EXAMPLE.2025.11013818',
      citations: 2,
      type: 'Conference Paper',
      authors: ['Shakib Ibna Sorowar Abir', 'Dr. Rahman', 'Dr. Ahmed'],
      keywords: ['Machine Learning', 'CO2 Emissions', 'Explainable AI', 'Energy', 'Bangladesh']
    },
    {
      title: 'DeepWeeds: Vision Transformers for Image Classification with Self-Supervised Pretraining',
      description: 'A novel approach using Vision Transformers for image classification with self-supervised pretraining techniques.',
      fullTitle: 'DeepWeeds: Vision Transformers for Image Classification with Self-Supervised Pretraining',
      link: 'https://ieeexplore.ieee.org/document/XXXXXXX', // Update with actual link
      publisher: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
      year: '2026',
      doi: '10.1109/TPAMI.2026.XXXXXXX',
      citations: 0,
      type: 'Journal Article',
      authors: ['Shakib Ibna Sorowar Abir'],
      keywords: ['Vision Transformers', 'Image Classification', 'Self-Supervised Pretraining', 'Deep Learning']
    }
  ];

  const upcoming = [
  ];

  const totalCitations = publications.reduce((acc, pub) => acc + pub.citations, 0);

  return (
    <section id="publications" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Research & <span className="text-purple-400">Publications</span>
        </motion.h2>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {/* Main Publications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500/50 hover:border-purple-500 transition-all"
              >
                {/* Badge */}
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm mb-6">
                  <Award size={14} className="inline mr-1" />
                  Featured Research
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">{pub.fullTitle}</h3>

                {/* Authors */}
                <div className="text-gray-300 mb-4">
                  {pub.authors.map((author, i) => (
                    <span key={i}>
                      <span className={author.includes('Shakib') ? 'text-purple-400 font-semibold' : ''}>
                        {author}
                      </span>
                      {i < pub.authors.length - 1 && <span>, </span>}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {pub.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={14} />
                    {pub.publisher}
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded-full text-purple-300 text-xs">
                    {pub.type}
                  </span>
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Abstract</h4>
                  <p className="text-gray-300 leading-relaxed">{pub.description}</p>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Stats & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{pub.citations}</div>
                      <div className="text-xs text-gray-400">Citations</div>
                    </div>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Read Paper
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Research Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: publications.length, label: 'Publications' },
                  { value: totalCitations, label: 'Citations' },
                  { value: '3', label: 'Co-authors' },
                  { value: '94%', label: 'Accuracy' }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-3 bg-purple-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="text-white font-semibold mb-2">Research Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {['Deep Learning', 'Energy', 'Computer Vision', 'Transformers', 'ML', 'XAI'].map((interest, i) => (
                    <span key={i} className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Research */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Upcoming Research</h3>
              {upcoming.map((item, index) => (
                <div key={index} className="p-4 bg-purple-500/5 rounded-lg">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs mb-2 bg-blue-500/20 text-blue-300`}>
                    {item.status}
                  </div>
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.journal} • {item.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Publications;