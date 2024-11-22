import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Background decorative elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-green-100/50 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-50/30 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Section - Takes 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                Next-Gen Financial Management
              </span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-green-700">AI-powered</span> Bookkeeping for Modern Business
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionize your financial operations with AI-driven automation. Perfect for accountants, startups, and growing SMEs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center px-8 py-4 rounded-2xl bg-green-700 text-white font-semibold text-lg hover:bg-green-800 transition-all shadow-lg hover:shadow-xl group"
              >
                Book A Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <motion.button
                className="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-green-700 text-green-700 font-semibold text-lg hover:bg-green-50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Video
              </motion.button>
            </div>

            <motion.div
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Time Saved</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">AI Support</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900">5K+</div>
                <div className="text-gray-600">Users</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section - Takes 5 columns */}
          <motion.div
            className="lg:col-span-5 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Image */}
              <motion.div
                className="rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                  alt="Financial Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-700/10 to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -right-4 -bottom-4 bg-white p-4 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">AI Processing Active</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 -top-4 bg-white p-4 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">Real-time Updates</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;