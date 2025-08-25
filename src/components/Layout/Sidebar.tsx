import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  MessageSquare, 
  Calendar, 
  Video, 
  FileText, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight,
  Search,
  Briefcase,
  TrendingUp,
  Mail
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuth();

  const entrepreneurMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'startup', label: 'My Startup', icon: Building2 },
    { id: 'find-investors', label: 'Find Investors', icon: Search },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', icon: Mail },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'video-call', label: 'Video Call', icon: Video },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  const investorMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'portfolio', label: 'My Portfolio', icon: Briefcase },
    { id: 'find-startups', label: 'Find Startups', icon: Search },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', icon: Mail },
    { id: 'deals', label: 'Deals', icon: TrendingUp },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'video-call', label: 'Video Call', icon: Video },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  const menuItems = user?.role === 'entrepreneur' ? entrepreneurMenuItems : investorMenuItems;

  return (
    <div className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } flex flex-col h-full`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ml-auto block"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Need assistance?</div>
          <div className="text-xs text-gray-600 dark:text-gray-300 mb-1">Contact Support</div>
          <div className="text-xs text-blue-600 dark:text-blue-400">support@businessnexus.com</div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;