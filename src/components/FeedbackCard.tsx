import React from 'react';
import { Star, ThumbsUp, AlertCircle, Lightbulb } from 'lucide-react';

interface Feedback {
  rating: number;
  strengths: string[];
  improvements: string[];
  suggestions: string[];
}

interface FeedbackCardProps {
  feedback: Feedback;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-500';
    if (rating >= 3) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getFeedbackType = (rating: number) => {
    if (rating >= 4) return 'success';
    if (rating >= 3) return 'warning';
    return 'error';
  };

  const feedbackType = getFeedbackType(feedback.rating);

  return (
    <div className={`feedback-${feedbackType} p-6 rounded-xl`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 ${
                star <= feedback.rating 
                  ? `fill-current ${getRatingColor(feedback.rating)}` 
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="font-bold text-lg">
          {feedback.rating}/5 Rating
        </span>
      </div>

      {feedback.strengths.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp className="w-5 h-5" />
            <h4 className="font-semibold text-lg">Strengths</h4>
          </div>
          <ul className="space-y-1">
            {feedback.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {feedback.improvements.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5" />
            <h4 className="font-semibold text-lg">Areas for Improvement</h4>
          </div>
          <ul className="space-y-1">
            {feedback.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {feedback.suggestions.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-5 h-5" />
            <h4 className="font-semibold text-lg">Suggestions</h4>
          </div>
          <ul className="space-y-1">
            {feedback.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;