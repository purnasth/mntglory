import React, { useState } from 'react';
import { IoIosMail } from 'react-icons/io';
import { LiaLinkedinIn } from 'react-icons/lia';
import { BiLogoFacebook } from 'react-icons/bi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.webp';
import { TeamMember } from '../interfaces/types';

import Modal from '../components/ui/Modal';
import useFetchAPI from '../hooks/useFetchAPI';
import { useAuth } from '../context/AuthContext';

const TeamPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
  const {
    data: members,
    isLoading,
    isError,
  } = useFetchAPI<TeamMember[]>('team', `${apiBase}/team`);

  const getSocialIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'facebook':
        return <BiLogoFacebook className="text-lg" />;
      case 'linkedin':
        return <LiaLinkedinIn className="text-lg" />;
      case 'email':
        return <IoIosMail className="text-lg" />;
      default:
        return null;
    }
  };

  const openMemberModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <main className="py-8 md:py-16">
        {/* Header */}
        <header className="mb-12 flex items-start justify-between gap-4">
          <h1 className="mb-8 max-w-5xl text-left text-xl capitalize leading-snug sm:text-2xl md:mb-10 md:text-4xl lg:text-6xl lg:leading-snug">
            Meet the MGS Leaders' who are dedicated to your child's success.
          </h1>
          {isAuthenticated && (
            <Link
              to="/team/add"
              className="flex shrink-0 items-center gap-2 rounded-xl border border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-light transition-colors duration-300 hover:bg-light hover:text-primary md:px-6 md:text-base"
            >
              <IoAddCircleOutline className="text-lg" />
              Add Member
            </Link>
          )}
        </header>

        <section>
          <div className="w-full columns-1 gap-2 sm:columns-2 md:gap-4 lg:columns-3 xl:columns-3">
            {(members || []).map((member) => (
              <div
                key={member.id}
                className="group mb-4 origin-center cursor-pointer space-y-4 overflow-hidden rounded-xl bg-light p-4 shadow transition-all duration-300 ease-linear hover:shadow-lg md:space-y-6 md:p-6"
                onClick={() => openMemberModal(member)}
              >
                <p className="text-pretty text-sm md:text-base">
                  {member.description}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={member.image || logo}
                    alt={member.name}
                    className="size-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-base font-semibold md:text-lg">
                      {member.name}
                    </h3>
                    <p className="text-pretty text-sm md:text-base">
                      {member.position}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex gap-2">
                        {member.socials.slice(0, 3).map((social) => (
                          <a
                            key={social.id}
                            href={social.link}
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
                          >
                            {getSocialIcon(social.title)}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Team Member Modal */}
      <Modal isOpen={!!selectedMember} onClose={closeMemberModal}>
        {selectedMember && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-full">
              <div
                className="absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,_rgba(41,128,185,0.15)_0px,_rgba(41,128,185,0.15)_8px,_rgba(41,128,185,0.4)_8px,_rgba(41,128,185,0.4)_16px)]"
                aria-hidden="true"
              ></div>
              <img
                src={selectedMember.image || logo}
                alt={selectedMember.name}
                className="relative z-10 h-full w-[calc(100%-0.75rem)] object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6 hidden md:block">
                <h2 className="text-2xl font-semibold">
                  {selectedMember.name}
                </h2>
                <p className="text-lg font-medium text-primary">
                  {selectedMember.position}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-justify text-sm">
                  {selectedMember.description}
                </p>
              </div>

              <div>
                <span className="mb-3 block text-base font-semibold">
                  Connect:
                </span>
                <div className="flex gap-3">
                  {selectedMember.socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-8 items-center justify-center rounded-full border border-primary bg-primary text-white transition-all duration-200 hover:scale-110 hover:bg-light hover:text-primary"
                    >
                      {getSocialIcon(social.title)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default TeamPage;
