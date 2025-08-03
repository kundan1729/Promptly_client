import  { useState } from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
// PlaygroundButton: Top-right floating button
function PlaygroundButton() {
  return (
    <Link
      to="/playground"
      className="playground-btn fixed top-20 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
      style={{ minWidth: 44, minHeight: 44 }}
      title="Open Playground"
    >
      <Play className="w-5 h-5" />
      <span className="hidden sm:inline">Playground</span>
    </Link>
  );
}
import { Sparkles, XCircle } from 'lucide-react';
import LoadingSpinner from './components/LoadingSpinner';
import EnhancedResult from './components/EnhancedResult';

interface EnhancementRules {
  specificity: boolean;
  context: boolean;
  grammar: boolean;
}

interface EnhanceResponse {
  enhanced: string;
  error?: string;
}

function App() {
  const [prompt, setPrompt] = useState('');
  const [rules, setRules] = useState<EnhancementRules>({
    specificity: false,
    context: false,
    grammar: false,
  });
  const [loading, setLoading] = useState(false);
  const [enhancedText, setEnhancedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRuleChange = (rule: keyof EnhancementRules) => {
    setRules(prev => ({ ...prev, [rule]: !prev[rule] }));
  };

  const handleEnhance = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setEnhancedText(null);

    try {
      const response = await fetch('/api/enhance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          rules,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: EnhanceResponse = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setEnhancedText(data.enhanced);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const hasSelectedRules = Object.values(rules).some(Boolean);

  return (
    <>
      <PlaygroundButton />
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-10 h-10 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Prompt Enhancer</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your basic prompts into detailed, effective instructions with AI-powered enhancement.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Prompt
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.currentTarget.value)}
                  onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                    if (e.key === 'Enter' && !e.shiftKey && !loading && prompt.trim()) {
                      e.preventDefault();
                      handleEnhance();
                    }
                  }}
                  placeholder="Enter your prompt here..."
                  className="enhanced-textarea w-full h-32"
                  disabled={loading}
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Enhancement Rules</h3>
                <div className="space-y-3">
                  {Object.entries(rules).map(([key, value]) => (
                    <label key={key} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handleRuleChange(key as keyof EnhancementRules)}
                        className="checkbox-custom"
                        disabled={loading}
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                        Improve {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
                {!hasSelectedRules && (
                  <p className="text-xs text-gray-500 mt-2">
                    No rules selected - will apply all enhancements
                  </p>
                )}
              </div>

              <button
                onClick={handleEnhance}
                disabled={loading || !prompt.trim()}
                className="btn-primary w-full"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Enhancing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Enhance Prompt
                  </>
                )}
              </button>
            </div>

            {/* Output Section */}
            <div className="lg:border-l lg:border-gray-200 lg:pl-8">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Result</h3>
              
              {loading && <LoadingSpinner />}
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-700">Error: {error}</p>
                </div>
              )}
              
              {enhancedText && !loading && (
                <>
                  <EnhancedResult enhancedText={enhancedText} />
                  <button
                    onClick={() => {
                      setPrompt('');
                      setEnhancedText(null);
                    }}
                    className="mt-6 flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition"
                  >
                    <XCircle className="w-5 h-5 text-red-500" />
                    Clear
                  </button>
                </>
              )}
              
              {!loading && !error && !enhancedText && (
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-xl">
                  <p className="text-gray-500 w-full text-center flex items-center justify-center h-full">Your enhanced prompt will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;