import NoticeBoard from './ui/NoticeBoard';

const Intro = () => {
  return (
    <>
      {/* <main className="relative z-auto h-screen w-full bg-white">
        <div
          className="pointer-events-none absolute inset-0 size-full select-none bg-cover opacity-5"
          style={{
            backgroundImage:
              'url("https://instagram.fktm7-1.fna.fbcdn.net/v/t39.30808-6/452567382_898640322298157_1724795144348302549_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDEzNjMuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fktm7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=MEA_qhntdBoQ7kNvgG-Vje-&_nc_gid=8b7fccdcf3e64225b68ffd813a0bb9e9&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYBQETT2GKIJz7plQupSZrMIBTe6W6R39IPKkkDZ5gJq8w&oe=67478DBF&_nc_sid=d885a2")',
          }}
        ></div>
        <div className="container flex size-full flex-col items-center justify-center gap-4 text-center">
          <img
            src="https://mntglory.saksham.edu.np/icon/logo.webp"
            alt="Mount Glory School"
            className="size-48 object-contain"
          />
          <h1 className="font-luxury mt-12 text-5xl">Mount Glory School</h1>

          <p className="max-w-3xl">
            Mount Glory excels in mentoring the current generation through a
            tech-friendly, behavioral, and theoretical platform, fostering a
            morale-driven environment. Join us for an unrivaled learning
            experience.
          </p>
        </div>
      </main> */}
      <main className="relative z-auto h-screen w-full">
        <div
          className="pointer-events-none absolute inset-0 -z-10 size-full select-none bg-cover opacity-10"
          style={{
            backgroundImage:
              'url("https://instagram.fktm7-1.fna.fbcdn.net/v/t39.30808-6/452567382_898640322298157_1724795144348302549_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDEzNjMuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fktm7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=MEA_qhntdBoQ7kNvgG-Vje-&_nc_gid=8b7fccdcf3e64225b68ffd813a0bb9e9&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYBQETT2GKIJz7plQupSZrMIBTe6W6R39IPKkkDZ5gJq8w&oe=67478DBF&_nc_sid=d885a2")',
          }}
        ></div>
        <div className="container grid size-full grid-cols-2 content-center gap-64">
          <section className="col-span-1 flex size-full flex-col items-start justify-center gap-4 text-pretty">
            {/* <img
              src="https://mntglory.saksham.edu.np/icon/logo.webp"
              alt="Mount Glory School"
              className="size-48 object-contain"
            /> */}
            <span className="text-xl">Welcome to</span>
            <h1 className="text-7xl">Mount Glory School</h1>

            <p className="mt-8 max-w-xl text-xl">
              Mount Glory excels in mentoring the current generation through a
              tech-friendly, behavioral, and theoretical platform, fostering a
              morale-driven environment. Join us for an unrivaled learning
              experience.
            </p>
          </section>

          {/* <div className="col-span-1"></div> */}
          <aside className="col-span-1 mt-24">
            <NoticeBoard />
          </aside>
        </div>
      </main>
    </>
  );
};

export default Intro;
