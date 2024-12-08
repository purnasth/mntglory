import React from 'react';
import { Link } from 'react-router-dom';
import { TbCalendarQuestion } from 'react-icons/tb';

const eventsContent = [
  {
    title: 'Research oriented Excursion/Field Visit',
    description:
      'The motto goes well as "Learning by Doing". So does MGS, with this lively and worthy motto. For progressive learning, MGS includes the Glorians with multiple excursions, field visits, and community services. To nurture and garner research-based knowledge and displace it into wisdom and conscience, MGS never shakes its leg and allows the learners to ponder in the lap of raw nature.',
    image: 'https://mntglory.saksham.edu.np/images/08.webp',
  },
  {
    title: 'Science & Technology based activities',
    description:
      'MGS boasts the technological platform as the online segments, internet-based teaching and learning. We boast the enhanced technological microcosm where our learner habitat themselves to mobilize their digital knowledge through smart boards, computer lounges, and digital parlors to mobilize their technologically advanced brain.',
    image: 'https://mntglory.saksham.edu.np/images/25.webp',
  },

  {
    title: 'Sports Events & activities',
    description:
      "Equipping the students and learners mentally, physically, socially, psychologically sound, and conscious, our institution has braced the utmost duty of encouraging them in sports and co-curricular activities. Since its establishment, MGS has braced and shouldered this noble task of imparting an abundance of sports facilities to the learners. Sports and activities have become crucial and pivotal at our mega house. So, it's a fat 'Yes' we do inherit this legacy from the decades around.",
    image: 'https://mntglory.saksham.edu.np/images/34.webp',
  },
  {
    title: 'Cultural Shows & Programs',
    description:
      'Diverse ethnic and even tribal groups are fostered in our Glorian community in a serene bond of trust. The educational platform of MGS time and again creates the human chain to depict the cultural and religious showcase via costume and cultural exhibition. MGS facilitates the Glorians to trust the hand of diverse color and watch out the back in need. It creates the bond/connection between the learners proudly enjoying their cultural attire respecting the exotic and alien parameters of co-existing dwellers.',
    image: 'https://mntglory.saksham.edu.np/images/gallery/program/51.webp',
  },
];

const Events: React.FC = () => {
  return (
    <main className="border-y border-dark/20 bg-light">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-16">
        <div className="top-32 space-y-4 md:sticky md:col-span-1 md:max-h-fit">
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
          <div className="flex items-center gap-8 justify-between pt-5">
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
              to="#"
              className={`transition-1000 pointer-events-auto mt-2 inline-flex items-center gap-2 border border-dark/50 px-6 py-2 capitalize text-dark shadow backdrop-blur-sm hover:bg-dark/20 md:mt-12`}
              aria-label="Meeting"
              target="_blank"
            >
              View all events
              <TbCalendarQuestion className="animate-bounce text-base" />
            </Link>
          </div>
        </div>
        <div className="space-y-14 md:col-span-2 md:space-y-14">
          {eventsContent.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-60 w-full object-cover md:h-[32rem]"
              />
              {/* <div className="mx-auto max-w-2xl -translate-y-1/2 space-y-5 bg-light p-8"> */}
              <div className="space-y-2 p-2 md:space-y-5 md:p-10">
                <h5 className="font-body text-2xl capitalize md:text-4xl">
                  {service.title}
                </h5>
                <p className="text-pretty text-sm opacity-80 md:text-base">
                  {service.description}
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
