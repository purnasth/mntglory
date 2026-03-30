// TODO Unused: This comoponent could be used in the future if we want to have a separate page for the team members for larger content and details about them. For now, we are using the MasterContent component to display the team members on the about page.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFacebook, MdEmail } from 'react-icons/md';
import { LiaLinkedinIn } from 'react-icons/lia';

import logo from '../assets/logo.webp';
import { ourTeamContents } from '../constants/data';

import { TeamMember } from '../interfaces/types';

import TeamPopup from './ui/TeamPopup';

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleReadMore = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  const { heading, members } = ourTeamContents;

  return (
    <main>
      <h3 className="container mb-16 text-center text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-snug">
        {heading}
      </h3>

      <section className="space-y-12">
        <div
          className={`container grid ${
            members.length > 2 ? 'grid-cols-2 gap-12' : 'grid-cols-2 gap-12'
          }`}
        >
          {members.slice(0, 2).map((member) => (
            <div key={member.id}>
              <div className="mt-8 flex items-center justify-center">
                <img
                  src={member.image || logo}
                  alt="Teacher"
                  className="size-64 rounded-full bg-white object-cover p-4"
                  draggable="false"
                />
              </div>
              <div className="-mt-32 rounded-2xl bg-light p-8 pt-40">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold capitalize text-dark">
                      {member.name}
                    </h4>
                    <h5 className="text-base capitalize text-dark">
                      ({member.position})
                    </h5>
                  </div>
                  <ul className="socials flex items-center justify-center gap-4">
                    {member.socials.map((social) => (
                      <li key={social.id}>
                        <Link to={social.link} className="text-xl">
                          {social.title === 'Facebook' ? (
                            <MdOutlineFacebook />
                          ) : social.title === 'Email' ? (
                            <MdEmail />
                          ) : (
                            <LiaLinkedinIn />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="scroll mt-4 line-clamp-3 text-justify">
                  {member.description}
                </p>
                <button
                  className="mt-2 text-primary underline"
                  onClick={() => handleReadMore(member)}
                >
                  More About {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {members.length > 2 && (
          <div className="grid grid-cols-3 gap-12">
            {members.slice(2).map((member) => (
              <div key={member.id}>
                <div className="mt-8 flex items-center justify-center">
                  <img
                    src={member.image || logo}
                    alt="Teacher"
                    className="size-64 rounded-full bg-white object-cover p-4"
                    draggable="false"
                  />
                </div>
                <div className="-mt-32 rounded-2xl bg-light p-8 pt-40">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold capitalize text-dark">
                        {member.name}
                      </h4>
                      <h5 className="text-base capitalize text-dark">
                        ({member.position})
                      </h5>
                    </div>
                    <ul className="socials flex items-center justify-center gap-4">
                      {member.socials.map((social) => (
                        <li key={social.id}>
                          <Link to={social.link} className="text-xl">
                            {social.title === 'Facebook' ? (
                              <MdOutlineFacebook />
                            ) : social.title === 'Email' ? (
                              <MdEmail />
                            ) : (
                              <LiaLinkedinIn />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="scroll mt-4 line-clamp-2 text-justify">
                    {member.description}
                  </p>
                  <button
                    className="mt-2 text-primary underline"
                    onClick={() => handleReadMore(member)}
                  >
                    More About {member.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {selectedMember && (
        <TeamPopup
          member={selectedMember}
          handleClosePopup={handleClosePopup}
        />
      )}
    </main>
  );
};

export default Team;
