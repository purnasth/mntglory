import React from 'react';

const App: React.FC = () => {
  return (
    <>
      {/* <main className="font-title flex h-screen items-center justify-center text-7xl text-red-500">
        <h1>Mount Glory School</h1>
      </main> */}

      <main className="z-50 h-screen w-full bg-white">
        <div className="container flex size-full flex-col items-center justify-center gap-4 text-center">
          <img
            src="https://mntglory.saksham.edu.np/icon/logo.svg"
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
      </main>
    </>
  );
};

export default App;
