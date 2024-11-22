import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, HelpCircle, Shield, ArrowRight } from 'lucide-react';
import BlogPage from './resources/BlogPage';
import CaseStudiesPage from './resources/CaseStudiesPage';
import HelpCenterPage from './resources/HelpCenterPage';
import SecurityPage from './resources/SecurityPage';

const resourcePages = {
  'blog': {
    title: 'Blog',
    description: 'Latest insights on financial management and technology',
    icon: BookOpen,
    path: '/resources/blog'
  },
  'case-studies': {
    title: 'Case Studies',
    description: 'Success stories from our clients',
    icon: FileText,
    path: '/resources/case-studies'
  },
  'help': {
    title: 'Help Center',
    description: 'Guides, tutorials, and support resources',
    icon: HelpCircle,
    path: '/resources/help'
  },
  'security': {
    title: 'Security',
    description: 'Learn about our enterprise-grade security measures',
    icon: Shield,
    path: '/resources/security'
  }
};

const ResourcesOverview = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
  >
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Resources & Learning
      </h1>
      <p className="text-xl text-gray-600">
        Explore our knowledge base and learn how to make the most of Beqy.ai
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Object.entries(resourcePages).map(([key, page], index) => (
        <motion.div
          key={key}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Link
            to={page.path}
            className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-700 transition-colors">
                  {React.createElement(page.icon, {
                    className: "w-6 h-6 text-green-700 group-hover:text-white transition-colors"
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  {page.title}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-600">{page.description}</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ResourcesPage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || '';
  
  return (
    <div className="pt-20">
      <div className="bg-green-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {Object.entries(resourcePages).map(([key, page]) => (
              <Link
                key={key}
                to={page.path}
                className={`hover:text-green-200 transition-colors ${
                  currentPath === key ? 'text-green-200' : ''
                }`}
              >
                {page.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<ResourcesOverview />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
    </div>
  );
};

export default ResourcesPage;