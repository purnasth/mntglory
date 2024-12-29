import kidSchool from '../assets/img/kidSchool.png';
import landscapeSchool from '../assets/img/landscapeSchool.svg';
import FactsUI from './ui/FactsUI';
import NoticeBoard from './ui/NoticeBoard';
import TeamUI from './ui/TeamUI';

const Hero = () => {
  return (
    <>
      <main className="px-0 pt-6">
        <div className="container">
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="col-span-1 mt-3 space-y-6">
              <div className="jusitfy-center flex items-center gap-8 lg:justify-between">
                <p>01</p>
                <hr className="w-2/3 border-primary/40 lg:w-full" />
              </div>
              <img
                src={kidSchool}
                alt="MGS Building"
                className="hidden h-72 w-full rounded-2xl bg-white object-cover object-center shadow-lg lg:block"
              />
              <div className="hidden lg:block">
                <h2 className="text-2xl font-semibold">Mount Glory School</h2>
                <span>Chagal, Kathmandu</span>
              </div>

              <div className="hidden items-center justify-between gap-8 lg:flex">
                <hr className="w-full flex-1 border-dark/20" />
                <p className="">From PG to Grade X</p>
              </div>
            </div>
            <aside className="col-span-4">
              <div className="mb-3 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-0">
                <h1 className="col-span-2 text-4xl font-medium capitalize leading-snug">
                  Quality in Education & Character building is our motto.
                </h1>
                <div className="relative z-10 col-span-2 my-4 md:my-0">
                  {/* <p className="absolute inset-0 mx-auto size-full h-60 max-w-xs rounded-2xl bg-slate-100 p-6 shadow-lg outline outline-[1.25rem] outline-white">
                    We believe in a familiar and joyful learning process. We
                    ensure that your kid will get the best guardianship. Since
                    its establishment in 2052, it has been playing a great role
                    in enhancing the career and educational status of the
                    students.
                  </p> */}
                  <div className="inset-0 size-full h-auto min-h-40 max-w-xs content-end md:ml-auto lg:absolute lg:mx-auto lg:translate-y-8">
                    <TeamUI />
                  </div>
                </div>
              </div>
              <img
                // src="https://ai4spaces.com/bundles/project/images/spaces/be19b814a1cdc49a82dc05170c74407822c1e3c863af762622ffccca61922a7f/12371_1_1732191375.png"
                // src="https://mntglory.saksham.edu.np/images/gallery/program/61.webp"
                src={landscapeSchool}
                alt="MGS Building"
                className="-z-10 h-64 w-full rounded-2xl object-cover shadow-lg sm:h-96"
              />
            </aside>
          </section>
          <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-9">
            <div className="h-max lg:col-span-5">
              {/* <p className="rounded-2xl bg-slate-100 p-6 shadow-sm outline outline-1 outline-dark/20">
                We believe in a familiar and joyful learning process. We ensure
                that your kid will get the best guardianship. Since its
                establishment in 2052, it has been playing a great role in
                enhancing the career and educational status of the students.
              </p> */}
              <FactsUI />

              <section className="mt-6 flex size-full flex-col items-start justify-center gap-2 text-pretty">
                {/* <img
              src="https://mntglory.saksham.edu.np/icon/logo.webp"
              alt="Mount Glory School"
              className="size-48 object-contain"
            /> */}
                <span className="text-xl">Welcome to</span>
                <h1 className="text-3xl leading-snug md:text-6xl md:leading-tight">
                  Mount Glory English Boarding High School
                </h1>

                <p className="mt-4 text-base lg:max-w-xl">
                  Mount Glory excels in mentoring the current generation through
                  a tech-friendly, behavioral, and theoretical platform,
                  fostering a morale-driven environment. Join us for an
                  unrivaled learning experience.
                  <br />
                  <br />
                  We believe in a familiar and joyful learning process. We
                  ensure that your kid will get the best guardianship. Since its
                  establishment in 2052, it has been playing a great role in
                  enhancing the career and educational status of the students.
                  <br />
                  <br />
                  Also, we highly encourage our potential students to join Mount
                  Glory for reasonable fee structure and qualified teaching
                  faculties.
                </p>
              </section>
            </div>
            <aside className="w-full overflow-hidden rounded-2xl bg-red-600 shadow-md outline outline-1 outline-dark/20 lg:col-span-4">
              <NoticeBoard />
            </aside>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;
