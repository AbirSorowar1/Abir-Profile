import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ExternalLink,
  Github,
  Calendar,
  Star,
  Sparkles,
  Rocket,
  Brain,
  ShoppingCart,
  Heart,
  Cloud,
  Coffee,
  Moon,
  Zap,
  Shield,
  BarChart,
  Users,
  Droplets,
  Home,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Flame,
  Award,
  Clock,
  Target,
  Globe,
  Layout,
  Code,
  Palette,
  Database,
  Server,
  Cpu,
  GitBranch
} from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;

  // Best projects marked with featured = true (Number 17,7,10,9,11,1,3,4,12,16)
  const projects = [
    // Data Science Projects (1 & 18) - 2025
    {
      id: 1,
      title: 'Forecasting Sustainable Energy Consumption In Bangladesh',
      description: 'Advanced machine learning model to forecast sustainable energy consumption patterns across Bangladesh. Uses LSTM and ARIMA models for accurate predictions.',
      longDescription: 'This project uses advanced machine learning techniques including LSTM neural networks and ARIMA models to forecast sustainable energy consumption patterns across different divisions of Bangladesh. The model achieves 94% accuracy and helps in planning renewable energy infrastructure. Built with Python, Streamlit, and Firebase for data storage.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://capstoneprojectb-400.streamlit.app/',
      github: 'https://github.com',
      tech: ['Python', 'Streamlit', 'LSTM', 'ARIMA', 'Pandas', 'Scikit-learn', 'Firebase'],
      date: '2025',
      category: 'Data Science',
      featured: true,
      icon: <Brain className="text-purple-400" size={20} />
    },
    {
      id: 18,
      title: 'Diabetes Risk Prediction System',
      description: 'Machine learning web app that predicts diabetes risk based on patient health metrics. Helps in early diagnosis and prevention.',
      longDescription: 'A comprehensive machine learning application that analyzes patient health metrics including glucose levels, BMI, age, and family history to predict diabetes risk. The model uses Random Forest and XGBoost algorithms with 89% accuracy. Uses Firebase for storing patient data securely.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://capstoneb-gq8pnnu2ug5xj87hnxex2o.streamlit.app/',
      github: 'https://github.com',
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'XGBoost', 'Firebase'],
      date: '2025',
      category: 'Data Science',
      featured: false,
      icon: <Heart className="text-red-400" size={20} />
    },

    // Featured Projects 2026 (Most Important)
    {
      id: 17,
      title: 'Ramadan Tracker 2026',
      description: 'Complete spiritual companion app for Ramadan 2026. Track prayers, Quran reading, fasting, and daily duas with beautiful UI.',
      longDescription: 'A comprehensive spiritual companion app designed specifically for Ramadan 2026. Features include prayer time tracking, Quran reading progress, fasting calendar, daily duas, and spiritual goals tracking. Beautiful Islamic geometric patterns and calming color scheme. Uses Firebase for user data and progress tracking.',
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://ramadan-tracker-nine.vercel.app/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Framer Motion', 'Firebase Auth', 'Firestore'],
      date: '2026',
      category: 'Web App',
      featured: true,
      icon: <Moon className="text-yellow-400" size={20} />
    },
    {
      id: 10,
      title: 'Office Todo Pro 2026',
      description: 'Comprehensive office task management system. Track tasks, set meetings, assign work, and monitor team progress.',
      longDescription: 'A powerful office task management system that revolutionizes workplace productivity. Features include task assignment, meeting scheduling, progress tracking, team collaboration, deadline reminders, and performance analytics. Perfect for modern offices. Powered by Firebase for real-time updates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://office-todo-ohld.vercel.app/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'Framer Motion'],
      date: '2026',
      category: 'Productivity',
      featured: true,
      icon: <Target className="text-green-400" size={20} />
    },

    // Featured Projects 2025
    {
      id: 7,
      title: 'Disney Plus Hotstar Clone',
      description: 'Pixel-perfect Disney Plus Hotstar clone with authentic UI/UX. Features movie browsing, categories, and responsive design.',
      longDescription: 'A meticulously crafted Disney Plus Hotstar clone that captures the original platform\'s magic. Includes movie/show browsing by category, search functionality, responsive design, and smooth animations. Built with React, Tailwind CSS, and Firebase for user authentication and watchlists.',
      image: 'https://images.unsplash.com/photo-1598899134731-9618f6e1f7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://disney-plus-two-plum.vercel.app/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Redux', 'Firebase Auth', 'Firestore', 'TMDB API'],
      date: '2025',
      category: 'Clone',
      featured: true,
      icon: <Rocket className="text-blue-400" size={20} />
    },
    {
      id: 9,
      title: 'Pharmacy Management System',
      description: 'Full-stack pharmacy management system. Track inventory, manage sales, handle prescriptions, and generate reports.',
      longDescription: 'A complete pharmacy management solution with inventory tracking, sales management, prescription handling, expiry date alerts, supplier management, and comprehensive reporting. Built for real-world pharmacy operations. Uses Firebase for real-time inventory updates.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'http://pharmecy-managment-system.vercel.app/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'Chart.js'],
      date: '2025',
      category: 'Management System',
      featured: true,
      icon: <Shield className="text-green-600" size={20} />
    },
    {
      id: 11,
      title: 'Club Management System',
      description: 'Complete club/organization management platform. Member management, events, attendance, and communication tools.',
      longDescription: 'A comprehensive platform for managing clubs and organizations. Features include member registration, event planning, attendance tracking, communication tools, fee management, and activity logging. Perfect for student clubs and professional organizations. Powered by Firebase.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://club-managment-system.vercel.app/login',
      github: 'https://github.com',
      tech: ['React', 'Firebase Auth', 'Firestore', 'Tailwind', 'Framer Motion'],
      date: '2025',
      category: 'Management System',
      featured: true,
      icon: <Users className="text-purple-500" size={20} />
    },
    {
      id: 3,
      title: 'High Quality Courses Platform',
      description: 'Modern e-learning platform with video courses, progress tracking, quizzes, and certificates.',
      longDescription: 'A feature-rich e-learning platform offering high-quality courses. Features include video lessons, progress tracking, interactive quizzes, certification upon completion, and instructor dashboard. Built with React and Firebase for user progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://abirsorowar1.github.io/Boomdevs_First_Project/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'Framer Motion'],
      date: '2025',
      category: 'Education',
      featured: true,
      icon: <BookOpen className="text-blue-400" size={20} />
    },
    {
      id: 4,
      title: 'BMI Calculator Pro',
      description: 'Advanced BMI calculator with health recommendations, history tracking, and data visualization.',
      longDescription: 'Beyond basic BMI calculation, this app provides personalized health recommendations, tracks history with beautiful charts, and offers fitness tips based on your BMI category. Uses Firebase to store user history.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://abirsorowar1.github.io/office_4_BMI_Cal/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Firebase', 'Chart.js'],
      date: '2025',
      category: 'Utility',
      featured: true,
      icon: <Heart className="text-red-400" size={20} />
    },
    {
      id: 12,
      title: 'Blog Writing Platform',
      description: 'Full-featured blog platform with rich text editor, categories, comments, and user profiles.',
      longDescription: 'A complete blogging platform where users can create, edit, and publish articles. Features include rich text editor, category management, comment system, user profiles, and social sharing integration. Uses Firebase for content storage and user management.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://blog-wrting.vercel.app/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'TipTap'],
      date: '2025',
      category: 'Content',
      featured: true,
      icon: <BookOpen className="text-orange-400" size={20} />
    },
    {
      id: 16,
      title: 'Super Shop Management',
      description: 'Complete supermarket management system with inventory, billing, and customer management.',
      longDescription: 'A robust supermarket management solution with product inventory, billing system, customer loyalty program, sales analytics, and supplier management. Streamlines retail operations. Uses Firebase for real-time inventory updates.',
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://super-shop-delta.vercel.app/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'Chart.js'],
      date: '2025',
      category: 'Management System',
      featured: true,
      icon: <ShoppingCart className="text-yellow-500" size={20} />
    },

    // Other Projects - 2024 (Less important)
    {
      id: 2,
      title: 'WeIT - IT Solutions Website',
      description: 'Modern IT solutions company website with services showcase, portfolio, and contact system.',
      longDescription: 'A professional IT solutions company website showcasing services, completed projects, client testimonials, and a comprehensive contact system. Built with responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://abirsorowar1.github.io/WeITTEST/WeIT.html',
      github: 'https://github.com',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      date: '2024',
      category: 'Business',
      featured: false
    },
    {
      id: 5,
      title: 'Mini E-Commerce',
      description: 'Small-scale e-commerce platform with product listing, cart, and checkout functionality.',
      longDescription: 'A compact e-commerce solution featuring product catalog, shopping cart, checkout process, and order management. Perfect for small businesses starting online.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://abirsorowar1.github.io/office_4_Mini_E_comerce/',
      github: 'https://github.com',
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      date: '2024',
      category: 'E-commerce',
      featured: false
    },
    {
      id: 6,
      title: 'Note Writer Pro',
      description: 'Feature-rich note-taking app with cloud sync, categories, and rich text editing.',
      longDescription: 'A powerful note-taking application with cloud synchronization, category organization, rich text editing, and search functionality. Notes are saved locally.',
      image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://officelocalstorage.vercel.app/',
      github: 'https://github.com',
      tech: ['React', 'LocalStorage', 'Tailwind'],
      date: '2024',
      category: 'Productivity',
      featured: false
    },
    {
      id: 8,
      title: 'TodoList with Authentication',
      description: 'Full-stack todo app with user login, task management, and persistent storage.',
      longDescription: 'A complete todo application with user authentication, task creation/editing/deletion, categories, due dates, and persistent cloud storage. Uses Firebase.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://office-todo.vercel.app/welcome',
      github: 'https://github.com',
      tech: ['React', 'Firebase Auth', 'Firestore', 'Tailwind'],
      date: '2024',
      category: 'Productivity',
      featured: false
    },
    {
      id: 13,
      title: 'Mini Shop',
      description: 'Simple yet elegant mini shop with product display and cart functionality.',
      longDescription: 'A minimalist e-commerce shop with product grid, detailed product views, shopping cart, and responsive design. Focuses on clean UI.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://mini-shop-eight-pi.vercel.app/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Redux'],
      date: '2024',
      category: 'E-commerce',
      featured: false
    },
    {
      id: 14,
      title: 'Modern Dashboard UI',
      description: 'Beautiful and responsive admin dashboard with charts, tables, and analytics.',
      longDescription: 'A stunning admin dashboard featuring multiple chart types, data tables, analytics cards, and dark/light mode. Perfect for monitoring business metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://dashboard-ui-five-self.vercel.app/dashboard',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Chart.js', 'Recharts'],
      date: '2024',
      category: 'UI/UX',
      featured: false
    },
    {
      id: 15,
      title: 'MA IT Company',
      description: 'Professional IT company website with services, team, and portfolio showcase.',
      longDescription: 'A comprehensive IT company website showcasing services, team members, project portfolio, client testimonials, and contact information.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      link: 'https://project-office-last.vercel.app/',
      github: 'https://github.com',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      date: '2024',
      category: 'Business',
      featured: false
    }
  ];

  // Year-based color coding
  const getYearColor = (year) => {
    switch (year) {
      case '2026': return 'from-purple-500 to-pink-500';
      case '2025': return 'from-blue-500 to-cyan-500';
      case '2024': return 'from-gray-500 to-slate-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getYearBadgeColor = (year) => {
    switch (year) {
      case '2026': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case '2025': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case '2024': return 'bg-gradient-to-r from-gray-500 to-slate-500';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const categories = ['All', 'Data Science', 'Featured', '2026', '2025', '2024', 'Web App', 'Management System', 'Productivity', 'E-commerce', 'Education', 'Utility', 'Business', 'Clone', 'UI/UX', 'Content'];

  // First show featured projects, then others, sort by year (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    // Sort by year (2026 first, then 2025, then 2024)
    if (a.date !== b.date) {
      return parseInt(b.date) - parseInt(a.date);
    }
    return 0;
  });

  const filteredProjects = filter === 'All'
    ? sortedProjects
    : filter === 'Featured'
      ? sortedProjects.filter(p => p.featured)
      : filter === '2026' || filter === '2025' || filter === '2024'
        ? sortedProjects.filter(p => p.date === filter)
        : sortedProjects.filter(p => p.category === filter);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my best work - from data science to full-stack applications
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 text-center border border-purple-500/30"
          >
            <div className="text-3xl font-bold text-white">18+</div>
            <div className="text-sm text-gray-400">Total Projects</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 text-center border border-blue-500/30"
          >
            <div className="text-3xl font-bold text-white">10</div>
            <div className="text-sm text-gray-400">Featured</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 text-center border border-green-500/30"
          >
            <div className="text-3xl font-bold text-white">2</div>
            <div className="text-sm text-gray-400">Data Science</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-4 text-center border border-yellow-500/30"
          >
            <div className="text-3xl font-bold text-white">8+</div>
            <div className="text-sm text-gray-400">Categories</div>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              onClick={() => {
                setFilter(cat);
                setCurrentPage(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                  ? cat === '2026'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : cat === '2025'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-purple-500/30'
                }`}
            >
              {cat}
              {cat === '2026' && <Flame className="inline ml-1" size={14} />}
              {cat === '2025' && <Sparkles className="inline ml-1" size={14} />}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid with Carousel */}
        <div ref={ref} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border transition-all h-full ${project.featured
                      ? project.date === '2026'
                        ? 'border-purple-500/50 hover:border-purple-500 shadow-lg shadow-purple-500/20'
                        : project.date === '2025'
                          ? 'border-blue-500/50 hover:border-blue-500 shadow-lg shadow-blue-500/20'
                          : 'border-yellow-500/50 hover:border-yellow-500 shadow-lg shadow-yellow-500/20'
                      : 'border-gray-500/30 hover:border-gray-500'
                    }`}>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1598899134731-9618f6e1f7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80';
                        }}
                      />
                      {project.featured && (
                        <div className={`absolute top-4 right-4 ${getYearBadgeColor(project.date)} text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg`}>
                          <Star size={12} />
                          Featured {project.date}
                        </div>
                      )}
                      {project.category === 'Data Science' && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg">
                          <Brain size={12} />
                          Data Science
                        </div>
                      )}
                      <div className={`absolute bottom-4 left-4 ${getYearBadgeColor(project.date)} text-white px-2 py-1 rounded-full text-xs flex items-center gap-1`}>
                        <Calendar size={10} />
                        {project.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        {project.icon && <span className="text-purple-400">{project.icon}</span>}
                        <span className="text-purple-400">{project.category}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      <p className="text-gray-400 text-xs mb-4 line-clamp-2 italic">
                        {project.longDescription.substring(0, 100)}...
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full transition-all ${currentPage === 0
                    ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                    : 'bg-purple-500/20 hover:bg-purple-500 text-white border border-purple-500/30'
                  }`}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <span className="text-white font-medium">
                Page {currentPage + 1} of {totalPages}
              </span>

              <motion.button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full transition-all ${currentPage === totalPages - 1
                    ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                    : 'bg-purple-500/20 hover:bg-purple-500 text-white border border-purple-500/30'
                  }`}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;