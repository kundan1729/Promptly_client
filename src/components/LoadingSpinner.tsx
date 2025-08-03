import React from 'react';
import { Cloud } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="relative">
        <Cloud className="w-16 h-16 text-blue-400 animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
      <p className="text-gray-600 animate-pulse-slow">Enhancing your prompt...</p>
    </div>
  );
};

export default LoadingSpinner;