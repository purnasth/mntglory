import { ourTeamContents } from '../constants/data';

import Hero from '../components/Hero';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import AboutIntro from '../components/AboutIntro';
import MasterContent from '../components/MasterContent';
import InformationForm from '../components/InformationForm';
import { Link } from 'react-router-dom';

const testimonialsContent = {
  id: 'testimonials',
  title: 'Testimonials',
  heading: "What our students' & parents' say about the Mount Glory",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  members: [
    {
      id: 1,
      name: 'Purna Shrestha',
      position: 'Batch 2075',
      image: 'https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif',
      description:
        'My student career at Mount Glory was a memorable journey. The school environment and the teachers were very supportive & assists you know your potential. Today I am a successful Software Engineer and I owe my success to Mount Glory Family.',
    },
    {
      id: 2,
      name: 'Dr. Parameshwor Poudel',
      position: 'Batch 2063',
      image: '',
      description:
        "School is what kind of grows you into the person you are. Similarly, Mount Glory is a great stride for my journey, a single step into it, taught me different ways of looking at world and learning. A step out of school and pavement through St. Xavier's through Chitwan Medical College to present is due to the discrete framework shaped by the Principal Sir, mam, teachers and mentors of my school. Sincere gratitude to my teachers, my path finders who always supported, encouraged me in my every aspect of life, hurdles of life. Thank you again to Mount Glory and every bit of humanity attached to it. A proud Mount Glorian.",
    },
    {
      id: 3,
      name: 'Deena Maharjan',
      position: 'Batch 2070',
      image: '',
      description:
        'Early childhood education is the key to the betterment of society. Having studied in Mount Glory from nursery to Grade 10, I believe I am the luckiest student of my school because school has been my greatest influence in my current study, my current job and my bond with the society. Mount Glory has taught me to become a bold person, a woman filled with confidence and a dedication to work hard all life. My school was not only concerned with curriculum only but had provided me the opportunity of every form of extra-curriculum activities to winning inter-school competitions. The person I am today is because of my schooling that taught my heart for motivation and brain for leadership. I thank my school for everything that I have achieved till date.',
    },
    {
      id: 4,
      name: 'Jugal Shrestha',
      position: 'Batch 2075',
      image: '',
      description:
        'Mount Glory has been a great platform for me to grow and develop my skills. The teachers are very supportive and always encourage us to do our best. I am very grateful to be a part of this school and I am proud to be a Mount Glorian.',
    },
    {
      id: 5,
      name: 'Shradha Kapali',
      position: 'Batch 2074',
      image: '',
      description:
        'Mount Glory School has been a second home to me. The school has provided me with a platform to grow and develop my skills. The teachers are very supportive and always encourage us to do our best. The school has a very friendly environment and the teachers are always there to help us. I am very grateful to be a part of this school and I am proud to be a Mount Glorian.',
    },
    {
      id: 6,
      name: 'Sauravi Bhatta',
      position: 'Batch 2072',
      image: '',
      description:
        "Growing up as a Glorian is something I'll treasure throughout my life, how a little naive mind was brought up to be one of the brightest is the fact that this school has always been the corner stone in my 13 long year's journey. The sound environment aided by the wonderful mentors forever made the teaching and learning process convenient. I hope this institution remains a medium of transfiguration for upcoming years and more. Regards to all the Mount Glory family!",
    },
  ],
};

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Intro /> */}
      <AboutIntro />
      <main className="px-4">
        <h3 className="mb-8 max-w-5xl text-left text-xl capitalize leading-snug sm:text-2xl md:mb-10 md:text-4xl lg:text-6xl lg:leading-snug xl:ml-8">
          {ourTeamContents.heading}
        </h3>
        <MasterContent content={ourTeamContents} />
        <div className="-z-10 flex -translate-y-4 flex-col items-center justify-center">
          <div className="mx-auto h-28 w-px bg-primary/50" />
          <Link
            to="/team"
            className="transition-300 group flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-light px-4 py-2 text-sm text-primary hover:bg-primary hover:text-light md:text-base"
          >
            View all team members
          </Link>
        </div>
      </main>
      <Events />
      <section className="px-2">
        <Gallery limit={12} />
      </section>
      <main className="px-4">
        <h3 className="mb-8 max-w-5xl text-left text-xl capitalize leading-snug sm:text-2xl md:mb-10 md:text-4xl lg:text-6xl lg:leading-snug xl:ml-8">
          {testimonialsContent.heading}
        </h3>
        <MasterContent content={testimonialsContent} />
      </main>
      <InformationForm />
    </>
  );
};

export default Home;
