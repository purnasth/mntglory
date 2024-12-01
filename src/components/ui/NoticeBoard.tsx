import { Link } from 'react-router-dom';

const noticeContents = [
  {
    title: 'Final Examination Routine',
    content:
      'Final examination routine for the academic year 2081 has been published. Please check the notice board for more details.',
    date: '2081-06-12',
  },
  {
    title: 'Parents Meeting',
    content:
      'Parents meeting will be held on 2081-06-15. All the parents are requested to attend the meeting.',
    date: '2081-06-10',
  },
  {
    title: 'Holiday Notice',
    content:
      'School will remain closed on 2081-06-13 due to public holiday. Regular classes will resume from 2081-06-14.',
    date: '2081-06-12',
  },
  {
    title: 'Scholarship Notice',
    content:
      'Scholarship notice for the academic year 2081 has been published. Please check the notice board for more details.',
    date: '2081-06-10',
  },
  {
    title: 'School Reopening',
    content:
      'School will reopen from 2081-06-14. All the students are requested to attend the school regularly.',
    date: '2081-06-12',
  },
  {
    title: 'Sports Meet',
    content:
      'Sports meet will be held on 2081-06-15 to 2081-06-17. All the students are requested to participate in the event.',
    date: '2081-06-10',
  },
];

const NoticeBoard = () => {
  return (
    <>
      <div className="bg-light">
        <div className="flex items-center justify-between p-8">
          <h2 className="text-2xl font-bold">Notice Board</h2>
          <Link
            to="/notices"
            className="a-hover-animation"
            data-text="View All Notices"
          >
            View All Notices
          </Link>
        </div>
        <hr className="border-dark/20" />
        <ul className="scroll h-full max-h-[75vh] list-none space-y-8 overflow-y-auto bg-slate-100 p-8 pt-4">
          {noticeContents.slice(0, 12).map((notice, index) => (
            <li key={index} className="mt-2">
              <h3 className="text-lg font-semibold">{notice.title}</h3>
              <p className="line-clamp-2">{notice.content}</p>
              <span className="text-xs text-dark/50">{notice.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NoticeBoard;
