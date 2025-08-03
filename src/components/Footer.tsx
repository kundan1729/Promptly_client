import React from 'react';
import { Target, MapPin, Code, Star, Calendar } from 'lucide-react';

interface UsageGuideProps {
  selectedType: string | null;
}

const UsageGuide: React.FC<UsageGuideProps> = ({ selectedType }) => {
  const typeGuides = {
    'instruction': {
      title: 'Instruction Prompts',
      howToUse: 'Start with clear action verbs like "Create", "Write", "Generate", or "Explain". Be specific about what you want.',
      whereToUse: 'Content creation, coding tasks, summaries, translations, and direct commands.',
      examples: [
        'Create a marketing email for a new product launch',
        'Write a Python function to calculate compound interest',
        'Generate 5 creative blog post titles about sustainable living'
      ]
    },
    'role-play': {
      title: 'Role-Play Prompts',
      howToUse: 'Define the role clearly with "Act as..." or "You are...". Provide context about the scenario or situation.',
      whereToUse: 'Getting expert advice, different perspectives, creative writing, and specialized responses.',
      examples: [
        'Act as a financial advisor and help me create a budget for a recent college graduate',
        'You are a medieval historian. Explain how castles were built in the 12th century',
        'Pretend to be a startup mentor and review my business idea'
      ]
    },
    'chain-of-thought': {
      title: 'Chain of Thought Prompts',
      howToUse: 'Ask for step-by-step reasoning with phrases like "think through", "analyze step by step", or "break down".',
      whereToUse: 'Complex problem-solving, mathematical reasoning, logical analysis, and detailed explanations.',
      examples: [
        'Think step by step to solve this algebra problem: 2x + 5 = 15',
        'Analyze the causes of climate change step by step',
        'Break down the process of how a computer executes a program'
      ]
    },
    'few-shot': {
      title: 'Few-Shot Prompts',
      howToUse: 'Provide 2-5 clear examples of input-output pairs, then ask for the same pattern with new input.',
      whereToUse: 'Consistent formatting, style mimicking, pattern recognition, and structured responses.',
      examples: [
        'Product: iPhone 14\nDescription: Latest Apple smartphone with advanced camera\n\nProduct: Tesla Model 3\nDescription: [Your task: complete this]',
        'Question: What is 2+2?\nAnswer: Four\n\nQuestion: What is 5+3?\nAnswer: Eight\n\nQuestion: What is 7+6?\nAnswer: ?',
        'Review: "Great product!" → Sentiment: Positive\nReview: "Terrible quality" → Sentiment: Negative\nReview: "It\'s okay" → Sentiment: ?'
      ]
    },
    'zero-shot': {
      title: 'Zero-Shot Prompts',
      howToUse: 'Give direct, clear instructions without examples. Be specific about the format and requirements.',
      whereToUse: 'Simple tasks, direct questions, straightforward conversions, and when examples aren\'t needed.',
      examples: [
        'Translate "Hello, how are you?" to Spanish',
        'Summarize this article in 3 bullet points',
        'What are the main benefits of renewable energy?'
      ]
    }
  };

  const defaultContent = {
    title: 'Prompt of the Day Challenge',
    challenge: 'Create a prompt that generates a personalized workout routine',
    description: 'Try crafting a prompt that takes into account fitness level, available equipment, and time constraints to generate a custom workout plan.',
    tips: [
      'Include specific parameters (fitness level, equipment, time)',
      'Ask for structured output (warm-up, main exercises, cool-down)',
      'Request modifications for different skill levels',
      'Consider safety considerations and form tips'
    ],
    contestInfo: {
      title: 'Monthly Prompt Contest',
      theme: 'Creative Writing Prompts',
      prize: 'Winner gets 3 months free Premium access',
      deadline: 'January 31, 2025'
    }
  };

  if (!selectedType) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{defaultContent.title}</h3>
          <p className="text-gray-600 mt-2">{defaultContent.description}</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Today's Challenge</h4>
          <p className="text-blue-800 font-medium mb-4">"{defaultContent.challenge}"</p>
          
          <div className="space-y-2">
            <h5 className="font-medium text-gray-700">Tips for success:</h5>
            <ul className="space-y-1">
              {defaultContent.tips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="w-6 h-6 text-orange-500" />
            <h4 className="text-lg font-semibold text-gray-900">{defaultContent.contestInfo.title}</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-700">Theme</p>
              <p className="text-gray-600">{defaultContent.contestInfo.theme}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Prize</p>
              <p className="text-gray-600">{defaultContent.contestInfo.prize}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Deadline</p>
              <p className="text-gray-600">{defaultContent.contestInfo.deadline}</p>
            </div>
          </div>
          <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
            Join Contest
          </button>
        </div>
      </div>
    );
  }

  const guide = typeGuides[selectedType as keyof typeof typeGuides];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{guide.title} Guide</h3>
      
      <div className="space-y-6">
        {/* How to Use */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Target className="w-5 h-5 text-blue-500" />
            <h4 className="font-semibold text-gray-900">How to Use</h4>
          </div>
          <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{guide.howToUse}</p>
        </div>

        {/* Where to Use */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <MapPin className="w-5 h-5 text-green-500" />
            <h4 className="font-semibold text-gray-900">Best Use Cases</h4>
          </div>
          <p className="text-gray-700 bg-green-50 p-4 rounded-lg">{guide.whereToUse}</p>
        </div>

        {/* Examples */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Code className="w-5 h-5 text-purple-500" />
            <h4 className="font-semibold text-gray-900">Sample Examples</h4>
          </div>
          <div className="space-y-3">
            {guide.examples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-800 font-mono">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageGuide;