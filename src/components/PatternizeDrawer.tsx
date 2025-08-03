import React, { useState } from 'react';

interface PatternizeDrawerProps {
  userPrompt: string;
  selectedPattern: string;
}

const PatternizeDrawer: React.FC<PatternizeDrawerProps> = ({ userPrompt, selectedPattern }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [patternized, setPatternized] = useState('');

  const handlePatternize = async () => {
    setLoading(true);
    setOpen(true);
    try {
      const res = await fetch('/api/groq/patternize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userPrompt, pattern: selectedPattern })
      });
      if (!res.ok) {
        const errorText = await res.text();
        setPatternized(`Server error: ${errorText || res.status}`);
        setLoading(false);
        return;
      }
      let data;
      try {
        data = await res.json();
      } catch {
        setPatternized('Invalid JSON response from server.');
        setLoading(false);
        return;
      }
      setPatternized(data.result);
    } catch {
      setPatternized('Failed to patternize prompt.');
    }
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
    setPatternized('');
  };

  return (
    <>
      <button
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow font-semibold hover:from-purple-700 hover:to-indigo-700 transition"
        onClick={handlePatternize}
      >
        <span role="img" aria-label="magic" className="mr-2">✨</span>Patternize Prompt
      </button>
      {/* Overlay */}
      {open && (
        <div>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleClose}
          />
          {/* Drawer */}
          <div
            className={
              'fixed top-0 right-0 h-full w-full max-w-[420px] bg-gradient-to-b from-white via-indigo-50 to-purple-100 shadow-2xl p-0 z-50 transition-transform duration-300 ' +
              (open ? 'translate-x-0' : 'translate-x-full')
            }
            style={{ boxShadow: '0 8px 32px rgba(80,0,120,0.18)' }}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-2 border-b border-indigo-100">
              <div className="flex items-center gap-2">
                <span role="img" aria-label="magic" className="text-2xl">✨</span>
                <h2 className="text-xl font-bold text-indigo-900">Patternized Prompt</h2>
              </div>
              <button
                className="text-2xl text-gray-400 hover:text-indigo-600 transition"
                onClick={handleClose}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="px-6 py-4 flex flex-col gap-4">
              {loading ? (
                <div className="flex items-center justify-center h-32">
                  <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></span>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-indigo-500 font-semibold">Improved Prompt</span>
                    {patternized && patternized !== 'Failed to patternize prompt.' && patternized !== '' && (
                      <button
                        className="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full font-semibold ml-2"
                        onClick={() => {
                          navigator.clipboard.writeText(patternized);
                        }}
                      >
                        Copy
                      </button>
                    )}
                  </div>
                  <pre className="bg-slate-100 p-4 rounded text-base whitespace-pre-wrap text-slate-800 min-h-[80px] max-h-[320px] overflow-y-auto border border-indigo-100 shadow-inner">
                    {patternized}
                  </pre>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatternizeDrawer;
