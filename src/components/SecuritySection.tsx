import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Database, ArrowRight } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'SOC 2 Type II Certified',
    description: 'Independently verified security controls and processes'
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: 'Enterprise-grade encryption for all your financial data'
  },
  {
    icon: Database,
    title: 'Data Protection',
    description: 'GDPR and POPIA compliant data handling'
  }
];

const SecuritySection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-green-100 rounded-full -left-48 top-0 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-600">
            Your financial data is protected by industry-leading security measures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/resources/security"
            className="inline-flex items-center px-8 py-4 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-colors group"
          >
            Learn More About Our Security
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SecuritySection;