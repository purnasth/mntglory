import React from 'react';

interface TeamPopupProps {
  member: {
    name: string;
    position: string;
    description: string;
  };
  handleClosePopup: () => void;
}

const TeamPopup: React.FC<TeamPopupProps> = ({ member, handleClosePopup }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300"
      onClick={handleClosePopup}
    >
      <div
        className="w-auto max-w-xl transform rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="mb-2 text-3xl font-bold">{member.name}</h4>
        <p className="mb-2 text-xl text-gray-600">{member.position}</p>
        <p className="my-8 text-justify text-xl">{member.description}</p>
        <button
          className="w-full rounded bg-primary px-4 py-2 text-white hover:bg-primary/80"
          onClick={handleClosePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TeamPopup;
