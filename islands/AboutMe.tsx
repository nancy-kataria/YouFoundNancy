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

  const description =
    "A full stack web developer and a graduate student pursuing a Master's in Computer Science at CSUF. I work with MERN stack and have recently expanded my skill set by learning Confluent Kafka to build real-time, event-driven applications.";

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
    <div>
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
      <div class="links-container">
        <p>[LinkedIn]</p>
        <p>[Github]</p>
        <p onClick={() => setOpenFact(true)}>[Interesting fact]</p>
        {openFact && <Fact openFact={openFact} />}
      </div>
      <Commands />
    </div>
  );
}

export default AboutMe;
