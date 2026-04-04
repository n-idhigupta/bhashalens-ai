function ResultsPage() {
  const result = JSON.parse(localStorage.getItem("analysisResult"));

  if (!result) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] p-8">
        <div className="max-w-4xl mx-auto bg-white border border-[#EFE5D8] shadow-sm rounded-[2rem] p-8">
          <p className="uppercase tracking-[0.2em] text-sm text-[#A08467] mb-3">
            Results
          </p>

          <h1 className="text-3xl font-bold text-[#3E2F25] mb-4">
            No Results Found
          </h1>

          <p className="text-[#6D5A4B]">
            Upload a file first to see processed AI results here.
          </p>
        </div>
      </div>
    );
  }

  const confidence = "92%";

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-sm text-[#A08467] mb-3">
          Results
        </p>

        <h1 className="text-4xl font-bold text-[#3E2F25] mb-3">
          AI Analysis Output
        </h1>

        <p className="text-[#6D5A4B] mb-10 max-w-3xl leading-relaxed">
          This result presents the processed output from your uploaded file, including
          detected type, extracted content, identified language, and generated summary.
        </p>

        {/* Top summary cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-6 shadow-sm">
            <p className="text-sm text-[#A08467] mb-2">File Name</p>
            <h2 className="text-lg font-semibold text-[#4B3A2F] break-words">
              {result.fileName}
            </h2>
          </div>

          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-6 shadow-sm">
            <p className="text-sm text-[#A08467] mb-2">Detected Type</p>
            <span className="inline-block bg-[#F3ECE3] text-[#4B3A2F] px-4 py-2 rounded-full text-sm font-medium">
              {result.fileType}
            </span>
          </div>

          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-6 shadow-sm">
            <p className="text-sm text-[#A08467] mb-2">Language</p>
            <span className="inline-block bg-[#F3ECE3] text-[#4B3A2F] px-4 py-2 rounded-full text-sm font-medium">
              {result.detectedLanguage}
            </span>
          </div>

          <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-6 shadow-sm">
            <p className="text-sm text-[#A08467] mb-2">AI Confidence</p>
            <h2 className="text-2xl font-bold text-[#3E2F25]">
              {confidence}
            </h2>
          </div>
        </div>

        {/* Extracted text */}
        <div className="bg-white border border-[#EFE5D8] rounded-[2rem] p-8 shadow-sm mb-8">
          <p className="uppercase tracking-[0.2em] text-xs text-[#A08467] mb-4">
            Extracted Content
          </p>
          <p className="text-[#5E4B3C] leading-relaxed whitespace-pre-line text-lg">
            {result.extractedText}
          </p>
        </div>

        {/* AI summary */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white border border-[#EFE5D8] rounded-[2rem] p-8 shadow-sm">
            <p className="uppercase tracking-[0.2em] text-xs text-[#A08467] mb-4">
              AI Summary
            </p>
            <p className="text-[#5E4B3C] leading-relaxed text-lg">
              {result.summary}
            </p>
          </div>

          <div className="bg-[#F3ECE3] border border-[#E7D9C8] rounded-[2rem] p-8 shadow-sm">
            <p className="uppercase tracking-[0.2em] text-xs text-[#A08467] mb-4">
              Insight
            </p>
            <h3 className="text-2xl font-semibold text-[#4B3A2F] mb-3">
              AI Interpretation Ready
            </h3>
            <p className="text-[#6D5A4B] leading-relaxed">
              This output is structured to simulate how a multilingual AI system
              can interpret user-submitted content for understanding and analysis.
            </p>

            <div className="mt-6 text-sm text-[#8B735B]">
              Uploaded: {new Date(result.uploadedAt).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;