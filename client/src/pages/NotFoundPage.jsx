import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] text-center p-8">
      <h1 className="text-6xl font-bold text-[#4B3A2F] mb-4">404</h1>
      <p className="text-[#6D5A4B] mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-[#4B3A2F] text-white px-6 py-3 rounded-2xl hover:bg-[#5A4638] transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFoundPage;