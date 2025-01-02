function Commands() {
  const generateResponse = (childEl: string, text: string) => {
    let element = document.getElementById("command-block");
    let childElement = document.createElement(childEl);
    element?.appendChild(childElement);
    childElement.id = "prompt-response";
    childElement.textContent = text;

    let re_render_element = document.getElementById("prompt-line");
    element?.appendChild(re_render_element);
  };

  const clearTerminal = () => {
    let element = document.getElementById("prompt-response");
    if (element) {
      element?.remove();
      clearTerminal();
    }
    return;
  };

  const pretext = "visitor@youfoundnancy.com:~$";

  const promptResponse = (prompt: string) => {
    switch (prompt) {
      case "skills":
        generateResponse(
          "p",
          `${pretext} [HTML, CSS, JavaScript, TypeScript, React, Python]`,
        );
        break;

      case "dev":
        generateResponse("a", `${pretext} https://dev.to/nancy_kataria`);
        break;

      case "status":
        generateResponse(
          "p",
          `${pretext} Currently learning about Machine Learning and Microservices.`,
        );
        break;

      case "clear":
        clearTerminal();
        break;

      default:
        generateResponse(
          "p",
          `${pretext} Command not found`,
        );
    }
  };

  return (
    <div id="command-block">
      <p>Type a command to know more</p>
      {/* <pre><span>projects</span>    view coding projects</pre> */}
      <pre><span>skills</span>      view the list of skills</pre>
      <pre><span>status</span>      find what I am currently working on</pre>
      <pre><span>dev</span>         find me on dev.to</pre>
      <pre><span>clear</span>       clear terminal</pre>
      <div id="prompt-line">
        <label>visitor@youfoundnancy.com:~$</label>
        <input
          type="text"
          class="command-input"
          id="command-input"
          name="command-input"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
              promptResponse(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
}

export default Commands;
