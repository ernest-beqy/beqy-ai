import React from 'react';
import { BookOpen, BarChart3, Brain, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-green-700" />,
    title: 'AI-Powered Automation',
    description: 'Leverage cutting-edge AI to automate routine bookkeeping tasks and financial processes.'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-green-700" />,
    title: 'Smart Documentation',
    description: 'Intelligent document processing and management for all your financial records.'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-green-700" />,
    title: 'Real-time Analytics',
    description: 'Get instant insights into your financial performance with advanced analytics.'
  },
  {
    icon: <Shield className="h-8 w-8 text-green-700" />,
    title: 'Secure & Compliant',
    description: 'Bank-grade security and compliance with international accounting standards.'
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-white py-24 relative overflow-hidden">
      <motion.div
        className="absolute w-64 h-64 bg-green-100 rounded-full -left-32 -top-32 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
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
            Transform Your Financial Operations
          </h2>
          <p className="text-xl text-gray-600">
            Streamline your accounting processes with our innovative features
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="mb-4 bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;