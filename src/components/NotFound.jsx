export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="text-white bg-black px-4 py-2 rounded hover:opacity-80 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
