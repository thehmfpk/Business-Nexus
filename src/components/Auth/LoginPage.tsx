import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import SignupForm from './SignupForm';
import TwoFactorAuth from './TwoFactorAuth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'entrepreneur' | 'investor'>('entrepreneur');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showTwoFA, setShowTwoFA] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleDemoLogin = (role: 'entrepreneur' | 'investor') => {
    if (role === 'entrepreneur') {
      setEmail('sarah@techwave.io');
      setPassword('demo123');
    } else {
      setEmail('michael@investor.com');
      setPassword('demo123');
    }
    setSelectedRole(role);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = await login(email, password, selectedRole);
    if (success) {
      setShowTwoFA(true);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  if (showTwoFA) {
    return <TwoFactorAuth onSuccess={() => window.location.reload()} />;
  }

  if (showSignup) {
    return <SignupForm onBack={() => setShowSignup(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <img 
            src="/logo.png" 
            alt="Business Nexus" 
            className="h-16 w-16 mx-auto mb-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64';
            }}
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Business Nexus</h1>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Sign in to Business Nexus</h2>
          <p className="text-gray-600 dark:text-gray-400">Connect with investors and entrepreneurs</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              I am a
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole('entrepreneur')}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedRole === 'entrepreneur'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
              >
                <div className="font-medium">Entrepreneur</div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('investor')}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedRole === 'investor'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
              >
                <div className="font-medium">Investor</div>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
            <button type="button" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot your password?
            </button>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">Demo Accounts</div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleDemoLogin('entrepreneur')}
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="font-medium text-sm">Entrepreneur Demo</div>
            </button>
            <button
              onClick={() => handleDemoLogin('investor')}
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="font-medium text-sm">Investor Demo</div>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span className="text-gray-600 dark:text-gray-400">Don't have an account? </span>
          <button
            onClick={() => setShowSignup(true)}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;