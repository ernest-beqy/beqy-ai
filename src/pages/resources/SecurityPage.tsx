import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Key, Server, FileCheck, Users, Globe } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'SOC 2 Certified',
    description: 'Independently verified security controls and processes ensuring the highest standards of data protection.'
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and security measures protecting your sensitive financial data.'
  },
  {
    icon: Database,
    title: 'Data Privacy',
    description: 'Strict data privacy controls and compliance with international privacy regulations.'
  },
  {
    icon: Key,
    title: 'Advanced Authentication',
    description: 'Multi-factor authentication and role-based access control for enhanced security.'
  }
];

const securityLayers = [
  {
    title: 'Application Security',
    features: [
      'End-to-end encryption',
      'Regular security audits',
      'Vulnerability scanning',
      'Penetration testing'
    ]
  },
  {
    title: 'Infrastructure Security',
    features: [
      'DDoS protection',
      'Network monitoring',
      'Firewall protection',
      'Intrusion detection'
    ]
  },
  {
    title: 'Data Protection',
    features: [
      'Data encryption at rest',
      'Secure backup systems',
      'Data access logging',
      'Regular backups'
    ]
  },
  {
    title: 'Compliance',
    features: [
      'GDPR compliance',
      'POPIA compliance',
      'Regular compliance audits',
      'Privacy impact assessments'
    ]
  }
];

const SecurityPage = () => {
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
              Enterprise-Grade Security
            </h1>
            <p className="text-xl text-gray-600">
              Your data security and privacy are our top priorities. We implement the
              highest standards of security measures to protect your information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Security Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Architecture */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multi-Layer Security Approach
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive security architecture ensures protection at every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {layer.title}
                </h3>
                <ul className="space-y-3">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Shield className="w-4 h-4 text-green-700 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance & Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl text-white p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Compliance & Certifications
              </h2>
              <p className="text-green-100 mb-8">
                We maintain strict compliance with international security standards
                and regularly undergo independent audits to ensure the highest level
                of security for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <FileCheck className="w-8 h-8 mr-3" />
                  <div>
                    <div className="font-semibold">SOC 2</div>
                    <div className="text-sm text-green-100">Type II Certified</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-8 h-8 mr-3" />
                  <div>
                    <div className="font-semibold">GDPR</div>
                    <div className="text-sm text-green-100">Compliant</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="w-8 h-8 mr-3" />
                  <div>
                    <div className="font-semibold">POPIA</div>
                    <div className="text-sm text-green-100">Compliant</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Server className="w-8 h-8 mr-3" />
                  <div>
                    <div className="font-semibold">ISO 27001</div>
                    <div className="text-sm text-green-100">Aligned</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Our Security Commitment
              </h3>
              <div className="space-y-4">
                <p className="text-green-100">
                  We are committed to protecting your data with the highest security
                  standards in the industry. Our security measures include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    <span>Regular third-party security audits</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    <span>24/7 security monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    <span>Encrypted data transmission</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    <span>Secure data centers</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;