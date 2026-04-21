import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ZoomIn, X, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// ইমেজ ইমপোর্ট
import convocationImage from '../Photo/FrstPhoto_gallery1_My_Convocation.jpg';
import officeImage from '../Photo/SecondPhoto_gallery1_My_Office.jpeg';
import gallery4 from '../Photo/gallery4.jpg';
import gallery5 from '../Photo/gallery5.jpg';
import gallery6 from '../Photo/gallery6.jpg';
import gallery1 from '../Photo/gallery1.jpg';
import gallery2 from '../Photo/gallery2.jpg';
import gallery3 from '../Photo/gallery3.jpg';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedImages, setLikedImages] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;

  const images = [
    {
      src: convocationImage,
      alt: 'My Convocation Ceremony',
      category: 'Event',
      description: 'Graduation day at East West University - A memorable milestone',
      date: '2025',
      likes: 67
    },
    {
      src: officeImage,
      alt: 'At Boomdevs Office',
      category: 'Work',
      description: 'Working at Boomdevs Information Technology Company as Full Stack Developer Intern',
      date: '2025',
      likes: 54
    },
    {
      src: gallery4,
      alt: 'Team Collaboration',
      category: 'Work',
      description: 'Collaborating with the team on a project at Boomdevs',
      date: '2025',
      likes: 42
    },
    {
      src: gallery5,
      alt: 'Tech Workshop',
      category: 'Event',
      description: 'Conducting a workshop on web development at university',
      date: '2024',
      likes: 38
    },
    {
      src: gallery6,
      alt: 'Conference Presentation',
      category: 'Event',
      description: 'Presenting research paper at IEEE conference',
      date: '2024',
      likes: 51
    },
    {
      src: gallery1,
      alt: 'Project Screenshot - Energy Forecasting App',
      category: 'Project',
      description: 'Screenshot of the sustainable energy forecasting application built with Streamlit',
      date: '2024',
      likes: 45
    },
    {
      src: gallery2,
      alt: 'EWU CSE Club Event',
      category: 'Event',
      description: 'Organizing coding workshop at EWU CSE Club Tech Fest 2023',
      date: '2023',
      likes: 32
    },
    {
      src: gallery3,
      alt: 'Workshop Photo',
      category: 'Workshop',
      description: 'Conducting Python workshop for students',
      date: '2023',
      likes: 28
    }
  ];

  const categories = ['All', 'Event', 'Work', 'Project', 'Workshop'];

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const visibleImages = filteredImages.slice(currentIndex, currentIndex + imagesPerPage);

  const nextImages = () => {
    if (currentIndex + imagesPerPage < filteredImages.length) {
      setCurrentIndex(currentIndex + imagesPerPage);
    }
  };

  const prevImages = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  };

  const handleLike = (index, e) => {
    e.stopPropagation();
    setLikedImages(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const modalCurrentIndex = selectedImage ? images.findIndex(img => img.src === selectedImage.src) : 0;

  const handlePrev = () => {
    const newIndex = (modalCurrentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (modalCurrentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Photo <span className="text-purple-400">Gallery</span>
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all ${selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImages}
              disabled={currentIndex === 0}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={24} className="text-white" />
            </motion.button>
            <span className="text-gray-300 text-sm">
              {Math.floor(currentIndex / imagesPerPage) + 1} / {Math.ceil(filteredImages.length / imagesPerPage)}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImages}
              disabled={currentIndex + imagesPerPage >= filteredImages.length}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={24} className="text-white" />
            </motion.button>
          </div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleImages.map((image, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
                className="group relative cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-sm font-semibold mb-1">{image.alt}</p>
                  <p className="text-gray-300 text-xs mb-2">{image.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-300">{image.date}</span>
                    <button
                      onClick={(e) => handleLike(currentIndex + index, e)}
                      className="flex items-center gap-1 text-white hover:text-pink-400 transition-colors"
                    >
                      <Heart
                        size={16}
                        fill={likedImages[currentIndex + index] ? '#ec4899' : 'none'}
                        color={likedImages[currentIndex + index] ? '#ec4899' : 'white'}
                      />
                      <span className="text-xs">{image.likes + (likedImages[currentIndex + index] ? 1 : 0)}</span>
                    </button>
                  </div>
                </div>

                {/* Zoom Icon */}
                <ZoomIn className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-5xl max-h-[90vh] p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900/90 backdrop-blur-lg px-6 py-3 rounded-full border border-purple-500/30">
                <p className="text-white text-center">{selectedImage.alt}</p>
                <p className="text-gray-300 text-sm text-center">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;