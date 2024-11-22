import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-lg">
              At Beqy AI (Pty) Ltd ("Beqy"), we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data. By using or accessing our website, products, services, and applications (the "Services") in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use, and share your information as described in this Privacy Policy.
            </p>

            <h2>What this Privacy Policy Covers</h2>
            <p>
              This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. "Personal Data" means any information that identifies or relates to a particular individual and also includes information referred to as "personally identifiable information" or "personal information" under applicable data privacy laws, rules, or regulations. This Privacy Policy does not cover the practices of companies we don't own or control or people we don't manage.
            </p>

            <h2>Categories of Personal Data We Collect</h2>
            <p>
              The following list details the categories of Personal Data that we collect and have collected over the past 12 months:
            </p>
            <ul>
              <li>Profile or contact data (first and last name, email, phone number)</li>
              <li>Payment data (payment card type, last 4 digits of payment card, billing address)</li>
              <li>Purchase history</li>
              <li>Consumer profile</li>
              <li>Device data (IP address, device IDs, domain server)</li>
              <li>Web analytics and interactions</li>
              <li>Social network data</li>
              <li>Consumer demographic data</li>
              <li>Professional employment data</li>
            </ul>

            <h2>Categories of Sources of Personal Data</h2>
            <h3>You</h3>
            <ul>
              <li>When you provide information directly to us</li>
              <li>When you use our interactive tools and Services</li>
              <li>When you voluntarily provide information in forms or surveys</li>
              <li>When you contact us</li>
              <li>When you use the Services (automatic collection)</li>
            </ul>

            <h3>Third Parties and Vendors</h3>
            <ul>
              <li>Analytics providers</li>
              <li>Customer support services</li>
              <li>Lead generation vendors</li>
              <li>Advertising partners</li>
            </ul>

            <h2>Our Commercial or Business Purposes</h2>
            <ul>
              <li>Providing and improving our services</li>
              <li>Processing orders and transactions</li>
              <li>Customer support</li>
              <li>Research and development</li>
              <li>Personalization of services</li>
              <li>Security and fraud prevention</li>
              <li>Marketing and advertising</li>
              <li>Legal compliance</li>
            </ul>

            <h2>How We Share Your Personal Data</h2>
            <h3>Service Providers</h3>
            <ul>
              <li>Hosting and technology providers</li>
              <li>Security consultants</li>
              <li>Analytics providers</li>
              <li>Payment processors</li>
            </ul>

            <h2>Tracking Tools and Opt-Out</h2>
            <p>We use the following types of Cookies:</p>
            <ul>
              <li>Essential Cookies</li>
              <li>Functional Cookies</li>
              <li>Performance/Analytical Cookies</li>
              <li>Retargeting/Advertising Cookies</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
              <h3 className="font-semibold mb-4">Cookie Management</h3>
              <p>
                You can manage your cookie preferences through your browser settings. Most browsers allow you to:
              </p>
              <ul className="mt-2">
                <li>Block new cookies</li>
                <li>Delete existing cookies</li>
                <li>Control whether or not to accept cookies</li>
              </ul>
              <p className="mt-4 text-sm">
                Visit <a href="http://www.allaboutcookies.org/" className="text-green-700 hover:text-green-800">allaboutcookies.org</a> to learn more about managing cookies.
              </p>
            </div>

            <h2>Data Security and Retention</h2>
            <p>
              We implement appropriate security measures to protect your Personal Data. We retain data for as long as necessary to provide our Services or as required by law.
            </p>

            <h2>Personal Data of Children</h2>
            <p>
              We do not knowingly collect Personal Data from children under 16 years of age. If you believe we have collected such information, please contact us at support@beqy.ai.
            </p>

            <h2>Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and/or sending you an email.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about this Privacy Policy or our privacy practices, please contact us at:
              <br />
              <a href="mailto:support@beqy.ai" className="text-green-700 hover:text-green-800">
                support@beqy.ai
              </a>
            </p>

            <div className="mt-8 text-sm text-gray-600">
              Last updated: July 3, 2024
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;