import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FormData } from '../../types/demo';
import {
  companyRoles,
  businessStages,
  fundingRanges,
  employeeRanges,
  revenueRanges,
  banks,
  bookkeepingSystems,
  paymentGateways
} from '../../data/demoFormOptions';

const DemoForm = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    role: '',
    customRole: '',
    email: '',
    companyName: '',
    website: '',
    businessStage: '',
    fundingRange: '',
    employeeCount: '',
    revenue: '',
    industry: '',
    banks: [],
    bookkeepingSystems: [],
    customBookkeepingSystem: '',
    paymentGateways: [],
    customPaymentGateway: '',
    demoDate: '',
    demoTime: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Hello, what's your name?*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            What is your company role?*
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a role</option>
            {companyRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>

        {formData.role === 'other' && (
          <div>
            <label htmlFor="customRole" className="block text-sm font-medium text-gray-700 mb-1">
              Please specify your role:
            </label>
            <input
              type="text"
              id="customRole"
              name="customRole"
              value={formData.customRole}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            What's your email address?*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company name?*
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
            Company website?
          </label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="https://"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Business Information */}
      <div className="space-y-6">
        <div>
          <label htmlFor="businessStage" className="block text-sm font-medium text-gray-700 mb-1">
            What stage is your business at?*
          </label>
          <select
            id="businessStage"
            name="businessStage"
            required
            value={formData.businessStage}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a stage</option>
            {businessStages.map(stage => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="fundingRange" className="block text-sm font-medium text-gray-700 mb-1">
            What amount of funding have you raised?*
          </label>
          <select
            id="fundingRange"
            name="fundingRange"
            required
            value={formData.fundingRange}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a range</option>
            {fundingRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
            How many employees do you have?*
          </label>
          <select
            id="employeeCount"
            name="employeeCount"
            required
            value={formData.employeeCount}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a range</option>
            {employeeRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-1">
            What is your annual recurring revenue?*
          </label>
          <select
            id="revenue"
            name="revenue"
            required
            value={formData.revenue}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a range</option>
            {revenueRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
            What industry are you in?*
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            required
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Integration Information */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Which banks and credit cards do you use?*
          </label>
          <div className="grid grid-cols-2 gap-4">
            {banks.map(bank => (
              <label key={bank} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.banks.includes(bank)}
                  onChange={() => handleMultiSelect('banks', bank)}
                  className="rounded text-green-700 focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">{bank}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Which bookkeeping systems do you use?*
          </label>
          <div className="grid grid-cols-2 gap-4">
            {bookkeepingSystems.map(system => (
              <label key={system} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.bookkeepingSystems.includes(system)}
                  onChange={() => handleMultiSelect('bookkeepingSystems', system)}
                  className="rounded text-green-700 focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">{system}</span>
              </label>
            ))}
          </div>
          {formData.bookkeepingSystems.includes('Other') && (
            <input
              type="text"
              placeholder="Please specify"
              value={formData.customBookkeepingSystem}
              onChange={(e) => setFormData(prev => ({ ...prev, customBookkeepingSystem: e.target.value }))}
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Which payment gateways or POS do you use?*
          </label>
          <div className="grid grid-cols-2 gap-4">
            {paymentGateways.map(gateway => (
              <label key={gateway} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.paymentGateways.includes(gateway)}
                  onChange={() => handleMultiSelect('paymentGateways', gateway)}
                  className="rounded text-green-700 focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">{gateway}</span>
              </label>
            ))}
          </div>
          {formData.paymentGateways.includes('Other') && (
            <input
              type="text"
              placeholder="Please specify"
              value={formData.customPaymentGateway}
              onChange={(e) => setFormData(prev => ({ ...prev, customPaymentGateway: e.target.value }))}
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          )}
        </div>
      </div>

      {/* Demo Scheduling */}
      <div className="space-y-6">
        <div>
          <label htmlFor="demoDate" className="block text-sm font-medium text-gray-700 mb-1">
            What day do you want to book the demo call?*
          </label>
          <input
            type="date"
            id="demoDate"
            name="demoDate"
            required
            value={formData.demoDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="demoTime" className="block text-sm font-medium text-gray-700 mb-1">
            What time do you want to book the demo call?*
          </label>
          <input
            type="time"
            id="demoTime"
            name="demoTime"
            required
            value={formData.demoTime}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 text-white py-4 rounded-xl hover:bg-green-800 transition-colors font-medium"
      >
        Book Demo
      </button>
    </form>
  );
};

export default DemoForm;