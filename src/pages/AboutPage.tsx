// TODO: responsive - for reference, check other pages classes and tailwind docs

import { mountGloryFacts } from '../constants/en';

import { ourTeamContents } from '../constants/data';

import logo from '../assets/logo.webp';

import FactsUI from '../components/ui/FactsUI';
import HoverCards from '../components/ui/HoverCards';
import ReadMoreLink from '../components/ui/ReadMoreLink';

const AboutUsPage = () => {
  return (
    <>
      <main className="h-[calc(100vh-6rem)] space-y-8 py-16">
        <span className="block text-center text-sm uppercase tracking-wide">
          {mountGloryFacts.title}
        </span>
        <img
          src="https://mntglory.purnashrestha.com.np/assets/62-CDA-YElM.jpg"
          alt="About Mount Glory"
          className="mx-auto h-[34rem] w-full max-w-6xl object-cover"
        />
        <span className="mx-auto block max-w-xl text-center text-4xl leading-snug">
          {mountGloryFacts.motto}
        </span>
      </main>

      <main className="bg-light">
        <div className="grid grid-cols-3 gap-12">
          <aside className="col-span-2 space-y-12">
            <div className="space-y-4">
              <span className="block text-sm uppercase tracking-wide">
                {mountGloryFacts.title}
              </span>
              <h2 className="text-3xl leading-snug">
                We are committed to guiding the current generation with a blend
                of technology, behavioral insights, and theoretical excellence.
                Our pedagogical platform, featuring smart boards and virtual
                classes, ensures the unparalleled development of Glorians,
                nurturing their potential for future challenges in a
                tech-friendly environment.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <p className="text-pretty text-justify font-extralight">
                Since 2052, we have been dedicated to creating a joyous learning
                journey, enhancing students educational and career status. Join
                Mount Glory for a dynamic learning experience with a reasonable
                fee structure and a team of qualified teaching faculties,
                setting the path for educational and career success. We believe
                in a familiar and joyful learning process. We ensure that your
                kid will get the best guardianship. Since its establishment in
                2052, it has been playing a great role in enhancing the career
                and educational status of the students. Also, we highly
                encourage our potential students to join Mount Glory for
                reasonable fee structure and qualified teaching faculties.
              </p>
              <p className="text-pretty text-justify font-extralight">
                Since 2052, we have been dedicated to creating a joyous learning
                journey, enhancing students educational and career status. Join
                Mount Glory for a dynamic learning experience with a reasonable
                fee structure and a team of qualified teaching faculties,
                setting the path for educational and career success. We believe
                in a familiar and joyful learning process. We ensure that your
                kid will get the best guardianship. Since its establishment in
                2052, it has been playing a great role in enhancing the career
                and educational status of the students. Also, we highly
                encourage our potential students to join Mount Glory for
                reasonable fee structure and qualified teaching faculties.
              </p>
            </div>

            <FactsUI />
          </aside>

          <section className="col-span-1">
            <img
              src="https://mntglory.saksham.edu.np/images/mgs.webp"
              alt="About Mount Glory"
              className="size-full object-cover"
            />
          </section>
        </div>
      </main>

      <main>
        {/* <h3 className="mb-8 text-center text-xl capitalize leading-snug sm:text-2xl md:mb-10 md:text-4xl lg:text-6xl lg:leading-snug">
          Why Mount Glory?
        </h3> */}
        <h3 className="mb-4 max-w-5xl text-left text-xl capitalize leading-snug sm:text-2xl md:mb-12 md:text-4xl lg:text-6xl lg:leading-snug">
          Our events where we showcase the diverse facets of education.
        </h3>

        {/* TODO: make this dynamic */}
        <div className="grid grid-cols-2 gap-6">
          <HoverCards />
          <HoverCards />
          <HoverCards />
          <HoverCards />
        </div>
      </main>

      <main className="pt-0">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h2 className="mb-4 max-w-5xl text-left text-xl capitalize leading-snug sm:text-2xl md:mb-12 md:text-4xl lg:text-6xl lg:leading-snug">
              {ourTeamContents.heading}
            </h2>
            <div className="grid grid-cols-2 bg-red-light">
              <div className="relative">
                <div
                  className="absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,_rgba(220,38,38,0.15)_0px,_rgba(220,38,38,0.15)_8px,_rgba(220,38,38,0.3)_8px,_rgba(220,38,38,0.3)_16px)]"
                  aria-hidden="true"
                ></div>
                <img
                  src={
                    ourTeamContents.members[0].image
                      ? ourTeamContents.members[0].image
                      : logo
                  }
                  alt="About Mount Glory"
                  className="relative z-10 h-full object-cover"
                />
              </div>
              <div className="p-12">
                <h3 className="text-xl md:text-3xl">
                  {ourTeamContents.members[0].name}
                </h3>
                <p className="mt-2 text-pretty text-sm uppercase tracking-wide opacity-80 md:text-base">
                  {ourTeamContents.members[0].position}
                </p>

                <div className="mt-8 space-y-8">
                  <p className="text-pretty text-justify text-sm md:text-base">
                    {ourTeamContents.members[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              {ourTeamContents.members
                .slice(1, 4)
                .map(({ id, name, position, image, description }) => (
                  <div
                    key={id}
                    className="group origin-center space-y-2 overflow-hidden border border-black/5 bg-light p-4 transition-all duration-300 ease-linear md:space-y-4 md:p-6"
                  >
                    <p className="line-clamp-6 text-pretty text-justify text-xs md:text-sm">
                      {description}
                    </p>
                    <div className="flex items-center gap-4 border-t border-black/5 pt-3">
                      {/* <img
                      src={image}
                      alt={name}
                      className="size-14 rounded-full object-cover"
                    /> */}
                      <img
                        src={image ? image : logo}
                        alt={name}
                        className="size-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-base md:text-lg">{name}</h4>
                        <p className="text-xxs text-pretty opacity-80 md:text-xs">
                          {position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <ReadMoreLink to="/team" value="View all team members" />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUsPage;
