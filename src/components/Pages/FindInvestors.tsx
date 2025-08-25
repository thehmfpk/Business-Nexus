import React, { useState } from 'react';
import { Search, Filter, MessageSquare, User } from 'lucide-react';

const FindInvestors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const investmentStages = ['Seed', 'Series A', 'Series B'];
  const investmentInterests = ['FinTech', 'SaaS', 'AI/ML', 'CleanTech', 'AgTech', 'Sustainability', 'HealthTech', 'BioTech', 'Medical Devices'];
  const locations = ['San Francisco, CA', 'New York, NY', 'Boston, MA'];

  const investors = [
    {
      id: '1',
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Investor • 12 investments',
      stages: ['Seed', 'Series A'],
      interests: ['FinTech', 'SaaS', 'AI/ML'],
      bio: 'Early-stage investor with focus on B2B SaaS and fintech. Previously founded and exited two startups.',
      range: '$250K - $1.5M',
      location: 'San Francisco, CA'
    },
    {
      id: '2',
      name: 'Jennifer Lee',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Investor • 18 investments',
      stages: ['Seed', 'Series A', 'Series B'],
      interests: ['CleanTech', 'AgTech', 'Sustainability'],
      bio: 'Impact investor focused on climate tech, sustainable agriculture, and clean energy.',
      range: '$500K - $3M',
      location: 'San Francisco, CA'
    },
    {
      id: '3',
      name: 'Robert Torres',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Investor • 9 investments',
      stages: ['Series A', 'Series B'],
      interests: ['HealthTech', 'BioTech', 'Medical Devices'],
      bio: 'Healthcare-focused investor with medical background. Looking for innovations in patient care and biotech.',
      range: '$1M - $5M',
      location: 'Boston, MA'
    }
  ];

  const toggleFilter = (value: string, selectedArray: string[], setSelectedArray: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (selectedArray.includes(value)) {
      setSelectedArray(selectedArray.filter(item => item !== value));
    } else {
      setSelectedArray([...selectedArray, value]);
    }
  };

  const filteredInvestors = investors.filter(investor => {
    const matchesSearch = investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investor.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStages = selectedStages.length === 0 || 
                         selectedStages.some(stage => investor.stages.includes(stage));
    
    const matchesInterests = selectedInterests.length === 0 || 
                            selectedInterests.some(interest => investor.interests.includes(interest));
    
    const matchesLocation = selectedLocations.length === 0 || 
                           selectedLocations.includes(investor.location);

    return matchesSearch && matchesStages && matchesInterests && matchesLocation;
  });

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Find Investors</h1>
        <p className="text-gray-600 dark:text-gray-400">Connect with investors who match your startup's needs</p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filters</h2>
        
        <div className="space-y-6">
          {/* Investment Stage */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Investment Stage</h3>
            <div className="flex flex-wrap gap-2">
              {investmentStages.map((stage) => (
                <button
                  key={stage}
                  onClick={() => toggleFilter(stage, selectedStages, setSelectedStages)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedStages.includes(stage)
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>

          {/* Investment Interests */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Investment Interests</h3>
            <div className="flex flex-wrap gap-2">
              {investmentInterests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleFilter(interest, selectedInterests, setSelectedInterests)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedInterests.includes(interest)
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</h3>
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => toggleFilter(location, selectedLocations, setSelectedLocations)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedLocations.includes(location)
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search investors by name, interests, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {filteredInvestors.length} results
          </h2>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredInvestors.map((investor) => (
            <div key={investor.id} className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={investor.avatar}
                  alt={investor.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{investor.name}</h3>
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
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>Message</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <User className="h-4 w-4" />
                      <span>View Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindInvestors;