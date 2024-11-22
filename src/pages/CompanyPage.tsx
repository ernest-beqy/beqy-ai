import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users2, Briefcase, Phone } from 'lucide-react';
import AboutPage from './company/AboutPage';
import CareersPage from './company/CareersPage';
import ContactPage from './company/ContactPage';

const companyPages = {
  'about': {
    title: 'About Us',
    description: 'Learn about our mission, values, and the team behind Beqy.ai',
    icon: Users2
  },
  'careers': {
    title: 'Careers',
    description: 'Join our team and help revolutionize financial management',
    icon: Briefcase
  },
  'contact': {
    title: 'Contact',
    description: 'Get in touch with our team for support or inquiries',
    icon: Phone
  }
};

const CompanyOverview = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
  >
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        About Beqy.ai
      </h1>
      <p className="text-xl text-gray-600">
        Transforming financial management with AI technology
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Object.entries(companyPages).map(([key, page], index) => (
        <motion.div
          key={key}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Link
            to={`/company/${key}`}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {page.title}
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

const CompanyPage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || '';
  
  return (
    <div className="pt-20">
      <div className="bg-green-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {Object.entries(companyPages).map(([key, page]) => (
              <Link
                key={key}
                to={`/company/${key}`}
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
        <Route path="/" element={<CompanyOverview />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default CompanyPage;