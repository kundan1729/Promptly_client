import React, { useState } from 'react';
import { Trophy, Medal, Crown, TrendingUp, Users, Calendar, Target, Star, Zap, Award } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('overall');
  const [timeFrame, setTimeFrame] = useState('monthly');

  const leaderboardData = {
    overall: [
      { rank: 1, name: 'Sarah Chen', username: 'PromptQueen_2024', points: 28450, prompts: 1847, successRate: 97.2, streak: 89, avatar: 'SC', level: 'Grandmaster', change: 0 },
      { rank: 2, name: 'Marcus Rodriguez', username: 'CodePromptMaster', points: 26890, prompts: 1623, successRate: 96.8, streak: 67, avatar: 'MR', level: 'Expert', change: 1 },
      { rank: 3, name: 'Emily Watson', username: 'CreativePrompts', points: 25340, prompts: 1456, successRate: 95.9, streak: 45, avatar: 'EW', level: 'Expert', change: -1 },
      { rank: 4, name: 'David Kim', username: 'AIWhisperer', points: 23780, prompts: 1389, successRate: 94.7, streak: 78, avatar: 'DK', level: 'Expert', change: 2 },
      { rank: 5, name: 'Lisa Park', username: 'PromptNinja', points: 22150, prompts: 1267, successRate: 96.1, streak: 34, avatar: 'LP', level: 'Advanced', change: 0 },
      { rank: 6, name: 'Alex Rodriguez', username: 'PromptMaster_99', points: 21890, prompts: 1247, successRate: 94.2, streak: 47, avatar: 'AR', level: 'Advanced', change: 3 },
      { rank: 7, name: 'Jennifer Walsh', username: 'BusinessPrompts', points: 20560, prompts: 1198, successRate: 93.8, streak: 23, avatar: 'JW', level: 'Advanced', change: -2 },
      { rank: 8, name: 'Michael Brown', username: 'TechPromptGuru', points: 19780, prompts: 1156, successRate: 92.4, streak: 56, avatar: 'MB', level: 'Advanced', change: 1 },
      { rank: 9, name: 'Anna Thompson', username: 'StoryPrompts', points: 18920, prompts: 1089, successRate: 95.3, streak: 29, avatar: 'AT', level: 'Intermediate', change: -1 },
      { rank: 10, name: 'Robert Johnson', username: 'PromptEngineer', points: 18340, prompts: 1034, successRate: 91.7, streak: 41, avatar: 'RJ', level: 'Intermediate', change: 0 }
    ],
    contests: [
      { rank: 1, name: 'Sarah Chen', username: 'PromptQueen_2024', contests: 12, wins: 8, points: 4200, avatar: 'SC', level: 'Grandmaster' },
      { rank: 2, name: 'Emily Watson', username: 'CreativePrompts', contests: 15, wins: 6, points: 3800, avatar: 'EW', level: 'Expert' },
      { rank: 3, name: 'David Kim', username: 'AIWhisperer', contests: 10, wins: 5, points: 3200, avatar: 'DK', level: 'Expert' },
      { rank: 4, name: 'Alex Rodriguez', username: 'PromptMaster_99', contests: 8, wins: 3, points: 2400, avatar: 'AR', level: 'Advanced' },
      { rank: 5, name: 'Marcus Rodriguez', username: 'CodePromptMaster', contests: 9, wins: 2, points: 1800, avatar: 'MR', level: 'Expert' }
    ],
    streaks: [
      { rank: 1, name: 'Sarah Chen', username: 'PromptQueen_2024', streak: 89, maxStreak: 127, points: 8900, avatar: 'SC', level: 'Grandmaster' },
      { rank: 2, name: 'David Kim', username: 'AIWhisperer', streak: 78, maxStreak: 95, points: 7800, avatar: 'DK', level: 'Expert' },
      { rank: 3, name: 'Marcus Rodriguez', username: 'CodePromptMaster', streak: 67, maxStreak: 89, points: 6700, avatar: 'MR', level: 'Expert' },
      { rank: 4, name: 'Michael Brown', username: 'TechPromptGuru', streak: 56, maxStreak: 72, points: 5600, avatar: 'MB', level: 'Advanced' },
      { rank: 5, name: 'Alex Rodriguez', username: 'PromptMaster_99', streak: 47, maxStreak: 63, points: 4700, avatar: 'AR', level: 'Advanced' }
    ]
  };

  const categories = [
    { id: 'overall', name: 'Overall', icon: Trophy },
    { id: 'contests', name: 'Contests', icon: Medal },
    { id: 'streaks', name: 'Streaks', icon: Zap }
  ];

  const timeFrames = [
    { id: 'weekly', name: 'This Week' },
    { id: 'monthly', name: 'This Month' },
    { id: 'yearly', name: 'This Year' },
    { id: 'alltime', name: 'All Time' }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-orange-500" />;
    return <span className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold">#{rank}</span>;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Grandmaster': return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      case 'Expert': return 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white';
      case 'Advanced': return 'bg-gradient-to-r from-green-500 to-teal-500 text-white';
      case 'Intermediate': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (change < 0) return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
    return <span className="w-4 h-4 text-gray-400">-</span>;
  };

  const currentData = leaderboardData[activeCategory as keyof typeof leaderboardData];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Global Leaderboard
            </h1>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              See how you stack up against the world's best prompt engineers. 
              Compete, climb the ranks, and earn your place among the elite!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                View My Rank
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Join Competition
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Time Frame Selector */}
            <div className="flex flex-wrap gap-2">
              {timeFrames.map((frame) => (
                <button
                  key={frame.id}
                  onClick={() => setTimeFrame(frame.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    timeFrame === frame.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {frame.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* 2nd Place */}
            <div className="md:order-1 bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center transform md:translate-y-8">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                  {currentData[1]?.avatar}
                </div>
                <div className="absolute -top-2 -right-2 bg-gray-400 text-white rounded-full p-2">
                  <Medal className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-900">{currentData[1]?.name}</h3>
              <p className="text-gray-600 text-sm mb-2">@{currentData[1]?.username}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getLevelColor(currentData[1]?.level || '')}`}>
                {currentData[1]?.level}
              </span>
              <div className="text-2xl font-bold text-gray-900">{currentData[1]?.points?.toLocaleString()}</div>
              <div className="text-gray-600 text-sm">points</div>
            </div>

            {/* 1st Place */}
            <div className="md:order-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-xl border-4 border-yellow-300 p-6 text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-gray-900">
                  {currentData[0]?.avatar}
                </div>
                <div className="absolute -top-3 -right-3 bg-yellow-500 text-white rounded-full p-3">
                  <Crown className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-bold text-xl text-white">{currentData[0]?.name}</h3>
              <p className="text-yellow-100 text-sm mb-2">@{currentData[0]?.username}</p>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-white text-orange-600">
                👑 {currentData[0]?.level}
              </span>
              <div className="text-3xl font-bold text-white">{currentData[0]?.points?.toLocaleString()}</div>
              <div className="text-yellow-100 text-sm">points</div>
            </div>

            {/* 3rd Place */}
            <div className="md:order-3 bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center transform md:translate-y-12">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                  {currentData[2]?.avatar}
                </div>
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full p-2">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-900">{currentData[2]?.name}</h3>
              <p className="text-gray-600 text-sm mb-2">@{currentData[2]?.username}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getLevelColor(currentData[2]?.level || '')}`}>
                {currentData[2]?.level}
              </span>
              <div className="text-2xl font-bold text-gray-900">{currentData[2]?.points?.toLocaleString()}</div>
              <div className="text-gray-600 text-sm">points</div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Full Rankings</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Rank</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">User</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Level</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Points</th>
                  {activeCategory === 'overall' && (
                    <>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Prompts</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Success Rate</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Streak</th>
                    </>
                  )}
                  {activeCategory === 'contests' && (
                    <>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Contests</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Wins</th>
                    </>
                  )}
                  {activeCategory === 'streaks' && (
                    <>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Current</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Max Streak</th>
                    </>
                  )}
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Change</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((user, index) => (
                  <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 ${
                    user.username === 'PromptMaster_99' ? 'bg-blue-50 border-blue-200' : ''
                  }`}>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        {getRankIcon(user.rank)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-600">@{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(user.level)}`}>
                        {user.level}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-gray-900">{user.points.toLocaleString()}</td>
                    {activeCategory === 'overall' && (
                      <>
                        <td className="py-4 px-6 text-gray-600">{user.prompts}</td>
                        <td className="py-4 px-6 text-gray-600">{user.successRate}%</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-1">
                            <Zap className="w-4 h-4 text-orange-500" />
                            <span className="font-medium">{user.streak}</span>
                          </div>
                        </td>
                      </>
                    )}
                    {activeCategory === 'contests' && (
                      <>
                        <td className="py-4 px-6 text-gray-600">{(user as any).contests}</td>
                        <td className="py-4 px-6 font-semibold text-green-600">{(user as any).wins}</td>
                      </>
                    )}
                    {activeCategory === 'streaks' && (
                      <>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-1">
                            <Zap className="w-4 h-4 text-orange-500" />
                            <span className="font-bold text-orange-600">{(user as any).streak}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-600">{(user as any).maxStreak}</td>
                      </>
                    )}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1">
                        {getChangeIcon((user as any).change || 0)}
                        <span className="text-sm text-gray-600">
                          {(user as any).change > 0 ? `+${(user as any).change}` : (user as any).change || '-'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">15,247</div>
            <div className="text-gray-600">Total Users</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
            <Target className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">2.4M</div>
            <div className="text-gray-600">Prompts Created</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">156</div>
            <div className="text-gray-600">Contests Held</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
            <Star className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">94.7%</div>
            <div className="text-gray-600">Avg Success Rate</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;