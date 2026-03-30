import { Link } from 'react-router-dom';
// import { noticeContents } from '../../constants/data';
import useFetchAPI from '../../hooks/useFetchAPI';

interface Notice {
  title: string;
  content: string;
  date: string;
}

const NoticeBoard = () => {
  const {
    data: noticeContents,
    isLoading,
    isError,
  } = useFetchAPI<Notice[]>('notices', '/api/notice.json');

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }
  return (
    <>
      <div className="bg-light">
        <div className="flex items-center justify-between p-4 md:p-8">
          <h2 className="text-xl font-medium sm:text-2xl">Notice Board</h2>
          <Link
            to="/notice"
            className="transition-300 group flex items-center gap-2 rounded-lg border border-primary bg-primary px-5 py-2 text-sm text-light hover:bg-primary/20 hover:text-primary md:text-base"
            data-text="View All Notices"
          >
            View All Notices
          </Link>
        </div>
        <hr className="border-dark/20" />
        <ul className="scroll h-full max-h-[75vh] list-none space-y-8 overflow-y-auto bg-slate-100 p-4 pt-4 md:p-8">
          {noticeContents &&
            noticeContents.slice(0, 12).map((notice, index) => (
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
