import React from 'react';
import Footer from '../components/Footer';
import { Trophy, Calendar, Users, Gift, Clock, Star, Award, Target } from 'lucide-react';

const Contest: React.FC = () => {
  const currentContest = {
    title: 'Creative Writing Prompts Challenge',
    description: 'Create the most innovative prompts for creative writing and storytelling',
        prize: '₹5000 + 1 Year Premium',
    deadline: '2025-02-15',
    participants: 1247,
    timeLeft: '12 days',
    rules: [
      'Submit up to 3 original prompts',
      'Focus on creative writing applications',
      'Include example outputs',
      'Explain your prompt strategy'
    ]
  };

  const pastWinners = [
  {
    name: 'Shashwat Singh',
    prompt: 'Character-driven narrative prompts',
    prize: '₹1000',
    month: 'August 2025'
  },
  {
    name: 'Gaurav Kumar',
    prompt: 'Historical fiction generators',
    prize: '₹500',
    month: 'March 2025'
  },
  {
    name: 'Rishi Raj',
    prompt: 'Sci-fi world building prompts',
    prize: '₹750',
    month: 'November 2024'
  }
];


  const upcomingContests = [
    {
      title: 'Business Automation Prompts',
      date: '2025-09-01',
        prize: 'Zomato Coupon',
      category: 'Business',
      description: 'Create prompts that automate business workflows'
    },
    {
      title: 'Educational Content Creation',
      date: '2025-10-15',
        prize: 'Any 3 Course Free',
      category: 'Education',
      description: 'Design prompts for creating educational materials'
    },
    {
      title: 'Code Generation Challenge',
      date: '2025-11-01',
        prize: 'Amazon Gift Card',
      category: 'Technical',
      description: 'Build prompts for efficient code generation'
    }
  ];

 const leaderboard = [
  { rank: 1, name: 'Rishabh Praksah', points: 2850, badge: '🥇' },
  { rank: 2, name: 'Prashant Prabhakar', points: 2720, badge: '🥈' },
  { rank: 3, name: 'Shreya Singh', points: 2650, badge: '🥉' },
  { rank: 4, name: 'Prabhat Singh', points: 2480, badge: '⭐' },
  { rank: 5, name: 'Supriya Roy', points: 2350, badge: '⭐' }
];


  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prompt Engineering Contests
            </h1>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Compete with the best prompt engineers worldwide. Showcase your skills, 
              win amazing prizes, and join our hall of fame!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Join Current Contest
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                View Rules
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Current Contest */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">🔥 Current Contest</h2>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{currentContest.timeLeft} left</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-b-xl shadow-lg border border-gray-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentContest.title}</h3>
                <p className="text-gray-600 mb-6">{currentContest.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Gift className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{currentContest.prize}</div>
                    <div className="text-sm text-gray-600">Prize Pool</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{currentContest.participants}</div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Calendar className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Oct 15</div>
                    <div className="text-sm text-gray-600">Deadline</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Max Entries</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                  Submit Your Entry
                </button>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Contest Rules</h4>
                <ul className="space-y-3">
                  {currentContest.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800 mb-2">💡 Pro Tip</h5>
                  <p className="text-sm text-yellow-700">
                    Focus on creativity and practical application. Judges love prompts that solve real problems!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-yellow-500" />
              Monthly Leaderboard
            </h3>
            <div className="space-y-4">
              {leaderboard.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{user.badge}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-600">Rank #{user.rank}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{user.points}</div>
                    <div className="text-sm text-gray-600">points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Star className="w-6 h-6 mr-2 text-purple-500" />
              Recent Winners
            </h3>
            <div className="space-y-4">
              {pastWinners.map((winner, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{winner.name}</h4>
                    <span className="text-sm text-gray-500">{winner.month}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{winner.prompt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">{winner.prize}</span>
                    <Trophy className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Contests */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Contests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingContests.map((contest, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    contest.category === 'Business' ? 'bg-blue-100 text-blue-800' :
                    contest.category === 'Education' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {contest.category}
                  </span>
                  <span className="text-sm text-gray-500">{contest.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{contest.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{contest.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">{contest.prize}</span>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contest Stats */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contest Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-gray-600">Total Contests</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹10000+</div>
              <div className="text-gray-600">Prizes Awarded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5K+</div>
              <div className="text-gray-600">Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contest;