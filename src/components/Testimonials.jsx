import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, ChevronLeft, ChevronRight, Award, Users, BookOpen } from 'lucide-react';

// ইমেজ ইমপোর্ট - স্পেস সহ আসল নাম ব্যবহার করো
import mahediImage from '../Photo/Testomoniral_Mh_care _main_Teacher.jpg';
import laboniImage from '../Photo/Research_patner_Laboni_Somoddar.jpg';
import mahiaImage from '../Photo/Thesis_mate_Mahia_Meherun.jpg';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Shakib is one of the most dedicated tutors I've ever seen. His teaching methods are exceptional and he genuinely cares about his students' success. He helped many students achieve excellent results in their exams.",
      author: 'Mahedi Hasan',
      role: 'Owner, MH Care Coaching Center',
      rating: 5,
      image: mahediImage,
      date: '2023',
      relationship: 'Mentor'
    },
    {
      id: 2,
      text: "Working with Shakib on research papers was an incredible experience. His dedication to research and analytical skills are outstanding. He contributed significantly to our IEEE publications.",
      author: 'Laboni Somoddar',
      role: 'Research Partner',
      rating: 5,
      image: laboniImage,
      date: '2024',
      relationship: 'Research Colleague'
    },
    {
      id: 3,
      text: "Shakib was an amazing thesis partner. His problem-solving abilities and dedication to our project were inspiring. He always goes the extra mile to ensure excellence in everything he does.",
      author: 'Mahia Meherun',
      role: 'Thesis Mate, East West University',
      rating: 5,
      image: mahiaImage,
      date: '2024',
      relationship: 'Academic Partner'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          What People <span className="text-purple-400">Say</span>
        </motion.h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-purple-500/30"
          >
            <Award size={40} className="text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">3+</div>
            <div className="text-sm text-gray-300">Years Teaching</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-purple-500/30"
          >
            <Users size={40} className="text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-sm text-gray-300">Happy Students</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 text-center border border-purple-500/30"
          >
            <BookOpen size={40} className="text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">2+</div>
            <div className="text-sm text-gray-300">Research Papers</div>
          </motion.div>
        </div>

        {/* Main Testimonial Carousel */}
        <div ref={ref} className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border-2 border-purple-500/30 relative"
            >
              <Quote size={64} className="text-purple-500/30 absolute top-8 right-8" />

              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-white italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="relative w-20 h-20 rounded-full border-4 border-purple-500 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].author}</h4>
                    <p className="text-purple-400 text-sm">{testimonials[currentIndex].role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-400">{testimonials[currentIndex].relationship}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{testimonials[currentIndex].date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white/10 hover:bg-purple-500 text-white p-3 rounded-full transition-all backdrop-blur-lg border border-purple-500/30"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white/10 hover:bg-purple-500 text-white p-3 rounded-full transition-all backdrop-blur-lg border border-purple-500/30"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Mini Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setCurrentIndex(index)}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-purple-500/30 hover:border-purple-500 cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full border-2 border-purple-500 object-cover"
                />
                <div>
                  <h5 className="text-sm font-semibold text-white">{testimonial.author}</h5>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 line-clamp-2">"{testimonial.text.substring(0, 80)}..."</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;