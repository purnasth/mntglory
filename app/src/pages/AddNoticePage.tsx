import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = ['Events', 'Announcements', 'Exam', 'Holiday', 'Others'];

const schema = yup.object().shape({
  title: yup.string().required('Title is required*'),
  content: yup.string().required('Content is required*'),
  category: yup.string().required('Please select a category*'),
  date: yup.string().required('Date is required*'),
});

interface NoticeFormData {
  title: string;
  content: string;
  category: string;
  date: string;
}

const AddNoticePage: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NoticeFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
    },
  });

  if (loading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const onSubmit = async (data: NoticeFormData) => {
    try {
      await api.post('/notice', data);
      toast.success('Notice added successfully!');
      await queryClient.invalidateQueries({
        predicate: (query) => String(query.queryKey[0]).startsWith('notices'),
      });
      reset();
      navigate('/notice');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to add notice');
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center p-0">
      <div className="w-full max-w-lg">
        <nav className="mb-4 text-sm text-dark/50">
          <Link to="/notice" className="transition-colors hover:text-primary">
            Notice
          </Link>
          <span className="mx-2">/</span>
          <span className="text-dark">Add Notice</span>
        </nav>
        <div className="rounded-xl border border-dark/10 bg-light/30 p-8 shadow-md md:p-12">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-dark">Add Notice</h3>
            <p className="mt-1 text-sm text-dark/60">
              Publish a new notice to the board
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Title */}
            <div className="relative mb-5">
              <label htmlFor="title" className="block text-dark/60">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                {...register('title')}
                type="text"
                id="title"
                placeholder="Notice title"
                className={`w-full rounded-none border-b bg-transparent py-2 text-base text-dark focus:border-dark focus:outline-none ${
                  errors.title ? 'border-red-500' : 'border-dark/20'
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="relative mb-5">
              <label htmlFor="content" className="block text-dark/60">
                Content <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('content')}
                id="content"
                rows={5}
                placeholder="Write the notice content..."
                className={`w-full resize-none rounded-md border bg-transparent p-3 text-base text-dark focus:border-dark focus:outline-none ${
                  errors.content ? 'border-red-500' : 'border-dark/20'
                }`}
              />
              {errors.content && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.content.message}
                </p>
              )}
            </div>

            {/* Date */}
            <div className="relative mb-5">
              <label htmlFor="date" className="block text-dark/60">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                {...register('date')}
                type="date"
                id="date"
                className={`w-full rounded-none border-b bg-transparent py-2 text-base text-dark focus:border-dark focus:outline-none ${
                  errors.date ? 'border-red-500' : 'border-dark/20'
                }`}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.date.message}
                </p>
              )}
            </div>

            {/* Category radio buttons */}
            <div className="relative mb-5">
              <label className="mb-2 block text-dark/60">
                Category <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map((cat) => (
                  <label
                    key={cat}
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-dark/10 px-4 py-2 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                  >
                    <input
                      {...register('category')}
                      type="radio"
                      value={cat}
                      className="accent-primary"
                    />
                    <span className="text-sm text-dark">{cat}</span>
                  </label>
                ))}
              </div>
              {errors.category && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => navigate('/notice')}
                className="transition-300 w-full rounded-xl border border-dark/20 bg-transparent px-6 py-2.5 font-semibold text-dark/60 hover:border-dark hover:text-dark"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`transition-300 w-full rounded-xl border border-primary bg-primary px-6 py-2.5 font-semibold text-light hover:bg-light hover:text-primary ${
                  isSubmitting ? 'cursor-not-allowed opacity-75' : ''
                }`}
              >
                {isSubmitting ? 'Publishing...' : 'Publish Notice'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddNoticePage;
