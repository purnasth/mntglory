import MasterSlider from './ui/MasterSlider';

import slider1 from '../assets/img/slider/62.jpg';
import slider2 from '../assets/img/slider/37.jpg';

const sliderImages = [
  {
    image:
      // 'https://wallpapercave.com/wp/wp4299473.jpg',
      slider2,
    // 'https://mntglory.saksham.edu.np/images/mgs.webp',
    title: '28th Anniversary & Parents Day',
    description: 'Description 1',
  },
  {
    image: slider1,
    title: 'Tihar Celebration 2078',
    description: 'Description 1',
  },
];

const AboutIntro = () => {
  return (
    <>
      <main className="border-t border-dark/20 px-0">
        <div className="container mb-16 text-center">
          <h2 className="text-2xl font-medium capitalize">
            Quality in Education & Character building is our motto.
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-justify opacity-80 md:text-center">
            We believe in a familiar and joyful learning process. We ensure that
            your kid will get the best guardianship. Since its establishment in
            2052, it has been playing a great role in enhancing the career and
            educational status of the students.
          </p>
        </div>
        <MasterSlider slides={sliderImages} hasContent={true} />
      </main>
    </>
  );
};

export default AboutIntro;
