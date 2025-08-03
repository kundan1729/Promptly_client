

import React, { useState } from 'react';
import PlaygroundModal from '../components/PlaygroundModal';

const Playground: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-cyan-50 flex items-center justify-center">
      {/* Launches the playground modal full screen by default */}
      <PlaygroundModal isOpen={isOpen} onClose={handleClose} />
      {!isOpen && (
        <button
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:from-purple-500 hover:to-indigo-500 transition-colors duration-200"
          onClick={() => setIsOpen(true)}
        >
          Launch Prompt Playground
        </button>
      )}
    </div>
  );
};

export default Playground;
