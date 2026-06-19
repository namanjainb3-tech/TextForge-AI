export function inverseCase(str) {
    if (typeof str !== "string") return "";
  
    return str
      .split("")
      .map((char) =>
        char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase()
      )
      .join("");
  }
  
  export function capitalize(str) {
    if (typeof str !== "string") return "";
  
    return str
      .split(" ")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1).toLowerCase()
      )
      .join(" ");
  }