import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const solutionsList = [
  {
    title: 'For Accountants',
    description: 'Streamline your practice with AI-powered tools that automate routine tasks.',
    features: ['Automated bookkeeping', 'Client management', 'Real-time reporting'],
    color: 'from-green-500/20 to-blue-500/20',
    path: '/solutions/accountants'
  },
  {
    title: 'For Startups',
    description: 'Focus on growth while we handle your financial operations with precision.',
    features: ['Expense tracking', 'Cash flow management', 'Investment readiness'],
    color: 'from-purple-500/20 to-pink-500/20',
    path: '/solutions/startups'
  },
  {
    title: 'For SMEs',
    description: 'Simplify your accounting processes and make informed business decisions.',
    features: ['Invoice processing', 'Financial planning', 'Tax compliance'],
    color: 'from-orange-500/20 to-red-500/20',
    path: '/solutions/smes'
  }
];

const Solutions = () => {
  return (
    <div className="bg-gray-50 py-24 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-green-200 rounded-full -right-48 -bottom-48 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tailored Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect solution for your specific needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsList.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className={`bg-gradient-to-br ${solution.color} backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all`}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-700 mb-6">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                    >
                      <ArrowRight className="h-5 w-5 text-green-700 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <Link to="/pricing">
                  <motion.button
                    className="w-full bg-white/80 backdrop-blur text-green-700 px-6 py-3 rounded-2xl hover:bg-white transition-colors shadow-lg flex items-center justify-center group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;