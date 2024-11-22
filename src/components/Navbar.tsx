import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  {
    label: 'Features',
    href: '/features',
    submenu: [
      { label: 'AI Bookkeeping', href: '/features/ai-bookkeeping' },
      { label: 'Financial Reporting', href: '/features/reporting' },
      { label: 'Cash Flow Management', href: '/features/cash-flow' },
      { label: 'Tax Automation', href: '/features/tax' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    submenu: [
      { label: 'For Accountants', href: '/solutions/accountants' },
      { label: 'For Startups', href: '/solutions/startups' },
      { label: 'For SMEs', href: '/solutions/smes' }
    ]
  },
  {
    label: 'Pricing',
    href: '/pricing'
  },
  {
    label: 'Resources',
    href: '/resources',
    submenu: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Help Center', href: '/help' },
      { label: 'API Docs', href: '/api' }
    ]
  },
  {
    label: 'Company',
    href: '/company',
    submenu: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' }
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-3xl font-bold text-green-700">Beqy<span className="text-gray-900">.ai</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-green-700 font-medium text-sm tracking-wide transition-colors ${
                      location.pathname === item.href ? 'text-green-700' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                  
                  {item.submenu && activeMenu === item.label && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg py-3 mt-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 ${
                            location.pathname === subItem.href ? 'bg-green-50 text-green-700' : ''
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-green-700 font-medium text-sm"
            >
              Sign In
            </Link>
            <Link
              to="/pricing"
              className="bg-green-700 text-white px-6 py-2.5 rounded-xl hover:bg-green-800 transition-colors text-sm font-medium shadow-sm hover:shadow-md"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3">
            {menuItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  to={item.href}
                  className={`block text-base font-medium text-gray-700 hover:text-green-700 ${
                    location.pathname === item.href ? 'text-green-700' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className={`block text-sm text-gray-600 hover:text-green-700 ${
                          location.pathname === subItem.href ? 'text-green-700' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 space-y-3">
              <Link
                to="/login"
                className="block w-full text-center py-2 text-gray-700 hover:text-green-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/pricing"
                className="block w-full bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition-colors font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;