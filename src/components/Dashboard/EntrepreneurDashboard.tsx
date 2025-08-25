import React, { useState } from 'react';
import { Users, Calendar, Eye, MessageSquare, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

const EntrepreneurDashboard: React.FC = () => {
  const [requests, setRequests] = useState([
    {
      id: '1',
      investor: {
        name: 'Michael Rodriguez',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        time: 'about 2 years ago'
      },
      message: "I'd like to explore potential investment in TechWave AI. Your AI-driven financial analytics platform aligns well with my investment thesis.",
      status: 'pending'
    },
    {
      id: '2',
      investor: {
        name: 'Jennifer Lee',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        time: 'about 2 years ago'
      },
      message: "Interested in discussing how TechWave AI can incorporate sustainable practices. Let's connect to explore potential collaboration.",
      status: 'accepted'
    }
  ]);

  const handleRequestAction = (id: string, action: 'accept' | 'decline') => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: action === 'accept' ? 'accepted' : 'declined' } : req
    ));
  };

  const stats = [
    { label: 'Pending Requests', value: '1', icon: Users, color: 'text-orange-600' },
    { label: 'Total Connections', value: '1', icon: Users, color: 'text-blue-600' },
    { label: 'Upcoming Meetings', value: '2', icon: Calendar, color: 'text-green-600' },
    { label: 'Profile Views', value: '24', icon: Eye, color: 'text-purple-600' }
  ];

  const recommendedInvestors = [
    {
      id: '1',
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Investor • 12 investments',
      stages: ['Seed', 'Series A'],
      interests: ['FinTech', 'SaaS', 'AI/ML'],
      bio: 'Early-stage investor with focus on B2B SaaS and fintech. Previously founded and exited two startups.',
      range: '$250K - $1.5M'
    },
    {
      id: '2',
      name: 'Jennifer Lee',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Investor • 18 investments',
      stages: ['Seed', 'Series A', 'Series B'],
      interests: ['CleanTech', 'AgTech', 'Sustainability'],
      bio: 'Impact investor focused on climate tech, sustainable agriculture, and clean energy.',
      range: '$500K - $3M'
    },
    {
      id: '3',
      name: 'Robert Torres',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Investor • 9 investments',
      stages: ['Series A', 'Series B'],
      interests: ['HealthTech', 'BioTech', 'Medical Devices'],
      bio: 'Healthcare-focused investor with medical background. Looking for innovations in patient care and biotech.',
      range: '$1M - $5M'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome, Sarah Johnson</h1>
        <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your startup today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Collaboration Requests */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Collaboration Requests</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">1 pending</span>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {requests.map((request) => (
            <div key={request.id} className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={request.investor.avatar}
                  alt={request.investor.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{request.investor.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{request.investor.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      request.status === 'pending' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400' :
                      request.status === 'accepted' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{request.message}</p>
                  <div className="flex space-x-3">
                    {request.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleRequestAction(request.id, 'decline')}
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <XCircle className="h-4 w-4" />
                          <span>Decline</span>
                        </button>
                        <button
                          onClick={() => handleRequestAction(request.id, 'accept')}
                          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <CheckCircle className="h-4 w-4" />
                          <span>Accept</span>
                        </button>
                      </>
                    )}
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Investors */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recommended Investors</h2>
            <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">View all</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
          {recommendedInvestors.map((investor) => (
            <div key={investor.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={investor.avatar}
                  alt={investor.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{investor.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{investor.title}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex flex-wrap gap-2">
                  {investor.stages.map((stage) => (
                    <span key={stage} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs rounded-full">
                      {stage}
                    </span>
                  ))}
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Investment Interests</p>
                  <div className="flex flex-wrap gap-1">
                    {investor.interests.map((interest) => (
                      <span key={interest} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">{investor.bio}</p>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Investment Range</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{investor.range}</p>
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

export default EntrepreneurDashboard;