import Form from '../components/ui/Form';
import logo from '../assets/logo.svg';
import ContactInfo from '../components/ui/ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-light p-12">
      <div className="grid grid-cols-2 gap-x-12">
        <div>
          <img
            src={logo}
            alt="Mount Glory"
            className="size-48 object-contain"
          />
          <h4 className="mt-4 text-xl font-semibold">Mount Glory School</h4>
          <p className="max-w-xl text-sm mt-2">
            We believe in a familiar and joyful learning process. We ensure that
            your kid will get the best guardianship. Since its establishment in
            2052, it has been playing a great role in enhancing the career and
            educational status of the students.
          </p>
          <ContactInfo />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7064.733599676866!2d85.298767!3d27.705959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f6127efe65%3A0xcf9811fca780ca01!2sMount%20Glory%20English%20Boarding%20High%20School!5e0!3m2!1sen!2snp!4v1734244184474!5m2!1sen!2snp"
            loading="lazy"
            className="my-8 h-80 w-full rounded-xl shadow"
          ></iframe> */}
          <hr className="my-6 border-dark/10" />
          <div className="mt-8 space-y-4">
            <div>
              <p className="font-normal">
                &copy; {new Date().getFullYear()} Mount Glory English Boarding
                High School. All rights reserved.
              </p>
              <p className="max-w-lg text-xs">
                All content and images used on this site are owned or licensed
                for use on this site only. Unauthorized use is prohibited.
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
        </div>
        <Form />
      </div>
      {/* <hr className="border-dark/20" /> */}
      {/* <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Mount Glory English Boarding High
            School. All rights reserved.
          </p>
          <p className="max-w-lg text-xs">
            All content and images used on this site are owned or licensed for
            use on this site only. Unauthorized use is prohibited.
          </p>
        </div>
        <p className="item-center group flex justify-center text-center">
          Website by
          <a
            className="ml-1 flex items-center gap-1 font-semibold"
            rel="noreferrer"
            href="https://www.purnashrestha.com.np/"
            target="_blank"
          >
            <span className="h-[1px] w-1 bg-dark/80 transition-all duration-300 group-hover:w-6"></span>
            Purna Shrestha
          </a>
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
