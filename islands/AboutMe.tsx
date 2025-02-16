import { useEffect} from "preact/hooks";
// import Fact from "./Fact.tsx";
import Commands from "./Commands.tsx";

function AboutMe() {
  // const [openFact, setOpenFact] = useState<boolean>(false);

  const name = [
    " _   _                          ",
    "| \\ | |                        ",
    "|  \\| | __ _ _ __   ___ _   _  ",
    "| . ` |/ _` | '_ \\ / __| | | | ",
    "| |\\  | (_| | | | | (__| |_| | ",
    "\\_| \\_/\\__,_|_| |_|\\___|\\__, |",
    "                         __/ |",
    "                        |___/",
  ];

  const lastName = [
    " _   __      _             _       ",
    "| | / /     | |           (_)",
    "| |/ /  __ _| |_ __ _ _ __ _  __ _ ",
    "|    \\ / _` | __/ _` | '__| |/ _` |",
    "| |\\  \\ (_| | || (_| | |  | | (_| |",
    "\\_| \\_/\\__,_|\\__\\__,_|_|  |_|\\__,_|",
    "                                  ",
    "                                ",
  ];

  const description = [
    "Full Stack Web Developer.",
    "Graduate student pursuing a Master's in Computer Science at CSUF.",
    "Works with MERN stack.",
    "Likes to build end-to-end web applications.",
  ];

  const addingChild = (index: number, parentEl: string, childEl: string) => {
    const element = document.getElementById(`banner-${parentEl}`);
    const childElement = document.createElement("pre");
    childElement.id = `${childEl}-${index}`;

    element?.appendChild(childElement);
  };

  const typingEffect = (text: string, position: number, element: string) => {
    let index = 0;
    const speed = 20;

    const firstElement = document.getElementById(`${element}-${position}`);
    if (!firstElement) return;

    const typeCharacter = () => {
      if (index < text.length) {
        firstElement.textContent += text.charAt(index);
        index += 1;
        setTimeout(typeCharacter, speed);
      }
    };

    typeCharacter();
  };

  useEffect(() => {

    // Adding Elements to the DOM
    for (let index = 0; index < name.length; index++) {
      addingChild(index, `first-name`, `first-name`);
    }
    for (let index = 0; index < name.length; index++) {
      addingChild(index, `last-name`, `last-name`);
    }

    // Rendering type flow
    for (let index = 0; index < name.length; index++) {
      typingEffect(name[index], index, "first-name");
    }

    // Last name rendered after 1 sec
    setTimeout(() => {
      for (let index = 0; index < name.length; index++) {
        typingEffect(lastName[index], index, "last-name");
      }
    }, 1000);
  }, []);

  return (
    <div class="about-me">
      <div class="img-container">
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm0xYmZlZHVncmh5dWkyeHdxb3V5ZXVlc29pMGpjY2c0cnY1dWc0OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/il49eQumsbadTznOH7/giphy.webp" />
      </div>
      <div id="banner">
        <div id="banner-first-name"></div>
        <div id="banner-last-name"></div>
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
        <a
          href="https://drive.google.com/file/d/1ComyW8kVIZMWD4aNuoItX5anPiuhbU5O/view?usp=sharing"
          target="_blank"
        >
          [Resume]
        </a>
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
