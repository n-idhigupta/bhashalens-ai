import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function DashboardPage() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await API.get("/translation/history");
        setHistory(data);
      } catch (error) {
        console.error("History fetch failed", error);
      }
    };

    fetchHistory();
  }, []);

  const openResult = (item) => {
    localStorage.setItem("analysisResult", JSON.stringify(item));
    window.location.href = "/results";
  };

  const latestUpload = history.length > 0 ? history[0] : null;

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-sm text-[#A08467] mb-3">
          Dashboard
        </p>

        <h1 className="text-4xl font-bold text-[#3E2F25] mb-2">
          Welcome back, {userInfo?.name || "User"}
        </h1>

        <p className="text-[#6D5A4B] mb-10">
          Manage your uploaded files, AI results, and multilingual analysis history.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-6 shadow-sm">
            <p className="text-sm text-[#A08467] mb-2">Total Uploads</p>
            <h2 className="text-4xl font-bold text-[#3E2F25]">
              {history.length}
            </h2>
          </div>

          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-6 shadow-sm">
            <p className="text-sm text-[#A08467] mb-2">Latest File Type</p>
            <h2 className="text-2xl font-semibold text-[#4B3A2F]">
              {latestUpload ? latestUpload.fileType : "—"}
            </h2>
          </div>

          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-6 shadow-sm">
            <p className="text-sm text-[#A08467] mb-2">Last Detected Language</p>
            <h2 className="text-2xl font-semibold text-[#4B3A2F]">
              {latestUpload ? latestUpload.detectedLanguage : "—"}
            </h2>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link
            to="/upload"
            className="bg-white border border-[#EFE5D8] rounded-[2rem] p-8 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-[#A08467] mb-3">Action</p>
            <h2 className="text-2xl font-semibold text-[#4B3A2F] mb-3">
              Upload New File
            </h2>
            <p className="text-[#6D5A4B] leading-relaxed">
              Add a new image, audio, or document for AI-based language processing.
            </p>
          </Link>

          <Link
            to="/results"
            className="bg-white border border-[#EFE5D8] rounded-[2rem] p-8 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-[#A08467] mb-3">Action</p>
            <h2 className="text-2xl font-semibold text-[#4B3A2F] mb-3">
              View Latest Result
            </h2>
            <p className="text-[#6D5A4B] leading-relaxed">
              Open the most recent AI-generated result and analysis summary.
            </p>
          </Link>
        </div>

        {/* History */}
        <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#4B3A2F]">
              Upload History
            </h2>
            <span className="text-sm text-[#A08467]">
              {history.length} record{history.length !== 1 ? "s" : ""}
            </span>
          </div>

          {history.length === 0 ? (
            <p className="text-[#6D5A4B]">
              No uploads yet. Start by uploading your first file.
            </p>
          ) : (
            <div className="space-y-4">
              {history.map((item) => (
                <div
                  key={item._id}
                  className="border border-[#EFE5D8] rounded-3xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#FCFAF7]"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-[#4B3A2F]">
                      {item.fileName}
                    </h3>
                    <p className="text-[#7A6757] text-sm mt-1">
                      {item.fileType} • {item.detectedLanguage}
                    </p>
                    <p className="text-[#A08467] text-sm mt-1">
                      {new Date(item.uploadedAt).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => openResult(item)}
                    className="bg-[#E8DED2] text-[#4B3A2F] px-5 py-2 rounded-full font-semibold hover:bg-[#DDD0C1] transition"
                  >
                    View Result
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;