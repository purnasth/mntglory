import React, { useState } from 'react';
import { TbSortDescending } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi';
import { TfiClose } from 'react-icons/tfi';
import useFetchAPI from '../hooks/useFetchAPI';

type EventType = {
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
const itemsPerPage = 18;

const EventsPage: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<EventType | null>(null);
  const [filter, setFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  const [category, setCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Use the reusable API fetch hook
  const {
    data: eventsContents,
    isLoading,
    isError,
  } = useFetchAPI<EventType[]>('events', '/api/events.json');

  if (isLoading) return <div className="py-10 text-center">Loading...</div>;
  if (isError)
    return (
      <div className="py-10 text-center text-red-500">
        Failed to fetch events.
      </div>
    );

  // Filter and sort logic
  const filteredEvents =
    eventsContents
      ?.filter((events) => {
        const matchesCategory =
          category === 'All' || events.category === category;
        const matchesSearch =
          events.title?.toLowerCase().includes(filter.toLowerCase()) ||
          events.content?.toLowerCase().includes(filter.toLowerCase());

        console.log(
          'Matches Category:',
          matchesCategory,
          'Matches Search:',
          matchesSearch,
        );

        return matchesCategory && matchesSearch; // Check conditions
      })
      .sort((a, b) =>
        sortBy === 'date'
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : a.title.localeCompare(b.title),
      ) || [];

  // Pagination logic
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const openModal = (notice: EventType) => setExpandedEvent(notice);
  const closeModal = () => setExpandedEvent(null);

  return (
    <main className="py-16">
      <h1 className="mb-12 max-w-5xl text-left text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
        Our events where we showcase the diverse facets of education.
      </h1>

      {/* Search, Sort, and Category Filters */}
      <div className="sticky top-14 z-30 mb-6 flex flex-col gap-4 bg-white py-2 md:top-16 md:flex-row md:items-center md:justify-between md:py-4">
        <div className="relative max-w-2xl flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-dark" />
          <input
            type="text"
            placeholder="Search notices..."
            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-lg focus:outline-none focus:ring-1 focus:ring-primary"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-4 pr-9 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
            </select>
            <TbSortDescending className="absolute right-3 top-1/2 -translate-y-1/2 text-dark" />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <select
              className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-4 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <BiCategoryAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-dark" />
          </div>
        </div>
      </div>

      {/* Notices Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* here please mention how many notices found please */}
        <h2 className="col-span-full text-lg text-gray-700">
          <strong className="font-semibold">{filteredEvents.length}</strong>{' '}
          notices found.
        </h2>
        {paginatedEvents.map((notice, index) => (
          <div
            key={index}
            className="transform rounded-lg border bg-light/30 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-700">
                {notice.title}
              </h2>
              <span className="text-sm text-gray-500">
                {new Date(notice.date).toDateString()}
              </span>
            </div>
            <hr className="my-3 border-primary/20" />
            <p className="line-clamp-3 text-gray-600">{notice.content}</p>
            <button
              onClick={() => openModal(notice)}
              className="a-hover-animation mt-4 font-medium text-primary hover:text-blue-700"
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
            className={`mx-1 size-10 rounded-full transition-colors duration-300 ${
              currentPage === i + 1
                ? 'bg-primary text-light'
                : 'bg-light text-primary hover:bg-primary hover:text-light'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {expandedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-500">
          <div className="relative w-[90%] max-w-2xl animate-fade-in-down rounded-lg bg-white p-6 md:w-full md:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{expandedEvent.title}</h2>
              <hr />
              <p className="text-gray-700">{expandedEvent.content}</p>
              <p className="text-gray-500">
                Date: {new Date(expandedEvent.date).toDateString()}
              </p>
            </div>
            <button
              onClick={closeModal}
              className="absolute right-5 top-6 text-base text-dark"
            >
              <TfiClose />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default EventsPage;
