import React from 'react';
import { Link } from 'react-router-dom';
import { TbCalendarQuestion } from 'react-icons/tb';
import useFetchAPI from '../hooks/useFetchAPI';

type Events = {
  title: string;
  content: string;
  date: string;
  images: { src: string; alt: string }[];
  category: string;
};

const Events: React.FC = () => {
  const {
    data: eventsContents,
    isLoading,
    isError,
  } = useFetchAPI<Events[]>('events', '/api/events.json');

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <main className="border-y border-dark/20 bg-light">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-16">
        <div className="top-32 space-y-4 text-primary lg:sticky lg:col-span-1 lg:max-h-fit">
          {/* <span className="text-sm uppercase opacity-60 md:text-base">
            What we do
          </span> */}
          <h3 className="text-4xl md:text-7xl">Latest Events</h3>
          <p className="text-pretty text-sm opacity-80 md:text-base">
            From captivating excursions in Pokhara to thrilling adventures at
            Whoopee Land, technological advancements, vibrant cultural
            showcases, and sports triumphs, our recent events showcase the
            diverse facets of education at MGS. Stay tuned for more updates on
            our dynamic and enriching educational landscape!
          </p>
          <div className="flex items-center gap-16 pt-5 lg:justify-between">
            <div className="flex flex-col items-center gap-4">
              <h5 className="text-3xl font-bold">100%</h5>
              <p className="text-xs md:text-xs xl:text-base">Education</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h5 className="text-3xl font-bold">100%</h5>
              <p className="text-xs md:text-xs xl:text-base">Leadership</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h5 className="text-3xl font-bold">100%</h5>
              <p className="text-xs md:text-xs xl:text-base">Success</p>
            </div>
          </div>
          <div>
            <Link
              to="/events"
              className={`transition-300 group mt-12 flex w-max items-center gap-2 rounded-lg border border-primary bg-primary px-5 py-2 text-sm text-light hover:bg-primary/20 hover:text-primary md:text-base`}
              aria-label="Events"
            >
              View all events
              <TbCalendarQuestion className="animate-bounce text-base" />
            </Link>
          </div>
        </div>
        <div className="space-y-5 sm:space-y-14 md:col-span-2 md:space-y-14">
          {eventsContents &&
            eventsContents.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white"
              >
                <img
                  src={service.images[0].src}
                  alt={service.title}
                  className="h-60 w-full object-cover md:h-[32rem]"
                />
                {/* <div className="mx-auto max-w-2xl -translate-y-1/2 space-y-5 bg-light p-8"> */}
                <div className="space-y-2 p-6 md:space-y-5 md:p-10">
                  <h5 className="font-body text-2xl capitalize md:text-4xl">
                    {service.title}
                  </h5>
                  <p className="text-pretty text-sm opacity-80 md:text-base">
                    {service.content}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Events;
