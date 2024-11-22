import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Building2, Mail } from 'lucide-react';
import DemoForm from '../components/demo/DemoForm';
import { FormData } from '../types/demo';

const BookDemoPage = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Demo
            </h1>
            <p className="text-xl text-gray-600">
              See how Beqy.ai can transform your financial operations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start">
              <Calendar className="w-6 h-6 text-green-700 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">30-Minute Demo</h3>
                <p className="text-gray-600">See our platform in action</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-green-700 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Flexible Scheduling</h3>
                <p className="text-gray-600">Pick a time that works for you</p>
              </div>
            </div>
            <div className="flex items-start">
              <Building2 className="w-6 h-6 text-green-700 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Tailored Demo</h3>
                <p className="text-gray-600">Customized to your business needs</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-green-700 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-gray-900">Instant Confirmation</h3>
                <p className="text-gray-600">Get immediate email confirmation</p>
              </div>
            </div>
          </div>

          <DemoForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default BookDemoPage;