const aboutPageContents = [
  {
    id: 1,
    title: 'Welcome to Mount Glory School',
    content:
      'Mount Glory excels in mentoring the current generation through a tech-friendly, behavioral, and theoretical platform, fostering a morale-driven environment. Join us for an unrivaled learning experience. We believe in a familiar and joyful learning process. We ensure that your kid will get the best guardianship. Since its establishment in 2052, it has been playing a great role in enhancing the career and educational status of the students Also, we highly encourage our potential students to join Mount Glory for reasonable fee structure and qualified teaching faculties.',
    image: 'https://mntglory.saksham.edu.np/images/mgs.webp',
  },
  {
    id: 2,
    title: 'A Message from Our Founder & Principal',
    content:
      'I, as the founder and principal of Mount Glory, am dedicated to lead our commitment to guiding the current generation with a blend of technology, behavioral insights, and theoretical excellence. Our pedagogical platform, featuring smart boards and virtual classes, ensures the unparalleled development of Glorians, nurturing their potential for future challenges in a tech-friendly environment. Since 2052, we have been dedicated to creating a joyous learning journey, enhancing students educational and career status. Join Mount Glory for a dynamic learning experience with a reasonable fee structure and a team of qualified teaching faculties, setting the path for educational and career success.',
    image: 'https://mntglory.saksham.edu.np/images/07.webp',
  },
];

const AboutUsPage = () => {
  return (
    <>
    <main className="space-y-16 py-16">
      {aboutPageContents.map(({ id, title, content, image }, index) => (
        <div
          key={id}
          className={`flex flex-col items-center gap-12 md:flex-row ${
            index % 2 !== 0 ? '' : 'md:flex-row-reverse'
          }`}
        >
          <div className="md:w-1/2">
            <img
              src={image}
              alt={title}
              className="h-full w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 text-3xl font-medium text-gray-800 md:text-4xl">
              {title}
            </h2>
            <p className="text-pretty text-justify text-lg leading-relaxed text-gray-600 md:text-left">
              {content}
            </p>
          </div>
        </div>
      ))}
    </main>
    </>
  );
};

export default AboutUsPage;
