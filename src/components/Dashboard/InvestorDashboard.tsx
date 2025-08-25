import React from 'react';
import { Building2, TrendingUp, Users, Search } from 'lucide-react';

const InvestorDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Startups', value: '4', icon: Building2, color: 'text-blue-600' },
    { label: 'Industries', value: '4', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Your Connections', value: '0', icon: Users, color: 'text-purple-600' }
  ];

  const featuredStartups = [
    {
      id: '1',
      founder: 'Sarah Johnson',
      company: 'TechWave AI',
      industry: 'FinTech',
      location: 'San Francisco, CA',
      founded: '2021',
      pitch: 'AI-powered financial analytics platform helping SMBs make data-driven decisions.',
      funding: '$1.5M',
      teamSize: '12 people',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '2',
      founder: 'David Chen',
      company: 'GreenLife Solutions',
      industry: 'CleanTech',
      location: 'Portland, OR',
      founded: '2020',
      pitch: 'Biodegradable packaging alternatives for consumer goods and food industry.',
      funding: '$2M',
      teamSize: '8 people',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '3',
      founder: 'Maya Patel',
      company: 'HealthPulse',
      industry: 'HealthTech',
      location: 'Boston, MA',
      founded: '2022',
      pitch: 'Mobile platform connecting patients with mental health professionals in real-time.',
      funding: '$800K',
      teamSize: '5 people',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '4',
      founder: 'James Wilson',
      company: 'UrbanFarm',
      industry: 'AgTech',
      location: 'Chicago, IL',
      founded: '2019',
      pitch: 'IoT-enabled vertical farming systems for urban environments and food deserts.',
      funding: '$3M',
      teamSize: '14 people',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const getIndustryColor = (industry: string) => {
    const colors = {
      'FinTech': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'CleanTech': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      'HealthTech': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      'AgTech': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
    };
    return colors[industry as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Discover Startups</h1>
        <p className="text-gray-600 dark:text-gray-400">Find and connect with promising entrepreneurs</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View All Startups
          </button>
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search startups, industries, or keywords..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Filter by:</p>
          <div className="flex flex-wrap gap-2">
            {['FinTech', 'CleanTech', 'HealthTech', 'AgTech'].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Startups */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Featured Startups</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {featuredStartups.map((startup) => (
            <div key={startup.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={startup.avatar}
                  alt={startup.founder}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{startup.founder}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{startup.company}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIndustryColor(startup.industry)}`}>
                    {startup.industry}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Founded {startup.founded}</span>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400">{startup.location}</p>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pitch Summary</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{startup.pitch}</p>
                </div>
                
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">Funding Need</p>
                    <p className="text-gray-600 dark:text-gray-400">{startup.funding}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">Team Size</p>
                    <p className="text-gray-600 dark:text-gray-400">{startup.teamSize}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
                  Message
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;