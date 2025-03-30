import {
  DevLink,
  Error,
  Projects,
  Skills,
  Status,
  TellmeMore,
} from "../command-list.ts";

type CommandName = "skills" | "tellmemore" | "dev" | "status" | "errorCommand";
// abstract class Command {
//   protected element: HTMLElement | null;
//   constructor() {
//     this.element = document.getElementById("command-block");
//   }

//   // Creating an HTML element (like a div, p, a, etc.) and applying optional attributes (id, className, textContent, and href)
//   // then adding it to the page

//   // HTMLElementTagNameMap is a built-in TypeScript type that maps
//   // tag names ('a', 'p', 'div', etc.) to their corresponding DOM types (HTMLAnchorElement, HTMLParagraphElement, etc.).
//   protected createElement<K extends keyof HTMLElementTagNameMap>(
//     tag: K,
//     options: {
//       id?: string;
//       className?: string;
//       textContent?: string;
//       href?: string;
//     } = {},
//   ): HTMLElementTagNameMap[K] {
//     // create an element
//     const el = document.createElement(tag);

//     // Assign properties
//     if (options.id) el.id = options.id;
//     if (options.className) el.className = options.className;
//     if (options.textContent) el.textContent = options.textContent;
//     if (tag === "a" && options.href) {
//       (el as HTMLAnchorElement).href = options.href;
//       (el as HTMLAnchorElement).target = "_blank";
//     }

//     // add the element to the DOM
//     this.element?.appendChild(el);
//     return el;
//   }

//   // Every command must have an execute() method
//   abstract execute(): void;
// }

// class Skills extends Command {
//   execute() {
//     this.createElement("p", {
//       id: "skills",
//       className: "prompt-response clear",
//       textContent:
//         "Languages: [JavaScript, TypeScript, Python, HTML, CSS, Go, SQL]",
//     });
//   }
// }

// class TellMeMore extends Command{
//   execute(){
//     this.createElement("pre", {
//       id: "tell-me-more",
//       className: "prompt-response clear",
//       textContent: `
//   .-----------------------------------------------------------------------------.
// ||Es| |F1 |F2 |F3 |F4 |F5 | |F6 |F7 |F8 |F9 |F10|                  C= AMIGA   |
// ||__| |___|___|___|___|___| |___|___|___|___|___|                             |
// | _____________________________________________      ________   ___________   |
// ||~  |! |@ |§ |$ |% |& |/ |( |) |= |? | || |<- |    |Del|Help| |{ |} |/ |* |  |
// ||__|1_|2_|3_|4_|5_|6_|7_|8_|9_|0_|ß_|_| \\|_|__|    |___|____| |[ |]_|__|__|  |
// ||<-  |Q |W |E |R |T |Z |U |I |O |P |Ü |* |   ||               |7 |8 |9 |- |  |
// ||->__|__|__|__|__|__|__|__|__|__|__|__|+_|_  ||               |__|__|__|__|  |
// ||Ctr|oC|A |S |D |F |G |H |J |K |L |Ö |Ä |^ |<'|               |4 |5 |6 |+ |  |
// ||___|_L|__|__|__|__|__|__|__|__|__|__|__|#_|__|       __      |__|__|__|__|  |
// ||^    |> |Y |X |C |V |B |N |M |; |: |_ |^     |      |A |     |1 |2 |3 |E |  |
// ||_____|<_|__|__|__|__|__|__|__|,_|._|-_|______|    __||_|__   |__|__|__|n |  |
// |   |Alt|A  |                       |A  |Alt|      |<-|| |->|  |0    |. |t |  |
// |   |___|___|_______________________|___|___|      |__|V_|__|  |_____|__|e_|  |
// \\                                                                             /
//  -----------------------------------------------------------------------------
//       `
//     })

//     this.createElement("pre", {
//       id: "secondary-ascii",
//       className: "prompt-response clear",
//       textContent: `
// .--.
// |__|   .-------.
// |=.|   |.-----.|
// |--|   || KCK ||
// |  |   |'-----'|
// |__| ~ ')_____('
// `,
//     });
//   }
// }

// class DevLink extends Command {
//   execute() {
//     this.createElement("a", {
//       id: "dev",
//       className: "prompt-response clear",
//       href: "https://dev.to/nancy_kataria",
//       textContent: `[Dev.to/nancy_kataria]`,
//     });
//   }
// }

// class Status extends Command{
//   execute(){
//     this.createElement("p", {
//       id: 'status',
//       className: 'prompt-response clear',
//       textContent: `Currently exploring Machine Learning`
//     })
//   }
// }

// class Error extends Command{
//   execute(){
//     this.createElement("p", {
//       id: "error",
//       className: "prompt-response clear",
//       textContent: "Command not found",
//     });
//   }
// }

// const CommandRegistry: Record<CommandName, Command> = {
//   skills: new Skills(),
//   dev: new DevLink(),
//   status: new Status(),
//   errorCommand: new Error(),
//   tellmemore: new TellMeMore()
// };


// function runCommand(commandName: string): void {
//   const command = CommandRegistry[commandName as keyof typeof CommandRegistry] || CommandRegistry.errorCommand;
//   command.execute();
// }

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
        Skills()
        // runCommand("skills")
        break;

      case "dev":
        DevLink()
        // runCommand("dev");
        break;

      case "status":
        Status();
        // runCommand("status")
        break;

      case "projects":
        Projects();
        break;

      case "tell me more":
        TellmeMore()
        // runCommand("tellmemore")
        break;

      case "clear":
        clearTerminal();
        break;

      default:
        // runCommand("errorCommand");
        Error()
        break;
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
          autoComplete="off"
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
