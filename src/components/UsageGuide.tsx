import React from 'react';

interface UsageGuideProps {
  selectedType: string | null;
}

const UsageGuide: React.FC<UsageGuideProps> = ({ selectedType }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-2 text-blue-700">Usage Guide</h2>
      <p className="text-gray-600 mb-4">
        {selectedType
          ? `You have selected the prompt type: ${selectedType}. Here are some tips for using this type effectively.`
          : 'Select a prompt type to see specific usage tips and examples.'}
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Be clear and specific with your instructions.</li>
        <li>Use examples to guide the AI.</li>
        <li>Adjust the prompt type for different tasks.</li>
        <li>Review and refine your prompts for best results.</li>
      </ul>
    </div>
  );
};

export default UsageGuide;
