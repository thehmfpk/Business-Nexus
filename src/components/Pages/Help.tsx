import React, { useState } from 'react';
import { Search, Book, MessageCircle, Mail, ChevronDown, ChevronRight } from 'lucide-react';

const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const faqs = [
    {
      id: '1',
      question: 'How do I connect with investors?',
      answer: 'You can browse our investor directory and send connection requests. Once an investor accepts, you can start messaging them directly through our platform.'
    },
    {
      id: '2',
      question: 'What should I include in my startup profile?',
      answer: 'Your startup profile should include a compelling pitch, funding needs, team information, market opportunity, and any traction or metrics that demonstrate your progress.'
    },
    {
      id: '3',
      question: 'How do I share documents securely?',
      answer: 'You can upload documents to your secure document vault and selectively share them with connected investors. All documents are encrypted and access-controlled.'
    },
    {
      id: '4',
      question: 'What are collaboration requests?',
      answer: 'Collaboration requests are formal expressions of interest from investors. They indicate that an investor wants to learn more about your startup and potentially discuss investment opportunities.'
    },
    {
      id: '5',
      question: 'How do I schedule meetings with investors?',
      answer: 'You can use our integrated calendar system to schedule meetings. Simply select available time slots and send meeting invitations to your connected investors.'
    },
    {
      id: '6',
      question: 'Is my data secure on the platform?',
      answer: 'Yes, we use enterprise-grade security measures including end-to-end encryption, secure data centers, and regular security audits to protect your information.'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Help & Support</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Find answers to common questions or get in touch with our support team</p>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search help articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Browse our detailed documentation and guides</p>
          <button className="text-blue-600 hover:text-blue-500 font-medium">View Docs</button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Chat with our support team in real-time</p>
          <button className="text-green-600 hover:text-green-500 font-medium">Start Chat</button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Get help via email or phone</p>
          <button className="text-purple-600 hover:text-purple-500 font-medium">Contact Support</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="p-6">
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                {expandedFaq === faq.id ? (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {expandedFaq === faq.id && (
                <div className="mt-4 pr-8">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Still need help?</h2>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleContactSubmit} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                placeholder="How can we help you?"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Need assistance?</h3>
        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <p>Contact Support</p>
          <p className="text-blue-600 dark:text-blue-400 font-medium">support@businessnexus.com</p>
        </div>
      </div>
    </div>
  );
};

export default Help;