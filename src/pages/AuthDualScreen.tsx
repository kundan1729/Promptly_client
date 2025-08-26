import React, { useState } from 'react';
// Single source of truth for API URL
const API_URL = import.meta.env.VITE_API_URL || '';
import { FaEnvelope, FaKey, FaUser, FaGoogle, FaGithub } from 'react-icons/fa';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useNotification } from '../components/NotificationContext';



const Illustration = () => (
  <div className="hidden md:flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-l-3xl p-10 w-1/2">
    {/* Illustration: Person + Smartphone + Abstract icons */}
    <div className="relative w-72 h-96 flex flex-col items-center justify-center">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-2xl opacity-60" />
      <svg width="120" height="220" className="absolute left-1/2 -translate-x-1/2 top-10" viewBox="0 0 120 220" fill="none">
        <rect x="10" y="10" width="100" height="200" rx="24" fill="#fff" stroke="#a78bfa" strokeWidth="4" />
        <rect x="30" y="40" width="60" height="20" rx="6" fill="#f3e8ff" />
        <rect x="30" y="70" width="60" height="20" rx="6" fill="#f3e8ff" />
        <rect x="30" y="100" width="60" height="20" rx="6" fill="#f3e8ff" />
      </svg>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <FaUser className="text-purple-400 text-4xl mb-2" />
        <div className="flex gap-4">
          <FaKey className="text-orange-400 text-2xl" />
          <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="12" stroke="#f472b6" strokeWidth="3" /><rect x="10" y="10" width="8" height="8" rx="2" fill="#f472b6" /></svg>
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full blur" />
    </div>
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-bold text-purple-600 mb-2">Promptly</h2>
      <p className="text-gray-500">Secure, creative, and smart prompt platform for everyone.</p>
    </div>
  </div>
);

import { useNavigate } from 'react-router-dom';

const AuthDualScreen: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirm, setShowRegConfirm] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirm, setRegisterConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  // Handler for Google OAuth
  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/api/auth/google`;
  };

  // Login form submit
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        showNotification('Login successful!', 'success');
        localStorage.setItem('user', JSON.stringify(data.user));
        setTimeout(() => navigate('/playground'), 1200);
      } else {
        showNotification(data.error || 'Login failed', 'error');
      }
    } catch (err) {
      showNotification('Login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Register form submit
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Password strength validation
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!strongPasswordRegex.test(registerPassword)) {
      showNotification('Password must be at least 8 characters and include uppercase, lowercase, digit, and symbol.', 'error');
      return;
    }
    if (registerPassword !== registerConfirm) {
      showNotification('Passwords do not match', 'error');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: registerName, email: registerEmail, password: registerPassword })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        showNotification('Registration successful! Welcome to Promptly.', 'success');
        localStorage.setItem('user', JSON.stringify(data.user));
        setTimeout(() => navigate('/playground'), 1200);
      } else {
        showNotification(data.error || 'Registration failed', 'error');
      }
    } catch (err) {
      showNotification('Registration failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Forgot password handler
  const handleForgotPassword = async () => {
    if (!loginEmail) {
      showNotification('Please enter your email in the login form first.', 'info');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/forgot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail })
      });
      const data = await res.json();
      if (res.ok) {
        showNotification('Password reset link sent to your email.', 'success');
      } else {
        showNotification(data.error || 'Failed to send reset link.', 'error');
      }
    } catch (err) {
      showNotification('Failed to send reset link.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        <Illustration />
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16">
          {/* Notification handled globally */}
          {mode === 'login' ? (
            <>
              <h2 className="text-lg font-semibold text-gray-500 mb-1">Welcome to</h2>
              <h1 className="text-3xl font-bold mb-6 text-purple-600">Promptly</h1>
              <button
                className="w-full flex items-center justify-center gap-3 py-2 mb-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition font-semibold text-gray-700"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="text-red-500 text-lg" /> Login with Google
              </button>
              <button
                className="w-full flex items-center justify-center gap-3 py-2 mb-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition font-semibold text-gray-700"
                onClick={() => { window.location.href = `${API_URL}/api/auth/github`; }}
              >
                <FaGithub className="text-gray-800 text-lg" /> Login with GitHub
              </button>
              <div className="flex items-center my-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="mx-3 text-gray-400 font-medium">OR</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="relative">
                  <FaKey className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    disabled={loading}
                    onPaste={e => e.preventDefault()}
                    onCopy={e => e.preventDefault()}
                  />
                  <button type="button" className="absolute right-3 top-2.5 text-gray-400" onClick={() => setShowPassword(v => !v)}>
                    {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-purple-500 rounded" /> Remember Me
                  </label>
                  <button type="button" className="text-blue-500 hover:underline text-sm" onClick={handleForgotPassword} disabled={loading}>Forgot Password?</button>
                </div>
                <button type="submit" className="w-full py-2 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 transition" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <p className="mt-6 text-center text-gray-500">Don’t have an account?{' '}
                <button className="text-blue-500 hover:underline font-semibold" onClick={() => setMode('register')}>Register</button>
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2 text-purple-600">Create your Promptly account</h1>
              <button
                className="w-full flex items-center justify-center gap-3 py-2 mb-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition font-semibold text-gray-700"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="text-red-500 text-lg" /> Sign up with Google
              </button>
              <button
                className="w-full flex items-center justify-center gap-3 py-2 mb-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition font-semibold text-gray-700"
                onClick={() => { window.location.href = `${API_URL}/api/auth/github`; }}
              >
                <FaGithub className="text-gray-800 text-lg" /> Sign up with GitHub
              </button>
              <div className="flex items-center my-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="mx-3 text-gray-400 font-medium">OR</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <form className="space-y-4" onSubmit={handleRegister}>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={registerName}
                    onChange={e => setRegisterName(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={registerEmail}
                    onChange={e => setRegisterEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="relative">
                  <FaKey className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type={showRegPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={registerPassword}
                    onChange={e => setRegisterPassword(e.target.value)}
                    disabled={loading}
                    onPaste={e => e.preventDefault()}
                    onCopy={e => e.preventDefault()}
                  />
                  <button type="button" className="absolute right-3 top-2.5 text-gray-400" onClick={() => setShowRegPassword(v => !v)}>
                    {showRegPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                  </button>
                </div>
                <div className="relative">
                  <FaKey className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type={showRegConfirm ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={registerConfirm}
                    onChange={e => setRegisterConfirm(e.target.value)}
                    disabled={loading}
                    onPaste={e => e.preventDefault()}
                    onCopy={e => e.preventDefault()}
                  />
                  <button type="button" className="absolute right-3 top-2.5 text-gray-400" onClick={() => setShowRegConfirm(v => !v)}>
                    {showRegConfirm ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                  </button>
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="accent-purple-500 rounded" required /> I agree to the Terms & Conditions
                </label>
                <button type="submit" className="w-full py-2 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 transition" disabled={loading}>
                  {loading ? 'Registering...' : 'Register'}
                </button>
              </form>
              <p className="mt-6 text-center text-gray-500">Already have an account?{' '}
                <button className="text-blue-500 hover:underline font-semibold" onClick={() => setMode('login')}>Login</button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthDualScreen;
