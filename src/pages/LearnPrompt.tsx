import React from 'react';
import { BookOpen, Target, Lightbulb, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';

const LearnPrompt: React.FC = () => {
  const lessons = [
    {
      id: 1,
      title: 'Introduction to Prompt Engineering',
      description: 'Learn the fundamentals of crafting effective prompts',
      duration: '15 min',
      difficulty: 'Beginner',
      completed: true,
      topics: ['What is a prompt?', 'Basic structure', 'Common mistakes']
    },
    {
      id: 2,
      title: 'Instruction-Based Prompts',
      description: 'Master the art of clear, direct instructions',
      duration: '20 min',
      difficulty: 'Beginner',
      completed: true,
      topics: ['Action verbs', 'Specificity', 'Context setting']
    },
    {
      id: 3,
      title: 'Role-Playing Techniques',
      description: 'Get AI to adopt specific personas and perspectives',
      duration: '25 min',
      difficulty: 'Intermediate',
      completed: false,
      topics: ['Character definition', 'Context building', 'Consistency']
    },
    {
      id: 4,
      title: 'Chain-of-Thought Reasoning',
      description: 'Guide AI through complex problem-solving steps',
      duration: '30 min',
      difficulty: 'Intermediate',
      completed: false,
      topics: ['Step-by-step thinking', 'Logic chains', 'Problem decomposition']
    },
    {
      id: 5,
      title: 'Few-Shot Learning',
      description: 'Teach AI through examples and patterns',
      duration: '35 min',
      difficulty: 'Advanced',
      completed: false,
      topics: ['Example selection', 'Pattern recognition', 'Consistency training']
    },
    {
      id: 6,
      title: 'Advanced Prompt Optimization',
      description: 'Fine-tune prompts for maximum effectiveness',
      duration: '40 min',
      difficulty: 'Advanced',
      completed: false,
      topics: ['A/B testing', 'Performance metrics', 'Iterative improvement']
    }
  ];

  const tips = [
    {
      icon: Target,
      title: 'Be Specific',
      description: 'The more specific your prompt, the better the AI can understand and respond to your needs.'
    },
    {
      icon: Lightbulb,
      title: 'Provide Context',
      description: 'Give the AI background information to help it generate more relevant and accurate responses.'
    },
    {
      icon: CheckCircle,
      title: 'Iterate and Improve',
      description: 'Don\'t expect perfection on the first try. Refine your prompts based on the results you get.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn Prompt Engineering
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Master the art and science of prompt engineering with our comprehensive learning path. 
              From basics to advanced techniques, become a prompt engineering expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Learning
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Progress
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Learning Path */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson, index) => (
              <div key={lesson.id} className={`bg-white rounded-xl shadow-lg border-2 transition-all hover:shadow-xl ${
                lesson.completed ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-blue-300'
              }`}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {lesson.difficulty}
                    </span>
                    {lesson.completed && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{lesson.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{lesson.topics.length} topics</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Topics covered:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {lesson.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                    lesson.completed 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    <span>{lesson.completed ? 'Review Lesson' : 'Start Lesson'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Progress</h2>
            <p className="text-gray-600">Keep up the great work! You're on your way to becoming a prompt engineering expert.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">2/6</div>
              <div className="text-sm text-gray-600">Lessons Completed</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">35</div>
              <div className="text-sm text-gray-600">Minutes Learned</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Prompts Created</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-1">7</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span>33%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '33%' }}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearnPrompt;