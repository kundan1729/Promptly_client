
// ForgotPassword.tsx - Password reset request page
import React, { useState } from 'react';

import Input from '../components/Input'; // Custom input component
import PrimaryButton from '../components/PrimaryButton'; // Custom button component
import Notification from '../components/Notification'; // Custom notification/alert
import NavBar from '../components/NavBar'; // Reusable navigation bar

// Regex for validating email format
const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// ForgotPassword component
const ForgotPassword: React.FC = () => {
  // State for email input
  const [email, setEmail] = useState('');
  // State for loading spinner
  const [loading, setLoading] = useState(false);
  // State for notification message
  const [notification, setNotification] = useState<string | null>(null);
  // State for submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate email format
    if (!emailRegex.test(email)) {
      setNotification('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      // Send password reset request to backend
  // Single source of truth for API URL
  const API_URL = import.meta.env.VITE_API_URL || '';
  await fetch(`${API_URL}/api/auth/forgot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      // Show notification regardless of backend response (security)
      setNotification("If your email is registered, you'll receive a reset link shortly.");
      setSubmitted(true);
      setEmail('');
    } catch {
      // Show same notification on error (do not reveal user existence)
      setNotification("If your email is registered, you'll receive a reset link shortly.");
      setSubmitted(true);
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  // Render password reset form and notification
  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-purple-700">Reset Your Password</h2>
        <p className="text-gray-600 mb-6">Enter your account email, and we'll send you a reset link.</p>
        {notification && (
          <Notification type="success" message={notification} onClose={() => setNotification(null)} />
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading || submitted}
          />
          <PrimaryButton type="submit" loading={loading} disabled={loading || submitted}>
            Send Reset Link
          </PrimaryButton>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
