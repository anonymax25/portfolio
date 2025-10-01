import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] gap-6">
      <div>404 Not Found</div>
      <Link to="/" className="text-white bg-teal-600 py-2 px-4 rounded-3xl hover:text-white">
        Back to Homepage
      </Link>
    </div>
  );
};
