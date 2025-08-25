import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'entrepreneur' | 'investor') => Promise<boolean>;
  logout: () => void;
  signup: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: (User & { password: string })[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@techwave.io',
    password: 'demo123',
    role: 'entrepreneur',
    location: 'San Francisco, CA',
    bio: 'Serial entrepreneur with 10+ years of experience in SaaS and fintech.',
    company: 'TechWave AI',
    title: 'Founder & CEO',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    email: 'michael@investor.com',
    password: 'demo123',
    role: 'investor',
    location: 'San Francisco, CA',
    bio: 'Early-stage investor with focus on B2B SaaS and fintech. Previously founded and exited two startups.',
    title: 'Investor • 12 investments',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string, role: 'entrepreneur' | 'investor'): Promise<boolean> => {
    const foundUser = mockUsers.find(u => u.email === email && u.password === password && u.role === role);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const signup = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name || '',
      email: userData.email || '',
      role: userData.role || 'entrepreneur',
      location: userData.location,
      bio: userData.bio,
      company: userData.company,
      title: userData.title
    };

    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};