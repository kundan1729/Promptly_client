import React, { useState } from 'react';

import UsageGuide from '../components/UsageGuide';

const About: React.FC = () => {
  const [selectedPromptType, setSelectedPromptType] = useState<string | null>(null);

  const handleTypeSelect = (type: string) => {
    setSelectedPromptType(type || null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-cyan-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              PromptCraft Studio
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
              The ultimate playground for crafting, testing, and perfecting your AI prompts. 
              From beginner-friendly templates to advanced prompt engineering techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Creating
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
       
          
        {/* Usage Guide */}
        <div className="mb-12">
          <UsageGuide selectedType={selectedPromptType} />
        </div>
        
        {/* Statistics and Features Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Thousands of Prompt Engineers
            </h2>
            <p className="text-lg text-gray-600">
              Discover why PromptCraft is the go-to platform for AI prompt optimization
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">25K+</div>
              <div className="text-gray-600">Prompts Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Feedback</div>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Smart Auto-Detection',
              description: 'Our AI automatically identifies prompt patterns and suggests improvements',
              icon: '🧠',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Real-time Collaboration',
              description: 'Work together with your team to craft the perfect prompts',
              icon: '👥',
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Version History',
              description: 'Track changes and revert to previous versions of your prompts',
              icon: '📝',
              color: 'from-green-500 to-teal-500'
            },
            {
              title: 'Performance Analytics',
              description: 'Measure prompt effectiveness with detailed analytics',
              icon: '📊',
              color: 'from-orange-500 to-red-500'
            },
            {
              title: 'Template Library',
              description: 'Access hundreds of proven prompt templates',
              icon: '📚',
              color: 'from-indigo-500 to-purple-500'
            },
            {
              title: 'API Integration',
              description: 'Connect with your favorite AI platforms seamlessly',
              icon: '🔌',
              color: 'from-cyan-500 to-blue-500'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;