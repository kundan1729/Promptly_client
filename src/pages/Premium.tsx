import React from 'react';
import { Crown, Check, Zap, Star, Users, Shield, Infinity, Sparkles } from 'lucide-react';

const Premium: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '10 prompts per day',
        'Basic feedback',
        'Community access',
        'Public templates'
      ],
      limitations: [
        'Limited AI feedback',
        'No priority support',
        'Basic analytics'
      ],
      buttonText: 'Current Plan',
      buttonStyle: 'bg-gray-200 text-gray-700 cursor-not-allowed',
      popular: false
    },
    {
      name: 'Pro',
      price: 49,
      period: 'month',
      description: 'For serious prompt engineers',
      features: [
        'Unlimited prompts',
        'Advanced AI feedback',
        'Priority support',
        'Private templates',
        'Export functionality',
        'Collaboration tools',
        'Advanced analytics',
        'Custom categories'
      ],
      limitations: [],
      buttonText: 'Upgrade to Pro',
      buttonStyle: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
      popular: true
    },
    {
      name: 'Team',
      price: 149,
      period: 'month',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Team management',
        'Shared workspaces',
        'Admin controls',
        'SSO integration',
        'Custom branding',
        'API access',
        'Dedicated support'
      ],
      limitations: [],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700',
      popular: false
    }
  ];

  const premiumFeatures = [
    {
      icon: Zap,
      title: 'Unlimited AI Feedback',
      description: 'Get instant, detailed feedback on every prompt you create with no daily limits.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'Advanced Analytics',
      description: 'Track prompt performance, success rates, and optimization opportunities.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together with your team, share prompts, and collaborate in real-time.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Priority Support',
      description: 'Get help when you need it with priority email and chat support.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Infinity,
      title: 'Unlimited Storage',
      description: 'Save unlimited prompts, templates, and organize them however you want.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Sparkles,
      title: 'Exclusive Templates',
      description: 'Access premium templates created by expert prompt engineers.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Asad Ali',
      role: 'Content Marketing Manager',
      company: 'TechCorp',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'PromptCraft Pro has revolutionized how our team creates content. The AI feedback is incredibly accurate and has improved our output quality by 300%.'
    },
    {
      name: 'Rishabh Prakash',
      role: 'AI Researcher',
      company: 'Innovation Labs',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The advanced analytics and collaboration features are game-changers. We can now track what works and share best practices across our entire research team.'
    },
    {
      name: 'Kundan Kumar',
      role: 'Freelance Writer',
      company: 'Independent',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'As a freelancer, the unlimited prompts and premium templates have helped me deliver better results for my clients. ROI was immediate!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Crown className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock Premium Features
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Take your prompt engineering to the next level with unlimited access, 
              advanced features, and priority support. Join thousands of professionals 
              who trust PromptCraft Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Compare Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Pricing Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-600">Start free, upgrade when you're ready</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg border-2 transition-all hover:shadow-xl ${
                plan.popular ? 'border-purple-500 relative' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Features included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Go Premium?</h2>
            <p className="text-lg text-gray-600">Unlock powerful features that supercharge your prompt engineering</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">Join thousands of satisfied professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Can I cancel my subscription anytime?',
                answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access to premium features until the end of your billing period.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes! We offer a 14-day free trial of PromptCraft Pro. No credit card required to start.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
              },
              {
                question: 'Can I upgrade or downgrade my plan?',
                answer: 'Absolutely! You can change your plan at any time. Changes take effect immediately, and we\'ll prorate the billing.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Prompts?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already creating better prompts with PromptCraft Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Start 14-Day Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Premium;