import {
  DevLink,
  Error,
  Projects,
  Skills,
  Status,
  TellmeMore,
} from "../command-list.ts";

function Commands() {
  const pretext = "visitor@youfoundnancy.com:~$";

  const clearTerminal = () => {
    const elements = document.getElementsByClassName("clear");

    while (elements.length > 0) {
      elements[0]?.parentNode?.removeChild(elements[0]);
    }
    return;
  };

  const promptResponse = (prompt: string) => {
    // The commands should not be case sensitive
    prompt = prompt.toLocaleLowerCase();

    const element = document.getElementById("command-block");

    // Adding the command prompt before the response

    const commandPromptElement = document.createElement("p");
    // add the element to the DOM
    element?.appendChild(commandPromptElement);
    commandPromptElement.className = "secondary-command-prompt clear";
    commandPromptElement.textContent = pretext;

    switch (prompt) {
      case "skills":
        Skills();
        break;

      case "dev":
        DevLink();
        break;

      case "status":
        Status();
        break;

      case "projects":
        Projects();
        break;

      case "tell me more":
        TellmeMore();
        break;

      case "clear":
        clearTerminal();
        break;

      default:
        Error();
    }

    // add the input element after the response
    const re_render_element = document.getElementById("prompt-line");
    if (re_render_element) {
      element?.appendChild(re_render_element);
    }
  };

  return (
    <div id="command-block">
      <p>Type a command to know more</p>
      <pre><span>projects</span>      view coding projects</pre>
      <pre><span>skills</span>        view the list of skills</pre>
      <pre><span>tell me more</span>  know more about Nancy</pre>
      <pre><span>status</span>        find what I am currently working on</pre>
      <pre><span>dev</span>           find me on dev.to</pre>
      <pre><span>clear</span>         clear terminal</pre>
      <div id="prompt-line">
        <label>{pretext}</label>
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
