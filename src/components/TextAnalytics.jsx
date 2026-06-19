import React from "react";

export default function TextAnalytics({
  analytics,
  mode,
}) {
  return (
    <div
      className={`summary-box mt-5 ${
        mode === "dark"
          ? "summary-dark"
          : ""
      }`}
    >
      <h3 className="mb-4 text-center">
        📊 Text Analytics
      </h3>

      <div className="summary-grid">
        <div className="stat-card">
          <h2>{analytics.words}</h2>
          <p>Words</p>
        </div>

        <div className="stat-card">
          <h2>{analytics.characters}</h2>
          <p>Characters</p>
        </div>

        <div className="stat-card">
          <h2>{analytics.sentences}</h2>
          <p>Sentences</p>
        </div>

        <div className="stat-card">
          <h2>{analytics.paragraphs}</h2>
          <p>Paragraphs</p>
        </div>

        <div className="stat-card">
          <h2>{analytics.readingTime}</h2>
          <p>Reading Time</p>
        </div>

        <div className="stat-card">
          <h2>{analytics.speakingTime}</h2>
          <p>Speaking Time</p>
        </div>
      </div>
    </div>
  );
}