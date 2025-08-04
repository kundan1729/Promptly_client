import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface UsageGuideProps {
  selectedType: string | null;
}

const UsageGuide: React.FC<UsageGuideProps> = ({ selectedType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-br from-green-100 via-emerald-100 to-lime-50 rounded-2xl shadow-lg p-6 md:p-8 border border-green-200"
    >
      <h2 className="text-2xl font-bold mb-4 text-green-800">How to Use the Prompt Playground</h2>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Welcome to the <span className="font-semibold text-green-700">Prompt Playground</span> – a space where you can enhance your prompt engineering skills using AI.
        This guide will help you make the most of the tools available in the{' '}
        <Link to="/playground" className="text-purple-700 font-medium underline hover:text-purple-600">
          Playground
        </Link>.
      </p>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 text-green-900">
        {[
          {
            title: '🎯 Choose a Prompt Pattern',
            description: 'Select from various prompt styles like Persona, Instructional, Creative, etc., based on your need.',
          },
          {
            title: '✍️ Write Clearly',
            description: 'Describe what you want as specifically as possible. Avoid vague terms unless experimenting.',
          },
          {
            title: '⚙️ Patternize & Improve',
            description: 'Use the Patternize Prompt feature to refine your input using best practices and structured formatting.',
          },
          {
            title: '🔁 Iterate & Learn',
            description: 'Try multiple variations to see how small changes impact results. Each iteration builds your prompt skills.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur rounded-xl p-4 shadow hover:shadow-md transition-all duration-200"
          >
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-gray-800">{item.description}</p>
          </div>
        ))}
      </div>

      {selectedType && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-6 p-5 border-l-4 border-green-500 bg-white/90 rounded-xl"
        >
          <p className="text-green-900 font-medium text-base">
            <span className="text-green-700">Currently selected pattern:</span>{' '}
            <span className="font-bold">{selectedType}</span>
          </p>
          <p className="text-sm text-green-700 mt-1">
            This style is ideal for specific use cases. Try crafting a prompt in this style and refine it with AI suggestions in the Playground.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UsageGuide;
