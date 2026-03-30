// TODO: redesign page and refactor code and some fractions are ai-generated and not tested.

import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { HiArrowLongLeft } from 'react-icons/hi2';
import useFetchAPI from '../hooks/useFetchAPI';
import SmallGallery from '../components/ui/SmallGallery';
import MasterSlider from '../components/ui/MasterSlider';
import SkeletonLoader from '../components/SkeletonLoader';
import { EventData } from '../interfaces/types';
import { findEventBySlug, formatEventDate } from '../utils/eventUtils';

const EventDetailsPage: React.FC = () => {
  const { eventTitle } = useParams<{ eventTitle: string }>();
  const navigate = useNavigate();

  const {
    data: eventsContents,
    isLoading,
    isError,
  } = useFetchAPI<EventData[]>('events', '/api/events.json');

  // Find the specific event using utility function
  const event =
    eventTitle && eventsContents
      ? findEventBySlug(eventsContents, eventTitle)
      : undefined;

  if (isLoading) {
    return (
      <main className="py-8 md:py-16">
        <SkeletonLoader />
      </main>
    );
  }

  if (isError) {
    console.error('Error fetching events:', isError);
    return (
      <main className="py-8 md:py-16">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-600">
            Error Loading Event
          </h1>
          <p className="mt-2 text-gray-600">
            Failed to load event details. Please try again later.
          </p>
          <Link
            to="/events"
            className="mt-4 inline-flex items-center gap-2 text-primary hover:text-blue-700"
          >
            <HiArrowLongLeft className="text-lg" />
            Back to Events
          </Link>
        </div>
      </main>
    );
  }

  if (!event) {
    return (
      <main className="py-8 md:py-16">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Event Not Found</h1>
          <p className="mt-2 text-gray-600">
            The event you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            to="/events"
            className="mt-4 inline-flex items-center gap-2 text-primary hover:text-blue-700"
          >
            <HiArrowLongLeft className="text-lg" />
            Back to Events
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-8 md:py-16">
      {/* Back Navigation */}
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-primary transition-colors duration-200 hover:text-blue-700"
        >
          <BiArrowBack className="text-lg" />
          Back
        </button>
      </div>

      {/* Event Content */}
      <article className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-medium leading-tight md:text-3xl lg:text-4xl">
              {event.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {event.category}
              </span>
              <time className="text-sm text-gray-500 md:text-sm">
                {formatEventDate(event.date)}
              </time>
            </div>
          </div>
        </header>

        {/* Image Slider */}
        {event.images.length > 0 && (
          <div className="mb-8">
            <MasterSlider
              slides={event.images.map((img, index) => ({
                image: img.src,
                title: img.alt || `${event.title} - Image ${index + 1}`,
              }))}
              hasContent={true}
              sizeClassName="relative flex h-64 sm:h-80 md:h-96 lg:h-[32rem] items-center justify-center"
              titleClassName="text-2xl"
            />
          </div>
        )}

        {/* Content */}
        <div className="mb-12">
          <div className="prose prose-lg max-w-none text-gray-700">
            {event.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-justify leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {event.images.length > 1 && (
          <section className="mb-12">
            <h2 className="x mb-6 text-xl">Event Gallery</h2>
            <SmallGallery images={event.images} />
          </section>
        )}

        {/* Navigation */}
        <footer className="border-t border-gray-200 p-0 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 rounded-lg bg-light px-3 py-2 text-sm text-primary transition-all duration-200 hover:bg-primary hover:text-white"
            >
              <HiArrowLongLeft className="text-lg" />
              View All Events
            </Link>

            <span className="text-sm text-gray-500">
              Published on {formatEventDate(event.date)}
            </span>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default EventDetailsPage;
