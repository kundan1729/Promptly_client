import React, { useState } from 'react';
import PlaygroundModal from './PlaygroundModal';

const PlaygroundButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:from-purple-500 hover:to-indigo-500 transition-colors duration-200"
        onClick={handleOpen}
      >
        Launch Prompt Playground
      </button>
      <PlaygroundModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default PlaygroundButton;
