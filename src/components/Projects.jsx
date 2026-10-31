import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Moon,
  Shield,
  Users,
  Home,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Flame,
  Target,
  Utensils,
  Wifi,
  MessageSquare,
  BarChart3,
} from 'lucide-react';

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80`;

const FALLBACK_IMAGE = unsplash('1598899134731-9618f6e1f7b2');

// sortOrder = display order for featured projects (1, 2, 3 ... serially)
const projects = [
  // ---------- Featured (serial order) ----------
  {
    id: 17,
    title: 'Ramadan Tracker 2026',
    description:
      'Complete spiritual companion app for Ramadan 2026. Track prayers, Quran reading, fasting, and daily duas with beautiful UI.',
    longDescription:
      'A comprehensive spiritual companion app designed specifically for Ramadan 2026. Features include prayer time tracking, Quran reading progress, fasting calendar, daily duas, and spiritual goals tracking. Beautiful Islamic geometric patterns and calming color scheme. Uses Firebase for user data and progress tracking.',
    image: unsplash('1584551246679-0daf3d275d0f'),
    link: 'https://ramadan-tracker-nine.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Firebase Auth', 'Firestore'],
    date: '2026',
    category: 'Web App',
    featured: true,
    sortOrder: 1,
    icon: <Moon className="text-yellow-400" size={20} />,
  },
  {
    id: 24,
    title: 'Sales Plus Dashboard',
    description:
      'Interactive sales analytics dashboard with live Google Sheets data, revenue and profit KPIs, order insights, and detailed sales breakdowns.',
    longDescription:
      'A comprehensive sales dashboard that brings business performance into one clear view. Monitor revenue, profit, orders, average order value, ratings, and returns; explore monthly revenue and payment methods; compare sales by category and division; and search recent orders. The dashboard reads live data from Google Sheets and presents it through interactive charts.',
    image: unsplash('1551288049-bebda4e38f71'),
    link: 'https://salesplusdashboard.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Python', 'Google Sheets', 'Recharts', 'Chart.js'],
    date: '2026',
    category: 'Web App',
    featured: true,
    sortOrder: 2,
    icon: <BarChart3 className="text-emerald-400" size={20} />,
  },
  {
    id: 23,
    title: 'Tidepool',
    description:
      'Slack-style team chat. Create channels, add members, assign tasks, and keep the whole team in one workspace.',
    longDescription:
      'Tidepool is a Slack replica built for team collaboration. Create channels, invite and add members, send real-time messages, and assign tasks to teammates, all from a single workspace. Clean sidebar navigation, direct messages, and task tracking make it easy to keep every conversation and to-do in one place.',
    image: unsplash('1522202176988-66273c2fd55f'),
    link: 'https://my-slack-theta.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'Framer Motion'],
    date: '2026',
    category: 'Web App',
    featured: true,
    sortOrder: 3,
    icon: <MessageSquare className="text-pink-400" size={20} />,
  },
  {
    id: 19,
    title: 'Ghoroa Guru',
    description:
      'Helping hand management service platform connecting households with trusted domestic workers and service providers.',
    longDescription:
      'A comprehensive platform that bridges the gap between households and reliable domestic service providers. Features include service booking, worker profiles, ratings and reviews, scheduling management, and secure payment handling. Designed to simplify the process of finding trustworthy helping hands. Built with React and Firebase for real-time bookings.',
    image: unsplash('1581578731548-c64695cc6952'),
    link: 'https://ghoroa-guru-w1pj.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Firebase Auth', 'Firestore'],
    date: '2026',
    category: 'Web App',
    featured: true,
    sortOrder: 4,
    icon: <Home className="text-orange-400" size={20} />,
  },
  {
    id: 20,
    title: '2Hungry',
    description:
      'Restaurant website with food delivery service. Browse menu, place orders, and get food delivered right to your door.',
    longDescription:
      'A complete restaurant website offering both dine-in and food delivery services. Features include interactive menu browsing, online order placement, delivery tracking, user authentication, and order history. Built with React, Tailwind CSS, and Firebase for real-time order management.',
    image: unsplash('1565299624946-b28f40a0ae38'),
    link: 'https://2-hungry.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    date: '2026',
    category: 'Web App',
    featured: true,
    sortOrder: 5,
    icon: <Utensils className="text-orange-400" size={20} />,
  },
  {
    id: 1,
    title: 'Forecasting Sustainable Energy Consumption In Bangladesh',
    description:
      'Advanced machine learning model to forecast sustainable energy consumption patterns across Bangladesh. Uses LSTM and ARIMA models for accurate predictions.',
    longDescription:
      'This project uses advanced machine learning techniques including LSTM neural networks and ARIMA models to forecast sustainable energy consumption patterns across different divisions of Bangladesh. The model achieves 94% accuracy and helps in planning renewable energy infrastructure. Built with Python, Streamlit, and Firebase for data storage.',
    image: unsplash('1509391366360-2e959784a276'),
    link: 'https://1test400c.streamlit.app/',
    github: 'https://github.com',
    tech: ['Python', 'Streamlit', 'LSTM', 'ARIMA', 'Pandas', 'Scikit-learn', 'Firebase'],
    date: '2025',
    category: 'Data Science',
    featured: true,
    sortOrder: 6,
    icon: <Brain className="text-purple-400" size={20} />,
  },
  {
    id: 10,
    title: 'Office Todo Pro 2026',
    description:
      'Comprehensive office task management system. Track tasks, set meetings, assign work, and monitor team progress.',
    longDescription:
      'A powerful office task management system that revolutionizes workplace productivity. Features include task assignment, meeting scheduling, progress tracking, team collaboration, deadline reminders, and performance analytics. Perfect for modern offices. Powered by Firebase for real-time updates.',
    image: unsplash('1454165804606-c3d57bc86b40'),
    link: 'https://office-todo-ohld.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'Framer Motion'],
    date: '2026',
    category: 'Productivity',
    featured: true,
    sortOrder: 7,
    icon: <Target className="text-green-400" size={20} />,
  },
  {
    id: 21,
    title: 'Seba Ghor',
    description:
      'Helping hand management platform connecting households with trusted service providers for domestic needs.',
    longDescription:
      'A helping hand management platform that connects households with reliable domestic service providers. Built with HTML, CSS, and JavaScript, the platform allows users to find, contact, and schedule domestic helpers for various household tasks. Simple and effective interface for managing home service needs.',
    image: unsplash('1628177142898-93e36e4e3a50'),
    link: 'https://tahsinstudy26-ux.github.io/Seba_Ghor/seba-ghor.html',
    github: 'https://github.com',
    tech: ['HTML', 'CSS', 'JavaScript'],
    date: '2025',
    category: 'Web App',
    featured: true,
    sortOrder: 8,
    icon: <Home className="text-green-400" size={20} />,
  },
  {
    id: 22,
    title: 'NetCare',
    description:
      'Net servicing center platform where customers can find internet service technicians and schedule service appointments.',
    longDescription:
      'A comprehensive net servicing center platform that bridges customers with internet service technicians. Features include technician profiles, service scheduling, appointment management, service tracking, and customer reviews. Makes it easy to find and book reliable internet service professionals. Built with React, Tailwind CSS, and Firebase.',
    image: unsplash('1558494949-ef010cbdcc31'),
    link: 'https://net-care.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    date: '2026',
    category: 'Web App',
    featured: true,
    sortOrder: 9,
    icon: <Wifi className="text-blue-400" size={20} />,
  },
  {
    id: 7,
    title: 'Disney Plus Hotstar Clone',
    description:
      'Pixel-perfect Disney Plus Hotstar clone with authentic UI/UX. Features movie browsing, categories, and responsive design.',
    longDescription:
      "A meticulously crafted Disney Plus Hotstar clone that captures the original platform's magic. Includes movie/show browsing by category, search functionality, responsive design, and smooth animations. Built with React, Tailwind CSS, and Firebase for user authentication and watchlists.",
    image: unsplash('1611162617213-7d7a39e9b1d7'),
    link: 'https://disney-plus-two-plum.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Redux', 'Firebase Auth', 'Firestore', 'TMDB API'],
    date: '2025',
    category: 'Clone',
    featured: true,
    sortOrder: 10,
    icon: <Rocket className="text-blue-400" size={20} />,
  },
  {
    id: 9,
    title: 'Pharmacy Management System',
    description:
      'Full-stack pharmacy management system. Track inventory, manage sales, handle prescriptions, and generate reports.',
    longDescription:
      'A complete pharmacy management solution with inventory tracking, sales management, prescription handling, expiry date alerts, supplier management, and comprehensive reporting. Built for real-world pharmacy operations. Uses Firebase for real-time inventory updates.',
    image: unsplash('1579154204601-01588f351e67'),
    link: 'http://pharmecy-managment-system.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'Chart.js'],
    date: '2025',
    category: 'Management System',
    featured: true,
    sortOrder: 11,
    icon: <Shield className="text-green-600" size={20} />,
  },
  {
    id: 11,
    title: 'Club Management System',
    description:
      'Complete club/organization management platform. Member management, events, attendance, and communication tools.',
    longDescription:
      'A comprehensive platform for managing clubs and organizations. Features include member registration, event planning, attendance tracking, communication tools, fee management, and activity logging. Perfect for student clubs and professional organizations. Powered by Firebase.',
    image: unsplash('1528605248644-14dd04022da1'),
    link: 'https://club-managment-system.vercel.app/login',
    github: 'https://github.com',
    tech: ['React', 'Firebase Auth', 'Firestore', 'Tailwind', 'Framer Motion'],
    date: '2025',
    category: 'Management System',
    featured: true,
    sortOrder: 12,
    icon: <Users className="text-purple-500" size={20} />,
  },
  {
    id: 3,
    title: 'High Quality Courses Platform',
    description:
      'Modern e-learning platform with video courses, progress tracking, quizzes, and certificates.',
    longDescription:
      'A feature-rich e-learning platform offering high-quality courses. Features include video lessons, progress tracking, interactive quizzes, certification upon completion, and instructor dashboard. Built with React and Firebase for user progress tracking.',
    image: unsplash('1501504905252-473c47e087f8'),
    link: 'https://abirsorowar1.github.io/Boomdevs_First_Project/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'Framer Motion'],
    date: '2025',
    category: 'Education',
    featured: true,
    sortOrder: 13,
    icon: <BookOpen className="text-blue-400" size={20} />,
  },
  {
    id: 4,
    title: 'BMI Calculator Pro',
    description:
      'Advanced BMI calculator with health recommendations, history tracking, and data visualization.',
    longDescription:
      'Beyond basic BMI calculation, this app provides personalized health recommendations, tracks history with beautiful charts, and offers fitness tips based on your BMI category. Uses Firebase to store user history.',
    image: unsplash('1576678927484-cc907957088c'),
    link: 'https://abirsorowar1.github.io/office_4_BMI_Cal/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Firebase', 'Chart.js'],
    date: '2025',
    category: 'Utility',
    featured: true,
    sortOrder: 14,
    icon: <Heart className="text-red-400" size={20} />,
  },
  {
    id: 12,
    title: 'Blog Writing Platform',
    description:
      'Full-featured blog platform with rich text editor, categories, comments, and user profiles.',
    longDescription:
      'A complete blogging platform where users can create, edit, and publish articles. Features include rich text editor, category management, comment system, user profiles, and social sharing integration. Uses Firebase for content storage and user management.',
    image: unsplash('1499750310107-5fef28a66643'),
    link: 'https://blog-wrting.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'TipTap'],
    date: '2025',
    category: 'Content',
    featured: true,
    sortOrder: 15,
    icon: <BookOpen className="text-orange-400" size={20} />,
  },
  {
    id: 16,
    title: 'Super Shop Management',
    description:
      'Complete supermarket management system with inventory, billing, and customer management.',
    longDescription:
      'A robust supermarket management solution with product inventory, billing system, customer loyalty program, sales analytics, and supplier management. Streamlines retail operations. Uses Firebase for real-time inventory updates.',
    image: unsplash('1578916171728-46686eac8d58'),
    link: 'https://super-shop-delta.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Firebase Auth', 'Firestore', 'Chart.js'],
    date: '2025',
    category: 'Management System',
    featured: true,
    sortOrder: 16,
    icon: <ShoppingCart className="text-yellow-500" size={20} />,
  },

  // ---------- Not featured ----------
  {
    id: 18,
    title: 'Diabetes Risk Prediction System',
    description:
      'Machine learning web app that predicts diabetes risk based on patient health metrics. Helps in early diagnosis and prevention.',
    longDescription:
      'A comprehensive machine learning application that analyzes patient health metrics including glucose levels, BMI, age, and family history to predict diabetes risk. The model uses Random Forest and XGBoost algorithms with 89% accuracy. Uses Firebase for storing patient data securely.',
    image: unsplash('1576091160399-112ba8d25d1d'),
    link: 'https://capstoneb-gq8pnnu2ug5xj87hnxex2o.streamlit.app/',
    github: 'https://github.com',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'XGBoost', 'Firebase'],
    date: '2025',
    category: 'Data Science',
    featured: false,
    icon: <Heart className="text-red-400" size={20} />,
  },
  {
    id: 2,
    title: 'WeIT - IT Solutions Website',
    description:
      'Modern IT solutions company website with services showcase, portfolio, and contact system.',
    longDescription:
      'A professional IT solutions company website showcasing services, completed projects, client testimonials, and a comprehensive contact system. Built with responsive design.',
    image: unsplash('1460925895917-afdab827c52f'),
    link: 'https://abirsorowar1.github.io/WeITTEST/WeIT.html',
    github: 'https://github.com',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    date: '2024',
    category: 'Business',
    featured: false,
  },
  {
    id: 5,
    title: 'Mini E-Commerce',
    description:
      'Small-scale e-commerce platform with product listing, cart, and checkout functionality.',
    longDescription:
      'A compact e-commerce solution featuring product catalog, shopping cart, checkout process, and order management. Perfect for small businesses starting online.',
    image: unsplash('1557821552-17105176677c'),
    link: 'https://abirsorowar1.github.io/office_4_Mini_E_comerce/',
    github: 'https://github.com',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    date: '2024',
    category: 'E-commerce',
    featured: false,
  },
  {
    id: 6,
    title: 'Note Writer Pro',
    description:
      'Feature-rich note-taking app with cloud sync, categories, and rich text editing.',
    longDescription:
      'A powerful note-taking application with cloud synchronization, category organization, rich text editing, and search functionality. Notes are saved locally.',
    image: unsplash('1512314889357-e157c22f938d'),
    link: 'https://officelocalstorage.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'LocalStorage', 'Tailwind'],
    date: '2024',
    category: 'Productivity',
    featured: false,
  },
  {
    id: 8,
    title: 'TodoList with Authentication',
    description:
      'Full-stack todo app with user login, task management, and persistent storage.',
    longDescription:
      'A complete todo application with user authentication, task creation/editing/deletion, categories, due dates, and persistent cloud storage. Uses Firebase.',
    image: unsplash('1484480974693-6ca0a78fb36b'),
    link: 'https://office-todo.vercel.app/welcome',
    github: 'https://github.com',
    tech: ['React', 'Firebase Auth', 'Firestore', 'Tailwind'],
    date: '2024',
    category: 'Productivity',
    featured: false,
  },
  {
    id: 13,
    title: 'Mini Shop',
    description:
      'Simple yet elegant mini shop with product display and cart functionality.',
    longDescription:
      'A minimalist e-commerce shop with product grid, detailed product views, shopping cart, and responsive design. Focuses on clean UI.',
    image: unsplash('1472851294608-062f824d29cc'),
    link: 'https://mini-shop-eight-pi.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Redux'],
    date: '2024',
    category: 'E-commerce',
    featured: false,
  },
  {
    id: 14,
    title: 'Modern Dashboard UI',
    description:
      'Beautiful and responsive admin dashboard with charts, tables, and analytics.',
    longDescription:
      'A stunning admin dashboard featuring multiple chart types, data tables, analytics cards, and dark/light mode. Perfect for monitoring business metrics.',
    image: unsplash('1551288049-bebda4e38f71'),
    link: 'https://dashboard-ui-five-self.vercel.app/dashboard',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Chart.js', 'Recharts'],
    date: '2024',
    category: 'UI/UX',
    featured: false,
  },
  {
    id: 15,
    title: 'MA IT Company',
    description:
      'Professional IT company website with services, team, and portfolio showcase.',
    longDescription:
      'A comprehensive IT company website showcasing services, team members, project portfolio, client testimonials, and contact information.',
    image: unsplash('1522071820081-009f0129c71c'),
    link: 'https://project-office-last.vercel.app/',
    github: 'https://github.com',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    date: '2024',
    category: 'Business',
    featured: false,
  },
];

const categories = [
  'All', 'Data Science', 'Featured', '2026', '2025', '2024', 'Web App',
  'Management System', 'Productivity', 'E-commerce', 'Education', 'Utility',
  'Business', 'Clone', 'UI/UX', 'Content',
];

const getYearBadgeColor = (year) => {
  switch (year) {
    case '2026': return 'bg-gradient-to-r from-purple-500 to-pink-500';
    case '2025': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    default: return 'bg-gradient-to-r from-gray-500 to-slate-500';
  }
};

// Featured by sortOrder, then the rest by year (newest first)
const sortedProjects = [...projects].sort((a, b) => {
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  if (a.featured && b.featured) return (a.sortOrder || 99) - (b.sortOrder || 99);
  return parseInt(b.date) - parseInt(a.date);
});

// Scroll-reveal: each block animates when IT enters the viewport,
// so nothing stays hidden / "stuck" while the user scrolls down.
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15, margin: '0px 0px -40px 0px' },
  transition: { duration: 0.45, delay, ease: 'easeOut' },
});

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;

  const featuredCount = projects.filter((p) => p.featured).length;
  const dataScienceCount = projects.filter((p) => p.category === 'Data Science').length;
  const categoryCount = new Set(projects.map((p) => p.category)).size;

  const stats = [
    { value: `${projects.length}`, label: 'Total Projects', style: 'from-purple-500/20 to-pink-500/20 border-purple-500/30' },
    { value: `${featuredCount}`, label: 'Featured', style: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30' },
    { value: `${dataScienceCount}`, label: 'Data Science', style: 'from-green-500/20 to-emerald-500/20 border-green-500/30' },
    { value: `${categoryCount}`, label: 'Categories', style: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30' },
  ];

  const filteredProjects =
    filter === 'All'
      ? sortedProjects
      : filter === 'Featured'
        ? sortedProjects.filter((p) => p.featured)
        : ['2026', '2025', '2024'].includes(filter)
          ? sortedProjects.filter((p) => p.date === filter)
          : sortedProjects.filter((p) => p.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const nextPage = () => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration (radial gradients instead of heavy blur = smoother scroll) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-96 h-96"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12), transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div {...reveal()} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my best work - from data science to full-stack applications
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...reveal(i * 0.08)}
              className={`bg-gradient-to-br ${s.style} rounded-xl p-4 text-center border`}
            >
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filter Buttons */}
        <motion.div {...reveal()} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setCurrentPage(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                ? cat === '2025'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-purple-500/30'
                }`}
            >
              {cat}
              {cat === '2026' && <Flame className="inline ml-1" size={14} />}
              {cat === '2025' && <Sparkles className="inline ml-1" size={14} />}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${currentPage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  {...reveal(index * 0.08)}
                  whileHover={{ y: -8 }}
                  className="group"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div
                    className={`bg-white/5 rounded-2xl overflow-hidden border transition-colors h-full ${project.featured
                      ? project.date === '2026'
                        ? 'border-purple-500/50 hover:border-purple-500 shadow-lg shadow-purple-500/20'
                        : project.date === '2025'
                          ? 'border-blue-500/50 hover:border-blue-500 shadow-lg shadow-blue-500/20'
                          : 'border-yellow-500/50 hover:border-yellow-500 shadow-lg shadow-yellow-500/20'
                      : 'border-gray-500/30 hover:border-gray-500'
                      }`}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = FALLBACK_IMAGE;
                        }}
                      />
                      {project.featured && (
                        <div
                          className={`absolute top-4 right-4 ${getYearBadgeColor(project.date)} text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg`}
                        >
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
                      <div
                        className={`absolute bottom-4 left-4 ${getYearBadgeColor(project.date)} text-white px-2 py-1 rounded-full text-xs flex items-center gap-1`}
                      >
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
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
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
                          className="flex flex-1 items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors"
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous page"
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
                aria-label="Next page"
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