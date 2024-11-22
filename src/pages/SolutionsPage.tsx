import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Rocket, Store, ArrowRight, Users2, LineChart, Shield, Brain } from 'lucide-react';

const solutions = {
  'accountants': {
    title: 'For Accountants',
    description: 'Empower your accounting practice with AI-driven automation and client management tools.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Automated bookkeeping workflows',
      'Multi-client management dashboard',
      'Real-time collaboration tools',
      'Automated client reporting'
    ],
    features: [
      {
        icon: Brain,
        title: 'AI-Powered Automation',
        description: 'Automate routine tasks with intelligent processing'
      },
      {
        icon: Users2,
        title: 'Client Management',
        description: 'Centralized platform for managing all your clients'
      },
      {
        icon: LineChart,
        title: 'Advanced Reporting',
        description: 'Generate comprehensive reports automatically'
      },
      {
        icon: Shield,
        title: 'Compliance Tools',
        description: 'Stay compliant with automated checks'
      }
    ],
    icon: Building2
  },
  'startups': {
    title: 'For Startups',
    description: 'Scale your startup with intelligent financial management and investor-ready reporting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Automated expense tracking',
      'Investment readiness metrics',
      'Cash flow forecasting',
      'Growth analytics'
    ],
    features: [
      {
        icon: Brain,
        title: 'Smart Forecasting',
        description: 'AI-powered financial projections'
      },
      {
        icon: LineChart,
        title: 'Growth Metrics',
        description: 'Track key startup metrics automatically'
      },
      {
        icon: Shield,
        title: 'Investor Reports',
        description: 'Generate investor-ready reports instantly'
      },
      {
        icon: Users2,
        title: 'Team Management',
        description: 'Manage permissions and access controls'
      }
    ],
    icon: Rocket
  },
  'smes': {
    title: 'For SMEs',
    description: 'Streamline your business operations with comprehensive financial management tools.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800',
    benefits: [
      'Automated invoice processing',
      'Expense management',
      'Financial planning tools',
      'Business intelligence'
    ],
    features: [
      {
        icon: Brain,
        title: 'Smart Automation',
        description: 'Automate routine financial tasks'
      },
      {
        icon: LineChart,
        title: 'Business Analytics',
        description: 'Get insights into your business performance'
      },
      {
        icon: Shield,
        title: 'Risk Management',
        description: 'Identify and manage financial risks'
      },
      {
        icon: Users2,
        title: 'Vendor Management',
        description: 'Streamline vendor relationships'
      }
    ],
    icon: Store
  }
};

const SolutionSection = ({ solution }: { solution: keyof typeof solutions }) => {
  const { title, description, image, benefits, features, icon: Icon } = solutions[solution];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
              Get Started
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

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <feature.icon className="w-8 h-8 text-green-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SolutionsOverview = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
  >
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Solutions for Every Business
      </h1>
      <p className="text-xl text-gray-600">
        Choose the perfect solution tailored to your specific needs
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Object.entries(solutions).map(([key, solution], index) => (
        <motion.div
          key={key}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Link
            to={`/solutions/${key}`}
            className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-700 transition-colors">
                  {React.createElement(solution.icon, {
                    className: "w-6 h-6 text-green-700 group-hover:text-white transition-colors"
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SolutionsPage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || '';
  
  return (
    <div className="pt-20">
      <div className="bg-green-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {Object.keys(solutions).map((key) => (
              <Link
                key={key}
                to={`/solutions/${key}`}
                className={`hover:text-green-200 transition-colors ${
                  currentPath === key ? 'text-green-200' : ''
                }`}
              >
                {solutions[key as keyof typeof solutions].title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<SolutionsOverview />} />
        {Object.keys(solutions).map((key) => (
          <Route
            key={key}
            path={`/${key}`}
            element={<SolutionSection solution={key as keyof typeof solutions} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default SolutionsPage;