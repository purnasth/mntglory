import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Navigate } from 'react-router-dom';

import logo from '../assets/logo.webp';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const navigate = useNavigate();

  if (loading) return null;

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = async () => {
    await logout();
    toast.success('Logged out successfully!');
    setTimeout(() => navigate('/'), 500);
  };

  const profileDetails = [
    { label: 'User ID', value: `#${user.id}` },
    { label: 'Full Name', value: user.name },
    { label: 'Email', value: user.email },
  ];

  return (
    <>
      <main className="flex min-h-[80vh] items-center justify-center p-0">
        <div className="w-full max-w-lg rounded-xl border border-dark/10 bg-light/30 p-8 shadow-md md:p-12">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="flex size-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-light">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-dark">{user.name}</h3>
              <p className="mt-1 text-sm text-dark/60">{user.email}</p>
            </div>
          </div>

          {/* Details */}
          <div className="mb-8 space-y-4">
            {profileDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center justify-between border-b border-dark/10 pb-3"
              >
                <span className="text-sm text-dark/60">{detail.label}</span>
                <span className="text-sm font-medium text-dark">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="mb-8 flex items-center gap-3 rounded-lg bg-green-50 px-4 py-3">
            <div className="size-2.5 rounded-full bg-green-500" />
            <span className="text-sm text-green-700">
              Authenticated &mdash; Session active
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/')}
              className="transition-300 w-full rounded-xl border border-primary bg-primary px-6 py-2.5 font-semibold text-light hover:bg-light hover:text-primary"
            >
              Go to Home
            </button>
            <button
              onClick={handleLogout}
              className="transition-300 w-full rounded-xl border border-red-500 bg-transparent px-6 py-2.5 font-semibold text-red-500 hover:bg-red-500 hover:text-light"
            >
              Logout
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-dark/40">
            <img
              src={logo}
              alt="Mount Glory"
              className="size-5 object-contain"
              draggable="false"
            />
            Mount Glory Admin Panel
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
