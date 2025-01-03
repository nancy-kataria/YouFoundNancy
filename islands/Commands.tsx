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
    childElement.id = `${id}`;
    childElement.className = "prompt-response clear";
    childElement.textContent = text;

    if (id == "projects") {
      const projects = ["Tixly", "Auction Bidding"];
      const links = [
        "https://github.com/nancy-kataria/Tixly",
        "https://github.com/nancy-kataria/Auction-Bidding",
      ];
      for (let i = 0; i < projects.length; i++) {
        let link = document.createElement("a");
        element?.appendChild(link);

        link.textContent = `[${projects[i]}]`;
        link.className = "repo-links clear";
        link.href = links[i];
        link.target = "_blank";
      }
    }

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

    switch (prompt) {
      case "skills":
        generateResponse(
          `
  [HTML, CSS, JavaScript, TypeScript, React, Python]
          `,
          prompt,
        );
        break;

      case "dev":
        generateResponse(
          `
  https://dev.to/nancy_kataria
          `,
          prompt,
        );
        break;

      case "status":
        generateResponse(
          ` 
  Currently learning about Machine Learning and making applications using 
  Microservices.
          `,
          prompt,
        );
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
        generateResponse(
          `
  .-----------------------------------------------------------------------------.
  ||Es| |F1 |F2 |F3 |F4 |F5 | |F6 |F7 |F8 |F9 |F10|                  C= AMIGA   |
  ||__| |___|___|___|___|___| |___|___|___|___|___|                             |
  | _____________________________________________      ________    ___________  |
  ||~  |! |@ |§ |$ |% |& |/ |( |) |= |? | || |<- |    |Del|Help| |{ |} |/ |* |  |
  ||__|1_|2_|3_|4_|5_|6_|7_|8_|9_|0_|ß_|_| \\|_|__|    |___|____| |[ |]_|__|__|  |
  ||<-  |Q |W |E |R |T |Z |U |I |O |P |Ü |* |   ||               |7 |8 |9 |- |  |
  ||->__|__|__|__|__|__|__|__|__|__|__|__|+_|_  ||               |__|__|__|__|  |
  ||Ctr|oC|A |S |D |F |G |H |J |K |L |Ö |Ä |^ |<'|               |4 |5 |6 |+ |  |
  ||___|_L|__|__|__|__|__|__|__|__|__|__|__|#_|__|       __      |__|__|__|__|  |
  ||^    |> |Y |X |C |V |B |N |M |; |: |_ |^     |      |A |     |1 |2 |3 |E |  |
  ||_____|<_|__|__|__|__|__|__|__|,_|._|-_|______|    __||_|__   |__|__|__|n |  |
  |   |Alt|A  |                       |A  |Alt|      |<-|| |->|  |0    |. |t |  |
  |   |___|___|_______________________|___|___|      |__|V_|__|  |_____|__|e_|  |
  \\                                                                             /
   -----------------------------------------------------------------------------

  I'm so glad that you would like to know more about me. 


  I am a small-town girl who discovered the world of coding back in ninth grade. 
  My teacher sparked my love for it by assigning weekly coding challenges, and 
  I still remember the thrill of printing my first “Hello, World!” in Java. 
  Later, my brother became my mentor, guiding me as I honed my skills. What truly 
  fascinated me was how even the simplest websites I created could connect with 
  people across the globe through the internet —---- it felt like magic!


  I continued my learning journey by joining an NGO, where I worked under 
  experienced engineers who challenged me and helped me grow. After that, 
  I interned at a health tech company, contributing to digitizing cancer 
  health records. Collaborating with the biomedicine team taught me the 
  value of teamwork and sharpened my problem-solving skills. In 2023, 
  I graduated and in 2024, I took the exciting leap of moving to the 
  United States to pursue my master’s degree.
  `,
          prompt,
        );
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
