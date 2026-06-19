import React from "react";

export default function Utilities({
  text,
  handleCopy,
  handlespaces,
  clearText,
  mode,
}) {

  const setbackgroundColor = {
    backgroundColor:
      mode === "light"
        ? "white"
        : "#1f2937",
  };

  return (
    <div
      className="section-card"
      style={setbackgroundColor}
    >
      <h5 className="section-title">
        🛠 Utilities
      </h5>

      <div className="button-grid">

        <button
          disabled={text.trim().length === 0}
          className="btn btn-success"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-warning"
          onClick={handlespaces}
        >
          Remove Spaces
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-danger"
          onClick={clearText}
        >
          Clear
        </button>

      </div>
    </div>
  );
}