import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, Award } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description: 'We prioritize our customers\' success in everything we do.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Constantly pushing boundaries in AI and automation.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Making financial management accessible worldwide.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality solutions.'
  }
];

const AboutPage = () => {
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
              Revolutionizing Financial Management with AI
            </h1>
            <p className="text-xl text-gray-600">
              We're on a mission to transform how businesses handle their finances,
              making professional-grade tools accessible to everyone.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2023, Beqy.ai emerged from a simple observation: small businesses
                and accountants were spending too much time on routine financial tasks.
              </p>
              <p>
                We set out to create an AI-powered solution that would automate these
                processes, allowing businesses to focus on what truly matters - growth
                and innovation.
              </p>
              <p>
                Today, we serve thousands of businesses worldwide, helping them streamline
                their financial operations and make better decisions with data-driven insights.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 mb-4">
                  <value.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-4xl font-bold mb-2">5K+</div>
              <div className="text-green-100">Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-100">Time Saved</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">AI Support</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Countries</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;