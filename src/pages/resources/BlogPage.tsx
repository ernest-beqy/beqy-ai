import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const featuredPosts = [
  {
    id: 1,
    title: 'AI-Powered Financial Management: The Future is Here',
    excerpt: 'Discover how artificial intelligence is revolutionizing financial operations and why early adoption is crucial for business success.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
    category: 'AI & Technology',
    date: '2024-03-15',
    readTime: '5 min read',
    author: 'Dr. Sarah Chen',
    tags: ['AI', 'Finance', 'Innovation']
  },
  {
    id: 2,
    title: 'The Rise of Automated Bookkeeping in 2024',
    excerpt: 'How modern businesses are leveraging automation to transform their accounting processes and drive efficiency.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    category: 'Automation',
    date: '2024-03-10',
    readTime: '7 min read',
    author: 'Michael Roberts',
    tags: ['Automation', 'Bookkeeping', 'Efficiency']
  }
];

const recentPosts = [
  {
    id: 3,
    title: 'Maximizing ROI with AI-Driven Financial Analysis',
    excerpt: 'Learn how AI-powered financial analysis tools can help identify opportunities and optimize business performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    category: 'Business Growth',
    date: '2024-03-08',
    readTime: '6 min read',
    author: 'Emma Thompson',
    tags: ['ROI', 'Analysis', 'Growth']
  },
  {
    id: 4,
    title: 'The Complete Guide to Financial Compliance in the AI Era',
    excerpt: 'Navigate the evolving landscape of financial compliance with AI-powered tools and automation.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=400',
    category: 'Compliance',
    date: '2024-03-05',
    readTime: '8 min read',
    author: 'David Kumar',
    tags: ['Compliance', 'Regulation', 'AI']
  },
  {
    id: 5,
    title: 'Transforming SME Financial Operations with AI',
    excerpt: 'How small and medium enterprises can leverage AI to compete with larger organizations.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=400',
    category: 'SME Solutions',
    date: '2024-03-01',
    readTime: '5 min read',
    author: 'Lisa Chen',
    tags: ['SME', 'Digital Transformation', 'Growth']
  },
  {
    id: 6,
    title: 'Predictive Analytics in Financial Planning',
    excerpt: 'Harness the power of AI-driven predictive analytics to make better financial decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    category: 'Analytics',
    date: '2024-02-28',
    readTime: '6 min read',
    author: 'James Wilson',
    tags: ['Analytics', 'Planning', 'AI']
  }
];

const BlogPage = () => {
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
              Insights & Updates
            </h1>
            <p className="text-xl text-gray-600">
              Expert insights on AI, finance, and the future of business
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-700 text-white px-4 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {post.readTime}
                  <span className="ml-4">By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center text-sm text-gray-600">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-green-700 font-medium inline-flex items-center group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {post.readTime}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <button className="text-green-700 font-medium inline-flex items-center group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-green-100 mb-8">
              Get the latest insights on AI-powered financial management delivered to your inbox
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-6 py-3 bg-white text-green-700 rounded-xl hover:bg-green-50 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;