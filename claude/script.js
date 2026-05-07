async function askClaude() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  if (!window.puter) {
    output.textContent = "Puter SDK failed to load.";
    return;
  }

  output.textContent = "Thinking...";

  try {
    const response = await puter.ai.chat(prompt, {
      model: "claude-opus-4-7"
    });

    output.textContent = typeof response === "string"
      ? response
      : JSON.stringify(response, null, 2);

  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
}