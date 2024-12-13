import sideBuilding from '../assets/img/sideBuilding.png';
import NoticeBoard from './ui/NoticeBoard';

const Hero = () => {
  return (
    <>
      <main className="px-0 pt-6">
        <div className="container">
          <section className="grid grid-cols-5 gap-6">
            <div className="col-span-1 mt-3 space-y-6">
              <p className="flex items-center justify-between gap-8">
                01
                <hr className="w-full border-dark/40" />
              </p>
              <img
                src={sideBuilding}
                alt="MGS Building"
                className="h-72 w-full rounded-2xl bg-white object-cover object-center shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-semibold">Mount Glory School</h2>
                <span>Chagal, Kathmandu</span>
              </div>

              <div className="flex items-center justify-between gap-8">
                <hr className="w-full flex-1 border-dark/20" />
                <p className="">From PG to Grade X</p>
              </div>
            </div>
            <aside className="col-span-4">
              <div className="mb-3 grid grid-cols-4">
                <h1 className="col-span-2 text-4xl font-medium capitalize leading-snug">
                  Quality in Education & Character building is our motto.
                </h1>
                <div className="relative z-10 col-span-2">
                  {/* <p className="absolute inset-0 mx-auto size-full h-60 max-w-xs rounded-2xl bg-slate-100 p-6 shadow-lg outline outline-[1.25rem] outline-white">
                    We believe in a familiar and joyful learning process. We
                    ensure that your kid will get the best guardianship. Since
                    its establishment in 2052, it has been playing a great role
                    in enhancing the career and educational status of the
                    students.
                  </p> */}
                  <div className="absolute inset-0 mx-auto size-full h-auto min-h-40 max-w-xs translate-y-8 rounded-2xl bg-white/40 p-6 shadow-lg outline outline-white backdrop-blur-sm">
                    <div className="flex translate-x-2 items-center justify-center gap-0">
                      <img
                        src="https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif"
                        alt="Purna"
                        className="size-10 -translate-x-0 rounded-full bg-white object-contain outline outline-1 outline-dark/30"
                      />
                      <img
                        src="https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif"
                        alt="Purna"
                        className="size-10 -translate-x-2 rounded-full bg-white object-contain outline outline-1 outline-dark/30"
                      />
                      <img
                        src="https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif"
                        alt="Purna"
                        className="size-10 -translate-x-4 rounded-full bg-white object-contain outline outline-1 outline-dark/30"
                      />
                      <img
                        src="https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif"
                        alt="Purna"
                        className="size-10 -translate-x-6 rounded-full bg-white object-contain outline outline-1 outline-dark/30"
                      />
                    </div>
                    <hr className="my-4 border-dark/40" />
                    <h3 className="text-center">
                      Discover our team dedicated to build your child's future.
                    </h3>
                  </div>
                </div>
              </div>
              <img
                src="https://ai4spaces.com/bundles/project/images/spaces/be19b814a1cdc49a82dc05170c74407822c1e3c863af762622ffccca61922a7f/12371_1_1732191375.png"
                alt="MGS Building"
                className="-z-10 h-96 w-full rounded-2xl object-cover shadow-lg"
              />
            </aside>
          </section>
          <section className="mt-6 grid grid-cols-9 gap-6">
            <div className="col-span-5 h-max">
              {/* <p className="rounded-2xl bg-slate-100 p-6 shadow-sm outline outline-1 outline-dark/20">
                We believe in a familiar and joyful learning process. We ensure
                that your kid will get the best guardianship. Since its
                establishment in 2052, it has been playing a great role in
                enhancing the career and educational status of the students.
              </p> */}
              <div className="rounded-2xl bg-slate-100 p-6 shadow-sm outline outline-1 outline-dark/20 flex items-center justify-between">
                <h4 className="flex flex-col items-center text-3xl">
                  42+
                  <span className="text-sm">Total Staffs</span>
                </h4>
                <h4 className="flex flex-col items-center text-3xl">
                  24+
                  <span className="text-sm">Years of Experience</span>
                </h4>
                <h4 className="flex flex-col items-center text-3xl">
                  100%
                  <span className="text-sm">Happy Students</span>
                </h4>
                <h4 className="flex flex-col items-center text-3xl">
                  97
                  <span className="text-sm">Awards Won</span>
                </h4>
                <h4 className="flex flex-col items-center text-3xl">
                  13000+
                  <span className="text-sm">Students</span>
                </h4>
              </div>

              <section className="mt-6 flex size-full flex-col items-start justify-center gap-2 text-pretty">
                {/* <img
              src="https://mntglory.saksham.edu.np/icon/logo.svg"
              alt="Mount Glory School"
              className="size-48 object-contain"
            /> */}
                <span className="text-xl">Welcome to</span>
                <h1 className="text-6xl leading-tight">
                  Mount Glory English Boarding High School
                </h1>

                <p className="mt-4 max-w-xl text-base">
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
            <aside className="col-span-4 overflow-hidden rounded-2xl shadow-md outline outline-1 outline-dark/20">
              <NoticeBoard />
            </aside>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;
