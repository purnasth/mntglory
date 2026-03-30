import React, { useCallback, useRef, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

const schema = yup.object().shape({
  name: yup.string().required('Name is required*'),
  position: yup.string().required('Position is required*'),
  description: yup.string().required('Description is required*'),
  socials: yup.array().of(
    yup.object().shape({
      title: yup.string().required('Title is required'),
      link: yup.string().required('Link is required'),
    }),
  ),
});

interface TeamFormData {
  name: string;
  position: string;
  description: string;
  socials: { title: string; link: string }[];
}

const SOCIAL_OPTIONS = ['Facebook', 'LinkedIn', 'Email'];

const AddTeamPage: React.FC = () => {
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
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TeamFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      socials: [{ title: 'Facebook', link: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socials',
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
    setPreview(URL.createObjectURL(selected));
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

  if (loading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const onSubmit = async (data: TeamFormData) => {
    const formData = new FormData();
    if (file) formData.append('image', file);
    formData.append('name', data.name);
    formData.append('position', data.position);
    formData.append('description', data.description);
    formData.append(
      'socials',
      JSON.stringify(data.socials.filter((s) => s.link.trim())),
    );

    try {
      await api.post('/team', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Team member added successfully!');
      await queryClient.invalidateQueries({
        predicate: (query) => String(query.queryKey[0]).startsWith('team'),
      });
      reset();
      removeFile();
      navigate('/team');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || 'Failed to add team member',
        );
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center p-0">
      <div className="w-full max-w-lg">
        <nav className="mb-4 text-sm text-dark/50">
          <Link to="/team" className="transition-colors hover:text-primary">
            Team
          </Link>
          <span className="mx-2">/</span>
          <span className="text-dark">Add Member</span>
        </nav>
        <div className="rounded-xl border border-dark/10 bg-light/30 p-8 shadow-md md:p-12">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-dark">
              Add Team Member
            </h3>
            <p className="mt-1 text-sm text-dark/60">
              Add a new member to the team
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="relative mb-5">
              <label htmlFor="name" className="block text-dark/60">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                placeholder="Full name"
                className={`w-full rounded-none border-b bg-transparent py-2 text-base text-dark focus:border-dark focus:outline-none ${
                  errors.name ? 'border-red-500' : 'border-dark/20'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Position */}
            <div className="relative mb-5">
              <label htmlFor="position" className="block text-dark/60">
                Position <span className="text-red-500">*</span>
              </label>
              <input
                {...register('position')}
                type="text"
                id="position"
                placeholder="e.g. HOD - Science"
                className={`w-full rounded-none border-b bg-transparent py-2 text-base text-dark focus:border-dark focus:outline-none ${
                  errors.position ? 'border-red-500' : 'border-dark/20'
                }`}
              />
              {errors.position && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.position.message}
                </p>
              )}
            </div>

            {/* Profile Picture */}
            <div className="relative mb-5">
              <label className="mb-2 block text-dark/60">Profile Picture</label>

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
                    Drag & drop a photo here, or{' '}
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

            {/* Description */}
            <div className="relative mb-5">
              <label htmlFor="description" className="block text-dark/60">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('description')}
                id="description"
                rows={4}
                placeholder="Write about the team member..."
                className={`w-full resize-none rounded-md border bg-transparent p-3 text-base text-dark focus:border-dark focus:outline-none ${
                  errors.description ? 'border-red-500' : 'border-dark/20'
                }`}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Socials */}
            <div className="relative mb-5">
              <label className="mb-2 block text-dark/60">Social Links</label>
              <div className="space-y-3">
                {fields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2">
                    <select
                      {...register(`socials.${index}.title`)}
                      className="rounded-md border border-dark/20 bg-transparent px-3 py-2 text-sm focus:border-dark focus:outline-none"
                    >
                      {SOCIAL_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <input
                      {...register(`socials.${index}.link`)}
                      type="text"
                      placeholder="Link or email"
                      className="flex-1 rounded-none border-b border-dark/20 bg-transparent py-2 text-sm text-dark focus:border-dark focus:outline-none"
                    />
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <FiTrash2 />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {fields.length < 3 && (
                <button
                  type="button"
                  onClick={() => append({ title: 'Facebook', link: '' })}
                  className="mt-2 flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <FiPlus /> Add social link
                </button>
              )}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => navigate('/team')}
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
                {isSubmitting ? 'Adding...' : 'Add Member'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddTeamPage;
