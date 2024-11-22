import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'How TechStart Automated Their Entire Bookkeeping Process',
    company: 'TechStart Solutions',
    industry: 'Technology',
    results: {
      timeReduction: '85%',
      costSavings: '$50,000',
      accuracy: '99.9%'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Learn how TechStart Solutions transformed their financial operations using Beqy.ai\'s automation tools.',
    metrics: [
      { label: 'Time Saved', value: '85%' },
      { label: 'Cost Reduction', value: '60%' },
      { label: 'Accuracy', value: '99.9%' }
    ]
  },
  {
    id: 2,
    title: 'GrowthCo\'s Journey to Financial Excellence',
    company: 'GrowthCo',
    industry: 'E-commerce',
    results: {
      timeReduction: '75%',
      costSavings: '$35,000',
      accuracy: '99.5%'
    },
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Discover how GrowthCo streamlined their accounting processes and achieved remarkable growth.',
    metrics: [
      { label: 'Growth Rate', value: '200%' },
      { label: 'Time Saved', value: '75%' },
      { label: 'ROI', value: '350%' }
    ]
  }
];

const CaseStudiesPage = () => {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600">
              Real results from businesses using Beqy.ai
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700/20 to-transparent" />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <Building2 className="w-5 h-5 text-green-700 mr-2" />
                    <span className="text-green-700 font-medium">{study.industry}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-8">{study.excerpt}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-green-700">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-colors group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div>Satisfied Clients</div>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">85%</div>
              <div>Average Time Saved</div>
            </div>
            <div>
              <Building2 className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">$2.5M</div>
              <div>Client Cost Savings</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;