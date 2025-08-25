import React, { useState } from 'react';
import { Search, Send, Paperclip, Smile } from 'lucide-react';

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: '1',
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      lastMessage: "Thursday works great. I'll send a calendar invite. Looking forward to it!",
      time: 'about 2 years',
      unread: true
    },
    {
      id: '2',
      name: 'Jennifer Lee',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      lastMessage: 'Thanks for sharing the pitch deck. Very impressive!',
      time: '1 day ago',
      unread: false
    },
    {
      id: '3',
      name: 'Robert Torres',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      lastMessage: 'Would love to schedule a call to discuss further.',
      time: '3 days ago',
      unread: false
    }
  ];

  const messages = [
    {
      id: '1',
      senderId: '2',
      content: "Hi Sarah! I've reviewed your pitch deck and I'm really impressed with TechWave AI's approach to financial analytics.",
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: '2',
      senderId: '1',
      content: "Thank you so much for taking the time to review it! I'd love to discuss how we can work together.",
      timestamp: '10:35 AM',
      isOwn: true
    },
    {
      id: '3',
      senderId: '2',
      content: "I'd like to schedule a call for this Thursday at 2 PM PST. Would that work for you?",
      timestamp: '10:40 AM',
      isOwn: false
    },
    {
      id: '4',
      senderId: '1',
      content: "Thursday works great. I'll send a calendar invite. Looking forward to it!",
      timestamp: '10:45 AM',
      isOwn: true
    }
  ];

  const selectedConv = conversations.find(conv => conv.id === selectedConversation);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-[calc(100vh-8rem)]">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Messages</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 ${
                    selectedConversation === conversation.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <img
                      src={conversation.avatar}
                      alt={conversation.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-900 dark:text-white truncate">
                          {conversation.name}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {conversation.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread && (
                        <div className="mt-1">
                          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                          <span className="ml-1 text-xs text-blue-600 font-medium">New</span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedConv ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedConv.avatar}
                      alt={selectedConv.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="font-semibold text-gray-900 dark:text-white">{selectedConv.name}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isOwn
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.isOwn ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                    <button
                      type="button"
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <Paperclip className="h-5 w-5" />
                    </button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        <Smile className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={!newMessage.trim()}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No conversation selected</h3>
                  <p className="text-gray-500 dark:text-gray-400">Choose a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;