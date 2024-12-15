import AboutIntro from '../components/AboutIntro';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import InformationForm from '../components/InformationForm';
import MasterContent from '../components/MasterContent';

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

const ourTeamContents = {
  id: 'our-team',
  title: 'Our Team',
  heading: "Meet the MGS Leaders' who are dedicated to your child's success.",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  members: [
    {
      id: 1,
      name: 'Gopal Acharya',
      position: 'Founder/Principal',
      image: 'https://mntglory.saksham.edu.np/images/07.webp',
      description:
        'I, as the founder and principal of Mount Glory, am dedicated to lead our commitment to guiding the current generation with a blend of technology, behavioral insights, and theoretical excellence. Our pedagogical platform, featuring smart boards and virtual classes, ensures the unparalleled development of Glorians, nurturing their potential for future challenges in a tech-friendly environment. Since 2052, we have been dedicated to creating a joyous learning journey, enhancing students educational and career status. Join Mount Glory for a dynamic learning experience with a reasonable fee structure and a team of qualified teaching faculties, setting the path for educational and career success.',
    },
    {
      id: 2,
      name: 'Sushila Basnet',
      position: 'Administrative In-Charge',
      image: 'https://mntglory.saksham.edu.np/images/53.webp',
      description:
        'Greetings from Mount Glory! As Administrative In-Charge, I steer our commitment to guide learners with tech-focused, behavioral, and theoretical excellence. Our innovative platform, featuring smart boards and virtual classes, ensures exceptional development in a tech-friendly setting. Join us for a dynamic learning journey with reasonable fees and dedicated administration, paving the way for your success.',
    },
    {
      id: 3,
      name: 'Laxman Marasini',
      position: 'HOD - Health',
      image: 'https://mntglory.saksham.edu.np/images/laxman.webp',
      description:
        'As a passionate advocate for education, I feel privileged to be part of Mount Glory School specializing in Health and Social subjects. Our exceptional leadership creates a positive culture, ensuring a top-notch learning experience for all. At Mount Glory, we go beyond academics, fostering crucial life skills. Join me on this educational journey for holistic development.',
    },
    {
      id: 4,
      name: 'Indra Kumar Magar',
      position: 'HOD - English',
      image: 'https://mntglory.saksham.edu.np/images/indra.webp',
      description:
        'As the Head of the English Department at Mount Glory, I am dedicated to providing a transformative learning experience for all students. Our team is committed to fostering a love for literature and language, ensuring that our students are well-equipped for future challenges. Join us at Mount Glory for a dynamic educational journey.',
    },
    {
      id: 5,
      name: 'Dan Bahadur Palli',
      position: 'HOD - Accountancy',
      image: '',
      description:
        "Over the past 16 years as the HOD of Accountancy, I've witnessed the school's commitment to a conducive academic environment, emphasizing mutual understanding and instilling high social values. My journey here has been enriched by the love of students, the faith bestowed by management, and the camaraderie with dedicated co-workers.",
    },
    {
      id: 6,
      name: 'Kamala Poudel',
      position: 'HOD - Nepali',
      image: '',
      description:
        'नेपालीका लागि HOD को रूपमा, मेरो १६ वर्षको यात्रा विद्यालयको जीवन्त शैक्षिक वातावरणप्रतिको प्रतिबद्धता र हाम्रो नेपाली संस्कृतिप्रति गहिरो प्रशंसा बढाएर समृद्ध भएको छ। मैले विद्यार्थीहरूको स्नेह, व्यवस्थापनबाट विश्वास र समर्पित सहकर्मीहरूसँगको बलियो बन्धनमा आनन्द पाएको छु। हाम्रा विद्यार्थीहरूको सफलताका कथाहरू, हाम्रो नेपाली सारको संरक्षण गर्दै विभिन्न क्षेत्रहरूमा नेभिगेट गर्दै, एक शैक्षिक अग्रगामीको रूपमा हाम्रो अद्वितीय स्थितिको उदाहरण दिन्छ।',
    },
    {
      id: 7,
      name: 'Sangeeta Maharjan',
      position: 'HOD - Science',
      image: '',
      description:
        "Greetings from the lively domain of Mount Glory! I'm Sangeeta Maharjan, HOD of Science. Embracing the chaos of test tubes and periodic tables, I find joy in turning ordinary classrooms into scientific wonderlands. Why do I love being a science teacher? Well, where else can you make an explosion in the name of education and get applause for it?",
    },
    {
      id: 8,
      name: 'Prakash Chaudhary',
      position: 'HOD - Mathematics',
      image: '',
      description:
        'Hello from the HOD of Mathematics. As a math enthusiast, I find joy in unraveling the mysteries of numbers and equations. Being a part of the Math squad allows me to transform abstract concepts into exciting adventures. From algebraic escapades to geometric explorations, join me on this mathematical journey where problem-solving is the ultimate thrill.',
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
        <h3 className="mb-12 ml-12 max-w-5xl text-left text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
          {ourTeamContents.heading}
        </h3>
        <MasterContent content={ourTeamContents} />
      </main>
      <Events />
      <section className="px-2">
        <Gallery limit={12} />
      </section>
      <main className="px-4">
        <h3 className="mb-12 ml-12 max-w-5xl text-left text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
          {testimonialsContent.heading}
        </h3>
        <MasterContent content={testimonialsContent} />
      </main>
      <InformationForm />
    </>
  );
};

export default Home;
