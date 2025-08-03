// Notification.tsx - Custom notification/alert
import React from 'react';

interface NotificationProps {
  type?: 'success' | 'error' | 'info';
  message: string;
  onClose?: () => void;
}

const typeStyles: Record<string, string> = {
  success: 'bg-green-100 text-green-800 border-green-400',
  error: 'bg-red-100 text-red-800 border-red-400',
  info: 'bg-blue-100 text-blue-800 border-blue-400',
};

const Notification: React.FC<NotificationProps> = ({ type = 'info', message, onClose }) => (
  <div className={`border-l-4 p-4 mb-4 rounded-lg shadow ${typeStyles[type] || typeStyles.info}`}>
    <div className="flex justify-between items-center">
      <span>{message}</span>
      {onClose && (
        <button className="ml-4 text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</button>
      )}
    </div>
  </div>
);

export default Notification;
