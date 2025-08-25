export interface User {
  id: string;
  name: string;
  email: string;
  role: 'entrepreneur' | 'investor';
  avatar?: string;
  location?: string;
  bio?: string;
  company?: string;
  title?: string;
}

export interface Startup {
  id: string;
  name: string;
  founder: string;
  industry: string;
  location: string;
  founded: number;
  teamSize: number;
  pitchSummary: string;
  fundingNeed: string;
  valuation?: string;
  previousFunding?: string;
  stage: string;
  avatar?: string;
}

export interface Investor {
  id: string;
  name: string;
  investments: number;
  stages: string[];
  interests: string[];
  bio: string;
  investmentRange: string;
  location: string;
  avatar?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'message' | 'connection' | 'interest' | 'meeting';
  title: string;
  content: string;
  timestamp: Date;
  read: boolean;
  avatar?: string;
}

export interface Deal {
  id: string;
  startup: string;
  amount: string;
  equity: string;
  status: 'Due Diligence' | 'Term Sheet' | 'Negotiation' | 'Closed' | 'Passed';
  stage: string;
  lastActivity: string;
  industry: string;
}

export interface CollaborationRequest {
  id: string;
  from: User;
  to: User;
  message: string;
  status: 'pending' | 'accepted' | 'declined';
  timestamp: Date;
}