import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400&h=300",
    title: "Cash Flow Forecasting",
    description: "Predict and visualize your future cash position with AI-powered forecasting",
    features: ["Smart balance tracking", "Trend analysis", "Vendor insights"]
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300",
    title: "Financial Dashboard",
    description: "Get a comprehensive view of your financial health in real-time",
    features: ["Income monitoring", "Cash tracking", "Expense analysis"]
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=300",
    title: "Profit & Loss Analysis",
    description: "Track your business performance with detailed P&L insights",
    features: ["Revenue tracking", "Margin analysis", "Payment monitoring"]
  },
  {
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=400&h=300",
    title: "Performance Metrics",
    description: "Monitor key financial indicators and business growth metrics",
    features: ["KPI tracking", "Growth analysis", "Custom reports"]
  }
];

const ProductShowcase = () => {
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
        className="absolute w-64 h-64 bg-green-100 rounded-full -right-32 -top-32 blur-3xl"
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
            Powerful Features for Modern Finance
          </h2>
          <p className="text-xl text-gray-600">
            Experience the future of financial management with our intuitive interface
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-gray-700 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                    >
                      <div className="w-1.5 h-1.5 bg-green-700 rounded-full mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;