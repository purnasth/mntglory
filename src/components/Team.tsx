import { Link } from 'react-router-dom';
import Founder from './Founder';
import { MdOutlineFacebook, MdEmail } from 'react-icons/md';
import { LiaLinkedinIn, LiaFacebookF } from 'react-icons/lia';

import logo from '../assets/logo.svg';

const ourTeamContents = {
  id: 'our-team',
  title: 'Our Team',
  heading:
    "Meet the MGS team members who are dedicated to your child's success.",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  teamMembers: [
    {
      id: 1,
      name: 'Gopal Acharya',
      position: 'Founder/Principal',
      image: 'https://mntglory.saksham.edu.np/images/07.webp',
      description:
        'I, as the founder and principal of Mount Glory, am dedicated to lead our commitment to guiding the current generation with a blend of technology, behavioral insights, and theoretical excellence. Our pedagogical platform, featuring smart boards and virtual classes, ensures the unparalleled development of Glorians, nurturing their potential for future challenges in a tech-friendly environment. Since 2052, we have been dedicated to creating a joyous learning journey, enhancing students educational and career status. Join Mount Glory for a dynamic learning experience with a reasonable fee structure and a team of qualified teaching faculties, setting the path for educational and career success.',
      socials: [
        {
          id: 1,
          title: 'Facebook',
          link: '#',
        },
        {
          id: 2,
          title: 'Email',
          link: '#',
        },
        {
          id: 3,
          title: 'LinkedIn',
          link: '#',
        },
      ],
    },
    {
      id: 2,
      name: 'Sushila Basnet',
      position: 'Administrative In-Charge',
      image: 'https://mntglory.saksham.edu.np/images/53.webp',
      description:
        'As the Administrative Incharge at Mount Glory, I am dedicated to ensuring a safe and secure environment for all students. Our team is committed to providing a nurturing and supportive atmosphere for all students, ensuring their holistic development. Join us at Mount Glory for a transformative educational experience.',
      socials: [
        {
          id: 1,
          title: 'Facebook',
          link: '#',
        },
        {
          id: 2,
          title: 'Email',
          link: '#',
        },
        {
          id: 3,
          title: 'LinkedIn',
          link: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Laxman Marasini',
      position: 'HOD - Science',
      image: 'https://mntglory.saksham.edu.np/images/laxman.webp',
      description:
        'As a passionate advocate for education, I feel privileged to be part of Mount Glory School specializing in Health and Social subjects. Our exceptional leadership creates a positive culture, ensuring a top-notch learning experience for all. At Mount Glory, we go beyond academics, fostering crucial life skills. Join me on this educational journey for holistic development.',
      socials: [
        {
          id: 1,
          title: 'Facebook',
          link: '#',
        },
        {
          id: 2,
          title: 'Email',
          link: '#',
        },
        {
          id: 3,
          title: 'LinkedIn',
          link: '#',
        },
      ],
    },
    {
      id: 4,
      name: 'Indra Kumar Maga',
      position: 'HOD - English',
      image: 'https://mntglory.saksham.edu.np/images/indra.webp',
      description:
        'As the Head of the English Department at Mount Glory, I am dedicated to providing a transformative learning experience for all students. Our team is committed to fostering a love for literature and language, ensuring that our students are well-equipped for future challenges. Join us at Mount Glory for a dynamic educational journey.',
      socials: [
        {
          id: 1,
          title: 'Facebook',
          link: '#',
        },
        {
          id: 2,
          title: 'Email',
          link: '#',
        },
        {
          id: 3,
          title: 'LinkedIn',
          link: '#',
        },
      ],
    },
    {
      id: 5,
      name: 'Dan Bahadur Palli',
      position: 'HOD - Accountancy',
      image: '',
      description:
        "Over the past 16 years as the HOD of Accountancy, I've witnessed the school's commitment to a conducive academic environment, emphasizing mutual understanding and instilling high social values. My journey here has been enriched by the love of students, the faith bestowed by management, and the camaraderie with dedicated co-workers.",
      socials: [
        {
          id: 1,
          title: 'Facebook',
          link: '#',
        },
        {
          id: 2,
          title: 'Email',
          link: '#',
        },
        {
          id: 3,
          title: 'LinkedIn',
          link: '#',
        },
      ],
    },
    {
      id: 6,
      name: 'Kamala Poudel',
      position: 'HOD - Nepali',
      image: '',
      description:
        'नेपालीका लागि HOD को रूपमा, मेरो १६ वर्षको यात्रा विद्यालयको जीवन्त शैक्षिक वातावरणप्रतिको प्रतिबद्धता र हाम्रो नेपाली संस्कृतिप्रति गहिरो प्रशंसा बढाएर समृद्ध भएको छ। मैले विद्यार्थीहरूको स्नेह, व्यवस्थापनबाट विश्वास र समर्पित सहकर्मीहरूसँगको बलियो बन्धनमा आनन्द पाएको छु। हाम्रा विद्यार्थीहरूको सफलताका कथाहरू, हाम्रो नेपाली सारको संरक्षण गर्दै विभिन्न क्षेत्रहरूमा नेभिगेट गर्दै, एक शैक्षिक अग्रगामीको रूपमा हाम्रो अद्वितीय स्थितिको उदाहरण दिन्छ।',
      socials: [
        {
          id: 1,
          title: 'Facebook',
          link: '#',
        },
        {
          id: 2,
          title: 'Email',
          link: '#',
        },
        {
          id: 3,
          title: 'LinkedIn',
          link: '#',
        },
      ],
    },
    {
      id: 7,
      name: 'Sangeeta Maharjan',
      position: 'HOD - Science',
      image: '',
      description:
        "Greetings from the lively domain of Mount Glory! I'm Sangeeta Maharjan, HOD of Science. Embracing the chaos of test tubes and periodic tables, I find joy in turning ordinary classrooms into scientific wonderlands. Why do I love being a science teacher? Well, where else can you make an explosion in the name of education and get applause for it?",
      socials: [
        {
          id: 1,
          title: 'Facebook',
          link: '#',
        },
        {
          id: 2,
          title: 'Email',
          link: '#',
        },
        {
          id: 3,
          title: 'LinkedIn',
          link: '#',
        },
      ],
    },
    {
      id: 8,
      name: 'Prakash Chaudhary',
      position: 'HOD - Mathematics',
      image: '',
      description:
        'Hello from the HOD of Mathematics. As a math enthusiast, I find joy in unraveling the mysteries of numbers and equations. Being a part of the Math squad allows me to transform abstract concepts into exciting adventures. From algebraic escapades to geometric explorations, join me on this mathematical journey where problem-solving is the ultimate thrill.',
      socials: [
        {
          id: 1,
          title: 'Facebook',
          link: '#',
        },
        {
          id: 2,
          title: 'Email',
          link: '#',
        },
        {
          id: 3,
          title: 'LinkedIn',
          link: '#',
        },
      ],
    },
  ],
};

const { heading, teamMembers } = ourTeamContents;

const Team = () => {
  return (
    <main>
      <h3 className="container mb-16 text-center text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-snug">
        {heading}
      </h3>

      <section className="space-y-12">
        {/* Render First Two Items in a 2-Column Grid */}
        <div
          className={`container grid ${
            teamMembers.length > 2 ? 'grid-cols-2 gap-12' : 'grid-cols-2 gap-12'
          }`}
        >
          {teamMembers.slice(0, 2).map((member) => (
            <div key={member.id}>
              <div className="mt-8 flex items-center justify-center">
                <img
                  src={member.image || logo}
                  alt="Teacher"
                  className="size-64 rounded-full bg-white object-cover p-4"
                  draggable="false"
                />
              </div>
              <div className="-mt-32 rounded-2xl bg-light p-8 pr-4 pt-40">
                <div className="flex items-center justify-between">
                  <h4 className="text-base capitalize text-dark">
                    <strong className="text-xl">{member.name}</strong>
                    <br />({member.position})
                  </h4>
                  <ul className="socials mr-4 mt-4 flex items-center justify-center gap-4">
                    {member.socials.map((social) => (
                      <li key={social.id}>
                        <Link to={social.link} className="text-xl">
                          {social.title === 'Facebook' ? (
                            <MdOutlineFacebook />
                          ) : social.title === 'Email' ? (
                            <MdEmail />
                          ) : (
                            <LiaLinkedinIn />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="scroll mt-4 flex h-32 flex-wrap gap-2 gap-y-0 overflow-y-auto pr-4 text-justify">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Render Remaining Items in a 3-Column Grid */}
        {teamMembers.length > 2 && (
          <div className="grid grid-cols-3 gap-12">
            {teamMembers.slice(2).map((member) => (
              <div key={member.id}>
                <div className="mt-8 flex items-center justify-center">
                  <img
                    src={member.image || logo}
                    alt="Teacher"
                    className="size-64 rounded-full bg-white object-cover p-4"
                    draggable="false"
                  />
                </div>
                <div className="-mt-32 rounded-2xl bg-light p-8 pr-4 pt-40">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base capitalize text-dark">
                      <strong className="text-xl">{member.name}</strong>
                      <br />({member.position})
                    </h4>
                    <ul className="socials mr-4 mt-4 flex items-center justify-center gap-4">
                      {member.socials.map((social) => (
                        <li key={social.id}>
                          <Link to={social.link} className="text-xl">
                            {social.title === 'Facebook' ? (
                              <MdOutlineFacebook />
                            ) : social.title === 'Email' ? (
                              <MdEmail />
                            ) : (
                              <LiaLinkedinIn />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="scroll mt-4 flex h-32 flex-wrap gap-2 gap-y-0 overflow-y-auto pr-4 text-justify">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Team;
