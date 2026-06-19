import React from "react";

export default function AIResponse({
  summary,
  mode,
  copyAIResponse,
  summaryRef
}) {
  if (!summary) return null;

  return (
    <div
      ref={summaryRef}
      className={`summary-box mt-4 ${
        mode === "dark"
          ? "summary-dark"
          : ""
      }`}
    >
      <h3 className="mb-3">
        🤖 AI Assistant Response
      </h3>

      <hr />

      <div className="ai-response">
        {summary}
      </div>

      <button
        className="btn btn-primary mt-3"
        onClick={copyAIResponse}
      >
        📋 Copy Response
      </button>
    </div>
  );
}