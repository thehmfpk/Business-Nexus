import React from 'react';
import { MapPin, Calendar, Users, Edit, FileText, DollarSign, TrendingUp } from 'lucide-react';

const StartupProfile: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Alex Johnson',
      role: 'CTO',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Jessica Chen',
      role: 'Head of Product',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const documents = [
    { name: 'Pitch Deck', updated: '2 months ago' },
    { name: 'Business Plan', updated: '1 month ago' },
    { name: 'Financial Projections', updated: '2 weeks ago' }
  ];

  const fundingStages = [
    { stage: 'Pre-seed', status: 'completed' },
    { stage: 'Seed', status: 'completed' },
    { stage: 'Series A', status: 'in-progress' }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Sarah Johnson"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sarah Johnson</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">Founder at TechWave AI</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full">
                  FinTech
                </span>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Founded 2021</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>12 team members</span>
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
          Serial entrepreneur with 10+ years of experience in SaaS and fintech.
        </p>
      </div>

      {/* Startup Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Startup Overview</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Problem Statement</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI-powered financial analytics platform helping SMBs make data-driven decisions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Solution</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI-powered financial analytics platform helping SMBs make data-driven decisions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Market Opportunity</h3>
            <p className="text-gray-600 dark:text-gray-400">
              The FinTech market is experiencing significant growth, with a projected CAGR of 14.5% through 2027. 
              Our solution addresses key pain points in this expanding market.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Competitive Advantage</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Unlike our competitors, we offer a unique approach that combines innovative technology with deep 
              industry expertise, resulting in superior outcomes for our customers.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Team</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">12 members</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <img
                src={member.avatar}
                alt={member.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg border-dashed">
            <span className="text-sm text-gray-500 dark:text-gray-400">9 more team members</span>
          </div>
        </div>
      </div>

      {/* Funding */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Funding</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Current Round</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$1.5M</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Valuation</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$8M - $12M</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Previous Funding</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$750K Seed (2022)</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Funding Timeline</h3>
          <div className="flex items-center space-x-8">
            {fundingStages.map((stage, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded-full ${
                  stage.status === 'completed' ? 'bg-green-500' :
                  stage.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                }`} />
                <span className={`text-sm ${
                  stage.status === 'in-progress' ? 'font-medium text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {stage.stage}
                </span>
                {stage.status === 'completed' && <span className="text-xs text-green-600 dark:text-green-400">Completed</span>}
                {stage.status === 'in-progress' && <span className="text-xs text-blue-600 dark:text-blue-400">In Progress</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Documents</h2>
        
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{doc.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Updated {doc.updated}</p>
                </div>
              </div>
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupProfile;