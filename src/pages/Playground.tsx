import React, { useState } from 'react';
import PlaygroundModal from '../components/PlaygroundModal';

const Playground: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const launchPlayground = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-6 py-12 text-white relative">
      {isOpen && <PlaygroundModal isOpen={isOpen} onClose={handleClose} />}

      {!isOpen && (
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow">
            PromptCraft Studio
          </h1>
          <p className="text-lg sm:text-xl mb-10 font-light text-white/90">
            The ultimate playground for crafting, testing, and perfecting your AI prompts.
            From beginner-friendly templates to advanced prompt engineering techniques.
          </p>

          <button
  onClick={launchPlayground}
  className="px-8 py-4 rounded-full bg-white text-purple-700 font-semibold shadow-lg transition-all duration-300 ease-in-out 
             hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-500 hover:text-white hover:shadow-xl hover:scale-105"
>
  Launch Prompt Playground
</button>

        </div>
      )}
    </div>
  );
};

export default Playground;
