import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function UploadPage() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      setMessage("");

      const { data } = await API.post("/translation/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("analysisResult", JSON.stringify(data));
      navigate("/results");
    } catch (error) {
      setMessage(error.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-sm text-[#A08467] mb-3">
          Upload
        </p>

        <h1 className="text-4xl font-bold text-[#3E2F25] mb-3">
          Upload Your File
        </h1>

        <p className="text-[#6D5A4B] mb-10 max-w-2xl leading-relaxed">
          Add an image, document, or audio file to simulate multilingual AI analysis,
          content extraction, and summary generation.
        </p>

        <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-8 shadow-sm">
          {message && (
            <p className="mb-6 text-sm text-red-600">{message}</p>
          )}

          <form onSubmit={handleUpload} className="space-y-8">
            <label className="block border-2 border-dashed border-[#DCCDBB] rounded-[2rem] bg-[#FCFAF7] p-12 text-center cursor-pointer hover:bg-[#F8F4EE] transition">
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx,.txt,.mp3,.wav,.m4a"
                onChange={handleFileChange}
                className="hidden"
              />

              <div>
                <p className="text-2xl font-semibold text-[#4B3A2F] mb-3">
                  {selectedFile ? selectedFile.name : "Click to choose a file"}
                </p>
                <p className="text-[#7A6757] text-sm mb-2">
                  Supported formats: Image, Audio, PDF, DOC, DOCX, TXT
                </p>
                <p className="text-[#A08467] text-xs uppercase tracking-[0.2em]">
                  AI-ready multilingual input
                </p>
              </div>
            </label>

            {selectedFile && (
              <div className="bg-[#FCFAF7] border border-[#EFE5D8] rounded-3xl p-5">
                <p className="text-sm text-[#A08467] mb-2">Selected File</p>
                <h3 className="text-lg font-semibold text-[#4B3A2F]">
                  {selectedFile.name}
                </h3>
                <p className="text-[#7A6757] text-sm mt-1">
                  Size: {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#4B3A2F] text-white py-4 rounded-full hover:bg-[#5A4638] transition text-lg font-medium"
            >
              {loading ? "Processing..." : "Upload & Process"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;