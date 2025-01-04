import { Link } from 'react-router-dom';
import error from '../assets/svg/error.svg';

const Error404 = () => {
  return (
    <>
      <main className="my-12 flex h-auto flex-col items-center justify-center p-0">
        <img
          src={error}
          alt="Error 404"
          className="h-auto w-96 select-none object-contain md:h-[65vh] md:w-auto"
          draggable="false"
        />
        <Link
          to="/"
          className="rounded-full bg-primary px-6 py-2 font-semibold text-light"
        >
          Go Home
        </Link>
      </main>
    </>
  );
};

export default Error404;
