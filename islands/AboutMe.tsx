import { useEffect, useState } from "https://esm.sh/v128/preact@10.22.0/hooks";
import Fact from "./Fact.tsx";
import Commands from "./Commands.tsx";

function AboutMe() {
  const [openFact, setOpenFact] = useState<boolean>(false);

  const name = [
    " _   _                          _   __      _             _       ",
    "| \\ | |                        | | / /     | |           (_)",
    "|  \\| | __ _ _ __   ___ _   _  | |/ /  __ _| |_ __ _ _ __ _  __ _ ",
    "| . ` |/ _` | '_ \\ / __| | | | |    \\ / _` | __/ _` | '__| |/ _` |",
    "| |\\  | (_| | | | | (__| |_| | | |\\  \\ (_| | || (_| | |  | | (_| |",
    "\\_| \\_/\\__,_|_| |_|\\___|\\__, | \\_| \\_/\\__,_|\\__\\__,_|_|  |_|\\__,_|",
    "                         __/ |                                    ",
    "                        |___/                                     ",
  ];

  const description = [
    "Full Stack Web Developer.",
    "Graduate student pursuing a Master's in Computer Science at CSUF.",
    "Works with MERN stack.",
    "Likes to build real-time, event-driven applications.",
  ];

  const addingChild = (index: number) => {
    let element = document.getElementById("banner");
    let childElement = document.createElement("pre");
    childElement.id = `name-${index}`;

    element?.appendChild(childElement);
  };

  const typingEffect = (text: string, position: number) => {
    let index = 0;
    const speed = 20;

    const element = document.getElementById(`name-${position}`);
    if (!element) return;

    const typeCharacter = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index += 1;
        setTimeout(typeCharacter, speed);
      }
    };

    typeCharacter();
  };

  useEffect(() => {
    for (let index = 0; index < name.length; index++) {
      addingChild(index);
    }
    for (let index = 0; index < name.length; index++) {
      typingEffect(name[index], index);
    }
  }, []);

  return (
    <div class="about-me">
      <iframe
        src="https://giphy.com/embed/il49eQumsbadTznOH7"
        width="125"
        height="125"
        style=""
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      >
      </iframe>
      <div id="banner">
      </div>
      <div class="description-block">
        {description.map((point) => (
          <div class="github-lines">
            <p>+ {point}</p>
          </div>
        ))}
      </div>
      <div class="links-container">
        <a href="https://www.linkedin.com/in/nancy-kataria8/" target="_blank">
          [LinkedIn]
        </a>
        <a href="https://github.com/nancy-kataria" target="_blank">[Github]</a>
        <a href="https://docs.google.com/document/d/1X7-3Ma1Uc8-uVQ4g6wJdS1EH3D68jA2qIUGsfAibMIQ/edit?usp=sharing" target="_blank">[Resume]</a>
        {/* <p id="fact" onClick={() => setOpenFact(true)}>[Interesting fact]</p> */}
        {/* {openFact && <Fact openFact={openFact} />} */}
      </div>
      <p id="email">
        Feel free to reach out via{" "}
        <a href="mailto:katarianancy8@gmail.com">email</a>
      </p>
      <Commands />
    </div>
  );
}

export default AboutMe;
