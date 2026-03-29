import { ourTeamContents } from '../../constants/data';
import logo from '../../assets/logo.webp';
import Avatar from './Avatar';

const TeamUI = () => {
  return (
    <>
      <div className="rounded-2xl border bg-light/40 p-6 shadow-md backdrop-blur-sm">
        <div className="flex translate-x-2 items-center justify-center gap-0">
          {ourTeamContents.members.length > 0 && (
            <>
              {ourTeamContents.members.slice(0, 6).map((member, idx) => (
                <Avatar
                  key={member.id}
                  src={member.image}
                  alt={member.name}
                  name={member.name}
                  size="md"
                  fallback={logo}
                  className={idx !== 0 ? `-translate-x-${idx * 2}` : ''}
                  style={{ zIndex: ourTeamContents.members.length - idx }}
                />
              ))}
            </>
          )}
        </div>

        <hr className="my-4 border-dark/20" />
        <h3 className="text-center">
          Discover our team dedicated to build your child's future.
        </h3>
      </div>
    </>
  );
};

export default TeamUI;
