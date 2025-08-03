
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import App from './App.tsx';
import AuthDualScreen from './pages/AuthDualScreen';
import ForgotPassword from './pages/ForgotPassword';
import NavBar from './components/NavBar';
import { NotificationProvider } from './components/NotificationContext';
import Premium from './pages/Premium.tsx';
import LearnPrompt from './pages/LearnPrompt.tsx';
import Courses from './pages/Courses';
import Contest from './pages/Contest.tsx';
import About from './pages/About.tsx';
import Playground from './pages/Playground';
import './index.css';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout component to include NavBar on main pages only
const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Auth routes - no NavBar */}
          <Route path="/login" element={<AuthDualScreen />} />
          <Route path="/signup" element={<AuthDualScreen />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Main content routes with NavBar */}
          <Route element={<Layout />}> 
            <Route path="/" element={<App />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/learn" element={<LearnPrompt />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/courses/:courseId" element={<Courses />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/about" element={<About />} />
          </Route>

          {/* 404 Not Found fallback */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-2xl font-bold text-gray-500">404 - Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </NotificationProvider>
  </StrictMode>
);