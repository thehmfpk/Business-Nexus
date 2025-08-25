import React, { useState } from 'react';
import { Search, MessageSquare, User } from 'lucide-react';

const FindStartups: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedFundingRanges, setSelectedFundingRanges] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const industries = ['FinTech', 'CleanTech', 'HealthTech', 'AgTech'];
  const fundingRanges = ['< $500K', '$500K - $1M', '$1M - $5M', '> $5M'];
  const locations = ['San Francisco, CA', 'New York, NY', 'Boston, MA'];

  const startups = [
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

  const toggleFilter = (value: string, selectedArray: string[], setSelectedArray: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (selectedArray.includes(value)) {
      setSelectedArray(selectedArray.filter(item => item !== value));
    } else {
      setSelectedArray([...selectedArray, value]);
    }
  };

  const getIndustryColor = (industry: string) => {
    const colors = {
      'FinTech': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'CleanTech': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      'HealthTech': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      'AgTech': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
    };
    return colors[industry as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = startup.founder.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = selectedIndustries.length === 0 || 
                           selectedIndustries.includes(startup.industry);
    
    const matchesLocation = selectedLocations.length === 0 || 
                           selectedLocations.includes(startup.location);

    return matchesSearch && matchesIndustry && matchesLocation;
  });

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Find Startups</h1>
        <p className="text-gray-600 dark:text-gray-400">Discover promising startups looking for investment</p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filters</h2>
        
        <div className="space-y-6">
          {/* Industry */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Industry</h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => toggleFilter(industry, selectedIndustries, setSelectedIndustries)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedIndustries.includes(industry)
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Funding Range */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Funding Range</h3>
            <div className="flex flex-wrap gap-2">
              {fundingRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => toggleFilter(range, selectedFundingRanges, setSelectedFundingRanges)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedFundingRanges.includes(range)
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {range}
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
              placeholder="Search startups by name, industry, or keywords..."
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
            {filteredStartups.length} results
          </h2>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredStartups.map((startup) => (
            <div key={startup.id} className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={startup.avatar}
                  alt={startup.founder}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{startup.founder}</h3>
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

export default FindStartups;