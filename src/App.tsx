import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import LoginPage from './components/Auth/LoginPage';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import EntrepreneurDashboard from './components/Dashboard/EntrepreneurDashboard';
import InvestorDashboard from './components/Dashboard/InvestorDashboard';
import StartupProfile from './components/Pages/StartupProfile';
import InvestorProfile from './components/Pages/InvestorProfile';
import FindInvestors from './components/Pages/FindInvestors';
import FindStartups from './components/Pages/FindStartups';
import Messages from './components/Pages/Messages';
import Notifications from './components/Pages/Notifications';
import Deals from './components/Pages/Deals';
import Calendar from './components/Pages/Calendar';
import VideoCall from './components/Pages/VideoCall';
import Documents from './components/Pages/Documents';
import Payment from './components/Pages/Payment';
import Settings from './components/Pages/Settings';
import Help from './components/Pages/Help';

const AppContent: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return user?.role === 'entrepreneur' ? <EntrepreneurDashboard /> : <InvestorDashboard />;
      case 'startup':
        return <StartupProfile />;
      case 'portfolio':
        return <InvestorProfile />;
      case 'find-investors':
        return <FindInvestors />;
      case 'find-startups':
        return <FindStartups />;
      case 'messages':
        return <Messages />;
      case 'notifications':
        return <Notifications />;
      case 'deals':
        return <Deals />;
      case 'calendar':
        return <Calendar />;
      case 'video-call':
        return <VideoCall />;
      case 'documents':
        return <Documents />;
      case 'payment':
        return <Payment />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      default:
        return user?.role === 'entrepreneur' ? <EntrepreneurDashboard /> : <InvestorDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;