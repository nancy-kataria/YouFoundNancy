import { DevLink, Skills, TellmeMore } from "../command-list.ts";

function Commands() {
  const pretext = "visitor@youfoundnancy.com:~$";

  const generateResponse = (text: string, id: string) => {
    let element = document.getElementById("command-block");

    // Adding the command prompt before the response

    let commandPromptElement = document.createElement("p");
    // add the element to the DOM
    element?.appendChild(commandPromptElement);
    commandPromptElement.className = "secondary-command-prompt clear";
    commandPromptElement.textContent = pretext;

    // create an element
    let childElement = document.createElement("pre");
    // add the element to the DOM
    element?.appendChild(childElement);

    // Assign id, classname and text
    // childElement.id = `${id}`;
    // childElement.className = "prompt-response clear";
    // childElement.textContent = text;

    // if (id == "projects") {
    //   const projects = ["Tixly", "Auction Bidding"];
    //   const links = [
    //     "https://github.com/nancy-kataria/Tixly",
    //     "https://github.com/nancy-kataria/Auction-Bidding",
    //   ];
    //   for (let i = 0; i < projects.length; i++) {
    //     let link = document.createElement("a");
    //     element?.appendChild(link);

    //     link.textContent = `[${projects[i]}]`;
    //     link.className = "repo-links clear";
    //     link.href = links[i];
    //     link.target = "_blank";
    //   }
    // }

    // add the input element after the response
    let re_render_element = document.getElementById("prompt-line");
    element?.appendChild(re_render_element);
  };

  const clearTerminal = () => {
    let elements = document.getElementsByClassName("clear");

    while (elements.length > 0) {
      elements[0]?.parentNode?.removeChild(elements[0]);
    }
    return;
  };

  const promptResponse = (prompt: string) => {
    // The commands should not be case sensitive
    prompt = prompt.toLocaleLowerCase();

    let element = document.getElementById("command-block");

    // Adding the command prompt before the response

    let commandPromptElement = document.createElement("p");
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
        break;

      case "projects":
        generateResponse(
          `
  Tixly             Tixly is inspired by Ticketmaster, a popular platform 
                    for buying and selling event tickets. Tixly is a smaller 
                    version that works well, showing how features like 
                    managing events, secure payments, and live ticket updates 
                    can be done.

  Auction Bidding   A live streaming project that uses kafka to stream bidding 
                    data and is based on an auction where people bid for a
                    product. It is an end-to-end pipeline where a web application
                    takes input from the end user and the submissions are stored 
                    latest insights on that data.
  
  Visit Github Repos:`,
          prompt,
        );
        break;

      case "tell me more":
        TellmeMore();
        break;

      case "clear":
        clearTerminal();
        break;

      default:
        generateResponse(
          `Command not found`,
          prompt,
        );
    }

    // add the input element after the response
    let re_render_element = document.getElementById("prompt-line");
    element?.appendChild(re_render_element);
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
