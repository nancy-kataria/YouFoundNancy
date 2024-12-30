function Commands() {
  const generateResponse = (childEl: string, text: string) => {
    let element = document.getElementById("command-block");
    let childElement = document.createElement(childEl);
    element?.appendChild(childElement);
    childElement.id = "prompt-response"
    childElement.textContent = text;

    let re_render_element = document.getElementById("prompt-line");
    element?.appendChild(re_render_element)
  };

  const clearTerminal = () => {
    let element = document.getElementById("prompt-response")
    if (element){
        element?.remove()
        clearTerminal()
    }
    return
  }

  const pretext = "visitor@youfoundnancy.com:~$"

  const promptResponse = (prompt: string) => {
    switch (prompt) {
      case "skills":
        generateResponse(
          "p",
          `${pretext} [HTML, CSS, JavaScript, TypeScript, React, Python]`,
        );
        break;

        case "dev":
            generateResponse("a", `${pretext} https://dev.to/nancy_kataria`)
            break;

        case "clear":
            clearTerminal();
            break;

      default:
        generateResponse(
          "p",
          `${pretext} Please choose from the list of commands`,
        );
    }
  };

  return (
    <div id="command-block">
      <p>Type a command to know more</p>
      <pre>projects    view coding projects</pre>
      <pre>skills      view the list of skills</pre>
      <pre>status      find what I am currently working on</pre>
      <pre>dev         find me on dev.to</pre>
      <pre>clear       clear terminal</pre>
      <div id="prompt-line">
        <label>visitor@youfoundnancy.com:~$ &nbsp;</label>
        <input
          type="text"
          class="command-input"
          id = "command-input"
          name="command-input"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
              promptResponse(e.target.value);
              e.target.value = ""
            }
          }}
        />
      </div>
    </div>
  );
}

export default Commands;
