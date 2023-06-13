import Link from 'next/link';

const CommonError = ({ reset }: { reset: () => void }) => {
  const handleRetry = () => {
    reset();
  };
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong!
        </h2>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>

          <button
            onClick={handleRetry}
            className="text-sm font-semibold text-gray-900"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
};

export default CommonError;