import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("analysisResult");
    navigate("/login");
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#3E2F25] font-semibold"
      : "text-[#7A6757] hover:text-[#4B3A2F]";

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur border-b border-[#EFE5D8]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-[#3E2F25]">
            BhashaLens AI
          </span>
          <span className="text-xs tracking-[0.25em] uppercase text-[#A08467]">
            Multilingual Intelligence
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm md:text-base">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>

          {userInfo ? (
            <>
              <Link to="/dashboard" className={isActive("/dashboard")}>
                Dashboard
              </Link>
              <Link to="/upload" className={isActive("/upload")}>
                Upload
              </Link>
              <Link to="/results" className={isActive("/results")}>
                Results
              </Link>

              <button
                onClick={logoutHandler}
                className="bg-[#4B3A2F] text-white px-5 py-2 rounded-full hover:bg-[#5A4638] transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={isActive("/login")}>
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#E8DED2] text-[#4B3A2F] px-5 py-2 rounded-full font-medium hover:bg-[#DDD0C1] transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;