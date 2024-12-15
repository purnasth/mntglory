import React, { useState } from 'react';
import { noticeContents } from '../constants/data';

type NoticeType = {
  title: string;
  content: string;
  date: string;
  category: string;
};

const categories = [
  'All',
  'Events',
  'Announcements',
  'Exam',
  'Holiday',
  'Others',
];
const itemsPerPage = 9;

const Notice: React.FC = () => {
  const [expandedNotice, setExpandedNotice] = useState<NoticeType | null>(null);
  const [filter, setFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  const [category, setCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredNotices = noticeContents
    .filter(
      (notice: NoticeType) =>
        (category === 'All' || notice.category === category) &&
        (notice.title.toLowerCase().includes(filter.toLowerCase()) ||
          notice.content.toLowerCase().includes(filter.toLowerCase())),
    )
    .sort((a: NoticeType, b: NoticeType) =>
      sortBy === 'date'
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : a.title.localeCompare(b.title),
    );

  // Pagination logic
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const openModal = (notice: NoticeType) => setExpandedNotice(notice);
  const closeModal = () => setExpandedNotice(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        School Notices
      </h1>

      {/* Controls */}
      <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search notices..."
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/3"
          onChange={(e) => setFilter(e.target.value)}
        />

        <select
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/4"
          onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
        >
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
        </select>

        <select
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/4"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Notices */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedNotices.map((notice, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-700">
                {notice.title}
              </h2>
              <span className="text-sm text-gray-500">
                {new Date(notice.date).toDateString()}
              </span>
            </div>

            <p className="mb-4 line-clamp-3 text-gray-600">{notice.content}</p>

            <button
              onClick={() => openModal(notice)}
              className="font-medium text-blue-500 hover:text-blue-700"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 rounded-full px-4 py-2 ${
              currentPage === i + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {expandedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md rounded-lg bg-white p-8">
            <h2 className="mb-4 text-2xl font-bold">{expandedNotice.title}</h2>
            <p className="mb-4 text-gray-700">{expandedNotice.content}</p>
            <p className="mb-4 text-gray-500">
              Date: {new Date(expandedNotice.date).toDateString()}
            </p>
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;
