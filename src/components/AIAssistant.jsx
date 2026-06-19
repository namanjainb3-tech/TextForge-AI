export default function AIAssistant({
    text,
    prompt,
    setPrompt,
    loadingFeature,
    handleAIAction,
    mode,
}){ const setbackgroundColor = {
        backgroundColor:
        mode === "light"
          ? "white"
          : "#1f2937",
    };
    return(
        <div className="section-card" style={setbackgroundColor}>
            <h5 className="section-title">
                🤖 AI Assistant
            </h5>

            <div className="mt-4">
                <div className="container custom">
                    <input className="form-control me-2" type="text" placeholder="Enter your prompt..." value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
                    <button
                        className="btn btn-outline-success"
                        type="button"
                        disabled={
                            text.trim() === "" ||
                            prompt.trim() === "" ||
                            loadingFeature !== ""
                        }
                        onClick={() =>
                            handleAIAction(
                            prompt,
                            "Result generated successfully",
                            "custom"
                            )
                        }>
                        {loadingFeature === "custom"
                            ? "Generating..."
                            : "Generate"}
                    </button>
                </div>
            </div>

            <div className="button-grid mt-3">
            <button
                disabled={text.trim().length === 0 || loadingFeature !== ""}
                className="btn btn-info"
                onClick={() =>
                    handleAIAction(
                      "Summarize this text in 5-6 concise lines:",
                      "Summary generated successfully",
                      "summary"
                    )
                }
              >
                {loadingFeature === "summary"? "Generating...": "✨ Summarize"}
              </button>
  
              <button
                disabled={text.trim().length === 0 || loadingFeature !== ""}
                className="btn btn-info"
                onClick={()=>
                    handleAIAction(
                        "Correct all grammar mistakes. Return only the corrected text:",
                        "Grammar fixed successfully",
                        "grammar"
                    )
                }   
              >
                {loadingFeature === "grammar"? "Generating...": "📝 Grammar Fix"}
              </button>
  
              <button
                disabled={text.trim().length === 0|| loadingFeature !== ""}
                className="btn btn-info"
                onClick={() =>
                    handleAIAction(
                    "Rewrite the following text in a professional tone:",
                    "Converted to professional tone",
                    "professional"
                    )
                }
                >
                {loadingFeature === "professional"? "Generating...": "💼 Professional"}
              </button>
  
              <button
                disabled={text.trim().length === 0|| loadingFeature !== ""}
                className="btn btn-info"
                onClick={() =>
                    handleAIAction(
                    "Rewrite the following text in a casual friendly tone:",
                    "Converted to casual tone",
                    "casual"
                    )
                }
                >
                {loadingFeature === "casual"? "Generating...": "😊 Casual"}
              </button>
  
              <button
                disabled={text.trim().length === 0 || loadingFeature !== ""}
                className="btn btn-info"
                onClick={() =>
                    handleAIAction(
                    "Extract the most important keywords from this text as bullet points:",
                    "Keywords extracted",
                    "keywords"
                    )
                }
                >
                {loadingFeature === "keywords"? "Generating...": "🔑 Keywords"}
              </button>

              <button
                disabled={text.trim().length === 0 || loadingFeature !== ""}
                className="btn btn-info"
                onClick={() =>
                    handleAIAction(
                    "Explain this text in very simple language:",
                    "Explanation generated",
                    "simple"
                    )
                }
                >
                {loadingFeature === "simple"? "Generating...": "🧒🏻 Explain Simply"}
              </button>
            </div>
        </div>
    );
  }