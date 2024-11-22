import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Book, FileText, Settings, MessageCircle, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Book,
    articles: [
      { id: 1, title: 'Quick Start Guide', views: 1520 },
      { id: 2, title: 'Setting Up Your Account', views: 1230 },
      { id: 3, title: 'Basic Navigation', views: 980 }
    ]
  },
  {
    id: 'features',
    title: 'Features & Functionality',
    icon: FileText,
    articles: [
      { id: 4, title: 'AI-Powered Automation', views: 2150 },
      { id: 5, title: 'Financial Reporting', views: 1840 },
      { id: 6, title: 'Cash Flow Management', views: 1650 }
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: Settings,
    articles: [
      { id: 7, title: 'Connecting Your Bank Account', views: 1320 },
      { id: 8, title: 'POS Integration Guide', views: 1180 },
      { id: 9, title: 'API Documentation', views: 890 }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    icon: MessageCircle,
    articles: [
      { id: 10, title: 'Common Issues', views: 2340 },
      { id: 11, title: 'Troubleshooting Guide', views: 1960 },
      { id: 12, title: 'Contact Support', views: 1540 }
    ]
  }
];

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = categories.filter(category => 
    !selectedCategory || category.id === selectedCategory
  );

  const filteredArticles = filteredCategories.flatMap(category =>
    category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Header with Search */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Search our knowledge base or browse categories below
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(
                selectedCategory === category.id ? null : category.id
              )}
              className={`p-6 rounded-xl text-left transition-all ${
                selectedCategory === category.id
                  ? 'bg-green-700 text-white shadow-lg'
                  : 'bg-white hover:bg-green-50 shadow'
              }`}
            >
              <category.icon className={`w-8 h-8 mb-4 ${
                selectedCategory === category.id ? 'text-white' : 'text-green-700'
              }`} />
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className={selectedCategory === category.id ? 'text-green-100' : 'text-gray-600'}>
                {category.articles.length} articles
              </p>
            </motion.button>
          ))}
        </div>

        {/* Articles */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <category.icon className="w-6 h-6 text-green-700 mr-2" />
                  {category.title}
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {category.articles
                  .filter(article =>
                    article.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((article) => (
                    <motion.div
                      key={article.id}
                      className="p-6 hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg text-gray-900 flex items-center group">
                          {article.title}
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                        </h3>
                        <span className="text-sm text-gray-500">
                          {article.views.toLocaleString()} views
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;