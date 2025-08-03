// NotificationContext.tsx - Global notification context
import React, { createContext, useContext, useState, ReactNode } from 'react';
import Notification from './Notification';

interface NotificationState {
  message: string;
  type?: 'success' | 'error' | 'info';
}

interface NotificationContextProps {
  showNotification: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotification must be used within NotificationProvider');
  return context;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000); // Auto-hide after 3s
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {notification && (
        <div className="fixed top-6 right-6 z-50">
          <Notification type={notification.type} message={notification.message} onClose={() => setNotification(null)} />
        </div>
      )}
      {children}
    </NotificationContext.Provider>
  );
};
