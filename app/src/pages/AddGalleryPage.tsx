import React, { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { EventCategory } from '../constants/enums';

const CATEGORIES = Object.values(EventCategory).filter(
  (v) => v !== EventCategory.ALL,
);

const schema = yup.object().shape({
  alt: yup.string().required('Alt text is required*'),
  category: yup.string().required('Please select a category*'),
});

interface GalleryFormData {
  alt: string;
  category: string;
}

const AddGalleryPage: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GalleryFormData>({
    resolver: yupResolver(schema),
  });

  const handleFile = (selected: File) => {
    if (!selected.type.startsWith('image/')) {
      setFileError('Only image files are allowed');
      return;
    }
    if (selected.size > 10 * 1024 * 1024) {
      setFileError('File size must be under 10 MB');
      return;
    }
    setFileError('');
    setFile(selected);
    const url = URL.createObjectURL(selected);
    setPreview(url);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleFile(dropped);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  if (loading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) handleFile(selected);
  };

  const removeFile = () => {
    setFile(null);
    setPreview('');
    setFileError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const onSubmit = async (data: GalleryFormData) => {
    if (!file) {
      setFileError('Please select an image*');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('alt', data.alt);
    formData.append('category', data.category);

    try {
      await api.post('/gallery', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Image added to gallery!');
      await queryClient.invalidateQueries({ queryKey: ['gallery-all'] });
      reset();
      removeFile();
      navigate('/gallery');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to add image');
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center p-0">
      <div className="w-full max-w-lg">
        <nav className="mb-4 text-sm text-dark/50">
          <Link to="/gallery" className="transition-colors hover:text-primary">
            Gallery
          </Link>
          <span className="mx-2">/</span>
          <span className="text-dark">Add Image</span>
        </nav>
        <div className="rounded-xl border border-dark/10 bg-light/30 p-8 shadow-md md:p-12">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-dark">
              Add Gallery Image
            </h3>
            <p className="mt-1 text-sm text-dark/60">
              Add a new image to the gallery
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* File drop zone */}
            <div className="relative mb-5">
              <label className="mb-2 block text-dark/60">
                Image <span className="text-red-500">*</span>
              </label>

              {!preview ? (
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => fileInputRef.current?.click()}
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-colors ${
                    isDragging
                      ? 'border-primary bg-primary/5'
                      : fileError
                        ? 'border-red-500'
                        : 'border-dark/20 hover:border-primary'
                  }`}
                >
                  <span className="mb-2 text-3xl text-dark/30">&#8681;</span>
                  <p className="text-sm text-dark/60">
                    Drag & drop an image here, or{' '}
                    <span className="font-semibold text-primary">browse</span>
                  </p>
                  <p className="mt-1 text-xs text-dark/40">
                    PNG, JPG, WEBP up to 10 MB
                  </p>
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-xl border border-dark/10">
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-48 w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeFile}
                    className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-dark/60 text-sm text-light hover:bg-red-500"
                  >
                    ✕
                  </button>
                  <p className="truncate px-3 py-2 text-xs text-dark/60">
                    {file?.name}
                  </p>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
              {fileError && (
                <p className="mt-1 text-sm text-red-500">{fileError}</p>
              )}
            </div>

            {/* Alt text */}
            <div className="relative mb-5">
              <label htmlFor="alt" className="block text-dark/60">
                Alt Text <span className="text-red-500">*</span>
              </label>
              <input
                {...register('alt')}
                type="text"
                id="alt"
                placeholder="Describe the image"
                className={`w-full rounded-none border-b bg-transparent py-2 text-base text-dark focus:border-dark focus:outline-none ${
                  errors.alt ? 'border-red-500' : 'border-dark/20'
                }`}
              />
              {errors.alt && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.alt.message}
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
                onClick={() => navigate('/gallery')}
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
                {isSubmitting ? 'Adding...' : 'Add Image'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddGalleryPage;
