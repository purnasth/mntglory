import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

const contactInfo = [
  {
    id: 1,
    type: 'location',
    title: 'Jiwan Smriti Marg, Chagal, Kathmandu',
    url: 'https://www.google.com/maps?ll=27.705959,85.298767&z=16&t=m&hl=en&gl=NP&mapclient=embed&cid=14958725939150768641',
  },
  {
    id: 2,
    type: 'phone',
    title: '+977 01-4276477',
    url: 'tel:+977014276477',
  },
  {
    id: 3,
    type: 'email',
    title: 'mntglory@gmail.com',
    url: 'mailto:mntglory@gmail.com',
  },
  {
    id: 4,
    type: 'social',
    title: 'Facebook',
    url: 'https://www.facebook.com/MountGloryEBHS',
  },
  {
    id: 5,
    type: 'social',
    title: 'Instagram',
    url: '#',
  },
  {
    id: 6,
    type: 'social',
    title: 'Youtube',
    url: '#',
  },
];

const socialIcons: { [key: string]: JSX.Element } = {
  Facebook: <MdFacebook />,
  Instagram: <RiInstagramFill />,
  Youtube: <FaYoutube />,
};

const ContactInfo = () => {
  return (
    <>
      <ul className={`my-3 flex flex-col gap-1`}>
        {contactInfo
          .filter((info) => info.type !== 'social')
          .map((info) => (
            <li key={info.id}>
              <Link
                to={info.url}
                className="transition-300 inline-block text-sm font-medium text-black hover:text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={info.title}
              >
                {info.title}
              </Link>
            </li>
          ))}
      </ul>

      <ul className={`mt-4 flex gap-4 text-xl`}>
        {contactInfo
          .filter((info) => info.type === 'social')
          .map((info) => (
            <li
              key={info.id}
              className="transition-300 group text-dark hover:scale-125 hover:text-dark"
            >
              <Link
                to={info.url}
                rel="noreferrer noopener"
                aria-label={info.title}
                title={info.title}
                target="_blank"
              >
                {socialIcons[info.title]}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactInfo;
