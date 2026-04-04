import { Link } from "react-router-dom";

function HomePage() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#A08467] mb-5">
              AI for Indian Languages
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#3E2F25] mb-6">
              Understand, process, and explore multilingual content beautifully.
            </h1>

            <p className="text-lg text-[#6D5A4B] leading-relaxed mb-8 max-w-xl">
              BhashaLens AI helps users upload image, audio, and document files
              to simulate intelligent language understanding for Indian and
              multilingual contexts.
            </p>

            <div className="flex flex-wrap gap-4">
              {userInfo ? (
                <Link
                  to="/dashboard"
                  className="bg-[#4B3A2F] text-white px-8 py-4 rounded-full hover:bg-[#5A4638] transition"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="bg-[#4B3A2F] text-white px-8 py-4 rounded-full hover:bg-[#5A4638] transition"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/login"
                    className="bg-[#E8DED2] text-[#4B3A2F] px-8 py-4 rounded-full hover:bg-[#DDD0C1] transition"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] shadow-sm p-8 md:p-10">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#FCFAF7] border border-[#F0E7DB] rounded-3xl p-6">
                <p className="text-sm text-[#A08467] mb-2">Supported Input</p>
                <h3 className="text-xl font-semibold text-[#4B3A2F]">
                  Image / Audio / Docs
                </h3>
              </div>

              <div className="bg-[#FCFAF7] border border-[#F0E7DB] rounded-3xl p-6">
                <p className="text-sm text-[#A08467] mb-2">AI Output</p>
                <h3 className="text-xl font-semibold text-[#4B3A2F]">
                  Language + Summary
                </h3>
              </div>

              <div className="bg-[#FCFAF7] border border-[#F0E7DB] rounded-3xl p-6">
                <p className="text-sm text-[#A08467] mb-2">Use Case</p>
                <h3 className="text-xl font-semibold text-[#4B3A2F]">
                  Indian Language Intelligence
                </h3>
              </div>

              <div className="bg-[#FCFAF7] border border-[#F0E7DB] rounded-3xl p-6">
                <p className="text-sm text-[#A08467] mb-2">Experience</p>
                <h3 className="text-xl font-semibold text-[#4B3A2F]">
                  Clean & Premium
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-8 shadow-sm">
            <p className="text-sm text-[#A08467] mb-3">01</p>
            <h3 className="text-2xl font-semibold text-[#4B3A2F] mb-4">
              Upload Multiformat Files
            </h3>
            <p className="text-[#6D5A4B] leading-relaxed">
              Accept image, document, and audio inputs in one unified interface.
            </p>
          </div>

          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-8 shadow-sm">
            <p className="text-sm text-[#A08467] mb-3">02</p>
            <h3 className="text-2xl font-semibold text-[#4B3A2F] mb-4">
              Simulated AI Language Processing
            </h3>
            <p className="text-[#6D5A4B] leading-relaxed">
              Detect language, extract content, and generate structured summaries.
            </p>
          </div>

          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-8 shadow-sm">
            <p className="text-sm text-[#A08467] mb-3">03</p>
            <h3 className="text-2xl font-semibold text-[#4B3A2F] mb-4">
              Track Your Analysis History
            </h3>
            <p className="text-[#6D5A4B] leading-relaxed">
              Every processed file is stored and accessible from your dashboard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;