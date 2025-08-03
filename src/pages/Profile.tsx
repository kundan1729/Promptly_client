import React, { useState } from 'react';
import {  Trophy,  Target,  Award,  Code, BookOpen, Users,  Activity, BarChart3,  Flame } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = {
    name: 'Alex Rodriguez',
    username: 'PromptMaster_99',
    title: 'Senior Prompt Engineer',
    level: 'Expert',
    xp: 15420,
    nextLevelXp: 18000,
    joinDate: 'January 2024',
    streak: 47,
    totalPrompts: 1247,
    successRate: 94.2,
    rank: 156,
    globalRank: 2847
  };

  const achievements = [
    { id: 1, name: 'First Prompt', description: 'Created your first prompt', icon: '🎯', unlocked: true, date: 'Jan 15, 2024' },
    { id: 2, name: 'Streak Master', description: '30-day prompt streak', icon: '🔥', unlocked: true, date: 'Feb 20, 2024' },
    { id: 3, name: 'Contest Winner', description: 'Won a monthly contest', icon: '🏆', unlocked: true, date: 'Mar 5, 2024' },
    { id: 4, name: 'Collaboration King', description: 'Shared 50+ prompts', icon: '👥', unlocked: true, date: 'Mar 15, 2024' },
    { id: 5, name: 'Pattern Expert', description: 'Mastered all prompt types', icon: '🧠', unlocked: true, date: 'Apr 2, 2024' },
    { id: 6, name: 'Speed Demon', description: 'Created 10 prompts in one day', icon: '⚡', unlocked: false, date: null },
    { id: 7, name: 'Perfectionist', description: '100% success rate for 20 prompts', icon: '💎', unlocked: false, date: null },
    { id: 8, name: 'Mentor', description: 'Help 100 community members', icon: '🎓', unlocked: false, date: null }
  ];

  const recentActivity = [
    { type: 'prompt', title: 'Marketing Email Generator', points: 25, time: '2 hours ago', difficulty: 'Medium' },
    { type: 'contest', title: 'Won Creative Writing Contest', points: 100, time: '1 day ago', difficulty: 'Hard' },
    { type: 'achievement', title: 'Unlocked "Pattern Expert"', points: 50, time: '2 days ago', difficulty: 'Expert' },
    { type: 'prompt', title: 'Code Review Assistant', points: 30, time: '3 days ago', difficulty: 'Hard' },
    { type: 'share', title: 'Shared "Story Plot Generator"', points: 15, time: '4 days ago', difficulty: 'Easy' },
    { type: 'course', title: 'Completed Advanced Chain-of-Thought', points: 75, time: '5 days ago', difficulty: 'Expert' }
  ];

  const skillsData = [
    { name: 'Instruction Prompts', level: 95, total: 324, success: 96.8 },
    { name: 'Role-Play Prompts', level: 88, total: 267, success: 92.1 },
    { name: 'Chain-of-Thought', level: 92, total: 189, success: 94.7 },
    { name: 'Few-Shot Learning', level: 85, total: 156, success: 89.4 },
    { name: 'Zero-Shot Prompts', level: 90, total: 311, success: 93.5 }
  ];

  const contestHistory = [
    { name: 'Creative Writing Challenge', rank: 1, participants: 1247, prize: '₹349', date: 'Mar 2024' },
    { name: 'Business Automation', rank: 3, participants: 892, prize: '₹349', date: 'Feb 2024' },
    { name: 'Code Generation', rank: 7, participants: 1156, prize: '₹349', date: 'Jan 2024' },
    { name: 'Educational Content', rank: 2, participants: 743, prize: '₹349', date: 'Dec 2023' }
  ];

  const monthlyStats = [
    { month: 'Jan', prompts: 89, success: 91.2 },
    { month: 'Feb', prompts: 124, success: 93.5 },
    { month: 'Mar', prompts: 156, success: 95.1 },
    { month: 'Apr', prompts: 143, success: 94.8 },
    { month: 'May', prompts: 167, success: 96.2 },
    { month: 'Jun', prompts: 189, success: 94.7 }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'prompt': return <Code className="w-4 h-4" />;
      case 'contest': return <Trophy className="w-4 h-4" />;
      case 'achievement': return <Award className="w-4 h-4" />;
      case 'share': return <Users className="w-4 h-4" />;
      case 'course': return <BookOpen className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'prompt': return 'text-blue-500 bg-blue-50';
      case 'contest': return 'text-yellow-500 bg-yellow-50';
      case 'achievement': return 'text-purple-500 bg-purple-50';
      case 'share': return 'text-green-500 bg-green-50';
      case 'course': return 'text-indigo-500 bg-indigo-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      case 'Expert': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                AR
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {userStats.level}
              </div>
            </div>

            {/* User Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold mb-2">{userStats.name}</h1>
              <p className="text-blue-100 text-lg mb-2">@{userStats.username}</p>
              <p className="text-blue-200 mb-4">{userStats.title}</p>
              
              {/* Level Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Level Progress</span>
                  <span>{userStats.xp} / {userStats.nextLevelXp} XP</span>
                </div>
                <div className="w-full bg-blue-800 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(userStats.xp / userStats.nextLevelXp) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">{userStats.totalPrompts}</div>
                  <div className="text-blue-200 text-sm">Total Prompts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{userStats.successRate}%</div>
                  <div className="text-blue-200 text-sm">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">#{userStats.rank}</div>
                  <div className="text-blue-200 text-sm">Community Rank</div>
                </div>
                <div>
                  <div className="text-2xl font-bold flex items-center justify-center">
                    <Flame className="w-6 h-6 mr-1 text-orange-400" />
                    {userStats.streak}
                  </div>
                  <div className="text-blue-200 text-sm">Day Streak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'activity', label: 'Activity', icon: Activity },
              { id: 'contests', label: 'Contests', icon: Trophy },
              { id: 'skills', label: 'Skills', icon: Target }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Stats */}
            <div className="lg:col-span-2 space-y-6">
              {/* Performance Chart */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Performance</h3>
                <div className="space-y-4">
                  {monthlyStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-700 w-12">{stat.month}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>{stat.prompts} prompts</span>
                            <span>{stat.success}% success</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                              style={{ width: `${stat.success}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.slice(0, 6).map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-lg ${getActivityColor(activity.type)}`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">+{activity.points} XP</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(activity.difficulty)}`}>
                          {activity.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Summary */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Member since</span>
                    <span className="font-medium">{userStats.joinDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Global Rank</span>
                    <span className="font-medium">#{userStats.globalRank}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total XP</span>
                    <span className="font-medium">{userStats.xp.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Achievements</span>
                    <span className="font-medium">{achievements.filter(a => a.unlocked).length}/{achievements.length}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                    Create New Prompt
                  </button>
                  <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-teal-700 transition-all">
                    Join Contest
                  </button>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                    View Leaderboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`bg-white rounded-xl shadow-lg border-2 p-6 transition-all ${
                achievement.unlocked 
                  ? 'border-green-200 hover:shadow-xl' 
                  : 'border-gray-200 opacity-60'
              }`}>
                <div className="text-center">
                  <div className={`text-6xl mb-4 ${achievement.unlocked ? '' : 'grayscale'}`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
                  {achievement.unlocked ? (
                    <div className="text-green-600 font-medium text-sm">
                      Unlocked on {achievement.date}
                    </div>
                  ) : (
                    <div className="text-gray-500 font-medium text-sm">
                      Not unlocked yet
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Activity History</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`p-3 rounded-lg ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{activity.title}</h4>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600 text-lg">+{activity.points} XP</div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(activity.difficulty)}`}>
                      {activity.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contests' && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contest History</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Contest</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Rank</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Participants</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Prize</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contestHistory.map((contest, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">{contest.name}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          contest.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                          contest.rank <= 3 ? 'bg-orange-100 text-orange-800' :
                          contest.rank <= 10 ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          #{contest.rank}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{contest.participants}</td>
                      <td className="py-4 px-4 font-semibold text-green-600">{contest.prize}</td>
                      <td className="py-4 px-4 text-gray-600">{contest.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Skill Levels</h3>
              <div className="space-y-6">
                {skillsData.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{skill.total} prompts</span>
                      <span>{skill.success}% success rate</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Skill Recommendations</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Improve Few-Shot Learning</h4>
                  <p className="text-blue-700 text-sm mb-3">Your few-shot prompting could use some work. Try the advanced course!</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Take Course
                  </button>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Master Role-Play Prompts</h4>
                  <p className="text-green-700 text-sm mb-3">You're close to mastering role-play prompts. Keep practicing!</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                    Practice Now
                  </button>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Join Advanced Workshop</h4>
                  <p className="text-purple-700 text-sm mb-3">Ready for expert-level techniques? Join our advanced workshop.</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    Join Workshop
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Profile;