const API_URL = import.meta.env.VITE_API_URL || '';
import React, { useState, createContext, useContext } from 'react';
import PatternizeDrawer from './PatternizeDrawer';
import { FiAlertCircle } from 'react-icons/fi';
import { FaStar, FaThumbsUp } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { promptPatterns, PromptPattern } from '../data/patterns';



interface Feedback {
  error?: string;
  [key: string]: any;
}

interface Demo {
  error?: string;
  [key: string]: any;
}

// Theme Context
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({ theme: 'light', toggleTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="bg-slate-500 text-white rounded-full px-4 py-2 ml-2 hover:bg-indigo-500 transition-colors duration-200"
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

const PromptPlayground: React.FC = () => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // Playground states
  const [selectedPattern, setSelectedPattern] = useState<PromptPattern | null>(null);
  const [userInput, setUserInput] = useState<string>('');
  const [loadingFeedback, setLoadingFeedback] = useState<boolean>(false);
  const [loadingDemo, setLoadingDemo] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [demo, setDemo] = useState<Demo | null>(null);
  const [saving, setSaving] = useState<boolean>(false);


  // Use local patterns data
  const patterns = promptPatterns;

  // Handlers
  const handlePatternSelect = (pattern: Pattern) => {
    setSelectedPattern(pattern);
  setFeedback(null);
  setDemo(null);
  setUserInput('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setUserInput(e.target.value);

  const handleGetFeedback = async () => {
    if (!userInput) return;
    setLoadingFeedback(true);
    setFeedback(null);
    try {
  const res = await fetch(`${API_URL}/api/groq/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, pattern: selectedPattern?.name })
      });
      if (!res.ok) {
        const errorText = await res.text();
        setFeedback({ error: `Server error: ${errorText || res.status}` });
        setLoadingFeedback(false);
        return;
      }
      let data;
      try {
        data = await res.json();
      } catch {
        setFeedback({ error: 'Invalid JSON response from server.' });
        setLoadingFeedback(false);
        return;
      }
      setFeedback(data);
      // Store history in MongoDB
  await fetch(`${API_URL}/api/history`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, feedback: data, pattern: selectedPattern?.name })
      });
    } catch (err) {
      setFeedback({ error: 'Failed to get feedback.' });
    }
    setLoadingFeedback(false);
  };

  const handlePatternizePrompt = async () => {
    if (!userInput) return;
    setLoadingDemo(true);
    setDemo(null);
    try {
      const res = await fetch(`${API_URL}/api/groq/patternize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, pattern: selectedPattern?.name })
      });
      if (!res.ok) {
        const errorText = await res.text();
        setDemo({ error: `Server error: ${errorText || res.status}` });
        setLoadingDemo(false);
        return;
      }
      let data;
      try {
        data = await res.json();
      } catch {
        setDemo({ error: 'Invalid JSON response from server.' });
        setLoadingDemo(false);
        return;
      }
      setDemo(data);
      // Store history in MongoDB
      await fetch(`${API_URL}/api/history`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, patternized: data, pattern: selectedPattern?.name })
      });
    } catch (err) {
      setDemo({ error: 'Failed to patternize prompt.' });
    }
    setLoadingDemo(false);
  };

  const handleCopy = () => {
    if (demo && demo.result) {
      navigator.clipboard.writeText(demo.result);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 1500);
    }
  };

  const handleSavePatternized = async () => {
    if (!demo || !demo.result) return;
    setSaving(true);
    try {
      await fetch(`${API_URL}/api/collection`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, patternized: demo.result, pattern: selectedPattern?.name })
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? 'bg-slate-50 text-slate-900 h-full w-full p-8 flex flex-col' : 'bg-slate-900 text-slate-50 h-full w-full p-8 flex flex-col'}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">AI Prompt Playground</h2>
          <ThemeToggleButton />
        </div>
        <div className="flex flex-1 gap-8 min-h-0 flex-col md:flex-row">
          {/* Left Panel */}
          <div
            className={
              (theme === 'light'
                ? 'w-full md:w-[410px] min-w-[410px] bg-white bg-opacity-80'
                : 'w-full md:w-[480px] min-w-[480px] bg-slate-800 bg-opacity-80') +
              ' rounded-xl shadow p-6 overflow-y-auto scrollbar-hide'
            }
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {patterns.map((pattern) => (
                <button
                  key={pattern.name}
                  className={selectedPattern?.name === pattern.name
                    ? 'bg-indigo-500 text-white rounded-full px-4 py-1 font-semibold shadow'
                    : 'bg-indigo-100 text-indigo-600 rounded-full px-4 py-1 font-semibold shadow hover:bg-indigo-200'}
                  onClick={() => handlePatternSelect(pattern)}
                >
                  {pattern.name}
                </button>
              ))}
            </div>
            {selectedPattern && (
              <div className="mt-2">
                <h3 className="text-lg font-bold mb-2">{selectedPattern.name}</h3>
                <div className="mb-2">
                  <span className="font-semibold">Explanation:</span>
                  <p className="ml-2 text-sm">{selectedPattern.explanation}</p>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Checklist:</span>
                  <ul className="ml-4 list-disc text-sm">
                    {selectedPattern.checklist?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Example:</span>
                  <pre
                    className={
                      (theme === 'light'
                        ? 'bg-slate-100 text-slate-800'
                        : 'bg-slate-800 text-slate-50') +
                      ' p-2 rounded mt-1 text-xs whitespace-pre-wrap break-words overflow-x-auto font-mono'
                    }
                    style={{ maxWidth: '100%' }}
                  >
                    {selectedPattern.example}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel */}
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            <div className={theme === 'light' ? 'bg-white rounded-xl shadow p-6 mb-2 flex flex-col gap-4' : 'bg-slate-800 rounded-xl shadow p-6 mb-2 flex flex-col gap-4'}>
              <textarea
                className={theme === 'light'
                  ? 'w-full min-h-[120px] rounded-lg border border-slate-200 p-4 text-base bg-slate-100 text-slate-800 resize-vertical scrollbar-hide'
                  : 'w-full min-h-[120px] rounded-lg border border-slate-700 p-4 text-base bg-slate-900 text-slate-50 resize-vertical scrollbar-hide'}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                value={userInput}
                onChange={handleInputChange}
                placeholder={selectedPattern ? `Write a prompt using ${selectedPattern.name}` : 'Select a pattern to begin...'}
                rows={6}
              />
              <div className="flex gap-4">
                <button
                  className="bg-indigo-500 text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-indigo-600 disabled:bg-indigo-300 disabled:cursor-not-allowed"
                  onClick={handleGetFeedback}
                  disabled={loadingFeedback || !userInput}
                >
                  {loadingFeedback ? 'Getting Feedback...' : 'Get Feedback'}
                </button>
                <PatternizeDrawer
                  userPrompt={userInput}
                  selectedPattern={selectedPattern?.name || ''}
                />
              </div>
            </div>
            <div className="flex flex-1 min-h-0">
              <div
                className={
                  (theme === 'light'
                    ? 'w-full bg-slate-100 text-slate-900 rounded-xl shadow p-4 overflow-y-auto scrollbar-hide min-h-[120px]'
                    : 'w-full bg-slate-800 text-slate-50 rounded-xl shadow p-4 overflow-y-auto scrollbar-hide min-h-[120px]')
                }
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <h4 className="font-bold mb-2">Feedback</h4>
                {feedback ? (
                  feedback.error ? (
                    <div className="text-red-500 font-semibold">{feedback.error}</div>
                  ) : (
                    (() => {
                      const result = feedback.result || '';
                      const feedbackMatch = result.match(/Feedback:\s*([\s\S]*?)\nSuggestions:/);
                      const suggestionsMatch = result.match(/Suggestions:\s*([\s\S]*?)\n?Rating:/);
                      const ratingMatch = result.match(/Rating:\s*([0-9]+)/);

                      const strengths = feedbackMatch ? [feedbackMatch[1].trim()] : [];

                      const suggestions = suggestionsMatch
                        ? suggestionsMatch[1]
                            .replace(/\r/g, '')
                            .split(/\n?- /) // more flexible splitting
                            .filter((s: string) => s.trim())
                            .map((s: string) => s.trim())
                        : [];

                      const rating = ratingMatch ? parseInt(ratingMatch[1], 10) : null;
                      return (
                        <div className={theme === 'light' ? 'bg-white text-slate-900 rounded-xl shadow p-4' : 'bg-slate-900 text-slate-50 rounded-xl shadow p-4'}>
                          <div className="flex items-center mb-2">
                            {[...Array(rating || 0)].map((_, i) => (
                              <FaStar key={i} className="text-green-500 mr-1" />
                            ))}
                            {rating && <span className="font-bold text-lg ml-2">{rating}/10 Rating</span>}
                          </div>
                          <div className="mb-2 flex items-center">
                            <FaThumbsUp className="text-green-600 mr-2" />
                            <span className="font-bold">Strengths</span>
                          </div>
                          <ul className={theme === 'light' ? 'ml-6 mb-4 list-disc text-gray-700' : 'ml-6 mb-4 list-disc text-gray-200'}>
                            {strengths.map((s, idx) => (
                              <li key={idx}>{s}</li>
                            ))}
                          </ul>
                          <div className="mb-2 flex items-center">
                            <FiAlertCircle className="text-yellow-600 mr-2" />
                            <span className="font-bold">Areas for Improvement</span>
                          </div>
                          {/* If you want to split feedback further, add logic here */}
                          {/* <div className="ml-6 text-gray-700 mb-4">...</div> */}
                          <div className="mb-2 flex items-center">
                            <HiOutlineLightBulb className="text-blue-600 mr-2" />
                            <span className="font-bold">Suggestions</span>
                          </div>
                          <ul className={theme === 'light' ? 'ml-6 list-disc text-gray-700' : 'ml-6 list-disc text-gray-200'}>
                            {suggestions.length > 0 ? (
                              suggestions.map((s: string, idx: number) => (
                                <li key={idx}>{s}</li>
                              ))
                            ) : (
                              <li className="text-gray-400 italic">No suggestions found.</li>
                            )}
                          </ul>
                        </div>
                      );
                    })()
                  )
                ) : (
                  <div className="text-slate-400 italic mt-2">No feedback yet.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default PromptPlayground;
