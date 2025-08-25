import React, { useState } from 'react';
import { Bell, Check, MessageSquare, Users, Heart, Calendar } from 'lucide-react';

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'message',
      title: 'Sarah Johnson',
      content: 'sent you a message about your startup',
      timestamp: '5 minutes ago',
      read: false,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '2',
      type: 'connection',
      title: 'Michael Rodriguez',
      content: 'accepted your connection request',
      timestamp: '2 hours ago',
      read: false,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '3',
      type: 'interest',
      title: 'Jennifer Lee',
      content: 'showed interest in investing in your startup',
      timestamp: '1 day ago',
      read: true,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '4',
      type: 'meeting',
      title: 'Robert Torres',
      content: 'scheduled a meeting with you for tomorrow at 2 PM',
      timestamp: '2 days ago',
      read: true,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageSquare className="h-5 w-5 text-blue-600" />;
      case 'connection':
        return <Users className="h-5 w-5 text-green-600" />;
      case 'interest':
        return <Heart className="h-5 w-5 text-red-600" />;
      case 'meeting':
        return <Calendar className="h-5 w-5 text-purple-600" />;
      default:
        return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notifications</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Stay updated with your network activity</p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
          >
            <Check className="h-4 w-4" />
            <span>Mark all as read</span>
          </button>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer ${
                !notification.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={notification.avatar}
                    alt={notification.title}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                        {!notification.read && (
                          <span className="text-xs text-blue-600 font-medium">New</span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {notification.content}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {notification.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {notifications.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No notifications</h3>
            <p className="text-gray-500 dark:text-gray-400">You're all caught up! Check back later for updates.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;