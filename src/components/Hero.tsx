import mgsBuilding from '../assets/img/building.webp';

const Hero = () => {
  return (
    <>
      <main className="px-0 py-6">
        <div className="container">
          <section className="grid grid-cols-5 gap-6">
            <div className="col-span-1 mt-3 space-y-6">
              <p className="flex items-center justify-between gap-8">
                01
                <hr className="w-full border-dark/40" />
              </p>
              <img
                src="https://media.istockphoto.com/id/842857538/vector/modern-school-buildings-exterior-student-city-concept-elementary-school-facade-urban-street.jpg?s=612x612&w=0&k=20&c=OKfzoc1m5KfNnH3PfTXZFGk672g06qpxIKDcHEm4fyM="
                alt="MGS Building"
                className="h-72 w-full bg-white object-cover object-center shadow-lg"
              />
              <div>
                <h2>Mount Glory School</h2>
                <span>Chagal, Kathmandu</span>
              </div>

              <p className="text-right">From PG to Grade X </p>
            </div>
            <aside className="col-span-4">
              <div className="mb-3 grid grid-cols-4">
                <h1 className="col-span-2 text-3xl font-medium capitalize leading-relaxed">
                  Quality in Education & Character building is our motto.
                </h1>
                <div className="relative z-10 col-span-2">
                  <p className="absolute inset-0 mx-auto size-full h-60 max-w-xs bg-slate-100 p-6 outline outline-1 outline-primary/20">
                    We believe in a familiar and joyful learning process. We
                    ensure that your kid will get the best guardianship. Since
                    its establishment in 2052, it has been playing a great role
                    in enhancing the career and educational status of the
                    students.
                  </p>
                </div>
              </div>
              <img
                src="https://t3.ftcdn.net/jpg/09/25/34/62/360_F_925346213_KIBquS8HgdgNvA0QvX0WSsbKDeS8nkgk.jpg"
                alt="MGS Building"
                className="-z-10 h-96 w-full object-cover shadow-lg"
              />
            </aside>
          </section>
          <section className="mt-6 grid grid-cols-5 gap-6">
            <div className="col-span-3 space-y-8 bg-light">
              <p className="">From PG to Grade X </p>
            </div>
            <aside className="col-span-2">
              <p className="bg-white p-6 shadow outline outline-1 outline-primary/20">
                We believe in a familiar and joyful learning process. We ensure
                that your kid will get the best guardianship. Since its
                establishment in 2052, it has been playing a great role in
                enhancing the career and educational status of the students.
              </p>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;
