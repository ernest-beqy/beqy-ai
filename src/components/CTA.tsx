import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="bg-gradient-to-br from-green-700 to-green-800 py-24 relative overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff1c_1px,transparent_1px)] bg-[length:24px_24px]" />
      </motion.div>

      {/* Decorative blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-green-600/30 rounded-full -left-48 -top-48 blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-green-100 mb-12">
              Join thousands of businesses using Beqy AI to streamline their accounting processes and make better financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-demo">
                <motion.button
                  className="bg-white text-green-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Demo Now
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/features">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
            <motion.div
              className="mt-12 flex items-center justify-center gap-8 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div>Time Saved</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div>AI Support</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">5K+</div>
                <div>Users</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CTA;