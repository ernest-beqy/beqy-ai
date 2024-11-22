import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const positions = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead the development of our AI-powered financial automation systems.'
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'Cape Town, SA',
    type: 'Full-time',
    description: 'Drive the product vision and roadmap for our core financial platform.'
  },
  {
    id: 3,
    title: 'Financial Solutions Architect',
    department: 'Solutions',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design and implement financial solutions for enterprise clients.'
  }
];

const benefits = [
  {
    title: 'Flexible Work',
    description: 'Work from anywhere, anytime'
  },
  {
    title: 'Health Benefits',
    description: 'Comprehensive health coverage'
  },
  {
    title: 'Learning Budget',
    description: 'Annual budget for courses and conferences'
  },
  {
    title: 'Stock Options',
    description: 'Be a part of our growth'
  }
];

const CareersPage = () => {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-600">
              Help us revolutionize financial management with cutting-edge AI technology
            </p>
          </motion.div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Open Positions
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {position.department}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.type}
                    </div>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                </div>
                <button className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-colors group">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Beqy.ai?
            </h2>
            <p className="text-xl text-gray-600">
              We offer competitive benefits and a great work environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;