import React, { useRef, useEffect, useState } from 'react';
import PromptPlayground from './PromptPlayground';
import { Maximize2, Minimize2 } from 'lucide-react';

interface PlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlaygroundModal: React.FC<PlaygroundModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ESC key to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const enterFullscreen = () => {
    if (modalRef.current) {
      if (modalRef.current.requestFullscreen) {
        modalRef.current.requestFullscreen();
      } else if ((modalRef.current as any).webkitRequestFullscreen) {
        (modalRef.current as any).webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    }
    setIsFullscreen(false);
  };

  // Listen for fullscreen change to update state
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-85 animate-fadeIn">
      <div ref={modalRef} className="relative w-[96vw] h-[96vh] max-w-5xl max-h-[900px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal header with controls */}
        <div className="flex items-center justify-between px-8 pt-6 pb-2 z-10">
          <div className="flex items-center gap-4">
            <button
              className="text-3xl text-slate-500 hover:text-red-500 transition-colors duration-200"
              onClick={onClose}
              aria-label="Close Playground"
            >
              &times;
            </button>
            <button
              className="text-xl text-slate-500 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1"
              onClick={isFullscreen ? exitFullscreen : enterFullscreen}
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          </div>
          {/* Move theme toggle here for clear separation */}
          <div>
            {/* Theme toggle button is rendered inside PromptPlayground, so you may need to lift it up here if you want it always visible */}
            {/* Example: <ThemeToggleButton /> */}
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <PromptPlayground />
        </div>
      </div>
    </div>
  );
};

export default PlaygroundModal;
