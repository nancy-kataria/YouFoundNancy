import { useEffect, useState } from "https://esm.sh/v128/preact@10.22.0/hooks";
import Fact from "./Fact.tsx";

export default function Welcome() {
  const [openFact, setOpenFact] = useState(false)

  useEffect(() => {
    const typingEffect = () => {
      let index = 0;
      const speed = 40;
      const text = "Hello World!";

      const element = document.getElementById("typing");
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

    typingEffect();
  }, []);

  return (
    <div>
      <p id="typing"></p>
      <p onClick={()=>setOpenFact(true)}>[Interesting fact]</p>
      {openFact && <Fact openFact={openFact} />}
    </div>
  );
}
