import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

const navigation = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Updates', href: '/blog' }
  ],
  company: [
    { name: 'About', href: '/company/about' },
    { name: 'Careers', href: '/company/careers' },
    { name: 'Contact', href: '/company/contact' },
    { name: 'Blog', href: '/resources/blog' }
  ],
  resources: [
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Help Center', href: '/resources/help' }
  ],
  legal: [
    { name: 'Privacy', href: '/legal/privacy' },
    { name: 'Terms', href: '/legal/terms' },
    { name: 'Security', href: '/legal/security' }
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/beqy',
      icon: Linkedin
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com/beqyai',
      icon: Twitter
    }
  ]
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-3xl font-bold text-white mb-4 block">
              Beqy<span className="text-gray-400">.ai</span>
            </Link>
            <p className="text-gray-400 mb-4">
              AI-powered bookkeeping and accounting solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Beqy.ai. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;