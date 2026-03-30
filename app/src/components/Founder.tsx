const Founder = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 gap-0 lg:translate-x-8 lg:grid-cols-2 lg:px-8">
          <img
            src="https://mntglory.saksham.edu.np/images/53.webp"
            alt="Mithila Yatri Niwas"
            className="h-64 w-full rounded-xl object-cover shadow-md md:h-96 lg:h-[28rem]"
          />
          <div className="my-auto -translate-y-12 scale-90 rounded-xl bg-light px-4 py-8 shadow-md md:p-10 lg:-translate-x-10 lg:translate-y-0 lg:scale-100 lg:p-12 lg:pr-8">
            <h3 className="text-2xl text-black md:text-4xl">Gopal Acharya</h3>
            <h4 className="text-base text-dark">Founder/Principal Message</h4>
            <p className="mt-4 max-h-48 overflow-y-scroll pr-4 text-justify text-sm text-gray-600 md:text-sm lg:text-base">
              I, as the founder and principal of Mount Glory, am dedicated to
              lead our commitment to guiding the current generation with a blend
              of technology, behavioral insights, and theoretical excellence.
              Our pedagogical platform, featuring smart boards and virtual
              classes, ensures the unparalleled development of Glorians,
              nurturing their potential for future challenges in a tech-friendly
              environment. Since 2052, we've been dedicated to creating a joyous
              learning journey, enhancing students' educational and career
              status. Join Mount Glory for a dynamic learning experience with a
              reasonable fee structure and a team of qualified teaching
              faculties, setting the path for educational and career success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
