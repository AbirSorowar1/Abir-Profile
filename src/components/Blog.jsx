import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Heart, MessageCircle, Share2, BookOpen } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'My Journey in Data Science: From Beginner to Practitioner',
      excerpt: 'My journey in data science began with a steep learning curve. Initially, concepts like machine learning algorithms, data preprocessing, and statistical analysis felt overwhelming...',
      date: 'March 15, 2024',
      readTime: '5 min read',
      author: 'Shakib Ibna Sorowar Abir',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
      category: 'Data Science',
      tags: ['Machine Learning', 'Python', 'Career'],
      likes: 45,
      comments: 12,
      content: `My journey in data science began with a steep learning curve. Initially, concepts like machine learning algorithms, data preprocessing, and statistical analysis felt overwhelming. I struggled to grasp how to clean datasets or choose the right model for predictions.

However, my curiosity pushed me forward. I spent countless hours diving into research papers from sources like arXiv and IEEE, which helped me understand complex topics like neural networks and regression models. YouTube became my go-to resource for practical tutorials—channels like StatQuest and 3Blue1Brown broke down intricate concepts into digestible explanations.

I also enrolled in online courses on Coursera, such as the Data Science with Python certification, which provided hands-on projects to apply my knowledge. Over time, I built a strong foundation by working on real-world datasets, experimenting with tools like Pandas, NumPy, and Scikit-learn.

My capstone project, forecasting sustainable energy consumption in Bangladesh, was a turning point. It required me to integrate data cleaning, visualization, and predictive modeling, which solidified my expertise.`
    },
    {
      id: 2,
      title: 'Building Modern Web Apps with React: Best Practices and Tips',
      excerpt: "My journey into web development with React was both challenging and rewarding. In the beginning, understanding React's component-based architecture and concepts like state management and hooks was daunting...",
      date: 'March 10, 2024',
      readTime: '4 min read',
      author: 'Shakib Ibna Sorowar Abir',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
      category: 'Web Development',
      tags: ['React', 'JavaScript', 'Frontend'],
      likes: 38,
      comments: 8,
      content: `My journey into web development with React was both challenging and rewarding. In the beginning, understanding React's component-based architecture and concepts like state management and hooks was daunting. I struggled with how to structure components or manage data flow effectively.

To overcome this, I turned to resources like the official React documentation, which provided a solid theoretical foundation. I also followed YouTube tutorials from creators like Traversy Media and The Net Ninja, which offered practical, step-by-step guidance on building responsive applications.

Enrolling in Udemy's React Developer Certification course was a game-changer, as it gave me hands-on experience with projects like e-commerce dashboards and portfolio sites. I practiced by building small applications, experimenting with tools like Redux for state management and Tailwind CSS for styling.`
    },
    {
      id: 3,
      title: 'The Future of AI in Bangladesh: Opportunities and Challenges',
      excerpt: 'As artificial intelligence continues to reshape industries globally, Bangladesh stands at a crucial juncture. The potential for AI to transform sectors like agriculture, healthcare, and education is immense...',
      date: 'March 5, 2024',
      readTime: '6 min read',
      author: 'Shakib Ibna Sorowar Abir',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
      category: 'AI',
      tags: ['AI', 'Bangladesh', 'Technology'],
      likes: 52,
      comments: 15,
      content: `As artificial intelligence continues to reshape industries globally, Bangladesh stands at a crucial juncture. The potential for AI to transform sectors like agriculture, healthcare, and education is immense, but we must also address significant challenges.

In agriculture, AI-powered solutions can help farmers optimize crop yields, predict weather patterns, and detect diseases early. Startups are already experimenting with drone technology and computer vision for crop monitoring. The government's Digital Bangladesh initiative provides a foundation for these innovations.

Healthcare is another promising area. With a shortage of doctors in rural areas, AI-powered diagnostic tools can bridge the gap. Projects like telemedicine platforms and AI-based disease prediction models are gaining traction. However, we need more investment in healthcare infrastructure and data collection.`
    }
  ];

  const categories = ['All', 'Data Science', 'Web Development', 'AI'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Latest <span className="text-purple-400">Blog Posts</span>
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Blog Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-all h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200';
                    }}
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-purple-500/90 text-white text-xs rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-purple-400">#{tag}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Heart size={14} />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        {post.comments}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-purple-500"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white pr-8">{selectedPost.title}</h2>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {selectedPost.readTime}
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-purple-300 text-xs">
                    {selectedPost.category}
                  </span>
                </div>

                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="prose prose-invert max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-300 mb-4 leading-relaxed">{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6 mb-6">
                  {selectedPost.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-purple-500/30">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors">
                      <Heart size={20} />
                      <span>{selectedPost.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                      <MessageCircle size={20} />
                      <span>{selectedPost.comments}</span>
                    </button>
                  </div>
                  <button className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;