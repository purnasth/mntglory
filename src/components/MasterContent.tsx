import React from 'react';
import logo from '../assets/logo.svg';

interface MasterContentProps {
  content: {
    members: {
      id: number;
      name: string;
      position: string;
      image: string;
      description: string;
    }[];
  };
}

const MasterContent: React.FC<MasterContentProps> = ({ content }) => {
  const { members } = content;
  return (
    <>
      <div
        className={`transition-linear w-full columns-1 gap-2 sm:columns-2 md:gap-4 lg:columns-3 xl:columns-3`}
      >
        {members.map((team) => (
          <div
            key={team.id}
            className={`group mb-4 origin-center space-y-6 overflow-hidden rounded-xl bg-light p-6 shadow transition-all duration-300 ease-linear`}
          >
            <p className="text-pretty">{team.description}</p>
            <div className="flex items-center gap-4">
              <img
                src={team.image ? team.image : logo}
                alt={team.name}
                className="size-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{team.name}</h3>
                <p className="text-pretty">{team.position}</p>
                {/* <div>
                  {team.socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      className={`transition-all duration-300 ease-linear`}
                    >
                      {social.title}
                    </a>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MasterContent;
