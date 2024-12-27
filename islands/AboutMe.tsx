import { useEffect, useState } from "https://esm.sh/v128/preact@10.22.0/hooks";
import Fact from "./Fact.tsx";

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

  useEffect(() => {
    const addingChild = (index: number) => {
      let element = document.getElementById("banner");
      let childElement = document.createElement("pre");
      childElement.id = `name-${index}`;

      element?.appendChild(childElement);
    };

    for (let index = 0; index < name.length; index++) {
      addingChild(index);
    }

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

    for (let index = 0; index < name.length; index++) {
      typingEffect(name[index], index);
    }
  }, []);

  return (
    <div>
      <div id="banner">
      </div>
      <p onClick={() => setOpenFact(true)}>[Interesting fact]</p>
      {openFact && <Fact openFact={openFact} />}
    </div>
  );
}

export default AboutMe;
