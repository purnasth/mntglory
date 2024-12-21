const Footer = () => {
  return (
    <footer className="border-t bg-light p-8 md:p-12">
      <div className="flex flex-col justify-between gap-8 xl:flex-row xl:items-center">
        <div>
          <p className="font-normal">
            &copy; {new Date().getFullYear()} Mount Glory English Boarding High
            School. All rights reserved.
          </p>
          <p className="max-w-lg text-xs">
            All content and images used on this site are owned or licensed for
            use on this site only. Unauthorized use is prohibited.
          </p>
        </div>
        <p className="group flex">
          Website by
          <a
            className="ml-1 flex items-center gap-1 font-semibold"
            rel="noreferrer"
            href="https://www.purnashrestha.com.np/"
            target="_blank"
          >
            <span className="h-[1px] w-2 bg-dark/80 transition-all duration-300 group-hover:w-8"></span>
            Purna Shrestha
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
