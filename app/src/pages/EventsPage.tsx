import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi';
import { TbSortDescending } from 'react-icons/tb';

import { EventData } from '../interfaces/types';

import { EventCategory, getAllCategories } from '../constants/enums';

import useFetchAPI from '../hooks/useFetchAPI';

import { getEventPath, formatEventDate } from '../utils/eventUtils';

import ReadMoreLink from '../components/ui/ReadMoreLink';

const itemsPerPage = 8;

const EventsPage: React.FC = () => {
  const {
    data: eventsContents,
    isLoading,
    isError,
  } = useFetchAPI<EventData[]>('events', '/api/events.json');

  const [filter, setFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  const [category, setCategory] = useState<string>(EventCategory.ALL);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredEvents =
    eventsContents
      ?.filter((events) => {
        const matchesCategory =
          category === EventCategory.ALL || events.category === category;
        const matchesSearch =
          events.title?.toLowerCase().includes(filter.toLowerCase()) ||
          events.content?.toLowerCase().includes(filter.toLowerCase());

        return matchesCategory && matchesSearch; // Check conditions
      })
      .sort((a, b) =>
        sortBy === 'date'
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : a.title.localeCompare(b.title),
      ) || [];

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <main className="py-8 md:py-16">
      <h1 className="mb-4 max-w-5xl text-left text-xl capitalize leading-snug sm:text-2xl md:mb-12 md:text-4xl lg:text-6xl lg:leading-snug">
        Our events where we showcase the diverse facets of education.
      </h1>

      {/* Search, Sort, and Category Filters */}
      <div className="sticky top-14 z-30 mb-6 flex flex-col gap-2 bg-white py-2 md:top-16 md:flex-row md:items-center md:justify-between md:gap-4 md:py-4">
        <div className="relative max-w-2xl flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-dark" />
          <input
            type="text"
            placeholder="Search events ..."
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
              {getAllCategories().map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <BiCategoryAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-dark" />
          </div>
        </div>
      </div>

      {/* eventss Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <h2 className="col-span-full text-lg text-gray-700">
          <strong className="font-semibold">{filteredEvents.length}</strong>{' '}
          events found.
        </h2>
        {paginatedEvents.map((events, index) => (
          <Link
            to={getEventPath(events)}
            key={index}
            className="group transform rounded-lg border bg-light/30 p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg md:p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-700">
                {events.title}
              </h2>
              <span className="text-sm text-gray-500">
                {formatEventDate(events.date)}
              </span>
            </div>
            {/* <hr className="my-3 border-primary/20" /> */}
            <img
              src={events.images[0].src}
              alt={events.title}
              className="my-4 h-52 w-full rounded-md object-cover md:h-72 xl:h-96"
            />
            <p className="line-clamp-2 text-gray-600">{events.content}</p>
            <ReadMoreLink to={getEventPath(events)} value="Read More" />
          </Link>
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
    </main>
  );
};

export default EventsPage;
