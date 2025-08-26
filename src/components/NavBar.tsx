// NavBar.tsx - Reusable navigation bar/header for all pages
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle } from 'lucide-react'; // only import kept for Logout/Profile
import { useNotification } from './NotificationContext';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);
  const { showNotification } = useNotification();

  useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      setUser(JSON.parse(localUser));
    } else {
  // Single source of truth for API URL
  const API_URL = import.meta.env.VITE_API_URL || '';
  fetch(`${API_URL}/api/auth/user`, { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
          if (data && data.name) {
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
          }
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setShowProfile(false);
    showNotification('Logged out successfully', 'success');
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 flex items-center justify-between px-6 py-5 bg-white shadow-md z-40">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-purple-600 rounded-lg w-8 h-8 flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-lg text-gray-800">Promptly</span>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-700 hover:text-purple-600">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-purple-600">
          About
        </Link>
        <Link to="/playground" className="text-gray-700 hover:text-purple-600">
          Playground
        </Link>
        <Link to="/learn" className="text-gray-700 hover:text-purple-600">
          Learn Prompt
        </Link>
        <Link to="/courses" className="text-gray-700 hover:text-purple-600">
          Courses
        </Link>
        <Link to="/contest" className="text-gray-700 hover:text-purple-600">
          Contest
        </Link>
        
        <Link
          to="/premium"
          className="px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow hover:from-yellow-500 hover:to-orange-600 transition"
        >
          Get Premium
        </Link>
        {user ? (
          <div className="relative">
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setShowProfile((v) => !v)}
              title="Profile"
            >
              <UserCircle className="w-8 h-8 text-blue-600 hover:text-blue-800 transition" />
            </button>
            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 p-4">
                <div className="flex flex-col items-center mb-2">
                  <UserCircle className="w-10 h-10 text-blue-600 mb-1" />
                  <span className="font-semibold text-gray-800">{user.name}</span>
                </div>
                <button
                  className="w-full px-4 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="text-gray-700 hover:text-purple-600">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
