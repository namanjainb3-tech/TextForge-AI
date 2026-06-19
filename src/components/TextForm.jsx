import React, { useState, useRef} from "react";
import { inverseCase, capitalize } from "../utils/textUtils";
import { getAnalytics } from "../utils/analytics";
import { generateAIResponse } from "../services/aiService";
import TextAnalytics from "./TextAnalytics";
import AIResponse from "./AIResponse";
import AIAssistant from "./AIAssistant";
import TextTransform from "./TextTransform";
import Utilities from "./Utilities";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loadingFeature, setLoadingFeature] = useState("");
  const [prompt, setPrompt] = useState("");
  const summaryRef = useRef(null);

  const promptOnchange=(e)=>{
    setPrompt(e.target.value);
  }

  const copyAIResponse=(e)=>{
    navigator.clipboard.writeText(summary);
    props.showAlert("AI Response text copied to clipboard", "success");
  }

  const handleAIAction = async (
    userPrompt,
    successMessage,
    featureName
  ) => {
    try {
      setLoadingFeature(featureName);
  
      const result = await generateAIResponse(
        userPrompt,
        text
      );
  
      setSummary(result);
  
      setTimeout(() => {
        summaryRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
  
      props.showAlert(successMessage, "success");
  
    } catch (error) {
      console.error(error);
      props.showAlert("AI request failed", "danger");
    } finally {
      setLoadingFeature("");
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleInverseCase = (e) => {
    let newText = inverseCase(text);
    setText(newText);
  };

  const handleCapitalize = (e) => {
    let newText = capitalize(text);
    setText(newText);
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handlespaces = (e) => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };

  const clearText = (e) => {
    setText("");
  };

  const analytics = getAnalytics(text);

  const setbackgroundColor = {
    backgroundColor:props.mode === "light"? "white": "#1f2937",
  }

  const textColor={
    color:props.mode==="light"? "black": "white"
  }

  return (
    <>
      <div className="container my-4">
  
      <div className="hero-section">
        <h1 style={textColor}>Transform Text with AI</h1>
        <p style={textColor}>
            Transform, refine and understand your text with lightning-fast AI assistance.
        </p>
      </div>

      <textarea
          className="form-control text-area-custom shadow-sm"
          id="myBox"
          rows="5"
          value={text}
          onChange={handleOnChange}
          placeholder="Type or paste your text here..."
      ></textarea>

      <TextTransform
        text={text}
        handleUpperCase={handleUpperCase}
        handleLowerCase={handleLowerCase}
        handleInverseCase={handleInverseCase}
        handleCapitalize={handleCapitalize}
        mode={props.mode}
      />

      <Utilities
        text={text}
        handleCopy={handleCopy}
        handlespaces={handlespaces}
        clearText={clearText}
        mode={props.mode}
      />

      <AIAssistant
        text={text}
        prompt={prompt}    
        setPrompt={setPrompt}
        loadingFeature={loadingFeature}
        handleAIAction={handleAIAction}
        mode={props.mode}
      />

      <TextAnalytics
        analytics={analytics}
        mode={props.mode}
      />
  
      <AIResponse
      summary={summary}
      mode={props.mode}
      copyAIResponse={copyAIResponse}
      summaryRef={summaryRef}
      />
  
    </div>
  </>
  );
}
