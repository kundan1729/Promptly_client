import React from 'react';
import { BookOpen, CheckCircle, Lightbulb } from 'lucide-react';

interface PromptPattern {
  id: string;
  name: string;
  explanation: string;
  checklist: string[];
  example: string;
  demoOutput: string;
}

interface LessonPanelProps {
  patterns: PromptPattern[];
  selectedPattern: PromptPattern | null;
  onSelectPattern: (pattern: PromptPattern) => void;
}

const LessonPanel: React.FC<LessonPanelProps> = ({ 
  patterns, 
  selectedPattern, 
  onSelectPattern 
}) => {
  return (
    <div className="panel rounded-xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-6 h-6" style={{ color: 'var(--text-accent)' }} />
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Pattern Guide
        </h2>
      </div>

      {/* Pattern Selection - Pill Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {patterns.map((pattern) => (
          <button
            key={pattern.id}
            onClick={() => onSelectPattern(pattern)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedPattern?.id === pattern.id 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {pattern.name}
          </button>
        ))}
      </div>

      {/* Selected Pattern Details */}
      <div className="flex-1 overflow-y-auto">
        {!selectedPattern && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-50" style={{ color: 'var(--text-secondary)' }} />
              <p style={{ color: 'var(--text-secondary)' }}>
                Select a pattern above to view its details
              </p>
            </div>
          </div>
        )}
        
        {selectedPattern && (
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {selectedPattern.name}
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Explanation
            </h4>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {selectedPattern.explanation}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Key Elements Checklist
            </h4>
            <div className="space-y-2">
              {selectedPattern.checklist.map((item, index) => (
                <div key={index} className="checklist-item p-3 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--text-accent)' }} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Example
            </h4>
            <div className="p-4 rounded-lg" style={{ 
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)'
            }}>
              <code className="text-sm whitespace-pre-wrap" style={{ color: 'var(--text-primary)' }}>
                {selectedPattern.example}
              </code>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default LessonPanel;