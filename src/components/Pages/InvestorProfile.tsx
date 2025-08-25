import React from 'react';
import { MapPin, Edit, TrendingUp, DollarSign, Clock, Target } from 'lucide-react';

const InvestorProfile: React.FC = () => {
  const portfolioCompanies = [
    { name: 'PayStream', year: '2022' },
    { name: 'DataSense', year: '2022' },
    { name: 'CloudSecure', year: '2022' }
  ];

  const investmentInterests = ['FinTech', 'SaaS', 'AI/ML'];
  const investmentStages = ['Seed', 'Series A'];

  const investmentCriteria = [
    'Strong founding team with domain expertise',
    'Clear market opportunity and product-market fit',
    'Scalable business model with strong unit economics',
    'Potential for significant growth and market impact'
  ];

  const investmentFocus = ['SaaS & B2B', 'FinTech', 'HealthTech'];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Michael Rodriguez"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Michael Rodriguez</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">Investor • 12 investments</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  {investmentStages.map((stage) => (
                    <span key={stage} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs">
                      {stage}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Edit className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* About */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Early-stage investor with focus on B2B SaaS and fintech. Previously founded and exited two startups.
        </p>
      </div>

      {/* Investment Interests */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Investment Interests</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Industries</h3>
            <div className="flex flex-wrap gap-2">
              {investmentInterests.map((interest) => (
                <span key={interest} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Investment Stages</h3>
            <div className="flex flex-wrap gap-2">
              {investmentStages.map((stage) => (
                <span key={stage} className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-full text-sm">
                  {stage}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Investment Criteria */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Investment Criteria</h2>
        <ul className="space-y-3">
          {investmentCriteria.map((criteria, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-400">{criteria}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Portfolio Companies */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Portfolio Companies</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">3 companies</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioCompanies.map((company, index) => (
            <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white">{company.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Invested in {company.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Details */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Investment Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Investment Range</h3>
            <p className="text-lg font-bold text-gray-900 dark:text-white">$250K - $1.5M</p>
          </div>
          <div className="text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Investments</h3>
            <p className="text-lg font-bold text-gray-900 dark:text-white">12 companies</p>
          </div>
          <div className="text-center">
            <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Typical Timeline</h3>
            <p className="text-lg font-bold text-gray-900 dark:text-white">3-5 years</p>
          </div>
          <div className="text-center">
            <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Investment Focus</h3>
            <p className="text-lg font-bold text-gray-900 dark:text-white">Early Stage</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Investment Focus</h3>
          <div className="flex flex-wrap gap-2">
            {investmentFocus.map((focus) => (
              <span key={focus} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Stats */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Investment Stats</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Successful Exits</h3>
            <p className="text-3xl font-bold text-green-600">4</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Avg. ROI</h3>
            <p className="text-3xl font-bold text-blue-600">3.2x</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Active Investments</h3>
            <p className="text-3xl font-bold text-purple-600">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;