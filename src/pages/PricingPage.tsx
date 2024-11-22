import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import CurrencySelector, { Currency } from '../components/CurrencySelector';
import { formatPrice } from '../utils/currency';

const plans = [
  {
    name: 'Freemium',
    description: 'Perfect for startups and SMEs with revenue under $60K',
    price: 0,
    color: 'border-gray-200',
    features: [
      'Excel file upload',
      'Financial reports & dashboards',
      'Monthly manual uploads'
    ],
    limitations: [
      'Limited to 100 transactions/month',
      'Basic support only',
      'Single user access'
    ],
    cta: 'Start Free',
    icon: ArrowRight
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses with revenue over $60K',
    price: 35,
    color: 'border-green-700',
    popular: true,
    features: [
      'All Freemium features',
      'Automated monthly reporting',
      'POS & accounting integrations',
      'Credit scoring',
      'Financial forecasting'
    ],
    limitations: [],
    cta: 'Start Free Trial',
    icon: Check
  },
  {
    name: 'Accountant Pro',
    description: 'Advanced features for accounting professionals',
    price: 135,
    color: 'border-gray-200',
    features: [
      'All Growth features',
      'Multi-company management',
      'Priority support',
      'API access',
      'Custom integrations',
      'Dedicated account manager'
    ],
    limitations: [],
    cta: 'Contact Sales',
    icon: ArrowRight
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses with revenue over $60K',
    price: 35,
    color: 'border-green-700',
    popular: true,
    features: [
      'All Freemium features',
      'Automated monthly reporting',
      'POS & accounting integrations',
      'Credit scoring',
      'Financial forecasting'
    ],
    limitations: [],
    cta: 'Start Free Trial',
    icon: Check
  }
];

const allFeatures = [
  'Excel file upload',
  'Financial reports & dashboards',
  'Monthly manual uploads',
  'Automated monthly reporting',
  'POS & accounting integrations',
  'Credit scoring',
  'Financial forecasting',
  'Multi-company management',
  'Priority support',
  'API access',
  'Custom integrations',
  'Dedicated account manager'
];

const featureAvailability = {
  'Freemium': [
    'Excel file upload',
    'Financial reports & dashboards',
    'Monthly manual uploads'
  ],
  'Growth': [
    'Excel file upload',
    'Financial reports & dashboards',
    'Monthly manual uploads',
    'Automated monthly reporting',
    'POS & accounting integrations',
    'Credit scoring',
    'Financial forecasting'
  ],
  'Accountant Pro': allFeatures
};

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>({ code: 'USD', symbol: '$', rate: 1 });

  return (
    <div className="pt-20 bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Choose the perfect plan for your business needs
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-8"
            >
              <div className="flex items-center gap-4">
                <span className={!isAnnual ? 'text-green-700 font-semibold' : 'text-gray-500'}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                    isAnnual ? 'bg-green-700' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300 ${
                      isAnnual ? 'translate-x-9' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={isAnnual ? 'text-green-700 font-semibold' : 'text-gray-500'}>
                  Annually <span className="text-green-700 font-semibold">(-20%)</span>
                </span>
              </div>
              <CurrencySelector
                selectedCurrency={selectedCurrency}
                onCurrencyChange={setSelectedCurrency}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 ${plan.color} overflow-hidden ${
                plan.popular ? 'transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-700 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <plan.icon className="w-8 h-8 text-green-700" />
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(
                      isAnnual ? plan.price * 0.8 * 12 : plan.price,
                      selectedCurrency
                    )}
                  </span>
                  {plan.price !== 0 && (
                    <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
                  )}
                </div>
                
                <Link
                  to="/book-demo"
                  className="w-full bg-green-700 text-white rounded-xl py-3 font-medium hover:bg-green-800 transition-colors flex items-center justify-center group"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Included features:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-green-700 mr-2" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.limitations.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-4">Limitations:</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation) => (
                          <li key={limitation} className="flex items-start">
                            <X className="w-5 h-5 text-red-500 mr-2" />
                            <span className="text-gray-600 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-24 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-4 px-4">Feature</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="text-center py-4 px-4">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, index) => (
                    <tr key={feature} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-4 px-4 text-gray-900">{feature}</td>
                      {plans.map((plan) => (
                        <td key={`${plan.name}-${feature}`} className="text-center py-4 px-4">
                          {featureAvailability[plan.name as keyof typeof featureAvailability].includes(feature) ? (
                            <Check className="w-5 h-5 text-green-700 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;