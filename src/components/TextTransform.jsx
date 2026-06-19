import React from "react";

export default function TextTransform({
  text,
  handleUpperCase,
  handleLowerCase,
  handleInverseCase,
  handleCapitalize,
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
      className="section-card my-2"
      style={setbackgroundColor}
    >
      <h5 className="section-title">
        🔄 Text Transform
      </h5>

      <div className="button-grid">

        <button
          disabled={text.trim().length === 0}
          className="btn btn-primary"
          onClick={handleUpperCase}
        >
          UpperCase
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-primary"
          onClick={handleLowerCase}
        >
          LowerCase
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-primary"
          onClick={handleInverseCase}
        >
          InverseCase
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-primary"
          onClick={handleCapitalize}
        >
          Capitalize
        </button>

      </div>
    </div>
  );
}