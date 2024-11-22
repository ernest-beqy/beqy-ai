import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BarChart3, Brain, Shield } from 'lucide-react';

const features = {
  'ai-bookkeeping': {
    title: 'AI Bookkeeping',
    description: 'Automate your bookkeeping processes with advanced AI technology that learns and adapts to your business needs.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Automated transaction categorization',
      'Smart receipt processing',
      'Real-time error detection',
      'Continuous learning system'
    ],
    icon: Brain
  },
  'reporting': {
    title: 'Financial Reporting',
    description: 'Generate comprehensive financial reports with real-time data and actionable insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Custom report builder',
      'Automated scheduling',
      'Multi-currency support',
      'Interactive dashboards'
    ],
    icon: BarChart3
  },
  'cash-flow': {
    title: 'Cash Flow Management',
    description: 'Monitor and optimize your cash flow with predictive analytics and smart forecasting.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Predictive forecasting',
      'Payment tracking',
      'Working capital optimization',
      'Cash flow alerts'
    ],
    icon: BookOpen
  },
  'tax': {
    title: 'Tax Automation',
    description: 'Streamline tax preparation and compliance with automated tools and real-time tracking.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Automated tax calculations',
      'Compliance monitoring',
      'Document organization',
      'Filing reminders'
    ],
    icon: Shield
  }
};

const FeatureSection = ({ feature }: { feature: keyof typeof features }) => {
  const { title, description, image, benefits, icon: Icon } = features[feature];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 mb-4">
              <Icon className="w-8 h-8 text-green-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600">{description}</p>
          </div>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="flex items-center space-x-3"
              >
                <ArrowRight className="w-5 h-5 text-green-700" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/pricing"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Learn More
              <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-700/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeaturesOverview = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
  >
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Powerful Features for Modern Finance
      </h1>
      <p className="text-xl text-gray-600">
        Discover how our AI technology revolutionizes financial management
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(features).map(([key, feature], index) => (
        <motion.div
          key={key}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Link
            to={`/features/${key}`}
            className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-700 transition-colors">
                  {React.createElement(feature.icon, {
                    className: "w-6 h-6 text-green-700 group-hover:text-white transition-colors"
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const FeaturesPage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || '';
  
  return (
    <div className="pt-20">
      <div className="bg-green-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {Object.keys(features).map((key) => (
              <Link
                key={key}
                to={`/features/${key}`}
                className={`hover:text-green-200 transition-colors ${
                  currentPath === key ? 'text-green-200' : ''
                }`}
              >
                {features[key as keyof typeof features].title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<FeaturesOverview />} />
        {Object.keys(features).map((key) => (
          <Route
            key={key}
            path={`/${key}`}
            element={<FeatureSection feature={key as keyof typeof features} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default FeaturesPage;