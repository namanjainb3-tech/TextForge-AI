export const generateAIResponse = async (
    userPrompt,
    text
  ) => {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful text assistant. Return only the requested output.",
            },
            {
              role: "user",
              content: `${userPrompt}\n\n${text}`,
            },
          ],
          temperature: 0.5,
        }),
      }
    );
  
    const data = await response.json();
  
    return (
      data.choices?.[0]?.message?.content ||
      "No response generated."
    );
  };