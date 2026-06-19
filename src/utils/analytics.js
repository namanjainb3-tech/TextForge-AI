export function getAnalytics(text) {
    const words =
      text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;
  
    return {
      words,
      characters: text.length,
      sentences: text.split(/[.!?]+/).filter(Boolean).length,
      paragraphs: text.split(/\n+/).filter(Boolean).length,
      readingTime: (words / 200).toFixed(2),
      speakingTime: (words / 130).toFixed(2),
    };
  }