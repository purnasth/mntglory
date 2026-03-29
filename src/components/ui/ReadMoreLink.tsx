import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

interface ReadMoreLinkProps {
  to: string;
  value: string;
}

const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({ to, value }) => {
  return (
    <>
      <Link
        to={to}
        className="a-hover-animation group mt-4 inline-block text-sm font-medium uppercase tracking-wide text-primary transition-colors duration-200"
      >
        {value}
        <HiArrowLongRight className="transition-300 ml-1 inline-block -translate-x-4 -translate-y-0.5 text-xl opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </Link>
    </>
  );
};

export default ReadMoreLink;
