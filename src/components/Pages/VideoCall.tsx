import React, { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, Phone, PhoneOff, Monitor, Settings, Users } from 'lucide-react';

const VideoCall: React.FC = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  const participants = [
    {
      id: '1',
      name: 'You',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      isHost: true,
      isMuted: !isAudioOn,
      hasVideo: isVideoOn
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      isHost: false,
      isMuted: false,
      hasVideo: true
    }
  ];

  const upcomingMeetings = [
    {
      id: '1',
      title: 'Investment Discussion',
      time: '2:00 PM Today',
      participants: ['Michael Rodriguez'],
      type: 'One-on-one'
    },
    {
      id: '2',
      title: 'Team Standup',
      time: '9:00 AM Tomorrow',
      participants: ['Alex Johnson', 'Jessica Chen', '+2 more'],
      type: 'Team Meeting'
    },
    {
      id: '3',
      title: 'Pitch Review',
      time: '10:00 AM Friday',
      participants: ['Jennifer Lee'],
      type: 'Presentation'
    }
  ];

  const startCall = () => {
    setIsCallActive(true);
  };

  const endCall = () => {
    setIsCallActive(false);
    setIsVideoOn(true);
    setIsAudioOn(true);
    setIsScreenSharing(false);
  };

  if (isCallActive) {
    return (
      <div className="p-6 h-[calc(100vh-8rem)]">
        <div className="bg-gray-900 rounded-xl h-full flex flex-col">
          {/* Video Grid */}
          <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {participants.map((participant) => (
              <div key={participant.id} className="relative bg-gray-800 rounded-lg overflow-hidden">
                {participant.hasVideo ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <img
                      src={participant.avatar}
                      alt={participant.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <VideoOff className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-white font-medium">{participant.name}</p>
                    </div>
                  </div>
                )}
                
                {/* Participant Info */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {participant.name}
                  </span>
                  {participant.isMuted && (
                    <div className="bg-red-500 p-1 rounded">
                      <MicOff className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="p-6 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setIsAudioOn(!isAudioOn)}
                className={`p-3 rounded-full transition-colors ${
                  isAudioOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isAudioOn ? (
                  <Mic className="h-6 w-6 text-white" />
                ) : (
                  <MicOff className="h-6 w-6 text-white" />
                )}
              </button>
              
              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-3 rounded-full transition-colors ${
                  isVideoOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isVideoOn ? (
                  <Video className="h-6 w-6 text-white" />
                ) : (
                  <VideoOff className="h-6 w-6 text-white" />
                )}
              </button>
              
              <button
                onClick={() => setIsScreenSharing(!isScreenSharing)}
                className={`p-3 rounded-full transition-colors ${
                  isScreenSharing ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <Monitor className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={endCall}
                className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
              >
                <PhoneOff className="h-6 w-6 text-white" />
              </button>
              
              <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                <Settings className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Video Calling</h1>
        <p className="text-gray-600 dark:text-gray-400">Connect with investors and team members</p>
      </div>

      {/* Quick Start */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Video className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Start a Video Call</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Connect instantly with investors, team members, or schedule meetings for later
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={startCall}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Video className="h-5 w-5" />
              <span>Start Instant Meeting</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Users className="h-5 w-5" />
              <span>Schedule Meeting</span>
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Meetings</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{meeting.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{meeting.time}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {meeting.type}
                    </span>
                    <span>{meeting.participants.join(', ')}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={startCall}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Video className="h-4 w-4" />
                    <span>Join</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Video className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">HD Video Quality</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Crystal clear video calls with up to 1080p resolution
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Monitor className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Screen Sharing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Share your screen to present pitches and documents
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Group Meetings</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Host meetings with multiple participants
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;