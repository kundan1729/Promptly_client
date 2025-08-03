import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface EnhancedResultProps {
  enhancedText: string;
}

const EnhancedResult: React.FC<EnhancedResultProps> = ({ enhancedText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(enhancedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Enhanced Prompt</h3>
        <button
          onClick={handleCopy}
          className="btn-secondary group"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2 group-hover:text-blue-600" />
              <span className="group-hover:text-blue-600">Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className="glass-card rounded-xl p-6 border-l-4 border-l-blue-500">
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {enhancedText}
        </p>
      </div>
    </div>
  );
};

export default EnhancedResult;