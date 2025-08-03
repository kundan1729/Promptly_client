import React from 'react';

export type AlertType = 'info' | 'error' | 'success';

interface AlertProps {
  type: AlertType;
  message: string;
  onClose: () => void;
}

const colors = {
  info: 'bg-blue-500',
  error: 'bg-red-500',
  success: 'bg-green-500',
};

const icons = {
  info: <span className="mr-2">&#9432;</span>,
  error: <span className="mr-2">&#9888;</span>,
  success: <span className="mr-2">&#10003;</span>,
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => (
  <div className={`flex items-center justify-between px-6 py-3 rounded-xl text-white font-bold shadow-lg mb-4 ${colors[type]}`}>
    <div className="flex items-center">
      {icons[type]}
      <span>{message}</span>
    </div>
    <button onClick={onClose} className="ml-4 text-2xl font-bold text-white hover:text-gray-200">&times;</button>
  </div>
);

export default Alert;
