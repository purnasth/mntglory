import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.webp';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Enter your email*'),
  password: yup.string().required('Enter your password*'),
});

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await api.post('/auth/login', data);
      const { user } = response.data;
      login(user);
      toast.success('Login successful!');
      setTimeout(() => navigate('/'), 500);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Login failed');
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <>
      <main className="flex min-h-[80vh] items-center justify-center p-0">
        <div className="w-full max-w-md rounded-xl border border-dark/10 bg-light/30 p-8 shadow-md md:p-12">
          <div className="mb-8 flex flex-col items-center gap-4">
            <img
              src={logo}
              alt="Mount Glory"
              className="size-16 object-contain"
              draggable="false"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-dark">Admin Login</h3>
              <p className="mt-1 text-sm text-dark/60">
                Sign in to access the admin panel
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-5">
              <label htmlFor="email" className="block text-dark/60">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                autoComplete="email"
                className={`w-full rounded-none border-b bg-transparent py-2 text-base text-dark focus:border-dark focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-dark/20'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative mb-5">
              <label htmlFor="password" className="block text-dark/60">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  className={`w-full rounded-none border-b bg-transparent py-2 pr-10 text-base text-dark focus:border-dark focus:outline-none ${
                    errors.password ? 'border-red-500' : 'border-dark/20'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 px-2 text-sm text-dark/40 hover:text-dark"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`transition-300 mt-4 w-full rounded-xl border border-primary bg-primary px-6 py-2.5 font-semibold text-light hover:bg-light hover:text-primary ${
                isSubmitting ? 'cursor-not-allowed opacity-75' : ''
              }`}
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
