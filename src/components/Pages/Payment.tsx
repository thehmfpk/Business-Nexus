import React, { useState } from 'react';
import { CreditCard, DollarSign, TrendingUp, ArrowUpRight, ArrowDownLeft, Plus, Wallet } from 'lucide-react';

const Payment: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showTransferModal, setShowTransferModal] = useState(false);

  const walletBalance = 125000;
  const monthlyIncome = 45000;
  const monthlyExpenses = 12000;

  const transactions = [
    {
      id: '1',
      type: 'deposit',
      amount: 50000,
      description: 'Investment from Michael Rodriguez',
      date: '2024-02-15',
      status: 'completed',
      from: 'Michael Rodriguez',
      to: 'Your Wallet'
    },
    {
      id: '2',
      type: 'withdrawal',
      amount: 15000,
      description: 'Team Salary Payment',
      date: '2024-02-14',
      status: 'completed',
      from: 'Your Wallet',
      to: 'Payroll Account'
    },
    {
      id: '3',
      type: 'transfer',
      amount: 25000,
      description: 'Series A Funding - First Tranche',
      date: '2024-02-12',
      status: 'pending',
      from: 'Jennifer Lee',
      to: 'Your Wallet'
    },
    {
      id: '4',
      type: 'deposit',
      amount: 75000,
      description: 'Seed Round Completion',
      date: '2024-02-10',
      status: 'completed',
      from: 'Investment Pool',
      to: 'Your Wallet'
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <ArrowDownLeft className="h-5 w-5 text-green-600" />;
      case 'withdrawal':
        return <ArrowUpRight className="h-5 w-5 text-red-600" />;
      case 'transfer':
        return <ArrowUpRight className="h-5 w-5 text-blue-600" />;
      default:
        return <DollarSign className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payment Center</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your funding, payments, and transactions</p>
        </div>
        <button
          onClick={() => setShowTransferModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>New Transaction</span>
        </button>
      </div>

      {/* Wallet Balance */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Wallet className="h-8 w-8" />
              <h2 className="text-2xl font-bold">Wallet Balance</h2>
            </div>
            <p className="text-4xl font-bold mb-2">{formatCurrency(walletBalance)}</p>
            <p className="text-blue-100">Available for investment and operations</p>
          </div>
          <div className="text-right">
            <div className="mb-4">
              <p className="text-blue-100 text-sm">This Month</p>
              <p className="text-xl font-semibold text-green-300">+{formatCurrency(monthlyIncome - monthlyExpenses)}</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                Deposit
              </button>
              <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Income</p>
              <p className="text-3xl font-bold text-green-600 mt-2">{formatCurrency(monthlyIncome)}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Expenses</p>
              <p className="text-3xl font-bold text-red-600 mt-2">{formatCurrency(monthlyExpenses)}</p>
            </div>
            <ArrowUpRight className="h-8 w-8 text-red-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Net Flow</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">{formatCurrency(monthlyIncome - monthlyExpenses)}</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Transaction History' },
              { id: 'funding', label: 'Funding Deals' },
              { id: 'settings', label: 'Payment Settings' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
                <button className="text-blue-600 hover:text-blue-500 text-sm">View All</button>
              </div>
              
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      {getTransactionIcon(transaction.type)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{transaction.description}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {transaction.from} → {transaction.to}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${
                      transaction.type === 'deposit' ? 'text-green-600' : 
                      transaction.type === 'withdrawal' ? 'text-red-600' : 'text-blue-600'
                    }`}>
                      {transaction.type === 'withdrawal' ? '-' : '+'}
                      {formatCurrency(transaction.amount)}
                    </p>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'funding' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Funding Deal Flow</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Incoming Investments</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Michael Rodriguez - Series A</span>
                      <span className="font-medium text-green-600">{formatCurrency(150000)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Jennifer Lee - Follow-on</span>
                      <span className="font-medium text-green-600">{formatCurrency(75000)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Pending Transfers</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Legal Fees - Series A</span>
                      <span className="font-medium text-red-600">-{formatCurrency(25000)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Due Diligence Costs</span>
                      <span className="font-medium text-red-600">-{formatCurrency(8000)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Bank Accounts</h4>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-8 w-8 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Business Checking</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">****1234</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs rounded-full">
                        Primary
                      </span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Add Bank Account
                  </button>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Security Settings</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">Two-Factor Authentication</span>
                      <button className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs rounded-full">
                        Enabled
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">Transaction Notifications</span>
                      <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs rounded-full">
                        On
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">Large Transaction Approval</span>
                      <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs rounded-full">
                        Required
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">New Transaction</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Transaction Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                  <option>Deposit</option>
                  <option>Withdrawal</option>
                  <option>Transfer</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="0.00"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter description"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowTransferModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowTransferModal(false)}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Process
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;